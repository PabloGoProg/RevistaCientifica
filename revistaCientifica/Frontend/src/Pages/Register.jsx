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
     * Funcion encargada de actualizar el estado del usuario
     * @param {*} event 
     */
    const handleInpunt = (event) => {
        setBodyUsuario({...bodyUsuario, [event.target.name]: event.target.value}); 
        if(event.target.name === 'correo') {
            axios.get(`http://localhost:3000/usuarios/${event.target.value}`, {})
            .then(res => {
                if(res.data.length === 0) {
                    setUsuarioNoExistente(true);
                } else {
                    setUsuarioNoExistente(false);
                }
            });
        }
    }

    /**
     * Funcion encargada de enviar los datos del usuario al servidor
     * @param {*} event 
     */
    async function handleSubmit(event) {
        event.preventDefault();
        if(usuarioNoExistente) {
            await axios.post('http://localhost:3000/usuarios', bodyUsuario, {});
            await axios.get(`http://localhost:3000/usuarios/${bodyUsuario.correo}`, {})
            .then(res => {
                bodyUsuario.id_usuario = res.data[0].id_usuario;
            });
            auth.login(bodyUsuario);
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
                        <Button text="Registrarse" />
                    </form>
                </div>
            </section>
        </section>
    );
}
