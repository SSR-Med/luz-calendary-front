// Dependencies
import Cookies from 'js-cookie';
import axios from "axios";
import { NavigateFunction} from 'react-router-dom';
// Environment
import { API_URL } from "../../configuration/EnviromentVariables";
// Helpers
import { errorAlert } from '../alerts/AlertResponse';

export default async function RefreshToken(navigate:NavigateFunction){
    try{
        const token = Cookies.get("token")
        const newToken = await axios.get(`${API_URL}/token`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        Cookies.set("token",newToken.data.token)
    }
    catch (error){
        Cookies.remove("token")
        errorAlert("Sesión expirada","Por favor inicie sesión nuevamente")
        navigate("/")
    }
}