
// Tercera Preentrega

// function iniciarSesion() {
//     let inicioSesion = prompt ("¿Desea iniciar sesión? Indique SI para iniciar o NO para continuar sin iniciar");
//         if (inicioSesion === "SI") {
//             let nombre = prompt ("Ingrese su nombre");
//             let password = prompt ("Ingrese su clave");
//             alert ("Bienvenido/a " + nombre + " a Encuentra a Tu Mascota");
//     console.log("El usuario " + nombre + " inició sesión");
//         } else if (inicioSesion === "NO") {
//             alert("Muchas gracias! Puede continuar navegando sin iniciar sesión");
//         } else {
//             alert("Ha ingresado una opción inválida. Indique SI para iniciar sesión o NO para continuar sin iniciar ");
//         }
    
// }

// iniciarSesion ()


// Cuarta preentrega


// 1) Validacion de caracteres para la contraseña del Index - Validación de usuario. 


window.onload = () => {
    let formulario = document.querySelector("form-login");
      let inputpass = document.getElementById("pass");
      let inputname = document.getElementById("name");
    let boton = document.getElementById("button");
  // mensaje de error si el pass no cumple con ciertos requisitos
   inputpass.addEventListener("keyup", () => {
        let mensaje;
       if (inputpass.value.length < 8) {
            mensaje = "La contraseña tiene que tener al menos 8 caracteres"
           document.getElementById("mensajePass").innerText = mensaje;
      } else {
          document.getElementById("mensajePass").innerText = " "
     }
    })
 
     }
 
     let boton = document.querySelector("button")
   
     localStorage.setItem("usuarioRegistrado", "Macarena")
   
   
       boton.onclick = (event)  => {
         event.preventDefault()
         let inputUsuario = document.getElementById ("username").value;
         if (inputUsuario == localStorage.getItem("usuarioRegistrado")) {
           let mensajeIngreso = document.createElement("p")
           document.querySelector("p").innerText = "Ingreso con éxito"
          sessionStorage.setItem("sesionIniciada", true)
          sessionStorage.setItem("username", inputUsuario)
  
  
        } else {
          let p = document.createElement("p")
          mensajePass.innerText = "El usuario no coincide. Intente nuevamente"
          document. querySelector("form-login").appendChild(mensajePass)
   
        }
      }