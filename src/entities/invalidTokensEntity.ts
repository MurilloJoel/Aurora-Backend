export interface invalidTokens {
    id: Int16Array;
    token: string;
    tipo: 'access' | 'refresh';
    invalidadoEn: Date;
}
