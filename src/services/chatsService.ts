import { dbConfig } from '../config/index.js';
import type { chats } from '../entities/chats.ts';

export const chatService = {
  async getAll(): Promise<chats[]> {
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM chats ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<chats | null> {
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM chats WHERE id = $1', [id]);
    return rows[0] || null;
  },

  async create(chat: { usuarioId: number; titulo: string }): Promise<chats> {
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query(
      `INSERT INTO chats (usuario_id, titulo, creado_en, actualizado_en)
       VALUES ($1, $2, NOW(), NOW())
       RETURNING *`,
      [chat.usuarioId, chat.titulo]
    );
    return rows[0];
  },

  async update(id: number, updates: Partial<{ titulo: string }>): Promise<chats | null> {
    const pool = dbConfig.pgPool!;
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = $${index++}`);
      values.push(value);
    }

    values.push(id);

    const { rows } = await pool.query(
      `UPDATE chats SET ${fields.join(', ')}, actualizado_en = NOW() WHERE id = $${index} RETURNING *`,
      values
    );

    return rows[0] || null;
  },

  async delete(id: number): Promise<void> {
    const pool = dbConfig.pgPool!;
    await pool.query('DELETE FROM chats WHERE id = $1', [id]);
  },
};
