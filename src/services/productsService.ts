import { dbConfig } from '../config/db.js';
import type { products } from '../entities/productsEntity.js';

export const productsService = {
  async getAll(): Promise<products[]> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const { data, error } = await dbConfig.supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw new Error('Error fetching products');
    return data as products[];
  },

  async getById(id: number): Promise<products | null> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const { data, error } = await dbConfig.supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error('Error fetching product by ID');
    return data as products | null;
  },

  async getByCategory(category: string): Promise<products[]> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const { data, error } = await dbConfig.supabase
      .from('products')
      .select('*')
      .eq('product_category', category);

    if (error) throw new Error('Error fetching products by category');
    return data as products[];
  },

  async create(data: Omit<products, 'id' | 'creadoEn' | 'actualizadoEn'>): Promise<products> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
      const { data: createdData, error } = await dbConfig.supabase.from('products').insert([data]).select().single();

    if (error) throw new Error('Error creating product');
    return createdData as products;
  },

  async update(id: number, updates: Partial<Omit<products, 'id'>>): Promise<products | null> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');

    const fields = [];
    const values: any[] = [];
    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
    values.push(id);

    await dbConfig.supabase.from('products').update(updates).eq('id', id);
    const { data, error } = await dbConfig.supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error('Error fetching product by ID');
    return data as products | null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    await dbConfig.supabase.from('products').delete().eq('id', id);
  },
};
