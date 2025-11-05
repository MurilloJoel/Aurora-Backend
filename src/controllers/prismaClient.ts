import { PrismaClient } from '../generated/prisma/index.js';

// Instancia única del cliente de Prisma
const prisma = new PrismaClient();

export default prisma;
