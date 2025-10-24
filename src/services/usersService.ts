import { dbConfig } from '../config/index';
import bcrypt from 'bcrypt';
import { users } from '../entities/users';

export const userService = {
  async getAll(): Promise<users[]> {
    const { rows } = await dbConfig.pgPool.query('SELECT * FROM usuarios ORDER BY id');
    return rows;
  },

  async getById(id: number): Promise<users | null> {
    const { rows } = await dbConfig.pgPool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return rows[0] || null;
  },

  async create(user: { nombre: string; email: string; password: string; rolId: number }): Promise<users> {
    const password_hash = await bcrypt.hash(user.password, 10);
    const { rows } = await dbConfig.pgPool.query(
      `INSERT INTO usuarios (nombre, email, password_hash, rol_id, activo)
       VALUES ($1, $2, $3, $4, TRUE)
       RETURNING *`,
      [user.nombre, user.email, password_hash, user.rolId]
    );
    return rows[0];
  },

  async update(
    id: number,
    updates: Partial<{ nombre: string; email: string; rolId: number; activo: boolean }>
  ): Promise<users | null> {
    const fields = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = $${index++}`);
      values.push(value);
    }
    values.push(id);

    const { rows } = await dbConfig.pgPool.query(
      `UPDATE usuarios SET ${fields.join(', ')}, actualizado_en = NOW() WHERE id = $${index} RETURNING *`,
      values
    );

    return rows[0] || null;
  },

  async delete(id: number): Promise<void> {
    await dbConfig.pgPool.query('DELETE FROM usuarios WHERE id = $1', [id]);
  },
};
