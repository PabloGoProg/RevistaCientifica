import React, { Fragment } from "react";
import { ReactiveIcon } from "../Components/ReactiveIcon";
import { EtiquetaTexto } from "../Components/EtiquetaTexto";
import { TablaEdutor } from "../Components/TablaAutor";
import { File } from "../Components/File";
import '../Styles/Login.css'
import {Button} from '../Components/Button'

export function Login() {
    return(
        <section className="login_content">
            <fragment className = 'login_image'>
                <img src="src\Images\login_image.jpg" alt="" />
            </fragment>
            <section className="login_form">
                <h2>
                    Iniciar sesión
                </h2>
                <label>
                    <span>Direccion de correo electronico</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Contrasena</span>
                    <input type="text"/>
                </label>
                <Button text={'Ingresar'}/>
            </section>
        </section>
    );

}