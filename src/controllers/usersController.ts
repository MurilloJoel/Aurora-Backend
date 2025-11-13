import { ERROR_CODES } from "../utils/codes.js";
import { Request, Response } from 'express';
import { userService } from '../services/usersService';
import logger from '../utils/logger.js';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    logger.warn(error);
    throw new Error(ERROR_CODES.USERS[630]);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getById(Number(req.params.id));
    if (!user) throw new Error(ERROR_CODES.USERS[620]);
    res.status(200).json(user);
  } catch (error) {
    logger.warn(error);
    throw new Error(ERROR_CODES.USERS[630]);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password, rolId } = req.body;
    const newUser = await userService.create({ nombre, email, password, rolId });
    res.status(201).json({ message: 'Usuario creado correctamente', data: newUser });
  } catch (error) {
    logger.warn(error);
    throw new Error(ERROR_CODES.USERS[625]);
  }
};
