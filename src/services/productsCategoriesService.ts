import { dbConfig } from '../config/db.js';
import type { productsCategories } from '../entities/productsCategoriesEntity.js';

export const productsCategoriesService = {
  async getAll(): Promise<productsCategories[]> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const { data, error } = await dbConfig.supabase
      .from('product_categories')
      .select('*')
      .order('id', { ascending: true });
    if (error) throw new Error('Error fetching categories');
    return data as productsCategories[];
  },

  async getAllPaged(page: number, pageSize: number): Promise<{ data: productsCategories[]; total: number }> {
    if (!dbConfig.supabase) throw new Error('Base de datos no inicializada');
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    const { data, error, count } = await dbConfig.supabase
      .from('product_categories')
      .select('*', { count: 'exact' })
      .range(from, to);
    if (error) throw new Error('Error fetching categories');
    return { data: data as productsCategories[], total: count ?? 0 };
  }
};