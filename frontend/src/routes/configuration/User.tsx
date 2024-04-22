// Css
import "/src/static/css/configuration/Configuration.css"
// Components
import Configuration from "../../components/Configuration";
// Dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// Helpers
import HandleTable from "../../helpers/configuration/HandleTable";
import RefreshToken from "../../helpers/token/RefreshToken";
import {getEntity} from "../../helpers/requests/ModifyEntity";
import { unauthorizeUser } from "../../helpers/admin/GetAdmin";

export default function User() {
    const navigate = useNavigate()
    useEffect(()=>{
      unauthorizeUser(navigate)
      RefreshToken(navigate)
    },[])
    // Select values
    const [valueForm, setValueForm] = useState<string>("");
    // Search values
    const [valueText,setValueText] = useState<string|number>("");
    // Edit button configuration
    const [editedRowIndex, setEditedRowIndex] = useState<number|null>(null);
    // Request data
    const [requestData,setRequestData] = useState<Record<string,any>[]>([])
    useEffect(()=>{
      setTimeout(() => {
        getEntity("user").then((responseData) => {
          setRequestData(responseData)
        })
      })
    }, [requestData])
    
    let requestFilterData = HandleTable(requestData,
      valueForm,
      valueText)
    return (
      <>
        {
          Configuration("Usuarios",
            {
              valueForm,
              setValueForm,
              dictFormValues: {
                "": "Ninguno",
                "name": "Nombre",
                "email": "Correo",
              }
            },
            {
              valueText,
              setValueText,
            },
            {
              header: ["Id","Nombre","Correo","Contraseña","Rol"],
              rows : requestFilterData
            },
            {
              editedRowIndex,
              setEditedRowIndex
            },
          {
            "name": {
              "nick": "Nombre",
              "type": "text"
            },
            "email": {
              "nick": "Email",
              "type": "text"
            },
            "password": {
              "nick": "Contraseña",
              "type": "text"
            },
            "role": {
              "nick": "Rol",
              "type": "select",
              "options": {
                "true": "Admin",
                "false": "Usuario"
              }
            }
          })
      }
      </>
    );
}