import React from "react";
import '../Styles/Login.css'
import {Button} from '../Components/Button'
import axios from "axios";

export function Login() {

    const [bodySesion, setBodySesion] = React.useState({
        correo: '',
        contrasena: ''
    });

    const handleInput = (event) => {
        setBodySesion({...bodySesion, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3000/usuarios/${bodySesion.correo}/${bodySesion.contrasena}`, bodySesion)
        .then(res => {
            console.log(res);
            console.log(res.data);
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
                    <Button className='login_form_button' text={'Ingresar'}/>
                </form>
            </section>

        </section>
    );

}