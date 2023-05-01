const form  = document.getElementById('form') as  HTMLFormElement;
const btnGuardar = document.getElementById('btn-Guardar') as HTMLButtonElement;
 
btnGuardar.addEventListener( 'click' , ( e ) =>{
    //e.preventDefault();tsc
    console.log("Ingreso al Fomulario");
    

    //obtener los valores de los input

    const  tipoDocumento =document.getElementById( 'tipoDocumento' ) as HTMLInputElement
    const  numeroDocumento =document.getElementById( 'numeroDocumento' ) as HTMLInputElement
    const  nombres =document.getElementById( 'nombres' ) as HTMLInputElement
    const  apellidos =document.getElementById( 'apellidos' ) as HTMLInputElement
    const telefono =document.getElementById('telefono') as HTMLInputElement
    const  email =document.getElementById( 'email' ) as HTMLInputElement
    const  linkedln =document.getElementById( 'linkedln' ) as HTMLInputElement
    const  github   =document.getElementById( 'github' ) as HTMLInputElement

    // Validacion del Formulario 
    console.log(tipoDocumento.value);

}) 