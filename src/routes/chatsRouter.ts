import express from 'express';
import { dbConfig } from '../config/db.js';
import { requireAuth } from '../util/jwt.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// GET /chats
router.get('/', requireAuth, async (_req, res) => {
  try {
    let chats;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('chats').select('*');
      if (error) throw error;
      chats = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM chats');
      chats = rows;
    }
    res.status(200).json({ message: 'Chats obtenidos correctamente', data: chats });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /chats/:id
router.get('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    let chat;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('chats').select('*').eq('id', id).single();
      if (error) throw error;
      chat = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM chats WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Chat no encontrado' });
      chat = rows[0];
    }
    res.status(200).json({ message: 'Chat obtenido correctamente', data: chat });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /chats
router.post('/', requireAuth, async (req, res) => {
  const { nombre } = req.body;
  const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    let newChat;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('chats').insert([{ nombre, creado_en: ahora, actualizado_en: ahora }]).select().single();
      if (error) throw error;
      newChat = data;
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO chats (nombre, creado_en, actualizado_en) VALUES (?, ?, ?)',
        [nombre, ahora, ahora]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM chats WHERE id = ?', [result.insertId]);
      newChat = rows[0];
    }
    res.status(201).json({ message: 'Chat creado correctamente', data: newChat });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /chats/:id
router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    let updatedChat;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('chats').update({ ...(nombre && { nombre }), actualizado_en: ahora }).eq('id', id).select().single();
      if (error) throw error;
      updatedChat = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM chats WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Chat no encontrado' });
      await mysqlPool.query('UPDATE chats SET nombre = ?, actualizado_en = ? WHERE id = ?', [nombre || rows[0].nombre, ahora, id]);
      const [updated]: any = await mysqlPool.query('SELECT * FROM chats WHERE id = ?', [id]);
      updatedChat = updated[0];
    }
    res.status(200).json({ message: 'Chat actualizado correctamente', data: updatedChat });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /chats/:id
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    if (isProd && supabase) {
      const { error } = await supabase.from('chats').delete().eq('id', id);
      if (error) throw error;
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('DELETE FROM chats WHERE id = ?', [id]);
    }
    res.status(200).json({ message: 'Chat eliminado correctamente' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
