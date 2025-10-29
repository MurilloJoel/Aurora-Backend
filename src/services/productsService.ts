import { dbConfig } from '../config/db.js';
import type { products } from '../entities/products.js';

export const productsService = {
  async getAll(): Promise<products[]> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM productos ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<products | null> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async create(data: Omit<products, 'id' | 'creadoEn' | 'actualizadoEn'>): Promise<products> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    const [result]: any = await dbConfig.mysqlPool.query(
      'INSERT INTO productos (nombre, descripcion, precio, stock, activo) VALUES (?, ?, ?, ?, ?)',
      [data.nombre, data.descripcion || null, data.precio, data.stock, data.activo]
    );

    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM productos WHERE id = ?', [result.insertId]);
    return rows[0];
  },

  async update(id: number, updates: Partial<Omit<products, 'id'>>): Promise<products | null> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');

    const fields = [];
    const values: any[] = [];
    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
    values.push(id);

    await dbConfig.mysqlPool.query(`UPDATE productos SET ${fields.join(', ')} WHERE id = ?`, values);
    const [rows]: any = await dbConfig.mysqlPool.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.mysqlPool) throw new Error('Base de datos no inicializada');
    await dbConfig.mysqlPool.query('DELETE FROM productos WHERE id = ?', [id]);
  },
};
