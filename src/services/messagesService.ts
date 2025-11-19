import { ERROR_CODES } from "../utils/codes.js";
import { dbConfig } from '../config/db.js';
import type { messages } from '../entities/messagesEntity.js';

export const messagesService = {
  async getAll(): Promise<messages[]> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])
    const { data, error } = await dbConfig.supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw new Error('Error fetching messages');
    return data as messages[];
  },

  async getByChatId(chatId: number): Promise<messages[]> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])
    const { data, error } = await dbConfig.supabase
      .from('messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('id', { ascending: true });

    if (error) throw new Error('Error fetching messages by chat ID');
    return data as messages[];
  },

  async getById(id: number): Promise<messages | null> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])
    const { data, error } = await dbConfig.supabase
      .from('messages')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error('Error fetching message by ID');
    return data as messages | null;
  },

  async create(msg: { chatId: number; remitente: 'usuario' | 'ia'; contenido: string }): Promise<messages> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])
    const ahora = new Date();
    const creadoEn = `${ahora.getFullYear()}-${(ahora.getMonth()+1)
      .toString()
      .padStart(2, '0')}-${ahora.getDate().toString().padStart(2, '0')} ${ahora
      .getHours()
      .toString()
      .padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')}:${ahora
      .getSeconds()
      .toString()
      .padStart(2, '0')}`;

    const { data, error } = await dbConfig.supabase
      .from('messages')
      .insert([{ chat_id: msg.chatId, remitente: msg.remitente, contenido: msg.contenido, creado_en: creadoEn }])
      .select()
      .single();

    if (error) throw new Error('Error creating message');
    return data as messages;
  },

  async update(id: number, updates: Partial<{ contenido: string }>): Promise<messages | null> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])

    // If there are no updates, return the existing message
    if (Object.keys(updates).length === 0) {
      return await this.getById(id);
    }

    const { data, error } = await dbConfig.supabase
      .from('messages')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error('Error updating message');
    return data as messages | null;
  },

  async delete(id: number): Promise<void> {
    if (!dbConfig.supabase) throw new Error(ERROR_CODES.SYSTEM[730])

    const { error } = await dbConfig.supabase
      .from('messages')
      .delete()
      .eq('id', id);

    if (error) throw new Error('Error deleting message');
  },
};
