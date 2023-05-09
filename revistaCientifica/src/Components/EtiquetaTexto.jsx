import React from "react";
import '../Styles/EtiquetaTexto.css';

export function EtiquetaTexto({texto}) {
    return (
      <>
        <section className="et">
          <span className="text">{texto}</span>
        </section>
      </>
    );
}

