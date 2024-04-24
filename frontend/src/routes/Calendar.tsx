// Dependencies
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {Button} from "@mui/material";
// Helpers
import RefreshToken from "../helpers/token/RefreshToken"
import BasicDateCalendar from "../helpers/calendar/BasicDateCalendar";
import SelectAgenda from "../helpers/calendar/SelectAgenda";
// Styles
import { calendarButton } from "../styles/TextStyle";
// Components
import HeaderMenu from "../components/HeaderMenu";
import LeftNavigationMenu from "../components/LeftNavigationMenu";
// Css
import "/src/static/css/Calendar.css"

export default function Calendary(){
    const navigate = useNavigate()
    const [open,setOpen] = useState(false)
    const [agenda,setAgenda] = useState("week")
    useEffect(()=>{
        RefreshToken(navigate)
    },[])
    return (
        <div className="calendar-objects">
            {LeftNavigationMenu(open,setOpen)}
            {HeaderMenu(open,setOpen)}
            <main>
                <div className="calendar-menu">
                    <BasicDateCalendar/>
                    {SelectAgenda(agenda,setAgenda)}
                    <Button variant="contained" color="info" sx={calendarButton}>Agregar sesiones</Button>
                    <Button variant="contained" color="secondary" sx={calendarButton} >Modificar sesiones</Button>
                    <Button variant="contained" color="error" sx={calendarButton}>Eliminar sesiones</Button>
                </div>
                <div className="calendar-content">
                </div>
            </main>
        </div>
    )
}