// Css
import "/src/static/css/configuration/Configuration.css"
// Components
import Configuration from "../../components/Configuration";
// Dependencies
import { useState } from "react";
// Helpers
import HandleTable from "../../helpers/configuration/HandleTable";

export default function User() {
    // Select values
    const [valueForm, setValueForm] = useState<string>("");
    // Search values
    const [valueText,setValueText] = useState<string|number>("");
    // Edit button configuration
    const [editedRowIndex, setEditedRowIndex] = useState<number|null>(null);
    // Type of data in dictFormValues
    const typeDataDictFormValues = {
      "string": new Set(["name","email"]),
      "number": new Set([])
    }
    // Request data
    let requestData = 
      [
        {id:1, name: "Petro", email: "petro@gmail.com", password: "", role: false},
        {id:2, name: "Duque", email: "duque@gmail.com", password: "", role: true},
      ]
    
    let requestFilterData = HandleTable(requestData,
      valueForm,
      valueText,
      typeDataDictFormValues)
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