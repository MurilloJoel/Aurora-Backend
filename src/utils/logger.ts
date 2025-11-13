import { ERROR_CODES } from "../utils/codes.js";
import winston from "winston";
import "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize } = winston.format;

// 💅 Formato del log
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
});

// 🧩 Detectar entorno
const isProduction = process.env.NODE_ENV === "production";

// 🪵 Transportes
const transports = [];

if (isProduction) {
  // 🌍 En Render: solo consola
  transports.push(
    new winston.transports.Console({
      level: "info",
      format: combine(colorize(), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
    })
  );
} else {
  // 💻 En desarrollo: consola + archivos
  transports.push(
    new winston.transports.Console({
      level: "debug",
      format: combine(colorize(), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
    }),
    new winston.transports.DailyRotateFile({
      dirname: "logs",
      filename: "app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: "7d",
    })
  );
}

const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports,
});

export default logger;
