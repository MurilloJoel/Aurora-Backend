import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import { dbConfig } from '../config/db.js';

let chatId: number;
const db = dbConfig.mysqlPool!;

describe('🧪 API de Chats', () => {

  beforeAll(async () => {
    const res = await request(app)
      .post('/chats')
      .send({
        usuarioId: 1,
        titulo: 'Chat de prueba automatizado',
      })
      .expect(201);

    chatId = res.body.data.id; // aquí sí existe data
  });

  afterAll(async () => {
    if (chatId) {
      await db.query('DELETE FROM chats WHERE id = ?', [chatId]);
      chatId = 0;
    }
  });

  it('📋 Debería listar todos los chats', async () => {
    const res = await request(app).get('/chats').expect(200);

    // Tu API devuelve directamente el array en res.body, no en res.body.data
    expect(Array.isArray(res.body)).toBe(true);

    // Comprobamos que nuestro chat recién creado está en la lista
    expect(res.body.some((c: any) => c.id === chatId)).toBe(true);
  });

  it('🔍 Debería obtener un chat por ID', async () => {
    const res = await request(app).get(`/chats/${chatId}`).expect(200);

    // Tu API devuelve directamente el objeto del chat en res.body
    expect(res.body).toHaveProperty('id', chatId);
  });

  it('✏️ Debería actualizar un chat', async () => {
    const nuevoTitulo = 'Chat actualizado desde test ✅';
    const res = await request(app)
      .put(`/chats/${chatId}`)
      .send({ titulo: nuevoTitulo })
      .expect(200);

    expect(res.body.data.titulo).toBe(nuevoTitulo);
  });

  it('🗑️ Debería eliminar un chat', async () => {
    const res = await request(app).delete(`/chats/${chatId}`).expect(200);
    expect(res.body.message).toBe('Chat eliminado correctamente');
    chatId = 0;
  });

});
