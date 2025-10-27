import { Request, Response } from 'express';
import { dbConfig } from '../config';
import { userService } from '../services/usersService.js';

export const getUsers = async (req: Request, res: Response) => {
  if (dbConfig.isProduction && dbConfig.pgPool) {
    // Supabase (PostgreSQL)
    const { rows } = await dbConfig.pgPool.query("SELECT * FROM users");
    return rows;
  } else if (dbConfig.mysqlPool) {
    // Local (MySQL)
    const [rows] = await dbConfig.mysqlPool.query("SELECT * FROM users");
    return rows;
  } else {
    throw new Error("No hay conexión a la base de datos disponible");
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getById(Number(req.params.id));
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password, rolId } = req.body;
    const newUser = await userService.create({ nombre, email, password, rolId });
    res.status(201).json({ message: 'Usuario creado correctamente', data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};
