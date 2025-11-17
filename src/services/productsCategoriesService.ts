import { PrismaClient } from "../generated/prisma";
import { ERROR_CODES } from "../utils/codes.js";

const prisma = new PrismaClient();

export const productCategoriesService = {
  async getAll() {
    return prisma.product_categories.findMany({ orderBy: { id: "asc" } });
  },

  async getById(id: number) {
    return prisma.product_categories.findUnique({ where: { id } });
  },

  async create(data: { nombre?: string; img_url: string }) {
    return prisma.product_categories.create({ data });
  },

  async update(id: number, data: any) {
    try {
      return await prisma.product_categories.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  },

  async delete(id: number) {
    return prisma.product_categories.delete({ where: { id } });
  },
};
