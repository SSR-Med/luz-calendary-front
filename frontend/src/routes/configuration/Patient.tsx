// Css
import "/src/static/css/configuration/Configuration.css"
// Components
import Configuration from "../../components/Configuration";
// Dependencies
import { useState } from "react";
// Helpers
import HandleTable from "../../helpers/configuration/HandleTable";

export default function Patient() {
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
    if(editedRowIndex != null){
      console.log("Editando fila: ",requestData[editedRowIndex])
    }
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
            })
      }
      </>
    );
}