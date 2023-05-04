import React from "react";
import '../../styles/Login.css'
import { ReactiveIcon } from "../Components/ReactiveIcon";
import { EtiquetaTexto } from "../Components/EtiquetaTexto";

export function Login() {
    return (
        <section className="Login">
            <p>Loggin</p>

            <EtiquetaTexto texto="Prueba de visualización" />

            <ReactiveIcon 
            link="/register" 
            srcImg="../../sources/logoUAM.png" />
        </section> 
    );
}