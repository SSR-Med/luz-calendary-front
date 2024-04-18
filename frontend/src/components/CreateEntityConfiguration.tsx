// Dependencies
import Swal from "sweetalert2";
// Css
import "/src/static/css/configuration/Alert.css"

export default async function CreateEntityConfiguration(name:string,attributes:Record<string,any>){

    const htmlInput = Object.keys(attributes).map((key) => {
        return attributes[key]["type"] === 'select' ?
        ` <select class="swal2-select" placeholder="${attributes[key]["nick"]}">
            ${Object.keys(attributes[key]["options"]).map((option) => {
                return `<option value="${option}">${attributes[key]["options"][option]}</option>`
            }).join('')}
          </select><br />
        ` 
        : `<input class="swal2-input" type="${attributes[key]["type"]}" placeholder="${attributes[key]["nick"]}" /><br />`
    }).join('')
    await Swal.fire({
        title: `Creación de ${name}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#D73636',
        confirmButtonText: 'Crear',
        cancelButtonText: 'Cancelar',
        html: htmlInput
      });
    
}