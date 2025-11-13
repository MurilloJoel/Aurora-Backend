import { ERROR_CODES } from "../utils/codes.js";
import { beforeAll, afterAll, describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { dbConfig } from "../config/db.js";

let chatId: number;
let userId: number;
let token: string;
const db = dbConfig.mysqlPool!;

beforeAll(async () => {
  process.env.NODE_ENV = "test";

  // Crear un usuario de prueba exclusivo para mensajes
  const [existing] = await db.query(
    "SELECT * FROM users WHERE email = 'testuser_messages@example.com'"
  );

  if ((existing as any[]).length === 0) {
    await db.query(`
      INSERT INTO users (nombre, email, password_hash, rol_id, activo)
      VALUES ('Test User Mensajes', 'testuser_messages@example.com', 'hash', 1, 1)
    `);
  }

  const [rows] = await db.query(
    "SELECT id FROM users WHERE email = 'testuser_messages@example.com'"
  );
  userId = (rows as any[])[0].id;

  // Crear token JWT
  token = jwt.sign({ id: userId, role: "admin" }, process.env.JWT_SECRET || "test_secret", {
    expiresIn: "1h",
  });

  // Crear chat de prueba
  const chatRes = await request(app)
    .post("/chats")
    .send({
      usuarioId: userId,
      titulo: "Chat de prueba",
    })
    .expect(201);

  chatId = chatRes.body.data.id;

  // Insertar mensajes de prueba
  await db.query(
    "INSERT INTO messages (chat_id, remitente, contenido) VALUES (?, ?, ?)",
    [chatId, "usuario", "Mensaje de usuario de prueba"]
  );
  await db.query(
    "INSERT INTO messages (chat_id, remitente, contenido) VALUES (?, ?, ?)",
    [chatId, "ia", "Mensaje de IA de prueba"]
  );
});

afterAll(async () => {
  // Limpiar mensajes
  await db.query("DELETE FROM messages WHERE chat_id = ?", [chatId]);
  // Limpiar chat
  await db.query("DELETE FROM chats WHERE id = ?", [chatId]);
  // Limpiar usuario
  await db.query("DELETE FROM users WHERE id = ?", [userId]);
});

describe("💬 API de Mensajes", () => {
  it("✅ Debería crear un mensaje de usuario", async () => {
    const res = await request(app)
      .post("/messages")
      .send({
        chatId,
        remitente: "usuario",
        contenido: "Hola, soy un mensaje de usuario",
      })
      .expect(201);

    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
  });

  it("✅ Debería crear un mensaje de la IA", async () => {
    const res = await request(app)
      .post("/messages")
      .send({
        chatId,
        remitente: "ia",
        contenido: "Hola, soy la IA respondiendo",
      })
      .expect(201);

    expect(res.body).toHaveProperty("data");
    expect(res.body.data.remitente).toBe("ia");
  });

  it("📋 Debería listar los mensajes de un chat", async () => {
    const res = await request(app)
      .get(`/messages/chat/${chatId}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    const mensajes = Array.isArray(res.body.data) ? res.body.data : [res.body.data];
    expect(Array.isArray(mensajes)).toBe(true);
    expect(mensajes.length).toBeGreaterThan(0);
    expect(mensajes[0]).toHaveProperty("contenido");
    expect(["usuario", "ia"]).toContain(mensajes[0].remitente);
  });
});
