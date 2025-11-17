import { PrismaClient } from '@prisma/client';

// Instancia única del cliente de Prisma
const prisma = new PrismaClient();

export default prisma;