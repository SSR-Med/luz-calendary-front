// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {Button} from '@mui/material';
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
// Components
import EmailTextField from "../../components/EmailTextField";
// Styles
import { styleButton} from "../../styles/TextStyle";
// Environment
import { EMAIL_REGEX, API_URL } from "../../configuration/EnviromentVariables";
// Helpers
import { successAlert, errorAlert } from "../../helpers/alerts/AlertResponse";

export default function ForgotPassword(){
    const [email,setEmail] = useState("");
    const isEmailValid = EMAIL_REGEX.test(email);

    const handleForgotPasswordClick = async() => {
        try{
            await axios.post(`${API_URL}/user/password_recovery`,{
                email: email
            })
            successAlert("Correo enviado","Correo enviado correctamente")
        }catch(error){
            errorAlert("Error","Error al enviar correo")
        }
    }
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>¿Olvidaste tu contraseña?</h1>
                        <p id="href-account">¿Recuerdas tu contraseña? <Link to="/">Inicia sesión</Link></p>
                        {EmailTextField(email,setEmail,isEmailValid)}
                        <Button variant="contained" sx={styleButton} disabled={!isEmailValid} onClick={handleForgotPasswordClick}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}