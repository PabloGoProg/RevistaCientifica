import type{ PropiedadesProducto } from "./types";
import { Referenciacion } from "./Referenciacion";
import { ComponenteProducto } from "./ComponenteProducto";

/**
 * Representa de el modelo de un producto base de la aplicación
 */
export abstract class Producto extends Referenciacion {
    precio: number
    medidas: {ancho: number, alto: number}
    componentes: [ComponenteProducto, number][]

    constructor(props: PropiedadesProducto) {
        super()
        this.precio = props.precio
        this.medidas = props.medidas
        this.componentes = []
    }
}