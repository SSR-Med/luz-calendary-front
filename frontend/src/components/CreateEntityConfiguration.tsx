// Dependencies
import Swal from "sweetalert2";
// Css
import "/src/static/css/configuration/Alert.css"
import { createEntity } from "../helpers/requests/ModifyEntity";



export default async function CreateEntityConfiguration(name:string,attributes:Record<string,any>,
    configurationName: string
){

    const htmlInput = Object.keys(attributes).map((key) => {
        return attributes[key]["type"] === 'select' ?
        ` <select id="${key}" class="swal2-select" placeholder="${attributes[key]["nick"]}">
            ${Object.keys(attributes[key]["options"]).map((option) => {
                return `<option value="${option}">${attributes[key]["options"][option]}</option>`
            }).join('')}
          </select><br />
        ` 
        : `<input id="${key}" class="swal2-input" type="${attributes[key]["type"]}" placeholder="${attributes[key]["nick"]}" /><br />`
    }).join('')

    const response = await Swal.fire({
        title: `Creación de ${name}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#D73636',
        confirmButtonText: 'Crear',
        cancelButtonText: 'Cancelar',
        html: htmlInput,
        preConfirm: () => {
            const values: Record<string, any> = {}; 
            for (const key of Object.keys(attributes)) {
                const input = document.getElementById(key) as HTMLInputElement;
                const inputValue = input.value;
                if(inputValue === ""){
                    return Swal.showValidationMessage('¡Campo requerido! Ingresa un valor para ' + attributes[key].nick);
                }
                values[key] = inputValue;
            }
            return values
        }
      });
    if (response.isConfirmed) {
        createEntity(configurationName,response.value)
    }
    
}