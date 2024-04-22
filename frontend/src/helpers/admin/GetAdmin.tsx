// Dependencies
import Cookies from 'js-cookie';
import axios from "axios";
import { NavigateFunction} from 'react-router-dom';
// Enviroment
import { API_URL } from "../../configuration/EnviromentVariables";
// Helpers
import { errorAlert } from '../alerts/AlertResponse';

export async function GetADmin(){
    try{
        const token = Cookies.get("token")
        await axios.get(`${API_URL}/admin`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return true
    }catch(error){ 
        return false
    }
}

export async function unauthorizeUser(navigate:NavigateFunction){
    if(await GetADmin() === false){
        errorAlert("No autorizado","No tiene permisos para acceder a esta página")
        navigate("/")
    }
}