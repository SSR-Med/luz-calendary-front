// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {Button} from '@mui/material';
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
// Components
import { InputTextPassword } from "../../components/InputTextPassword";
// Helpers
import { successAlert, errorAlert } from "../../helpers/alerts/AlertResponse";
// Styles
import { styleButton } from "../../styles/TextStyle";
// Enviroment
import { API_URL } from "../../configuration/EnviromentVariables";

export default function ChangePassword(){
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const {id, token} = useParams();

    const handleChangePasswordClick = async() => {
        if (password !== confirmPassword){
            errorAlert("Error","Las contraseñas no coinciden")
            return
        }
        try{
            await axios.post(`${API_URL}/user/password_recovery/${id}/${token}`,{
                password: password
            })
            successAlert("Contraseña cambiada","Contraseña cambiada correctamente")
        }
        catch(error){
            errorAlert("Error","Error al cambiar contraseña")
        }
    }
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>Nueva contraseña</h1>
                        {InputTextPassword("Crea nueva contraseña",password,setPassword)}
                        {InputTextPassword("Confirma contraseña",confirmPassword,setConfirmPassword)}
                        <Button variant="contained" sx={styleButton} onClick={handleChangePasswordClick}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}