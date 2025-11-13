import { ERROR_CODES } from '../utils/codes.js';
import { Request, Response } from 'express';
import { messagesService } from '../services/messagesService.js';
import logger from '../utils/logger.js';

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const msgs = await messagesService.getAll();
    res.status(200).json({ message: 'Mensajes obtenidos correctamente', data: msgs });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[653]);
  }
};

export const getMessagesByChatId = async (req: Request, res: Response) => {
  try {
    const chatId = Number(req.params.chatId);
    const msgs = await messagesService.getByChatId(chatId);
    if (!msgs || msgs.length === 0) {
      throw new Error(ERROR_CODES.CHATS[640]);
    }
    res.status(200).json({ message: 'Mensajes obtenidos correctamente', data: msgs });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[653]);
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  try {
    const msg = await messagesService.getById(Number(req.params.id));
    if (!msg) throw new Error(ERROR_CODES.CHATS[641]);
    res.status(200).json({ message: 'Mensaje obtenido correctamente', data: msg });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[653]);
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { chatId, remitente, contenido } = req.body;
    if (!chatId || !remitente || !contenido) {
      throw new Error(ERROR_CODES.SYSTEM[732]);
    }
    const newMsg = await messagesService.create({ chatId, remitente, contenido });
    res.status(201).json({ message: 'Mensaje creado correctamente', data: newMsg });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[653]);
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { contenido } = req.body;
    if (!contenido) throw new Error(ERROR_CODES.SYSTEM[732]);

    const updatedMsg = await messagesService.update(Number(id), { contenido });
    if (!updatedMsg) return res.status(404).json({ error: 'Mensaje no encontrado' });
    res.status(200).json({ message: 'Mensaje actualizado correctamente', data: updatedMsg });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[655]);
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await messagesService.delete(Number(id));
    res.status(200).json({ message: 'Mensaje eliminado correctamente' });
  } catch (error: any) {
    logger.warn(error);
    throw new Error(ERROR_CODES.CHATS[656]);
  }
};
