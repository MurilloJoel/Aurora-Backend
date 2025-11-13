import { ERROR_CODES } from "../utils/codes.js";
import { beforeAll, afterAll, describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { dbConfig } from "../config/db.js";

let userId: number;
let token: string;
const db = dbConfig.mysqlPool!;

beforeAll(async () => {
  process.env.NODE_ENV = "test";

  // Crear rol de prueba si no existe
  const [roles] = await db.query("SELECT * FROM roles WHERE id = 1");
  if ((roles as any[]).length === 0) {
    await db.query(
      "INSERT INTO roles (id, nombre, descripcion) VALUES (1, 'Administrador', 'Rol por defecto para testing')"
    );
  }

  // Crear token JWT para administrador
  token = jwt.sign({ id: 1, role: "admin" }, process.env.JWT_SECRET || "test_secret", {
    expiresIn: "1h",
  });
});

afterAll(async () => {
  // Limpiar usuario de prueba
  await db.query("DELETE FROM users WHERE email = 'testuser@example.com'");
  await db.end();
});

describe("🧪 API de Usuarios", () => {
  it("✅ Debería crear un usuario", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        nombre: "Usuario Test",
        email: "testuser@example.com",
        password: "123456",
        rolId: 1,
      })
      .expect(201);

    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    userId = res.body.data.id;
  });

  it("📋 Debería listar todos los users", async () => {
    const res = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("🔍 Debería obtener un usuario por ID", async () => {
    const res = await request(app)
      .get(`/users/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    expect(res.body.data).toHaveProperty("id", userId);
  });
});
