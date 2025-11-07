import { dbConfig } from '../config/index.js';
import type { Chat } from '../entities/chatsEntity.js';

export const chatService = {
  async getAll(): Promise<Chat[]> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats ORDER BY id');
    conn.release();
    return rows as Chat[];
  },

  async getById(id: number): Promise<Chat | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as Chat[])[0] || null;
  },

  async create(chat: { usuarioId: number; titulo: string }): Promise<Chat> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [result]: any = await conn.query(
      `INSERT INTO chats (usuario_id, titulo, creado_en, actualizado_en)
       VALUES (?, ?, NOW(), NOW())`,
      [chat.usuarioId, chat.titulo]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [result.insertId]);
    conn.release();
    return (rows as Chat[])[0];
  },

  async update(id: number, updates: Partial<{ titulo: string }>): Promise<Chat | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query(
      `UPDATE chats SET titulo = ?, actualizado_en = NOW() WHERE id = ?`,
      [updates.titulo, id]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as Chat[])[0] || null;
  },

  async delete(id: number): Promise<void> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query('DELETE FROM chats WHERE id = ?', [id]);
    conn.release();
  },
};
