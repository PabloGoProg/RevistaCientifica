import React, {useEffect} from "react";
import { EtiquetaTexto } from "./EtiquetaTexto";
import '../Styles/TablaAutor.css';

export function TablaAutor() {

  

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
            
          </tbody>
        </table>
      </section>
    </>
  );
}