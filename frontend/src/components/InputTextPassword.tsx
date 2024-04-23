// Css
import "/src/static/css/login/Login.css"
// Dependencies
import {TextField, InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
// Styles
import { styleTextField } from "../styles/TextStyle";

export function InputTextPassword(label:string = "Contraseña",
  password:string, setPassword:React.Dispatch<React.SetStateAction<string>>,
  sx:Record<string,any>=styleTextField
){
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    return (
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} label={label} type={showPassword ? "text" : "password"} InputProps={{ // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }} variant="filled" sx= {sx}></TextField>
    )
}