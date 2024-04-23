// Dependencies
import { IconButton } from "@mui/material";
// Icons 
import { Menu } from "@mui/icons-material";


export default function HeaderMenu(open:boolean, setOpen:Function){
    return (
    <header>
        <IconButton onClick={() => setOpen(!open)}>
            <Menu style = {{fontSize: "8vh"}}></Menu>
        </IconButton>
    </header>
    )
}