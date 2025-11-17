import { PrismaClient } from "@prisma/client";
import { ERROR_CODES } from "../utils/codes.js";

const prisma = new PrismaClient();

const isProd = process.env.NODE_ENV === "production";

// ⚠️ Tipo ANY para evitar union types de Prisma
const CategoriesModel: any = isProd
  ? prisma.product_categoriesProd
  : prisma.product_categoriesDev;

export const productCategoriesService = {
  async getAll() {
    return CategoriesModel.findMany({ orderBy: { id: "asc" } });
  },

  async getById(id: number) {
    return CategoriesModel.findUnique({ where: { id } });
  },

  async create(data: { nombre?: string; img_url: string }) {
    return CategoriesModel.create({ data });
  },

  async update(id: number, data: any) {
    try {
      return await CategoriesModel.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  },

  async delete(id: number) {
    return CategoriesModel.delete({ where: { id } });
  },
};
