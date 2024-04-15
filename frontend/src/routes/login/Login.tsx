// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";

export function Login(){
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <TextField label="Nombre" variant="filled" sx= {loginStyleTextField}></TextField>
                        {InputTextPassword()}
                        <Button variant="contained" sx={loginStyleButton}>Iniciar sesión</Button>
                        <p id="href-account">¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
                        <p id="href-account">¿Olvidaste tu contraseña?<Link to="/forgot-password">Reinicia contraseña</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}