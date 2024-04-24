import {FormControl,Select, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";

export default function SelectAgenda(agenda:string,setAgenda:React.Dispatch<React.SetStateAction<string>>){
    return (
        <FormControl fullWidth sx={{height:"8%"}}>
            <InputLabel>Agenda</InputLabel>
            <Select
            value={agenda}
            label="Agenda"
            onChange={(event:SelectChangeEvent<string>)=>setAgenda(event.target.value)}
            >
                <MenuItem value="week">Semana</MenuItem>
                <MenuItem value="month">Mes</MenuItem>
            </Select>
        </FormControl>
    )
}