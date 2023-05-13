import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../Components/Button';
import '../Styles/Register.css';

export function Register() {

    // Creamos la estructura del usuario 
    const [bodyUsuario, setBodyUsuario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: ''
    })

    /**
     * Verifica si el usuario existe en la base de datos con el correo ingresado
     * @param {*} target el correo ingresado por el usuario
     * @returns booleano que indica si el usuario existe o no
     */
    function validarUsuarioNoExistente(target) {
        let response = null;
        axios.get(`http://localhost:3000/usuarios/${target}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            response = res.data;
        })
        return response === 0 ? true : false;
    };

    /**
     * Funcion encargada de actualizar el estado del usuario
     * @param {*} event 
     */
    const handleInpunt = (event) => {
        setBodyUsuario({...bodyUsuario, [event.target.name]: event.target.value}); 
    }

    /**
     * Funcion encargada de enviar los datos del usuario al servidor
     * @param {*} event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        if(validarUsuarioNoExistente(bodyUsuario.correo)) {
            axios.post('http://localhost:3000/usuarios', bodyUsuario)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        } else {
            alert('El usuario ya existe');
        }
    }

    return (
        <section className='reg-section'>
            <section className='reg_img'>
                <img src='src/Images/login_image.jpg' alt='Imagen de fondo del la pagina de registro' />
            </section>

            <section className='reg-form'>
                <h2 className='reg-tittle'>
                    Registrarse
                </h2>

                <div className='reg-inputs'>
                    <form className='reg-form' onSubmit={handleSubmit}>
                        <label>
                            <input type="text" 
                            name='nombre' 
                            onChange={handleInpunt} 
                            required='required' />
                            <span>Nombres</span>
                        </label>
                        <label>
                            <input type="text" 
                            name='apellido'
                            onChange={handleInpunt}
                            required='required' />
                            <span>Apellidos</span>
                        </label>
                        <label>
                            <input type="text" 
                            name='correo' 
                            onChange={handleInpunt}
                            required='requ-ired' />
                            <span>Correo electronico</span>
                        </label>
                        <label>
                            <input type="password" 
                            name='contrasena' 
                            onChange={handleInpunt} 
                            required='required' />
                            <span>Contraseña</span>
                        </label>
                        <Button text='Registrarse' />
                    </form>
                </div>
            </section>
        </section>
    );
}

