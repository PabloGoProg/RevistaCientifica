import React from "react";
import { useState } from "react";
import { useAuth } from '../../utils/auth.jsx';
import { TablaAutor } from '../Components/TablaAutor.jsx';
import { Button } from '../Components/Button.jsx';
import { VenatanaEmergente } from "../Components/VentanaEmergente.jsx";
import axios from "axios";
import '../Styles/Perfil.css';

export function Perfil() {

    /**
     * Variable encargada de almacenar el estado de la autenticación y los valores de la
     * sesión del usuario
     */
    const auth = useAuth();

    /**
     * Se encarga de generar un modelo que tenga los datos del formularios que
     * correponden a texto
     * @type {[{titulo: string, resumen: string}, Function]}
     */
    const [nuevoArticulo, setNuevoArticulo] = useState({
        titulo: '',
        resumen: ''
    });

    /**
     * Variable encargada de almacenar el valor proveniento del input-file del formulario
     */
    const [file, setFile] = useState(null);

    /**
     * Variable encargada de almacenar el estado de la ventana emergente
     */
    const [ventanaDesplegada, setVentanaDesplegada] = useState(false);

    /**
     * Actualiza el modelo de nuevo articulo con los datos ingresados por el usuario
     * @param {*} event 
     */
    const handleInput = (event) => {
        setNuevoArticulo({...nuevoArticulo, [event.target.name]: event.target.value});
    }

    /**
     * Actualiza el modulo de file con el archivo ingresado por el usuario
     * @param {*} event 
     */
    const handleInputFile = (event) => {
        setFile(event.target.files[0])
    }

    /**
     * Gestiona las acciones obre el botón que permite entrar a la ventana emergente del formulario
     */
    const handleClickFunc = () => {
        setVentanaDesplegada(ventanaDesplegada ? false : true )
    }

    const handleSumbit = (e) => {
        e.preventDefault(); // Previene el reinicio de la página tras enviar el formulario

        // Modelo de datos del árticulo en base de datos
        const target = {
            editor_fk: null,
            titulo: nuevoArticulo.titulo,
            resumen: nuevoArticulo.resumen,
            ruta: ''
        }

        // Anexa el articulo a la base de datos a través de un post de la vartiable target
        axios.post('http://localhost:3000/api/articles', target, {
        }).then(res => {
            const modifiedFile = new File([file], `${res.data[0].id_articulo}.pdf`, {type: file.type}); // Cambia el nombre del archivo con el id del articulo, seguido de su extension
            target.ruta = `src/docs/${res.data[0].id_articulo}.pdf`; // Actualiza la ruta del articulo en la variable target
            axios.patch(`http://localhost:3000/api/articles/${res.data[0].id_articulo}`, target, {}) // Actualiza la ruta del articulo en la base de datos
            setFile(modifiedFile); // Actualiza el archivo con el nombre modificado
        })

        // Modelo de datos del archivo
        const formData = new FormData();
        formData.append("file", file);

        // Anexa el archivo a la base de datos a través de un post de la vartiable formData
        axios.post('http://localhost:3000/api/docs', formData, {
        }).then(res => {
            console.log('subiudo')
        });

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
                        <Button text='Enviar Artículo' />
                    </form>
                </section>
            }>
            </VenatanaEmergente>

            <section className="perfil-datos-usuario">
                <img className='perfil-imagen' src="src\Images\usuario.png"/>
                <section className="perfil-texto">
                    <span>Bienvenido denuevo!</span>
                    <h1>
                        {auth.user.nombre} {auth.user.apellido}
                    </h1>
                </section>
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