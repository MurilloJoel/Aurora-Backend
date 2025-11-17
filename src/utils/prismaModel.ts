import { PrismaClient } from "@prisma/client";

/**
 * Selecciona dinámicamente un modelo según el entorno (Dev o Prod).
 *
 * @param prisma Instancia de PrismaClient
 * @param baseName Nombre base del modelo (sin "Dev" ni "Prod")
 * @returns Modelo Prisma correspondiente al entorno
 */
export function prismaModel(prisma: PrismaClient, baseName: string) {
  const isProd = process.env.NODE_ENV === "production";
  const suffix = isProd ? "Prod" : "Dev";
  const modelName = `${baseName}${suffix}`;

  if (!(modelName in prisma)) {
    throw new Error(`Modelo Prisma no encontrado: ${modelName}`);
  }

  return (prisma as any)[modelName];
}
