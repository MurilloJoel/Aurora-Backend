import { PrismaClient } from "../generated/prisma";
import { ERROR_CODES } from "../utils/codes.js";

const prisma = new PrismaClient();

export const productsService = {
  async getAll() {
    try {
      return await prisma.products.findMany({
        orderBy: { id: "asc" },
      });
    } catch (err) {
      throw new Error(ERROR_CODES.SYSTEM[730]);
    }
  },

  async getById(id: number) {
    try {
      return await prisma.products.findUnique({
        where: { id },
      });
    } catch (err) {
      throw new Error(ERROR_CODES.SYSTEM[730]);
    }
  },

  async create(data: {
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    activo: boolean;
    img_url?: string;
    product_category?: number | null;
    creado_en?: Date | string;
    actualizado_en?: Date | string;
  }) {
    try {
      return await prisma.products.create({
        data: {
          nombre: data.nombre,
          descripcion: data.descripcion || null,
          precio: data.precio,
          stock: data.stock,
          activo: data.activo,
          creado_en: data.creado_en ?? new Date(),
          actualizado_en: data.actualizado_en ?? new Date(),
          img_url: data.img_url ?? "",
          product_category: data.product_category ?? null,
        },
      });
    } catch (err) {
      throw new Error(ERROR_CODES.SYSTEM[730]);
    }
  },

  async update(id: number, updates: any) {
    try {
      return await prisma.products.update({
        where: { id },
        data: updates,
      });
    } catch (err) {
      return null;
    }
  },

  async delete(id: number) {
    try {
      await prisma.products.delete({ where: { id } });
    } catch (err) {
      throw new Error(ERROR_CODES.SYSTEM[730]);
    }
  },
};
