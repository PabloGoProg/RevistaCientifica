import React from "react";
import { EtiquetaTexto } from "./EtiquetaTexto";

export function TablaEdutor() {
  return (
    <>
      <section className="ta-section" >
        <table className="ta">
          <thead className="ta-head">
            <tr> 
              <th scope="col" >Titulo</th>
              <th scope="col" >Tematicas</th>
              <th scope="col" >Estado</th>
            </tr>
          </thead>
          <tbody>
            <EtiquetaTexto texto="Prueba de visualización" />
          </tbody>
        </table>
      </section>
    </>
  );
}