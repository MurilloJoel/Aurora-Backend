import { ERROR_CODES } from "../utils/codes.js";
import { dbConfig } from '../config/index.js';
import type { Chat } from '../entities/chatsEntity.js';

export const chatService = {
  async getAll(): Promise<Chat[]> {
    const supabase = dbConfig.supabase;
    if (!supabase) throw new Error('Supabase client not configured');
    const { data, error } = await supabase.from('chats').select('*').order('id', { ascending: true });
    if (error) throw new Error('Error fetching chats');
    return data as Chat[];
  },
  async getById(id: number): Promise<Chat | null> {
    const supabase = dbConfig.supabase;
    if (!supabase) throw new Error('Supabase client not configured');
    const { data, error } = await supabase.from('chats').select('*').eq('id', id).single();
    if (error) throw new Error('Error fetching chat by ID');
    return data as Chat | null;
  },

  async create(chat: { usuarioId: number; titulo: string }): Promise<Chat> {
    const supabase = dbConfig.supabase;
    if (!supabase) throw new Error('Supabase client not configured');
    const { data, error } = await supabase
      .from('chats')
      .insert([{ usuario_id: chat.usuarioId, titulo: chat.titulo }])
      .select()
      .single();
    if (error) throw new Error('Error creating chat');
    return data as Chat;
  },

  async update(id: number, updates: Partial<{ titulo: string }>): Promise<Chat | null> {
    const supabase = dbConfig.supabase;
    if (!supabase) throw new Error('Supabase client not configured');
    await supabase.from('chats').update(updates).eq('id', id);
    const { data, error } = await supabase.from('chats').select('*').eq('id', id).single();
    if (error) throw new Error('Error fetching chat by ID');
    return data as Chat | null;
  },

  async delete(id: number): Promise<void> {
    const supabase = dbConfig.supabase;
    if (!supabase) throw new Error('Supabase client not configured');
    await supabase.from('chats').delete().eq('id', id);
  },
};
