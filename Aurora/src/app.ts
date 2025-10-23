import createError from 'http-errors';
import express from 'express'; // default import
import type { Request, Response, NextFunction } from 'express'; // solo tipos
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.ts';
import usersRouter from './routes/users.ts';

const app = express();

// View engine setup
app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'pug'); // jade → pug

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); // o res.send('Error interno del servidor');
});

export default app;