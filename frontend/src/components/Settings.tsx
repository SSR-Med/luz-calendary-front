// Dependencies
import { Button,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText
 } from "@mui/material";
// Icons
import { Password, Delete } from "@mui/icons-material";
// Components
import { InputTextPassword } from "./InputTextPassword";
// Styles
import { passwordStyleTextField, styleButton } from "../styles/TextStyle";

function changeTitleSettings(title:string){
    return (
        <>
            <h1>{title}</h1>
        </>
    )

}

function settingsButton(text:string){
    return (
        <Button variant= "contained" sx={{...styleButton,width:"25%", fontSize:"large"}}>{text}</Button>
    )
}

interface passwordSettings {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    newPassword: string;
    setNewPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function ChangePassword(passwordSettings:passwordSettings){
    return (
        <>
        {changeTitleSettings("Cambiar Contraseña")}
        {InputTextPassword("Contraseña Actual", passwordSettings.password, passwordSettings.setPassword,passwordStyleTextField)}
        {InputTextPassword("Nueva Contraseña", passwordSettings.newPassword, passwordSettings.setNewPassword,passwordStyleTextField)}
        {settingsButton("Modificar")}
        </>
    )
}

export function DeleteAccount(){
    return (
        <>
        {changeTitleSettings("Eliminar Cuenta")}
        {settingsButton("Eliminar")}
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

