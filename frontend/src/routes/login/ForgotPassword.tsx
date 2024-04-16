// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";

export default function ForgotPassword(){
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>¿Olvidaste tu contraseña?</h1>
                        <p id="href-account">¿Recuerdas tu contraseña? <Link to="/">Inicia sesión</Link></p>
                        <TextField label="Email" variant="filled" sx= {loginStyleTextField}></TextField>
                        <Button variant="contained" sx={loginStyleButton}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}