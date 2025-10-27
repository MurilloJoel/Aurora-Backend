import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { dbConfig } from '../config/db.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// ----------------------------
// GET /users
// ----------------------------
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isProd && supabase) {
      const { data, error } = await supabase.from('usuarios').select('*');
      if (error) throw error;
      return res.status(200).json({ message: 'Usuarios obtenidos correctamente', data });
    } else if (!isProd && mysqlPool) {
      const [rows] = await mysqlPool.query('SELECT * FROM usuarios');
      return res.status(200).json({ message: 'Usuarios obtenidos correctamente', data: rows });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ----------------------------
// GET /users/:id
// ----------------------------
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isProd && supabase) {
      const { data, error } = await supabase.from('usuarios').select('*').eq('id', id).single();
      if (error) throw error;
      return res.status(200).json({ message: 'Usuario obtenido correctamente', data });
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: `Usuario con ID ${id} no encontrado` });
      return res.status(200).json({ message: 'Usuario obtenido correctamente', data: rows[0] });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ----------------------------
// POST /users
// ----------------------------
router.post('/', async (req: Request, res: Response) => {
  const { nombre, email, password, rolId } = req.body;
  if (!nombre || !email || !password || rolId === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);
    const ahora = new Date().toISOString();

    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([{ nombre, email, password_hash, rol_id: rolId, activo: true, creado_en: ahora, actualizado_en: ahora }])
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json({ message: 'Usuario creado correctamente', data });
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO usuarios (nombre,email,password_hash,rol_id,activo,creado_en,actualizado_en) VALUES (?,?,?,?,?,?,?)',
        [nombre, email, password_hash, rolId, true, ahora, ahora]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [result.insertId]);
      return res.status(201).json({ message: 'Usuario creado correctamente', data: rows[0] });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ----------------------------
// PUT /users/:id
// ----------------------------
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, rolId, activo } = req.body;
  const ahora = new Date().toISOString();

  try {
    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .update({ nombre, email, rol_id: rolId, activo, actualizado_en: ahora })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json({ message: 'Usuario actualizado correctamente', data });
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query(
        'UPDATE usuarios SET nombre=?, email=?, rol_id=?, activo=?, actualizado_en=? WHERE id=?',
        [nombre, email, rolId, activo, ahora, id]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Usuario actualizado correctamente', data: rows[0] });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ----------------------------
// DELETE /users/:id
// ----------------------------
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const ahora = new Date().toISOString();

  try {
    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .update({ activo: false, actualizado_en: ahora })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json({ message: 'Usuario desactivado correctamente', data });
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('UPDATE usuarios SET activo=?, actualizado_en=? WHERE id=?', [false, ahora, id]);
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Usuario desactivado correctamente', data: rows[0] });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
