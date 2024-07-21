let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");
let btnEnviar = document.getElementById("send");

let informacion=[];

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault();  //event = e
    informacion[0] = "Nombre: " + nombre.value;
    informacion[1] = "Apellido: " + apellido.value;
    informacion[2] = "Telefono: " + telefono.value;
    informacion[3] = "Email: " + email.value;
    informacion[4] = "Mensaje: " + textarea.value;


    let blob = new Blob ([informacion] , {type: "text/plain;charset-utf-8" } );

    saveAs(blob, "contacto.txt");

});