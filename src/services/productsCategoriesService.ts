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
  }
};
  