import { Request, Response } from 'express';
import { productsService } from '../services/productsService.js';
import logger from '../util/logger.js';

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productsService.getAll();
    res.status(200).json({ message: 'Productos obtenidos correctamente', data: products });
  } catch (error: any) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productsService.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto obtenido correctamente', data: product });
  } catch (error: any) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio, stock, activo = true } = req.body;
    if (!nombre || precio == null || stock == null) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const newProduct = await productsService.create({ nombre, descripcion, precio, stock, activo });
    res.status(201).json({ message: 'Producto creado correctamente', data: newProduct });
  } catch (error: any) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al crear el producto' });
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
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productsService.delete(Number(id));
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error: any) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
