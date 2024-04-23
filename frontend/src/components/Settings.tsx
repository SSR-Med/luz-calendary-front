// Dependencies
import { Button,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText
 } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// Environment
import { API_URL } from "../configuration/EnviromentVariables";
// Icons
import { Password, Delete } from "@mui/icons-material";
// Components
import { InputTextPassword } from "./InputTextPassword";
// Styles
import { passwordStyleTextField, styleButton } from "../styles/TextStyle";
// Helpers
import { successAlert,errorAlert } from "../helpers/alerts/AlertResponse";

function changeTitleSettings(title:string){
    return (
        <>
            <h1>{title}</h1>
        </>
    )

}

function settingsButton(text:string,
    clickFunction:()=>void
){
    return (
        <Button variant="contained" onClick={clickFunction} sx={{...styleButton,width:"25%", fontSize:"large"}}>{text}</Button>
    )
}

interface passwordSettings {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    newPassword: string;
    setNewPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function ChangePassword(passwordSettings:passwordSettings){
    const modifyPassword = async () => {
        try{
            const response = await axios.patch(`${API_URL}/user`,{
                oldPassword: passwordSettings.password,
                newPassword: passwordSettings.newPassword
            },{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`
                }
            })
            console.log(response)
            successAlert("Contraseña modificada","Contraseña modificada correctamente")
        }
        catch(error){
            errorAlert("Error","Error al modificar contraseña")
        }
    }
    return (
        <>
        {changeTitleSettings("Cambiar Contraseña")}
        {InputTextPassword("Contraseña Actual", passwordSettings.password, passwordSettings.setPassword,passwordStyleTextField)}
        {InputTextPassword("Nueva Contraseña", passwordSettings.newPassword, passwordSettings.setNewPassword,passwordStyleTextField)}
        {settingsButton("Modificar",modifyPassword)}
        </>
    )
}

export function DeleteAccount(){
    const navigate = useNavigate()
    const deleteAccount = async () => {
        try{
            const alert = await Swal.fire({
                title: "Eliminar cuenta",
                text: "¿Estás seguro que deseas eliminar tu cuenta?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#c64e40",
                confirmButtonText: "Eliminar",
                cancelButtonColor: "#3dc97d",
                cancelButtonText: "Cancelar"
            })
            if(alert.isConfirmed){
                await axios.delete(`${API_URL}/user`,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${Cookies.get("token")}`
                    }
                })
                navigate("/")
                Cookies.remove("token")      
            }
        }
        catch(error) {
            console.log(error)
            errorAlert("Error","Error al eliminar cuenta")
        }
    }
    return (
        <>
        {changeTitleSettings("Eliminar Cuenta")}
        {settingsButton("Eliminar",deleteAccount)}
        </>
    )
}


interface navigatorSettings {
    navigatorIndex: number;
    setNavigatorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function changeNavigator(navigatorSettings:navigatorSettings){
    const flexContainerList = {
        display: "flex",
        flexDirection: "row",
        padding: 0,
    }
    return (
        <List sx={flexContainerList}>
            <ListItem disablePadding>
                <ListItemButton onClick = {() => navigatorSettings.setNavigatorIndex(0)}>
                    <ListItemIcon>
                        <Password/>
                    </ListItemIcon>
                    <ListItemText primary="Cambiar Contraseña" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick = {() => navigatorSettings.setNavigatorIndex(1)}>
                    <ListItemIcon>
                        <Delete/>
                    </ListItemIcon>
                    <ListItemText primary="Eliminar cuenta" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

