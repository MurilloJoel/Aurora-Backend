import dotenv from 'dotenv';
import { Pool } from 'pg';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

// Configuración de conexión PostgreSQL (válido para Supabase)
export const pgPool = new Pool({
  connectionString: isProduction
    ? process.env.PRODUCTION_DATABASE_URL
    : process.env.LOCAL_DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

// Cliente Supabase opcional
export const supabase =
  isProduction && process.env.SUPABASE_URL && process.env.SUPABASE_KEY
    ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    : null;

export const dbConfig = {
  isProduction,
  pgPool,
  supabase,
};
