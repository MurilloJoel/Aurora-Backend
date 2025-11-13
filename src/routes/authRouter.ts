import { ERROR_CODES } from "../utils/codes";
import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { dbConfig } from '../config/db.js';
import { jwtUtils } from '../utils/jwt.js';
import logger from '../utils/logger.js';

const router = express.Router();

const isProd = dbConfig.isProduction;
const supabase = dbConfig.supabase;
const mysqlPool = dbConfig.mysqlPool;

// ==============================
// 🔑 POST /login → Autenticación y generación de tokens
// ==============================
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new Error(ERROR_CODES.AUTH[685]);

  try {
    let user: any = null;

    if (isProd && supabase) {
      const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
      if (error || !data) throw new Error(ERROR_CODES.USERS[620]);
      user = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (!rows.length) throw new Error(ERROR_CODES.USERS[620]);
      user = rows[0];
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) throw new Error(ERROR_CODES.AUTH[688])

    const accessToken = jwtUtils.generateAccessToken(user);
    const refreshToken = jwtUtils.generateRefreshToken(user);

    // Guardar refresh token en la base de datos
    if (isProd && supabase) {
      await supabase.from('users').update({ token_refresh: refreshToken }).eq('id', user.id);
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('UPDATE users SET token_refresh = ? WHERE id = ?', [refreshToken, user.id]);
    }

    return res.status(200).json({ message: 'Inicio de sesión exitoso', accessToken, refreshToken });
  } catch (err: any) {
    logger.warn(err);
    throw new Error(ERROR_CODES.AUTH[685])
  }
});

// ==============================
// 🔄 POST /refresh → Obtener nuevo access token
// ==============================
router.post('/refresh', async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new Error(ERROR_CODES.AUTH[689])

  try {
    let user: any = null;

    if (isProd && supabase) {
      const { data, error } = await supabase.from('users').select('*').eq('token_refresh', refreshToken).single();
      if (error || !data) throw new Error(ERROR_CODES.AUTH[681])
      user = data;
    } else if (!isProd && mysqlPool) {
      const [rows]: any = await mysqlPool.query('SELECT * FROM users WHERE token_refresh = ?', [refreshToken]);
      if (!rows.length) throw new Error(ERROR_CODES.AUTH[681])
      user = rows[0];
    }

    // Validar token con JWT
    jwtUtils.verifyRefreshToken(refreshToken);

    const newAccessToken = jwtUtils.generateAccessToken(user);
    return res.status(200).json({ message: 'Token renovado correctamente', accessToken: newAccessToken });
  } catch (err: any) {
    throw new Error(ERROR_CODES.AUTH[680]) // o 681 según el caso
  }
});

// ==============================
// 🚪 POST /logout → Invalida el refresh token
// ==============================
router.post('/logout', async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new Error(ERROR_CODES.AUTH[689])

  try {
    if (isProd && supabase) {
      await supabase.from('users').update({ token_refresh: null }).eq('token_refresh', refreshToken);
    } else if (!isProd && mysqlPool) {
      await mysqlPool.query('UPDATE users SET token_refresh = NULL WHERE token_refresh = ?', [refreshToken]);
    }

    return res.status(200).json({ message: 'Sesión cerrada correctamente' });
  } catch (err: any) {
    throw new Error(ERROR_CODES.SYSTEM[729])
  }
});

// ==============================
// 👤 GET /profile → Ruta protegida con JWT
// ==============================
import { requireAuth } from '../utils/jwt.js';


router.get('/profile', requireAuth, async (req: Request, res: Response) => {
  try {
    const user = (req as any).auth;
    res.status(200).json({ message: 'Perfil accedido correctamente', user });
  } catch (err: any) {
    throw new Error(ERROR_CODES.SYSTEM[729])
  }
});

export default router;
