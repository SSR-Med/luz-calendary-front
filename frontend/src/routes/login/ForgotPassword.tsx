// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {Button} from '@mui/material';
import { useState } from "react";
import {Link} from 'react-router-dom';
// Components
import EmailTextField from "../../components/EmailTextField";
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Environment
import { EMAIL_REGEX } from "../../configuration/EnviromentVariables";

export default function ForgotPassword(){
    const [email,setEmail] = useState("");
    const isEmailValid = EMAIL_REGEX.test(email);
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>¿Olvidaste tu contraseña?</h1>
                        <p id="href-account">¿Recuerdas tu contraseña? <Link to="/">Inicia sesión</Link></p>
                        {EmailTextField(email,setEmail,isEmailValid)}
                        <Button variant="contained" sx={loginStyleButton} disabled={!isEmailValid}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}