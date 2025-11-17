import { PrismaClient } from "@prisma/client";

/**
 * Selecciona dinámicamente el modelo Dev o Prod.
 * Para evitar errores de tipos UNION en TypeScript (TS2349),
 * devolvemos "any" porque los modelos Dev/Prod tienen firmas distintas.
 */
export function prismaModel(prisma: PrismaClient, baseName: string): any {
  const isProd = process.env.NODE_ENV === "production";
  const suffix = isProd ? "Prod" : "Dev";
  const modelName = `${baseName}${suffix}`;

  if (!(modelName in prisma)) {
    throw new Error(`Modelo Prisma no encontrado: ${modelName}`);
  }

  return (prisma as any)[modelName];
}
