import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/usersRouter.js';
import messagesRouter from './routes/messages.js';
import productsRouter from './routes/products.js';
import authRouter from './routes/authRouter.js';

const app = express();

// =============================
// 🧩 Middlewares globales
// =============================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// =============================
// 🌐 Rutas principales
// =============================
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/products', productsRouter);
app.use('/', authRouter);

// =============================
// ⚠️ Manejo de errores
// =============================

// 404 - Ruta no encontrada
app.use((_req, _res, next) => {
  next(createError(404, 'Ruta no encontrada'));
});

// Middleware general de errores (siempre devuelve JSON)
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Error interno del servidor',
  });
});

export default app;
