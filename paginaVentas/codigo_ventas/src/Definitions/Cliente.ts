import { Persona } from "./Persona";
import type{ informacionPersonal } from "./types";

export class Cliente extends Persona {

    constructor(props: informacionPersonal) {
        super(props);
    }

    actualizarInformacionPersonal(props: informacionPersonal): void {
        this.informacionPersonal = props;
    }
}