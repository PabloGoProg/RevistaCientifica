import type { PropiedadesCarrito } from "./types";
import { Empleado } from "./Empleado";
import { Producto } from "./Producto";
import { Cliente } from "./Cliente";

export class CarritoCompras {
    precioNeto: number
    descuento: number
    precioTotal: number
    listaProductos: Producto[]
    datosCompradopr: Cliente
    empleadoRealizador: Empleado

    constructor(props: PropiedadesCarrito) {
        this.precioNeto = props.precioNeto
        this.descuento = props.descuento
        this.precioTotal = props.precioTotal
        this.listaProductos = props.listaProductos
        this.datosCompradopr = props.infCliente
        this.empleadoRealizador = props.realizador
    }
}