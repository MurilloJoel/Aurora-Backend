import { ERROR_CODES } from "../utils/codes.js";
import jwt, { Secret } from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
const REFRESH_TOKEN_SECRET: Secret = process.env.REFRESH_TOKEN_SECRET as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '2h';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

if (!JWT_SECRET) throw new Error(ERROR_CODES.AUTH[682])
if (!REFRESH_TOKEN_SECRET) throw new Error(ERROR_CODES.AUTH[689])

export const jwtUtils = {
  generateAccessToken(user: any) {
    return jwt.sign(
      { id: user.id, email: user.email, rol: user.rol_id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions
    );
  },

  generateRefreshToken(user: any) {
    return jwt.sign(
      { id: user.id, email: user.email },
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES_IN } as jwt.SignOptions
    );
  },

  verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  },

  verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, REFRESH_TOKEN_SECRET);
    } catch {
      return null;
    }
  },
};

// Middleware para proteger rutas
export const requireAuth = expressjwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  credentialsRequired: true,
  requestProperty: 'auth',
});
