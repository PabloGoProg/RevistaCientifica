import React from "react";
import { useState } from "react";
import { useAuth } from '../../utils/auth.jsx';
import { TablaAutor } from '../Components/TablaAutor.jsx';
import { Button } from '../Components/Button.jsx';
import { VenatanaEmergente } from "../Components/VentanaEmergente.jsx";
import '../Styles/Perfil.css';
import axios from "axios";

export function Perfil() {

    const [nuevoArticulo, setNuevoArticulo] = useState({
        titulo: '',
        resumen: ''
    });

    const [archivo, setArchivo] = useState(null);
    const [ventanaDesplegada, setVentanaDesplegada] = useState(false);
    const auth = useAuth();


    const handleInput = (event) => {
        setNuevoArticulo({...nuevoArticulo, [event.target.name]: event.target.value});
    }

    const handleInputFile = (event) => {
        setArchivo(event.target.files[0])
    }

    const handleClickFunc = () => {
        console.log(ventanaDesplegada)
        setVentanaDesplegada(ventanaDesplegada ? false : true )
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', archivo);
        formData.append('titulo', nuevoArticulo.titulo);

        let target = {
            editor_fk: null,
            titulo: nuevoArticulo.titulo,
            resumen: nuevoArticulo.resumen,
            ruta: formData
        }

        console.log(formData);
        console.log(target);

    }

    return (
        <section className="perfil-contenido">
            <VenatanaEmergente className='venatanModal'
            estado={ventanaDesplegada}
            cambiarEstado={setVentanaDesplegada}
            elementos={
                <section className="seccion-envio">
                    <form onSubmit={handleSumbit}>
                        <label className="seccion-envio-inputBox">
                            <input type="text" 
                            name="titulo" 
                            required='required'
                            onChange={handleInput} />
                        </label>
                        <label className="seccion-envio-inputBox">
                            <input type="file" 
                            name="articulo" 
                            required='required'
                            onChange={handleInputFile} />
                        </label>
                        <textarea
                        name="resumen"
                        required='required'
                        onChange={handleInput} />
                        <Button handleClick={handleClickFunc} text='Enviar Artículo' />
                    </form>
                </section>
            }>
            </VenatanaEmergente>

            <section className="perfil-datos-usuario">
                <h1>
                    Pefil de {auth.user.nombre} {auth.user.apellido}
                </h1>
            </section>

            <section className="perfil-contenido-principal">
                <div className="perfil-articulos">
                    <h2>
                        Tus Articulos 🖇
                    </h2>
                    <TablaAutor />
                    <Button 
                    text="Nuevo Articulo" 
                    handleClick={handleClickFunc}/>
                </div>
            </section>

        </section>
    );
} 