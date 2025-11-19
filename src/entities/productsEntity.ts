export interface products {
    id: Int16Array;
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    imgUrl?: string;
    product_category?: string;
}
