// Dependencies
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
// Icons
import { LocalHospital, CalendarMonth, AccountBox, Construction } from "@mui/icons-material";
// Helpers
import { GetADmin } from "../helpers/admin/GetAdmin";

function itemDrawer(text:string, icon:any, link:string){
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton component= {Link} to={link}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}

export default function LeftNavigationMenu(open:boolean, setOpen:React.Dispatch<React.SetStateAction<boolean>>){
    const [userinMenu, setUserinMenu] = useState<boolean>()
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    useEffect(()=>{
        GetADmin().then((response) => {
            setUserinMenu(response)
        })
    })
    const DrawerList = (
    <Box sx= {{width: 250}} role="presentation" onClick = {toggleDrawer(false)}>
        <List>
            {itemDrawer("Calendario", <CalendarMonth/>,"/calendar")}
            {itemDrawer("Pacientes", <LocalHospital/>,"/patient")}
            {userinMenu === true ? itemDrawer("Usuarios", <AccountBox/>,"/user" ) : (null)}
            {itemDrawer("Configuración", <Construction/>,"/configuration")}
        </List>   
    </Box>
    )
    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    )
}