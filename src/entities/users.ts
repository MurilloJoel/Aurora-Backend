export interface users {
    id: Int16Array;
    nombre: string;
    email: string;
    passwordHash: string;
    rolId: Int16Array;
    tokenJwt?: string;
    tokenRefresh?: string;
    ultimoLogin?: Date;
    creadoEn: Date;
    actualizadoEn: Date;
    activo: boolean;
}
