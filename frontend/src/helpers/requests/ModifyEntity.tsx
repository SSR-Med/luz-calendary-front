// Dependencies
import axios from "axios";
// Environment
import { API_URL } from "../../configuration/EnviromentVariables";
// Helpers
import { successAlert, errorAlert } from "../../helpers/alerts/AlertResponse";
// Dependencies
import Cookies from 'js-cookie';

export async function modifyEntity(entityType:string, data:Record<string,any>){
    const messageEntity = entityType === "Pacientes" ? "Paciente" : "Usuario"
    const typeUrl = entityType === "Pacientes" ? "patient" : "user"
    const endpointUrl = entityType === "Pacientes" ? `${API_URL}/${typeUrl}/${data.id}` : `${API_URL}/${typeUrl}/id/${data.id}`
    try{
        let bodyData = {...data}
        delete bodyData.id
        await axios.put(endpointUrl,bodyData,{
            "headers": {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        })
        successAlert(`${messageEntity} modificado`,`${messageEntity} modificado correctamente`)
    }
    catch(error){
        errorAlert("Error",`Error al modificar ${messageEntity}`)
    }
}

export async function deleteEntity(entityType:string, id:number){
    const messageEntity = entityType === "Pacientes" ? "Paciente" : "Usuario"
    const typeUrl = entityType === "Pacientes" ? "patient" : "user"
    const endpointUrl = entityType === "Pacientes" ? `${API_URL}/${typeUrl}/${id}` : `${API_URL}/${typeUrl}/id/${id}`
    try{
        await axios.delete(endpointUrl,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`
        }})
        successAlert(`${messageEntity} eliminado`,`${messageEntity} eliminado correctamente`)
    }
    catch(error){
        errorAlert("Error",`Error al eliminar ${messageEntity}`)
    }
}

export async function getEntity(entityType:string){
    try{
        const response = await axios.get(`${API_URL}/${entityType}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        })
        return await response.data
    }
    catch(error){
        errorAlert("Error","Error al obtener datos")
        return([])
    }
}

export async function createEntity(entityType:string, data:Record<string,any>){
    const messageEntity = entityType === "Pacientes" ? "Paciente" : "Usuario"
    const typeUrl = entityType === "Pacientes" ? "patient" : "user"
    const endpointUrl = entityType === "Pacientes" ? `${API_URL}/${typeUrl}` : `${API_URL}/${typeUrl}/admin`
    try{
        await axios.post(endpointUrl,data,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        })
        successAlert(`${messageEntity} creado`,`${messageEntity} creado correctamente`)
    }
    catch(error){
        errorAlert("Error",`Error al crear ${messageEntity}`)
    }
}