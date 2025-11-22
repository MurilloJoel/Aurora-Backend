import { Request, Response, NextFunction } from 'express';

const allowedOriginsDev = [
  'https://localhost:4321',
  'http://localhost:3000'
];

const allowedOriginsProd = [
  'https://tudominio.com'
];

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const environment = process.env.ENVIRONMENT || 'development';
  
  const origin = req.headers.origin || '';

  const allowedOrigins =
    environment === 'production'
      ? allowedOriginsProd
      : allowedOriginsDev;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Importante para preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
};
