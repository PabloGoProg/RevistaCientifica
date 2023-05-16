import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contenedor = styled.div`
    width: 60%;
    height: 60%;
    top: -5%;
    background-color: white;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    padding: 10px;
`;

const Encabezado = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-bwtewwn;
    margin-bottom: 1em;
    border-bottom: 1px solid #0D63A5;

    h3 {
        font-weight: bold;
        font-size: 1.8rem;
        color: #001F3F;
    }
`

const BotonCierre = styled.button`
    position: absolute;
    top: 2.5rem;
    right: 1.5rem;
    top: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.3s ease all;

    &:hover {
        background-color: #e2e2e2;
        transform: scale(1.1);
        color: #0D63A5;
    }
`

export function VenatanaEmergente({ estado, cambiarEstado, elementos }) {

    const handleClick = () => {
        estado ? cambiarEstado(false) : cambiarEstado(true);
    }

    return (
        <>
            {estado &&
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>Titulo de la ventana</h3>
                        </Encabezado>

                        <BotonCierre onClick={handleClick}>
                            <CloseIcon sx={{ fontSize: 35 }} />
                        </BotonCierre>

                        {elementos}

                    </Contenedor>
                </Overlay>
            }   
        </>
    );  
}
