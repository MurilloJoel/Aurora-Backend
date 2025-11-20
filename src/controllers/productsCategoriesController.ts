import { Request, Response } from "express";
import { productsCategoriesService } from "../services/productsCategoriesService.js";
import logger from "../utils/logger.js";
import { ERROR_CODES } from "../utils/codes.js";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const data = await productsCategoriesService.getAll();
    res.status(200).json({ message: "Categorías obtenidas correctamente", data });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[610]);
  }
};

export const getCategoryPaginated = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    if (page < 1 || pageSize < 1) {
      return res.status(400).json({ message: "Parámetros de paginación inválidos" });
    }

    const result = await productsCategoriesService.getAllPaged(page, pageSize);

    res.status(200).json({
      message: "Categorías obtenidas correctamente",
      data: result.data,
      total: result.total
    });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[610]);
  }
};
