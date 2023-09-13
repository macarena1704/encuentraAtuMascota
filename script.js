function iniciarSesion() {
    let inicioSesion = prompt ("¿Desea iniciar sesión? Indique SI para iniciar o NO para continuar sin iniciar");
        if (inicioSesion === "SI") {
            let nombre = prompt ("Ingrese su nombre");
            let password = prompt ("Ingrese su clave");
            alert ("Bienvenido/a " + nombre + " a Encuentra a Tu Mascota");
    console.log("El usuario " + nombre + " inició sesión");
        } else if (inicioSesion === "NO") {
            alert("Muchas gracias! Puede continuar navegando sin iniciar sesión");
        } else {
            alert("Ha ingresado una opción inválida. Indique SI para iniciar sesión o NO para continuar sin iniciar ");
        }
    
}

iniciarSesion ()


