import { Request, Response } from 'express';
import { messagesService } from '../services/messagesService.js';

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const msgs = await messagesService.getAll();
    res.status(200).json({ message: 'Mensajes obtenidos correctamente', data: msgs });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  try {
    const msg = await messagesService.getById(Number(req.params.id));
    if (!msg) return res.status(404).json({ error: 'Mensaje no encontrado' });
    res.status(200).json({ message: 'Mensaje obtenido correctamente', data: msg });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el mensaje' });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { chatId, remitente, contenido } = req.body;
    if (!chatId || !remitente || !contenido) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const newMsg = await messagesService.create({ chatId, remitente, contenido });
    res.status(201).json({ message: 'Mensaje creado correctamente', data: newMsg });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el mensaje' });
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { contenido } = req.body;
    if (!contenido) return res.status(400).json({ error: 'El contenido es obligatorio' });

    const updatedMsg = await messagesService.update(Number(id), { contenido });
    if (!updatedMsg) return res.status(404).json({ error: 'Mensaje no encontrado' });
    res.status(200).json({ message: 'Mensaje actualizado correctamente', data: updatedMsg });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el mensaje' });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await messagesService.delete(Number(id));
    res.status(200).json({ message: 'Mensaje eliminado correctamente' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el mensaje' });
  }
};
