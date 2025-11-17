import { PrismaClient } from "@prisma/client";
import { ERROR_CODES } from "../utils/codes.js";

const prisma = new PrismaClient();

export const productCategoriesService = {
  async getAll() {
    return prisma.product_categoriesDev.findMany({ orderBy: { id: "asc" } });
  },

  async getById(id: number) {
    return prisma.product_categoriesDev.findUnique({ where: { id } });
  },

  async create(data: { nombre?: string; img_url: string }) {
    return prisma.product_categoriesDev.create({ data });
  },

  async update(id: number, data: any) {
    try {
      return await prisma.product_categoriesDev.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  },

  async delete(id: number) {
    return prisma.product_categoriesDev.delete({ where: { id } });
  },
};
