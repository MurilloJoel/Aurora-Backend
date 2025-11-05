import { dbConfig, prisma } from '../config/index.js';
import type { Chat } from '../entities/chats.ts'; // ← corregido

type Provider = 'pg' | 'prisma' | 'supabase';
const defaultProvider: Provider = (process.env.DB_PROVIDER as Provider) || 'pg';

export const chatService = {
<<<<<<< HEAD
  async getAll(provider: Provider = defaultProvider): Promise<Chat[]> {
    if (provider === 'prisma') {
      return await prisma.chat.findMany({ orderBy: { id: 'asc' } }); // ← nombre del modelo Prisma: chat (singular)
    }

    if (provider === 'supabase') {
      const { supabase } = dbConfig;
      if (!supabase) throw new Error('Supabase no está inicializado.');
      const { data, error } = await supabase
        .from('chats')
        .select('*')
        .order('id', { ascending: true });
      if (error) throw error;
      return data as Chat[];
    }

    // 🐘 Por defecto: pgPool
    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM chats ORDER BY id');
    return rows;
  },

  async getById(id: number, provider: Provider = defaultProvider): Promise<Chat | null> {
    if (provider === 'prisma') {
      return await prisma.chat.findUnique({ where: { id } }); // ← prisma.chat (no prisma.chats)
    }

    if (provider === 'supabase') {
      const { supabase } = dbConfig;
      if (!supabase) throw new Error('Supabase no está inicializado.');
      const { data, error } = await supabase
        .from('chats')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data as Chat;
    }

    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query('SELECT * FROM chats WHERE id = $1', [id]);
    return rows[0] || null;
  },

  async create(chat: { usuarioId: number; titulo: string }, provider: Provider = defaultProvider): Promise<Chat> {
    if (provider === 'prisma') {
      return await prisma.chat.create({
        data: {
          usuarioId: chat.usuarioId, // ← campo del modelo Prisma
          titulo: chat.titulo,
        },
      });
    }

    if (provider === 'supabase') {
      const { supabase } = dbConfig;
      if (!supabase) throw new Error('Supabase no está inicializado.');
      const { data, error } = await supabase
        .from('chats')
        .insert({
          usuario_id: chat.usuarioId,
          titulo: chat.titulo,
          creado_en: new Date().toISOString(),
          actualizado_en: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;
      return data as Chat;
    }

    const pool = dbConfig.pgPool!;
    const { rows } = await pool.query(
=======
  async getAll(): Promise<chats[]> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats ORDER BY id');
    conn.release();
    return rows as chats[];
  },

  async getById(id: number): Promise<chats | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as chats[])[0] || null;
  },

  async create(chat: { usuarioId: number; titulo: string }): Promise<chats> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    const [result]: any = await conn.query(
>>>>>>> cd7c8b11bfce3db517eb39313ddfbc21918b93fa
      `INSERT INTO chats (usuario_id, titulo, creado_en, actualizado_en)
       VALUES (?, ?, NOW(), NOW())`,
      [chat.usuarioId, chat.titulo]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [result.insertId]);
    conn.release();
    return (rows as chats[])[0];
  },

<<<<<<< HEAD
  async update(id: number, updates: Partial<{ titulo: string }>, provider: Provider = defaultProvider): Promise<Chat | null> {
    if (provider === 'prisma') {
      return await prisma.chat.update({
        where: { id },
        data: { ...updates, actualizadoEn: new Date() }, // ← campo mapeado
      });
    }

    if (provider === 'supabase') {
      const { supabase } = dbConfig;
      if (!supabase) throw new Error('Supabase no está inicializado.');
      const { data, error } = await supabase
        .from('chats')
        .update({
          ...updates,
          actualizado_en: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as Chat;
    }

    const pool = dbConfig.pgPool!;
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = $${index++}`);
      values.push(value);
    }

    values.push(id);

    const { rows } = await pool.query(
      `UPDATE chats SET ${fields.join(', ')}, actualizado_en = NOW() WHERE id = $${index} RETURNING *`,
      values
    );
    return rows[0] || null;
  },

  async delete(id: number, provider: Provider = defaultProvider): Promise<void> {
    if (provider === 'prisma') {
      await prisma.chat.delete({ where: { id } }); // ← prisma.chat
      return;
    }

    if (provider === 'supabase') {
      const { supabase } = dbConfig;
      if (!supabase) throw new Error('Supabase no está inicializado.');
      const { error } = await supabase.from('chats').delete().eq('id', id);
      if (error) throw error;
      return;
    }

    const pool = dbConfig.pgPool!;
    await pool.query('DELETE FROM chats WHERE id = $1', [id]);
=======
  async update(id: number, updates: Partial<{ titulo: string }>): Promise<chats | null> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query(
      `UPDATE chats SET titulo = ?, actualizado_en = NOW() WHERE id = ?`,
      [updates.titulo, id]
    );
    const [rows] = await conn.query('SELECT * FROM chats WHERE id = ?', [id]);
    conn.release();
    return (rows as chats[])[0] || null;
  },

  async delete(id: number): Promise<void> {
    const conn = await dbConfig.mysqlPool!.getConnection();
    await conn.query('DELETE FROM chats WHERE id = ?', [id]);
    conn.release();
>>>>>>> cd7c8b11bfce3db517eb39313ddfbc21918b93fa
  },
};
