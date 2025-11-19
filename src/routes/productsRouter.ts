import express from 'express';
import { requireAuth } from '../utils/jwt.js';
import { dbConfig } from '../config/db.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// ==============================
// GET /products → Obtener todos los productos
// ==============================
router.get('/', async (_req, res) => {
  try {
    let products;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      products = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM products');
      products = rows;
    }
    res.status(200).json({ message: 'Productos obtenidos correctamente', data: products });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /products/:id → Obtener producto por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let product;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (error) throw error;
      if (!data) return res.status(404).json({ error: 'Producto no encontrado' });
      product = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM products WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Producto no encontrado' });
      product = rows[0];
    }
    res.status(200).json({ message: 'Producto obtenido correctamente', data: product });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:product_category', async (req, res) => {
  const { product_category } = req.params;
  try {
    let products;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('products').select('*').eq('product_category', product_category);
      if (error) throw error;
      products = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM products WHERE product_category = ?', [product_category]);
      products = rows;
    }
    res.status(200).json({ message: 'Productos obtenidos correctamente', data: products });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /products → Crear producto
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, stock, activo } = req.body;
  try {
    let newProduct;
    const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
    if (isProd && supabase) {
      const { data, error } = await supabase.from('products').insert([{
        nombre,
        descripcion,
        precio,
        stock,
        activo,
        creado_en: ahora,
        actualizado_en: ahora,
      }]).select().single();
      if (error) throw error;
      newProduct = data;
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO products (nombre, descripcion, precio, stock, activo, creado_en, actualizado_en) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, descripcion, precio, stock, activo, ahora, ahora]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
      newProduct = rows[0];
    }
    res.status(201).json({ message: 'Producto creado correctamente', data: newProduct });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /products/:id → Actualizar producto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock, activo } = req.body;
  try {
    const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let updatedProduct;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('products').update({
        ...(nombre && { nombre }),
        ...(descripcion && { descripcion }),
        ...(precio !== undefined && { precio }),
        ...(stock !== undefined && { stock }),
        ...(activo !== undefined && { activo }),
        actualizado_en: ahora,
      }).eq('id', id).select().single();
      if (error) throw error;
      updatedProduct = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM products WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Producto no encontrado' });
      const current = rows[0];
      await mysqlPool.query(
        'UPDATE products SET nombre = ?, descripcion = ?, precio = ?, stock = ?, activo = ?, actualizado_en = ? WHERE id = ?',
        [
          nombre || current.nombre,
          descripcion || current.descripcion,
          precio !== undefined ? precio : current.precio,
          stock !== undefined ? stock : current.stock,
          activo !== undefined ? activo : current.activo,
          ahora,
          id,
        ]
      );
      const [updated]: any = await mysqlPool.query('SELECT * FROM products WHERE id = ?', [id]);
      updatedProduct = updated[0];
    }
    res.status(200).json({ message: 'Producto actualizado correctamente', data: updatedProduct });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /products/:id → Eliminar producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (isProd && supabase) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('DELETE FROM products WHERE id = ?', [id]);
    }
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
