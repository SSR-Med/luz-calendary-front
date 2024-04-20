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

export default function Patient() {
    const navigate = useNavigate()
    useEffect(()=>{
      RefreshToken(navigate)
    },[])
    // Select values
    const [valueForm, setValueForm] = useState<string>("");
    // Search values
    const [valueText,setValueText] = useState<string|number>("");
    // Edit button configuration
    const [editedRowIndex, setEditedRowIndex] = useState<number|null>(null);
    // Type of data in dictFormValues
    const typeDataDictFormValues = {
      "string": new Set(["name"]),
      "number": new Set(["cellphone","document"])
    }
    // Request data
    const requestData = 
      [
        {id:1, id_user:1, name:"Juan", cellphone:123456, document:123456},
        {id:2, id_user:1, name:"Miguel", cellphone:892, document:78910}
      ]
    let requestFilterData = HandleTable(requestData,
      valueForm,
      valueText,
      typeDataDictFormValues)
    return (
      <>
        {
          Configuration("Pacientes",
            {
              valueForm,
              setValueForm,
              dictFormValues: {
                "": "Ninguno",
                "name": "Nombre",
                "cellphone": "Teléfono",
                "document": "Documento"
              }
            },
            {
              valueText,
              setValueText,
            },
            {
              header: ["Id","Id_user","Nombre","Teléfono","Documento"],
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
            "cellphone": {
              "nick": "Teléfono",
              "type": "text"
            },
            "document": {
              "nick": "Documento",
              "type": "text"
            }
          })
      }
      </>
    );
}