// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {Button} from '@mui/material';
import { useState } from "react";
// Components
import { InputTextPassword } from "../../components/InputTextPassword";
// Styles
import { loginStyleButton } from "../../styles/login/LoginStyle";

export default function ChangePassword(){
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>Nueva contraseña</h1>
                        {InputTextPassword("Crea nueva contraseña",password,setPassword)}
                        {InputTextPassword("Confirma contraseña",confirmPassword,setConfirmPassword)}
                        <Button variant="contained" sx={loginStyleButton}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}