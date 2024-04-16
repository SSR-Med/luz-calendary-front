// Dependencies
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import {Link} from "react-router-dom";
// Icons
import { LocalHospital, CalendarMonth, AccountBox, Construction } from "@mui/icons-material";

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
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
    <Box sx= {{width: 250}} role="presentation" onClick = {toggleDrawer(false)}>
        <List>
            {itemDrawer("Calendario", <CalendarMonth/>,"/calendar")}
            {itemDrawer("Pacientes", <LocalHospital/>,"/patient")}
            {itemDrawer("Usuario", <AccountBox/>,"/user")}
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