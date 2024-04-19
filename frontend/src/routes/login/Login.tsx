// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState } from "react";
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";

export default function Login(){
    const [password,setPassword] = useState("");
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <TextField label="Nombre" variant="filled" sx= {loginStyleTextField}></TextField>
                        {InputTextPassword("Contraseña",password,setPassword)}
                        <Button variant="contained" sx={loginStyleButton}>Iniciar sesión</Button>
                        <p id="href-account">¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
                        <p id="href-account">¿Olvidaste tu contraseña?<Link to="/forgot-password">Reinicia contraseña</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}