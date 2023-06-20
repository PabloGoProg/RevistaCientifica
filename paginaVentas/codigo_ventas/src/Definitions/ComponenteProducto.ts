import { Referenciacion } from "./Referenciacion";

export class ComponenteProducto extends Referenciacion {
    nombre: string
    precioUnidad: number

    constructor(props: {
        nombre: string
        precioUnidad: number
    }) {
        super()
        this.nombre = props.nombre
        this.precioUnidad = props.precioUnidad
    }

}