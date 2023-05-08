import React from "react";
import '../../styles/Login.css'
import { ReactiveIcon } from "../Components/ReactiveIcon";
import { EtiquetaTexto } from "../Components/EtiquetaTexto";
import { TablaEdutor } from "../Components/TablaEditor";
import { PDFViewer } from "@react-pdf/renderer";
import { File } from "../Components/File";

export function Login() {
    return (
        <section className="Login">
            <EtiquetaTexto texto="Prueba de visualización" />

            <ReactiveIcon
              link="/register" 
              srcImg="../../sources/logoUAM.png" 
            />

            <TablaEdutor />
            <File />
        </section> 
    );
}