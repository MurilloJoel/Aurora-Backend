import { Request, Response } from 'express';
import { userService } from '../services/usersService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
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
