// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
// Environment
import { API_URL } from "../../configuration/EnviromentVariables";
// Styles
import { loginStyleButton, loginStyleTextField } from "../../styles/login/LoginStyle";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";
// Helpers
import { errorAlert } from "../../helpers/alerts/AlertResponse";

export default function Login(){
    const [name, setName] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleLoginClick = async () => {
        try{
            const token = await axios.post(`${API_URL}/login`,{
                name: name,
                password: password
            })
            Cookies.set("token",token.data.token)
            navigate("/calendar")
        }catch(error){
            console.log(error)
            errorAlert("Error","Error al iniciar sesión")
        }
    }

    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <TextField label="Nombre" variant="filled" sx= {loginStyleTextField} onChange={(e) => setName(e.target.value)}></TextField>
                        {InputTextPassword("Contraseña",password,setPassword)}
                        <Button variant="contained" sx={loginStyleButton} onClick={handleLoginClick}>Iniciar sesión</Button>
                        <p id="href-account">¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
                        <p id="href-account">¿Olvidaste tu contraseña?<Link to="/forgot-password">Reinicia contraseña</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}