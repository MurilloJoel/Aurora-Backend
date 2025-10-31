import dotenv from "dotenv";
import { Pool } from "pg";
import mysql from "mysql2/promise";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import logger from "../util/logger.js";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

// ==============================
// 💾 Conexión local: MySQL
// ==============================
let mysqlPool: mysql.Pool | null = null;

if (!isProduction) {
  if (!process.env.LOCAL_MYSQL_URL) {
    throw new Error("❌ LOCAL_MYSQL_URL no está definida en el archivo .env");
  }

  mysqlPool = mysql.createPool({
    uri: process.env.LOCAL_MYSQL_URL,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  logger.info("✅ Conectado a la base de datos MySQL local");
}

// ==============================
// 🐘 Conexión producción: PostgreSQL (Supabase)
// ==============================
let pgPool: Pool | null = null;

if (isProduction) {
  if (!process.env.PRODUCTION_DATABASE_URL) {
    throw new Error(
      "❌ PRODUCTION_DATABASE_URL no está definida en el archivo .env"
    );
  }

  pgPool = new Pool({
    connectionString: process.env.PRODUCTION_DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  logger.info("✅ Conectado a la base de datos PostgreSQL (Supabase)");
}

// ==============================
// ☁️ Cliente Supabase (siempre)
// ==============================
let supabase: SupabaseClient | null = null;

if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
    global: {
      headers: {},
    },
  });
  logger.info("☁️ Cliente Supabase inicializado correctamente");
}

// ==============================
// 📦 Exportar configuración
// ==============================
export const dbConfig = {
  isProduction,
  mysqlPool,
  pgPool,
  supabase,
};

export default dbConfig;
