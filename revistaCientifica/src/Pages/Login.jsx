import React from "react";
import { ReactiveIcon } from "../Components/ReactiveIcon";
import { EtiquetaTexto } from "../Components/EtiquetaTexto";
import { TablaEdutor } from "../Components/TablaAutor";
import { File } from "../Components/File";
import '../Styles/Login.css'

export function Login() {
    return (
        <section className="Login">
            <EtiquetaTexto texto="Prueba de visualización" />

            <ReactiveIcon
              link="/register" 
              srcImg="../Images/logoUAM.png" 
            />

            <TablaEdutor />
            <File />
        </section> 
    );
}