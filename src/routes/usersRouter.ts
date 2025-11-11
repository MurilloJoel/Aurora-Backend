import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { dbConfig } from '../config/db.js';
import { requireAuth } from '../util/jwt.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// ==============================
// 📋 GET /users  → Obtener todos los usuarios (protegido)
// ==============================
router.get('/', requireAuth, async (_req: Request, res: Response) => {
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

// ==============================
// 🔍 GET /users/:id  → Obtener usuario por ID (protegido)
// ==============================
router.get('/:id', requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isProd && supabase) {
      const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
      if (error) throw error;
      if (!data) return res.status(404).json({ error: 'Usuario no encontrado' });
      return res.status(200).json({ message: 'Usuario obtenido correctamente', data });
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM users WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Usuario no encontrado' });
      return res.status(200).json({ message: 'Usuario obtenido correctamente', data: rows[0] });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ==============================
// ➕ POST /users  → Crear nuevo usuario
// ==============================
router.post('/', async (req: Request, res: Response) => {
  const { nombre, email, password, rolId } = req.body;

  if (!nombre || !email || !password || rolId === undefined)
    return res.status(400).json({ error: 'Faltan campos obligatorios' });

  try {
    const password_hash = await bcrypt.hash(password, 10);
    const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');

    let newUser: any;

    if (isProd && supabase) {
      const { data, error } = await supabase.from('users').insert([
        {
          nombre,
          email,
          password_hash,
          rol_id: rolId,
          activo: true,
          creado_en: ahora,
          actualizado_en: ahora,
        },
      ]).select().single();

      if (error) throw error;
      newUser = data;
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO users (nombre, email, password_hash, rol_id, activo, creado_en, actualizado_en) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, password_hash, rolId, true, ahora, ahora]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
      newUser = rows[0];
    }

    return res.status(201).json({ message: 'Usuario creado correctamente', data: newUser });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ==============================
// ✏️ PUT /users/:id  → Actualizar usuario existente (protegido)
// ==============================
router.put('/:id', requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, rolId, activo } = req.body;

  try {
    const ahora = new Date().toISOString().slice(0, 19).replace('T', ' ');

    let updatedUser: any;

    if (isProd && supabase) {
      const { data, error } = await supabase.from('users').update({
        ...(nombre && { nombre }),
        ...(email && { email }),
        ...(rolId !== undefined && { rol_id: rolId }),
        ...(activo !== undefined && { activo }),
        actualizado_en: ahora,
      }).eq('id', id).select().single();

      if (error) throw error;
      updatedUser = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM users WHERE id = ?', [id]);
      if (!rows.length) return res.status(404).json({ error: 'Usuario no encontrado' });

      const current = rows[0];
      await mysqlPool.query(
        'UPDATE users SET nombre = ?, email = ?, rol_id = ?, activo = ?, actualizado_en = ? WHERE id = ?',
        [
          nombre || current.nombre,
          email || current.email,
          rolId !== undefined ? rolId : current.rol_id,
          activo !== undefined ? activo : current.activo,
          ahora,
          id,
        ]
      );

      const [updated]: any = await mysqlPool.query('SELECT * FROM users WHERE id = ?', [id]);
      updatedUser = updated[0];
    }

    return res.status(200).json({ message: 'Usuario actualizado correctamente', data: updatedUser });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ==============================
// 🗑️ DELETE /users/:id  → Eliminar usuario (protegido)
// ==============================
router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isProd && supabase) {
      const { error } = await supabase.from('users').delete().eq('id', id);
      if (error) throw error;
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('DELETE FROM users WHERE id = ?', [id]);
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }

    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
