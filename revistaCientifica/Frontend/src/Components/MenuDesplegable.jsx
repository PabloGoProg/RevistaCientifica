import React, { useState } from 'react';

export function MenuDesplegable() {

    // Usage example
    const options = ['Iniciar sesión', 'Cerrar sesión', 'Ver novedades', 'Ver autores'];

    return (
        <section className='md-lista'>
            <ul>
                {options.map((option) => {
                    return <li>{option}</li>;
                })}
            </ul>
        </section>
    );
};

