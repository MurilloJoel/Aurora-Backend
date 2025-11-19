import express from 'express';
import { dbConfig } from '../config/db.js';
import { requireAuth } from '../util/jwt.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// GET /messages
router.get('/', requireAuth, async (_req, res) => {
  try {
    let messages;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('messages').select('*');
      if (error) throw error;
      messages = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM messages');
      messages = rows;
    }
    res.status(200).json({ message: 'Mensajes obtenidos correctamente', data: messages });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /messages/:id
router.get('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    let message;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('messages').select('*').eq('id', id).single();
      if (error) throw error;
      message = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM messages WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Mensaje no encontrado' });
      message = rows[0];
    }
    res.status(200).json({ message: 'Mensaje obtenido correctamente', data: message });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /messages/chat/:chatId
router.get('/chat/:chatId', requireAuth, async (req, res) => {
  const { chatId } = req.params;
  try {
    let messages;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('messages').select('*').eq('chat_id', chatId);
      if (error) throw error;
      messages = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM messages WHERE chat_id = ?', [chatId]);
      messages = rows;
    }
    res.status(200).json({ message: 'Mensajes del chat obtenidos correctamente', data: messages });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /messages
router.post('/', requireAuth, async (req, res) => {
  const { chat_id, contenido, sender_id } = req.body;
  const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    let newMessage;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('messages').insert([{
        chat_id,
        contenido,
        sender_id,
        creado_en: ahora,
        actualizado_en: ahora,
      }]).select().single();
      if (error) throw error;
      newMessage = data;
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO messages (chat_id, contenido, sender_id, creado_en, actualizado_en) VALUES (?, ?, ?, ?, ?)',
        [chat_id, contenido, sender_id, ahora, ahora]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM messages WHERE id = ?', [result.insertId]);
      newMessage = rows[0];
    }
    res.status(201).json({ message: 'Mensaje creado correctamente', data: newMessage });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /messages/:id
router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { contenido } = req.body;
  const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    let updatedMessage;
    if (isProd && supabase) {
      const { data, error } = await supabase.from('messages').update({
        ...(contenido && { contenido }),
        actualizado_en: ahora,
      }).eq('id', id).select().single();
      if (error) throw error;
      updatedMessage = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM messages WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Mensaje no encontrado' });
      await mysqlPool.query(
        'UPDATE messages SET contenido = ?, actualizado_en = ? WHERE id = ?',
        [contenido || rows[0].contenido, ahora, id]
      );
      const [updated]: any = await mysqlPool.query('SELECT * FROM messages WHERE id = ?', [id]);
      updatedMessage = updated[0];
    }
    res.status(200).json({ message: 'Mensaje actualizado correctamente', data: updatedMessage });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /messages/:id
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    if (isProd && supabase) {
      const { error } = await supabase.from('messages').delete().eq('id', id);
      if (error) throw error;
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('DELETE FROM messages WHERE id = ?', [id]);
    }
    res.status(200).json({ message: 'Mensaje eliminado correctamente' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
