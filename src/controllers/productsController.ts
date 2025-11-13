import { ERROR_CODES } from "../utils/codes";
import { Request, Response } from 'express';
import { productsService } from '../services/productsService.js';
import logger from '../utils/logger.js';

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productsService.getAll();
    res.status(200).json({ message: 'Productos obtenidos correctamente', data: products });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.PRODUCTS[610]);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productsService.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto obtenido correctamente', data: product });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.PRODUCTS[610]);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio, stock, activo = true } = req.body;
    if (!nombre || precio == null || stock == null) {
      throw new Error(ERROR_CODES.SYSTEM[732])
    }

    const newProduct = await productsService.create({ nombre, descripcion, precio, stock, activo });
    res.status(201).json({ message: 'Producto creado correctamente', data: newProduct });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.PRODUCTS[603]);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productsService.update(Number(id), req.body);
    if (!updatedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto actualizado correctamente', data: updatedProduct });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.PRODUCTS[604]);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productsService.delete(Number(id));
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.PRODUCTS[605]);
  }
};
