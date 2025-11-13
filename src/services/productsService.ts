import { ERROR_CODES } from "../utils/codes.js";
import { dbConfig } from '../config/db.js';
import type { products } from '../entities/productsEntity.js';

export const productsService = {
  async getAll(): Promise<products[]> {
    if (!dbConfig.mysqlPool) throw new Error(ERROR_CODES.SYSTEM[730])
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM products ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<products | null> {
    if (!dbConfig.mysqlPool) throw new Error(ERROR_CODES.SYSTEM[730])
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async create(data: Omit<products, 'id' | 'creadoEn' | 'actualizadoEn'>): Promise<products> {
    if (!dbConfig.mysqlPool) throw new Error(ERROR_CODES.SYSTEM[730])
    const [result]: any = await dbConfig.mysqlPool.query(
      'INSERT INTO s (nombre, descripcion, precio, stock, activo) VALUES (?, ?, ?, ?, ?)',
      [data.nombre, data.descripcion || null, data.precio, data.stock, data.activo]
    );

    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  async update(id: number, updates: Partial<Omit<products, 'id'>>): Promise<products | null> {
    if (!dbConfig.mysqlPool) throw new Error(ERROR_CODES.SYSTEM[730])

    const fields = [];
    const values: any[] = [];
    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
    values.push(id);

    await dbConfig.mysqlPool.query(`UPDATE products SET ${fields.join(', ')} WHERE id = ?`, values);
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.mysqlPool) throw new Error(ERROR_CODES.SYSTEM[730])
    await dbConfig.mysqlPool.query('DELETE FROM products WHERE id = ?', [id]);
  },
};
