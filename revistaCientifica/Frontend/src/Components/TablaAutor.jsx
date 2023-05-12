import React from "react";
import { EtiquetaTexto } from "./EtiquetaTexto";
import '../Styles/TablaAutor.css';

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
          <tbody className="ta-body">
            <tr>
              <td>Titulo articulo #1</td>
              <td>
                <EtiquetaTexto texto="Tecnología"/>
                <EtiquetaTexto texto="Tecnología"/>
              </td>
              <td>Publicado</td>
            </tr>

            <tr>
              <td>Titulo articulo #1</td>
              <td>
                <EtiquetaTexto texto="Tecnología"/>
                <EtiquetaTexto texto="Tecnología"/>
              </td>
              <td>Publicado</td>
            </tr>

            <tr>
              <td>Titulo articulo #1</td>
              <td>
                <EtiquetaTexto texto="Tecnología"/>
                <EtiquetaTexto texto="Tecnología"/>
              </td>
              <td>Publicado</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}