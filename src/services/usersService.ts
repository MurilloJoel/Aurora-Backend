<<<<<<< HEAD
import { dbConfig } from '../config/index.js';
import bcrypt from 'bcrypt';
import type { users } from '../entities/users.ts';

export const userService = {
  async getAll(): Promise<users[]> {
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM usuarios ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<users | null> {
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return rows[0] || null;
=======
import { dbConfig } from '../config/db.js';
import bcrypt from 'bcrypt';
import { users } from '../entities/users.js';

// Helper para obtener el pool de manera segura
function getPool() {
  if (!dbConfig.pgPool) throw new Error('Postgres pool no inicializado');
  return dbConfig.pgPool;
}

// Mapea fila de DB (snake_case) a objeto TS (camelCase)
function mapUserRow(row: any): users {
  return {
    id: row.id,
    nombre: row.nombre,
    email: row.email,
    passwordHash: row.password_hash,
    rolId: row.rol_id,
    tokenJwt: row.token_jwt,
    tokenRefresh: row.token_refresh,
    ultimoLogin: row.ultimo_login,
    creadoEn: row.creado_en,
    actualizadoEn: row.actualizado_en,
    activo: row.activo,
  };
}

export const userService = {
  async getAll(): Promise<users[]> {
    const { rows } = await getPool().query(
      `SELECT id, nombre, email, password_hash, rol_id, token_jwt, token_refresh, ultimo_login, creado_en, actualizado_en, activo 
       FROM usuarios ORDER BY id`
    );
    return rows.map(mapUserRow);
  },

  async getById(id: number): Promise<users | null> {
    const { rows } = await getPool().query(
      `SELECT id, nombre, email, password_hash, rol_id, token_jwt, token_refresh, ultimo_login, creado_en, actualizado_en, activo 
       FROM usuarios WHERE id = $1`,
      [id]
    );
    return rows[0] ? mapUserRow(rows[0]) : null;
>>>>>>> 8e29edab2c8228e2afafff6341d6248132c46a04
  },

  async create(user: { nombre: string; email: string; password: string; rolId: number }): Promise<users> {
    const pool = dbConfig.pgPool!;
    const password_hash = await bcrypt.hash(user.password, 10);
<<<<<<< HEAD
    const { rows } = await pool.query(
=======
    const { rows } = await getPool().query(
>>>>>>> 8e29edab2c8228e2afafff6341d6248132c46a04
      `INSERT INTO usuarios (nombre, email, password_hash, rol_id, activo)
       VALUES ($1, $2, $3, $4, TRUE)
       RETURNING id, nombre, email, password_hash, rol_id, token_jwt, token_refresh, ultimo_login, creado_en, actualizado_en, activo`,
      [user.nombre, user.email, password_hash, user.rolId]
    );
    return mapUserRow(rows[0]);
  },

  async update(
    id: number,
    updates: Partial<{ nombre: string; email: string; password?: string; rolId: number; activo: boolean }>
  ): Promise<users | null> {
<<<<<<< HEAD
    const pool = dbConfig.pgPool!;
=======
    if (Object.keys(updates).length === 0) return this.getById(id);

>>>>>>> 8e29edab2c8228e2afafff6341d6248132c46a04
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(updates)) {
      let column = key === 'rolId' ? 'rol_id' : key;
      let val = value;

      if (key === 'password') {
        column = 'password_hash';
        val = await bcrypt.hash(value as string, 10);
      }

      fields.push(`${column} = $${index++}`);
      values.push(val);
    }

    values.push(id);

<<<<<<< HEAD
    const { rows } = await pool.query(
      `UPDATE usuarios SET ${fields.join(', ')}, actualizado_en = NOW() WHERE id = $${index} RETURNING *`,
=======
    const { rows } = await getPool().query(
      `UPDATE usuarios SET ${fields.join(', ')}, actualizado_en = NOW() WHERE id = $${index} 
       RETURNING id, nombre, email, password_hash, rol_id, token_jwt, token_refresh, ultimo_login, creado_en, actualizado_en, activo`,
>>>>>>> 8e29edab2c8228e2afafff6341d6248132c46a04
      values
    );

    return rows[0] ? mapUserRow(rows[0]) : null;
  },

  async delete(id: number): Promise<void> {
<<<<<<< HEAD
    const pool = dbConfig.pgPool!;
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
=======
    await getPool().query('DELETE FROM usuarios WHERE id = $1', [id]);
>>>>>>> 8e29edab2c8228e2afafff6341d6248132c46a04
  },
};
