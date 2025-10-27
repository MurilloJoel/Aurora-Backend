import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import dbConfig from '../config/db.js';

const router = express.Router();

// Detectar entorno y DB
const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// ==============================
// GET /users → Obtener todos los usuarios
// ==============================
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

// ==============================
// GET /users/:id → Obtener un usuario por ID
// ==============================
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

// ==============================
// POST /users → Crear un nuevo usuario
// ==============================
router.post('/', async (req: Request, res: Response) => {
  const { nombre, email, password, rolId } = req.body;

  if (!nombre || !email || !password || rolId === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    // Generar hash de la contraseña
    const passwordHash = await bcrypt.hash(password, 10);
    const ahora = new Date();

    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([{
          nombre,
          email,
          passwordHash,
          rolId,
          activo: true,
          creadoEn: ahora.toISOString(),
          actualizadoEn: ahora.toISOString()
        }])
        .select()
        .single();

      if (error) throw error;
      return res.status(201).json({ message: 'Usuario creado correctamente', data });
    } else if (!isProd && mysqlPool) {
      const [result]: any = await mysqlPool.query(
        'INSERT INTO usuarios (nombre,email,passwordHash,rolId,activo,creadoEn,actualizadoEn) VALUES (?,?,?,?,?,?,?)',
        [nombre, email, passwordHash, rolId, true, ahora, ahora]
      );

      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [result.insertId]);
      return res.status(201).json({ message: 'Usuario creado correctamente', data: rows[0] });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ==============================
// PUT /users/:id → Actualizar un usuario existente
// ==============================
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email, rolId, activo } = req.body;

  try {
    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .update({ nombre, email, rolId, activo, actualizadoEn: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json({ message: 'Usuario actualizado correctamente', data });
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query(
        'UPDATE usuarios SET nombre=?, email=?, rolId=?, activo=?, actualizadoEn=? WHERE id=?',
        [nombre, email, rolId, activo, new Date(), id]
      );
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Usuario actualizado correctamente', data: rows[0] });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ==============================
// DELETE /users/:id → Desactivar un usuario
// ==============================
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isProd && supabase) {
      const { data, error } = await supabase
        .from('usuarios')
        .update({ activo: false, actualizadoEn: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json({ message: 'Usuario desactivado correctamente', data });
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('UPDATE usuarios SET activo=?, actualizadoEn=? WHERE id=?', [false, new Date(), id]);
      const [rows]: any = await mysqlPool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Usuario desactivado correctamente', data: rows[0] });
    } else {
      return res.status(500).json({ error: 'Base de datos no inicializada' });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;