import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import createError from 'http-errors';

import logger from './util/logger.js';

import indexRouter from './routes/index.js';
import usersRouter from './routes/usersRouter.js';
import messagesRouter from './routes/messages.js';
import productsRouter from './routes/products.js';
import authRouter from './routes/authRouter.js';
import chatsRoutes from './routes/chatsRoutes.js';

const app = express();

// =============================
// 🧩 Middlewares globales
// =============================

// Redirigir los logs HTTP de Morgan a Winston
app.use(
  morgan(':method :url :status :response-time ms', {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

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
app.use('/chats', chatsRoutes);

// =============================
// ⚠️ Manejo de errores
// =============================

// 404 - Ruta no encontrada
app.use((_req, _res, next) => {
  const error = createError(404, 'Ruta no encontrada');
  logger.warn(`404 - ${error.message}`);
  next(error);
});

// Middleware general de errores (siempre devuelve JSON)
app.use(
  (err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error(`❌ ${err.status || 500} - ${err.message}`);
    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Error interno del servidor',
    });
  }
);

export default app;
