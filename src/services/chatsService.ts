import { dbConfig } from '../config/index.js';
import type { chats } from '../entities/chats.ts';

export const chatService = {
  async getAll(): Promise<chats[]> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats ORDER BY id');
    conn.release();
    return rows as chats[];
  },

  async getById(id: number): Promise<chats | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as chats[])[0] || null;
  },

  async create(chat: { usuarioId: number; titulo: string }): Promise<chats> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [result]: any = await conn.query(
      `INSERT INTO chats (usuario_id, titulo, creado_en, actualizado_en)
       VALUES (?, ?, NOW(), NOW())`,
      [chat.usuarioId, chat.titulo]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [result.insertId]);
    conn.release();
    return (rows as chats[])[0];
  },

  async update(id: number, updates: Partial<{ titulo: string }>): Promise<chats | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query(
      `UPDATE chats SET titulo = ?, actualizado_en = NOW() WHERE id = ?`,
      [updates.titulo, id]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as chats[])[0] || null;
  },

  async delete(id: number): Promise<void> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query('DELETE FROM chats WHERE id = ?', [id]);
    conn.release();
  },
};
