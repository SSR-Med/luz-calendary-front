// Dependencies
import {TextField} from '@mui/material';
// Styles 
import { loginStyleTextField } from "../styles/login/LoginStyle";

export default function EmailTextField(email:string, setEmail:React.Dispatch<React.SetStateAction<string>>, isEmailValid:boolean){
    return (
        <TextField error={!isEmailValid && email.length>0} helperText={!isEmailValid && email.length > 0 ? 'Email incorrecto' : ' '} value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" sx= {loginStyleTextField}></TextField>
    )
}