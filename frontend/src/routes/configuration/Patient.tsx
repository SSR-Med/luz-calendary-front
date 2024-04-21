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
import { getEntity } from "../../helpers/requests/ModifyEntity";

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
    // Request data
    const [requestData,setRequestData] = useState<Record<string,any>[]>([{}])
    useEffect(()=>{
      getEntity("patient").then((responseData) => {
        setRequestData(responseData)
      })
    }, [requestData])
    let requestFilterData = HandleTable(requestData,
      valueForm,
      valueText)

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