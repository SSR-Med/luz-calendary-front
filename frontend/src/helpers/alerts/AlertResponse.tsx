// Dependencies
import Swal from "sweetalert2";

export function successAlert(title:string,text:string){
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonColor: '#3dc97d',
        confirmButtonText: 'Ok'
    });
}

export function errorAlert(title:string,text:string){
    Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonColor: '#c64e40',
        confirmButtonText: 'Ok'
    });
}