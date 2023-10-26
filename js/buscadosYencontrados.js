
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

// 2) Creacion de article's desde JS mediante JSON. 
let jsonDeMascotas = `[
    {
        "nombre": "Dino",
        "edad": "3 años",
        "imagen": "https://images.pexels.com/photos/3671300/pexels-photo-3671300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "nombre": "Timoteo",
        "edad": "4 años",
        "imagen": "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
       "nombre": "Patitas",
       "edad": "2 años",
       "imagen": "https://images.pexels.com/photos/4503571/pexels-photo-4503571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]`

// Parseo

let jsonConvertido = JSON.parse(jsonDeMascotas)
console.log(jsonDeMascotas);

// Recorrer el array jsonConvertido
for (let i = 0; i < jsonConvertido.length; i++){
    //Creación de article
    let article = document.createElement("article")
    // Estilos agregados al article
    article.style.border = "solid"
    article.style.borderWidth = "1px"
    article.style.borderRadius = "5%"

    //Creación de h2
    let nombre = document.createElement("h2")
    nombre.innerText = jsonConvertido[i].nombre

    //Creación y carga de imagen
    let img = document.createElement("img")
    img.style.width = "40%"
    img.src = jsonConvertido[i].imagen

    //Creación de p
    let edad = document.createElement("p")
    edad.innerText = jsonConvertido[i].edad
 
    article.appendChild(nombre)
    article.appendChild(img)
    article.appendChild(edad)

    //Envío del article a la sección correspondiente
    document.getElementById("articleByE").appendChild(article)
};


