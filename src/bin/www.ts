#!/usr/bin/env node

// =============================
// ⚙️ Dependencias principales
// =============================
import app from '../app.js';
import debugLib from 'debug';
import http from 'http';

const debug = debugLib('aurora:server');

// =============================
// 🔌 Configuración del servidor
// =============================
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// =============================
// 🔧 Funciones auxiliares
// =============================
function normalizePort(val: string): number | string | false {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requiere privilegios elevados');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' ya está en uso');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  if (!addr) return;

  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`🚀 Servidor escuchando en ${bind}`);
}
