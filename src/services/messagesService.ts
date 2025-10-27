import { dbConfig } from '../config/db.js';
import type { messages } from '../entities/messages.js';

export const messagesService = {
  async getAll(): Promise<messages[]> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM mensajes ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<messages | null> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM mensajes WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async create(msg: { chatId: number; remitente: 'usuario' | 'ia'; contenido: string }): Promise<messages> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');

    const ahora = new Date();
    const creadoEn = `${ahora.getFullYear()}-${(ahora.getMonth()+1).toString().padStart(2,'0')}-${ahora.getDate().toString().padStart(2,'0')} ${ahora.getHours().toString().padStart(2,'0')}:${ahora.getMinutes().toString().padStart(2,'0')}:${ahora.getSeconds().toString().padStart(2,'0')}`;

    const [result]: any = await dbConfig.mysqlPool.query(
      'INSERT INTO mensajes (chat_id, remitente, contenido, creado_en) VALUES (?,?,?,?)',
      [msg.chatId, msg.remitente, msg.contenido, creadoEn]
    );

    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM mensajes WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  async update(id: number, updates: Partial<{ contenido: string }>): Promise<messages | null> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');

    const fields = [];
    const values: any[] = [];
    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
    values.push(id);

    await dbConfig.mysqlPool.query(`UPDATE mensajes SET ${fields.join(', ')} WHERE id=?`, values);
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM mensajes WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    await dbConfig.mysqlPool.query('DELETE FROM mensajes WHERE id = ?', [id]);
  },
};
