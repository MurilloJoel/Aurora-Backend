import { Request, Response } from "express";
import { productCategoriesService } from "../services/productsCategoriesService.js";
import logger from "../utils/logger.js";
import { ERROR_CODES } from "../utils/codes.js";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const data = await productCategoriesService.getAll();
    res.status(200).json({ message: "Categorías obtenidas correctamente", data });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[610]);
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const data = await productCategoriesService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: "Categoría no encontrada" });

    res.status(200).json({ message: "Categoría obtenida", data });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[610]);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { nombre, img_url } = req.body;

    if (!img_url) throw new Error(ERROR_CODES.SYSTEM[732]);

    const newCat = await productCategoriesService.create({ nombre, img_url });

    res.status(201).json({ message: "Categoría creada", data: newCat });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[612]);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const updated = await productCategoriesService.update(Number(req.params.id), req.body);
    if (!updated) throw new Error(ERROR_CODES.CATEGORIES[610]);

    res.status(200).json({ message: "Categoría actualizada", data: updated });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[613]);
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await productCategoriesService.delete(Number(req.params.id));
    res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (err) {
    logger.warn(err);
    throw new Error(ERROR_CODES.CATEGORIES[614]);
  }
};
