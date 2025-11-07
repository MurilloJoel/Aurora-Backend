import { Request, Response } from 'express';
import { chatService } from '../services/chatsService.js';
import logger from '../util/logger.js';

export const getChats = async (req: Request, res: Response) => {
  try {
    const chats = await chatService.getAll();
    res.status(200).json(chats);
  } catch (error) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al obtener los chats' });
  }
};

export const getChatById = async (req: Request, res: Response) => {
  try {
    const chat = await chatService.getById(Number(req.params.id));
    if (!chat) return res.status(404).json({ error: 'Chat no encontrado' });
    res.status(200).json(chat);
  } catch (error) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al obtener el chat' });
  }
};

export const createChat = async (req: Request, res: Response) => {
  try {
    const { usuarioId, titulo } = req.body;
    const newChat = await chatService.create({ usuarioId, titulo });
    res.status(201).json({ message: 'Chat creado correctamente', data: newChat });
  } catch (error) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al crear el chat' });
  }
};

export const updateChat = async (req: Request, res: Response) => {
  try {
    const updated = await chatService.update(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Chat no encontrado' });
    res.status(200).json({ message: 'Chat actualizado', data: updated });
  } catch (error) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al actualizar el chat' });
  }
};

export const deleteChat = async (req: Request, res: Response) => {
  try {
    await chatService.delete(Number(req.params.id));
    res.status(200).json({ message: 'Chat eliminado correctamente' });
  } catch (error) {
    logger.warn(error);
    res.status(500).json({ error: 'Error al eliminar el chat' });
  }
};
