// Css
import "/src/static/css/configuration/Configuration.css"
// Dependencies 
import { useState } from "react";
import { TextField,SelectChangeEvent, FormControl, InputLabel, Select, MenuItem,
    TableContainer, Paper, Table, TableHead ,TableBody, TableRow, TableCell,
    IconButton, Button
 } from "@mui/material";
// Icons
import { Menu } from "@mui/icons-material";
// Components 
import LeftNavigationMenu from "./LeftNavigationMenu";


interface formControlProps {
    valueForm:string;
    setValueForm:React.Dispatch<React.SetStateAction<string>>;
    dictFormValues: Record<string,string>;
}

function createFormControl(formControlProps:formControlProps){
    return (
        <>
        <FormControl style={{minWidth:'30%'}}>
            <InputLabel>Tipo</InputLabel>
            <Select
                value={formControlProps.valueForm}
                label="Tipo"
                onChange={(event: SelectChangeEvent) => formControlProps.setValueForm(event.target.value as string)}
            >
                {
                    Object.keys(formControlProps.dictFormValues).map((key:string) => (
                        <MenuItem value={formControlProps.dictFormValues[key]}>{key}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
        <TextField label="Buscar" variant="filled" style={{minWidth:"60%"}}></TextField>
        </>)   
}

function createHeaderConfigurationTable(header:string[]){
    return (
        <TableHead>
            <TableRow>
                {
                    header.map((headerElement:string) => (
                        <TableCell>{headerElement}</TableCell>
                    ))
                }
                <TableCell>Acciones</TableCell>
            </TableRow>
        </TableHead>
    )
}

interface editButtonConfigurationProps {
    editedRowIndex:number|null;
    setEditedRowIndex:React.Dispatch<React.SetStateAction<any>>;
}

function createEditButtonConfiguration(index:number,editButtonConfigurationProps:editButtonConfigurationProps){
    if(editButtonConfigurationProps.editedRowIndex === index){
        return(
            <TableCell key={index} sx={{display:"flex",gap:"5%"}}>
                <Button variant="contained" onClick={()=>editButtonConfigurationProps.setEditedRowIndex(null)}>Confirmar</Button>
                <Button variant="contained" onClick={()=>editButtonConfigurationProps.setEditedRowIndex(null)}>Cancelar</Button>
            </TableCell>
        )
    }
    else{
        return(
            <TableCell key={index} sx={{display:"flex",gap:"5%"}}>
                <Button variant="contained" onClick={() => editButtonConfigurationProps.setEditedRowIndex(index)}>Editar</Button>
                <Button variant="contained" onClick={() => editButtonConfigurationProps.setEditedRowIndex(index)}>Eliminar</Button>
            </TableCell>
        )
    }
}

function createBodyConfigurationTable(rows:Record<string,any>[], editButtonConfigurationProps:editButtonConfigurationProps){
    return (
        <TableBody>
            {
                rows.map((row:any, index) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {
                            Object.keys(row).map((key:string) => (
                                <TableCell key={index}>{row[key]}</TableCell>
                            ))
                        }
                        {createEditButtonConfiguration(index,editButtonConfigurationProps)}
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

interface configurationTableProps {
    header:string[];
    rows:any[];
}

function createConfigurationTable(configurationTableProps:configurationTableProps,editButtonConfigurationProps:editButtonConfigurationProps){
    return (
        <TableContainer component={Paper} sx={{overflowY:"scroll",maxHeight:"45vh"}}>
            <Table>
                {createHeaderConfigurationTable(configurationTableProps.header)}
                {createBodyConfigurationTable(configurationTableProps.rows,editButtonConfigurationProps)}
            </Table>
        </TableContainer>
    )

}

export default function Configuration(configurationName:string,
    dictFormValues: Record<string,string>,
    configurationTableProps:configurationTableProps){
    // Menu
    const [open, setOpen] = useState(false);
    // Form
    const [valueForm, setValueForm] = useState('');
    // Edit row
    const [editedRowIndex,setEditedRowIndex] = useState(null);
    return (
        <div className="configuration-objects">
            {LeftNavigationMenu(open, setOpen)}
            <header>
                <IconButton>
                    <Menu onClick={() => setOpen(!open)} style = {{fontSize: "8vh"}}></Menu>
                </IconButton>
            </header>
            <main>
                <div className="configuration-div">
                    <div className="configuration-elements">
                        <h1>Configuración de {configurationName}</h1>
                        <div className="configuration-searcher">
                            {createFormControl({valueForm, setValueForm, dictFormValues})}
                        </div>
                        {createConfigurationTable(configurationTableProps,
                            {
                                editedRowIndex,
                                setEditedRowIndex
                            })}
                    </div>
                </div>
            </main>
        </div>
    )
}