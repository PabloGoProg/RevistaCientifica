import React, {
    useEffect,
    useState
} from "react";
import { File } from "../Components/File";
import { Button } from "../Components/Button";

export function PaginaTexto({articulo, autor}) {

    return (
        <section className="pa-contenido">

            <section className="pa-zona-articulo">
                <h2></h2>
                <File />
                <Button />
            </section>

            <section className="pa-zona-información">

                <div className="pa-info-autor">

                </div>

                <div className="pa-info-articulo">

                </div>

            </section>

        </section>
    );
}