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

