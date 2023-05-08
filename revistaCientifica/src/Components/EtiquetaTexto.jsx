import React from "react";
import '../../styleComponents/EtiquetaTexto.css'

export function EtiquetaTexto({texto}) {
    return (
      <>
        <section className="et">
          <span className="text">{texto}</span>
        </section>
      </>
    );
}

