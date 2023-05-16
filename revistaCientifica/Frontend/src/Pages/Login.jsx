import React from "react";
import { useState } from "react";
import {Button} from '../Components/Button'
import axios from "axios";
import { useAuth } from "../../utils/auth";
import { Navigate } from "react-router-dom";
import '../Styles/Login.css'

export function Login() {
    const auth = useAuth();

    if(auth.user) {
        return <Navigate to="/perfil" />;
    }

    const [bodySesion, setBodySesion] = useState({
        correo: '',
        contrasena: ''
    });

    const handleInput = (event) => {
        setBodySesion({...bodySesion, [event.target.name]: event.target.value});
    };

    const getInfoUsuario = () => {
        axios.get(`http://localhost:3000/usuarios/${bodySesion.correo}`, bodySesion.correo)
        .then(res => {
            auth.login(res.data[0])
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3000/usuarios/${bodySesion.correo}/${bodySesion.contrasena}`, bodySesion)
        .then(res => {
            getInfoUsuario();
        });
    }

    return(
        <section className="login_content">
            
            <section className = 'login_image'>
               <img src="src\Images\login_image.jpg" alt="" />
            </section>

            <section className="login_form">
                <h2 className="login_form_tittle">
                    Iniciar sesión
                </h2>
                <form onSubmit={handleSubmit}>
                    <label className="lf-inputBox">
                        <input type="text" 
                        name="correo"
                        onChange={handleInput}
                        required='required' />
                        <span>Direccion de correo electronico</span>
                    </label>
                    <label className="lf-inputBox">
                        <input type="text" 
                        name="contrasena"
                        onChange={handleInput}
                        required='required' />
                        <span>Contraseña</span>
                    </label>
                    <Button 
                    className='login_form_button' 
                    text={'Ingresar'}/>
                </form>
            </section>

        </section>
    );

}