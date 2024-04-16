// Css
import "/src/static/css/configuration/Configuration.css"
// Components
import Configuration from "../../components/Configuration";

export default function Patient() {

    return (
      <>
        {Configuration("Pacientes", {
          "Nombre": "name",
          "Teléfono": "cellphone",
          "Documento": "document"
        },
        {
          header: ["Id","Id_user","Nombre","Teléfono","documento"],
          rows : [
            {id:1, id_user:1, name:"Juan", cellphone:"123456", document:"123456"},
          ]
        })}
      </>
    );
}