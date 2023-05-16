import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../Components/Button';
import { useAuth } from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import '../Styles/Register.css';

export function Register() {

    const auth = useAuth();

    if(auth.user) {
        return <Navigate to="/perfil" />;
    }

    // Creamos la estructura del usuario 
    const [bodyUsuario, setBodyUsuario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: ''
    })
    const[usuarioNoExistente, setUsuarioNoExistente] = useState(false);

    /**
     * Verifica si el usuario existe en la base de datos con el correo ingresado
     * @param {*} target el correo ingresado por el usuario
     * @returns booleano que indica si el usuario existe o no
     */
    function validarUsuarioNoExistente(target) {
        axios.get(`http://localhost:3000/usuarios/${target}`)
        .then(res => {
            res.data.length == 0 ? setUsuarioNoExistente(true) : setUsuarioNoExistente(false);
        })
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
        validarUsuarioNoExistente(bodyUsuario.correo);
        if(usuarioNoExistente) {
            axios.post('http://localhost:3000/usuarios', bodyUsuario)
            setUsuarioNoExistente(false);
            auth.login(bodyUsuario);
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
