// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";
import EmailTextField from "../../components/EmailTextField";
// Environment
import { API_URL, EMAIL_REGEX } from "../../configuration/EnviromentVariables";
// Helpers
import { successAlert, errorAlert } from "../../helpers/alerts/AlertResponse";

export default function Register(){

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const isEmailValid = EMAIL_REGEX.test(email);

    const handleRegisterClick = async () => {
        try{
            await axios.post(`${API_URL}/user`,{
                email: email,
                name: name,
                password: password
            })
            successAlert("Usuario creado","Usuario creado correctamente")
        } catch(error){
            console.log(error)
            errorAlert("Error","Error al crear usuario")
        }
    }

    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        {EmailTextField(email,setEmail,isEmailValid)}
                        <TextField value={name} onChange={(e) => setName(e.target.value)}  label="Nombre" variant="filled" sx= {loginStyleTextField}></TextField>
                        {InputTextPassword("Contraseña",password,setPassword)}
                        <Button variant="contained" sx={loginStyleButton} onClick={handleRegisterClick} disabled={!isEmailValid}>Registrar</Button>
                        <p id="href-account">¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}