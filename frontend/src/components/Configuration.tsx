// Css
import "/src/static/css/configuration/Configuration.css"
// Dependencies 
import { useState } from "react";
import { TextField,SelectChangeEvent, FormControl, InputLabel, Select, MenuItem,
    TableContainer, Paper, Table, TableHead ,TableBody, TableRow, TableCell
 } from "@mui/material";
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
            </TableRow>
        </TableHead>
    )
}

function createBodyConfigurationTable(rows:Record<string,any>[]){
    return (
        <TableBody>
            {
                rows.map((row:any) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {
                            Object.keys(row).map((key:string) => (
                                <TableCell>{row[key]}</TableCell>
                            ))
                        }
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

function createConfigurationTable(configurationTableProps:configurationTableProps){
    return (
        <TableContainer component={Paper} sx={{overflowY:"scroll",maxHeight:"45vh"}}>
            <Table>
                {createHeaderConfigurationTable(configurationTableProps.header)}
                {createBodyConfigurationTable(configurationTableProps.rows)}
            </Table>
        </TableContainer>
    )

}

export default function Configuration(configurationName:string,dictFormValues: Record<string,string>,configurationTableProps:configurationTableProps){
    // Menu
    const [open, setOpen] = useState(false);
    // Form
    const [valueForm, setValueForm] = useState('');
    return (
        <div className="configuration-objects">
            {LeftNavigationMenu(open, setOpen)}
            <header>
        
            </header>
            <main>
                <div className="configuration-div">
                    <div className="configuration-elements">
                        <h1>Configuración de {configurationName}</h1>
                        <div className="configuration-searcher">
                            {createFormControl({valueForm, setValueForm, dictFormValues})}
                        </div>
                        {createConfigurationTable(configurationTableProps)}
                    </div>
                </div>
            </main>
        </div>
    )
}