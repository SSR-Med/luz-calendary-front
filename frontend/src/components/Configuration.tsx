// Css
import "/src/static/css/configuration/Configuration.css"
// Dependencies 
import { useState } from "react";
import { TextField,SelectChangeEvent, FormControl, InputLabel, Select, MenuItem,
    TableContainer, Paper, Table, TableHead ,TableBody, TableRow, TableCell,
    Button
 } from "@mui/material";
// Components   
import LeftNavigationMenu from "./LeftNavigationMenu";
import CreateEntityConfiguration from "./CreateEntityConfiguration";
import HeaderMenu from "./HeaderMenu";
// Helpers
import { deleteEntity, modifyEntity } from "../helpers/requests/ModifyEntity";


interface formControlProps {
    valueForm:string;
    setValueForm:React.Dispatch<React.SetStateAction<string>>;
    dictFormValues: Record<string,string>;
}

interface inputTextControlProps{
    valueText: string|number;
    setValueText: React.Dispatch<React.SetStateAction<string|number>>;
}

function createFormControl(formControlProps:formControlProps, inputTextControlProps:inputTextControlProps){
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
                        <MenuItem value={key}>{formControlProps.dictFormValues[key]}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
        <TextField
            label="Buscar"
            variant="filled"
            style={{ minWidth: "60%" }}
            defaultValue={inputTextControlProps.valueText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                inputTextControlProps.setValueText(event.target.value)
            }
        ></TextField>
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



function createEditButtonConfiguration(configurationName:string,index:number,editButtonConfigurationProps:editButtonConfigurationProps,
    editValuesField: Record<string, any>
){
    const modifyEntityHandler = () => {
        editButtonConfigurationProps.setEditedRowIndex(null)
        modifyEntity(configurationName,editValuesField)
    }
    if(editButtonConfigurationProps.editedRowIndex === index){
        return(
            <TableCell sx={{display:"flex",gap:"5%"}}>
                <Button color="success" variant="contained" onClick={
                    modifyEntityHandler
                    }>Confirmar</Button>
                <Button variant="contained" onClick={()=>editButtonConfigurationProps.setEditedRowIndex(null)}>Cancelar</Button>
            </TableCell>
        )
    }
    else{
        return(
            <TableCell sx={{display:"flex",gap:"5%"}}>
                <Button variant="contained" onClick={() => editButtonConfigurationProps.setEditedRowIndex(index)}>Editar</Button>
                <Button color="error" variant="contained" onClick={() => deleteEntity(configurationName,editValuesField["id"])}>Eliminar</Button>
            </TableCell>
        )
    }
}

function createBodyConfigurationTable(configurationName:string,
    rows:Record<string,any>[], editButtonConfigurationProps:editButtonConfigurationProps,
){
    const [editValuesField,setEditValuesField] = useState<Record<string,any>>({})
    // The idea es to send this values to the button for the request, it will need the function to send the request too.
    // Select is not finished.
    // Eliminar function should be done too
    return (
        <TableBody>
            {
                rows.map((row:any, index) => (
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {
                            
                            Object.keys(row).map((key:string) =>{
                                return (
                                    <TableCell>
                                        {
                                           editButtonConfigurationProps.editedRowIndex === index && key != "id"? (
                                            typeof row[key] === 'boolean'
                                           ) ? (
                                            <Select 
                                            defaultValue={row[key]}
                                            onChange={(e) => setEditValuesField({...editValuesField,[key]:e.target.value})} 
                                            >
                                                <MenuItem value={true as any}>Admin</MenuItem>
                                                <MenuItem value={false as any}>Usuario</MenuItem>
                                            </Select>
                                           ) : (
                                            <TextField onChange={(e) => setEditValuesField({...editValuesField,[key]:e.target.value})} defaultValue={row[key]} type={typeof row[key] === 'number' ? 'number' : 'text'}/>
                                           ) : (
                                                <span>{typeof row[key] === 'boolean' ? (row[key] ? 'Admin' : 'Usuario') : row[key]}</span>
                                           )
                                        }
                                    </TableCell>
                                )
                            })
                        }
                        {createEditButtonConfiguration(configurationName,index,editButtonConfigurationProps,{...row,...editValuesField})}
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

interface configurationTableProps {
    header:string[];
    rows:Record<string,any>[];
}

function createConfigurationTable(configurationName:string,
    configurationTableProps:configurationTableProps,editButtonConfigurationProps:editButtonConfigurationProps,
){
    return (
        <TableContainer component={Paper} sx={{overflowY:"scroll",maxHeight:"45vh"}}>
            <Table>
                {createHeaderConfigurationTable(configurationTableProps.header)}
                {createBodyConfigurationTable(configurationName,configurationTableProps.rows,editButtonConfigurationProps)}
            </Table>
        </TableContainer>
    )

}

export default function Configuration(configurationName:string,
    formControlProps:formControlProps, 
    inputTextControlProps:inputTextControlProps,
    configurationTableProps:configurationTableProps,
    editButtonConfigurationProps:editButtonConfigurationProps,
    createEntityFields:Record<string,any>
    ){
    // Menu
    const [open, setOpen] = useState(false);
    return (
        <div className="configuration-objects">
            {LeftNavigationMenu(open, setOpen)}
            {HeaderMenu(open, setOpen)}
            <main>
                <div className="configuration-div">
                    <div className="configuration-elements">
                        <h1>Configuración de {configurationName}</h1>
                        <Button color="success" variant="contained" sx={{marginBottom:'1%', fontSize:'100%'}}
                        onClick={() => CreateEntityConfiguration(configurationName,createEntityFields,configurationName)}>Crear {configurationName}</Button>
                        <div className="configuration-searcher">
                            {createFormControl(formControlProps,inputTextControlProps)}
                        </div>
                        {createConfigurationTable(configurationName,configurationTableProps,editButtonConfigurationProps)}
                    </div>
                </div>
            </main>
        </div>
    )
}