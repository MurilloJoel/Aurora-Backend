import { ERROR_CODES } from "../utils/codes.js";
import { dbConfig } from '../config/db.js';
import bcrypt from 'bcrypt';
import { users } from '../entities/usersEntity.js';



export const userService = {
  async getAll(): Promise<users[]> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
        const { data, error } = await dbConfig.supabase
          .from('users')
          .select('*')
          .order('id', { ascending: true });
    
        if (error) throw new Error('Error fetching products');
        return data as users[];
  },

  async getById(id: number): Promise<users | null> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
        const { data, error } = await dbConfig.supabase
          .from('users')
          .select('*')
          .eq('id', id)
          .single();
    
        if (error) throw new Error('Error fetching user by ID');
        return data as users | null;
  },

  async create(user: { nombre: string; email: string; password: string; rolId: number }): Promise<users> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const passwordHash = await bcrypt.hash(user.password, 10);
      const { data, error } = await dbConfig.supabase.from('users').insert([{
        nombre: user.nombre,
        email: user.email,
        password_hash: passwordHash,
        rol_id: user.rolId,
        activo: true
      }]).select().single();
    if (error) throw new Error('Error creating user');
    return data as users;
  },

  async update(
    id: number,
    updates: Partial<{ nombre: string; email: string; password?: string; rolId: number; activo: boolean }>
  ): Promise<users | null> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');

    const updateData: any = { ...updates };
    if (updates.password) {
      updateData.password_hash = await bcrypt.hash(updates.password, 10);
      delete updateData.password;
    }

    const { data, error } = await dbConfig.supabase
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error('Error updating user');
    return data as users | null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const { error } = await dbConfig.supabase.from('users').delete().eq('id', id);
    if (error) throw new Error('Error deleting user');
  },
};
