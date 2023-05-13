import React from "react";
import { EtiquetaTexto } from "./EtiquetaTexto";
import '../Styles/TablaEditor.css';

export function TablaEditor(props) {
  return (
    <>
      <section className="ta-section" >
        <table className="ta">
          <thead className="ta-head">
            <tr> 
              <th scope="col" >Titulo</th>
              <th scope="col" >Tematicas</th>
              <th scope="col" >Estado</th>
              <th scope="col" ></th>
            </tr>
          </thead>
          <tbody className="ta-body">
            {props.data}
          </tbody>
        </table>
      </section>
    </>
  );
}