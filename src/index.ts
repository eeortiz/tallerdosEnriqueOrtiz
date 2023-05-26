const formulario  = document.getElementById('form-crear') as  HTMLFormElement;
const btnGuardar = document.getElementById('btn-Guardar') as HTMLButtonElement;
 
btnGuardar.addEventListener( 'click' , function (event) {
    

    //e.preventDefault();tsc
    console.log("Ingreso al Fomulario");
    

    //obtener los valores de los input

    const  tipoDocumento = document.getElementById( 'tipoDocumento' ) as HTMLInputElement
    const  numeroDocumento = document.getElementById( 'numeroDocumento' ) as HTMLInputElement
    const  nombres = document.getElementById( 'nombres' ) as HTMLInputElement
    const  apellidos = document.getElementById( 'apellidos' ) as HTMLInputElement
    const telefono = document.getElementById('telefono') as HTMLInputElement
    const  email = document.getElementById( 'email' ) as HTMLInputElement
    const  linkedln = document.getElementById( 'linkedln' ) as HTMLInputElement
    const  github  = document.getElementById( 'github' ) as HTMLInputElement

    // Validacion del Formulario 
    //console.log(tipoDocumento.value);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAzMTE1Nzk4OCwiY29ycmVvIjoiRW5yaXF1ZW9Ab3V0bG9vay5jb20iLCJpYXQiOjE2ODMxNjEyODMsImV4cCI6MTY4Mzc2NjA4M30.qYwdhMhACIJHmvbbue88WTVYzyHDML69M_OmLdKb4g8");
    
    let raw = JSON.stringify({
      "tipoIdentificacion" : tipoDocumento.value,
      "numeroIdentificacion": numeroDocumento.value,
      "nombres": nombres.value,
      "apellidos": apellidos.value,
      "celular": telefono.value,
      "correo": email.value,
      "linkedin": linkedln.value,
      "github": github.value
 });

 
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
//      // redirect: 'follow'
    };
//    console.log(raw);

    fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}); 

