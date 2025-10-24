export interface messages {
    id: Int16Array;
    chatId: Int16Array;
    remitente: 'usuario' | 'ia';
    contenido: string;
    creadoEn: Date;
}