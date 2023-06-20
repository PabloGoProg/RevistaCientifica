export abstract class Referenciacion {
    referencias = new Map<string, number>()

    agregarReferencia(referencia: {nombre: string, precio: number}): void | string {
        if(this.referencias.has(referencia.nombre)) {
            return "La referencia que intenta agregar ya existe";
        }
        this.referencias.set(referencia.nombre, referencia.precio);
    }

    eliminarReferencia(referencia: {nombre: string, precio: number}): void | string {
        if(this.referencias.has(referencia.nombre)) {
            this.referencias.delete(referencia.nombre);
        } else {
            return "La referencia que intenta eliminar no existe";
        }
    }

    editarReferencia(referencia: {nombre: string, precio: number}, nuevaReferencia: {nombre: string, precio: number}): void | string {
        if(this.referencias.has(nuevaReferencia.nombre)) {
            this.referencias.delete(referencia.nombre);
            this.referencias.set(nuevaReferencia.nombre, nuevaReferencia.precio);
        } else {
            return "La referencia que intenta editar no existe";
        }
    }
}