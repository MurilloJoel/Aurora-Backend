import { ERROR_CODES } from "../utils/codes.js";
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import { dbConfig } from '../config/db.js';

let productId: number;
const db = dbConfig.mysqlPool!; // Conexión directa para limpieza

describe('🧪 API de Productos', () => {
  
  beforeAll(async () => {
    // Antes de los tests no hacemos nada especial porque el primer test crea el producto
  });

  afterAll(async () => {
    // Limpiar el producto de prueba en caso de que no se haya eliminado
    if (productId) {
      await db.query('DELETE FROM productos WHERE id = ?', [productId]);
    }
  });

  it('✅ Debería crear un producto', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        nombre: 'Auriculares Sony WH-1000XM5',
        descripcion: 'Auriculares con cancelación de ruido de alta calidad',
        precio: 299.99,
        stock: 15,
        activo: true
      })
      .expect(201);

    expect(res.body).toHaveProperty('data.id');
    expect(res.body.message).toBe('Producto creado correctamente');
    productId = res.body.data.id; // Guardamos ID dinámico
  });

  it('📦 Debería listar todos los productos', async () => {
    const res = await request(app).get('/products').expect(200);

    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.message).toBe('Productos obtenidos correctamente');
  });

  it('🔍 Debería obtener un producto por ID', async () => {
    const res = await request(app).get(`/products/${productId}`).expect(200);
    expect(res.body.data).toHaveProperty('id', productId);
  });

  it('✏️ Debería actualizar el producto', async () => {
    const res = await request(app)
      .put(`/products/${productId}`)
      .send({ nombre: 'Sony WH-1000XM5 Edición Limitada', stock: 10 })
      .expect(200);

    expect(res.body.message).toBe('Producto actualizado correctamente');
  });

  it('🗑️ Debería eliminar el producto', async () => {
    const res = await request(app).delete(`/products/${productId}`).expect(200);
    expect(res.body.message).toBe('Producto eliminado correctamente');
    productId = 0; // Evitar doble eliminación en afterAll
  });
});
