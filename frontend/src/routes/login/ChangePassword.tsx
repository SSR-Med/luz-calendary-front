// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {Button} from '@mui/material';
// Components
import { InputTextPassword } from "../../components/InputTextPassword";
// Styles
import { loginStyleButton } from "../../styles/login/LoginStyle";

export default function ChangePassword(){
    return (
        <>
            <div className = "login">
                <div className="login-div">
                    <div className ="login-elements">
                        <h1>Nueva contraseña</h1>
                        {InputTextPassword("Crea nueva contraseña")}
                        {InputTextPassword("Confirma contraseña")}
                        <Button variant="contained" sx={loginStyleButton}>Cambiar contraseña</Button>
                    </div>
                </div>
            </div>
        </>
    )
}