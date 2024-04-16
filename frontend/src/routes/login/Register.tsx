// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";

export default function Register(){
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <TextField label="Email" variant="filled" sx= {loginStyleTextField}></TextField>
                        <TextField label="Nombre" variant="filled" sx= {loginStyleTextField}></TextField>
                        {InputTextPassword()}
                        <Button variant="contained" sx={loginStyleButton}>Registrar</Button>
                        <p id="href-account">¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}