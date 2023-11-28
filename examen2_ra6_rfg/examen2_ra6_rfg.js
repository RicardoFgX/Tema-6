//Variables para las imagenes gustar y no gustar
let imgLike = document.getElementById("like");
let imgDislike = document.getElementById("dislike");

//Se recoge el valor del contador de likes del html
let contadorLikes = document.getElementById("contadorLikes");
let likes = parseInt(contadorLikes.textContent);
//Se recoge el valor del contador de dislikes del html
let contadorDislikes = document.getElementById("contadorDislikes");
let dislikes = parseInt(contadorDislikes.textContent);

//Variable para el boton de contacto
let contactar = document.getElementById("boton");
//Variable para el campo 'div' donde se colocaran los elementos del formulario
let formulario = document.getElementById("formulario");

//EventListener para la imagen de like al hacer click en esta
imgLike.addEventListener("click", pulsarLike);

//Función para cambiar la foto like entre 'pulsada' y 'sin pulsar'. Además tambien aumenta el contador de likes en caso de estar pulsado.
function pulsarLike(e) {
    if (e.target.src.includes("img/gusta2.png")) {
        e.target.src = "img/gusta.png";
        contadorLikes.textContent = likes + 1;
    } else{
        e.target.src = "img/gusta2.png";
        contadorLikes.textContent = likes;
    }
}

//EventListener para la imagen de dislike al hacer click en esta
imgDislike.addEventListener("click", pulsarDislike);

//Función para cambiar la foto dislike entre 'pulsada' y 'sin pulsar'. Además tambien aumenta el contador de dislikes en caso de estar pulsado.
function pulsarDislike(e) {
    if (e.target.src.includes("img/disgusto2.png")) {
        e.target.src = "img/disgusto.png";
        contadorDislikes.textContent = dislikes + 1;
    } else{
        e.target.src = "img/disgusto2.png";
        contadorDislikes.textContent = dislikes;
    }
}

//EventListener para el boton de contactar
contactar.addEventListener("click", generarFormulario);

//Función que genera los inputs del formulario y el boton para enviar datos. Estos se incluyen a continuación del botón 'Contactar'
function generarFormulario(e){
    while (formulario.firstChild) {
        formulario.removeChild(formulario.firstChild);
    }

    let nombreInput = document.createElement("input");
    nombreInput.placeholder = "Introduce tu nombre";
    let emailInput = document.createElement("input");
    emailInput.placeholder = "Introduce tu email;";

    let botonEnviar = document.createElement("button");
    botonEnviar.textContent = "Enviar Datos";

    formulario.appendChild(nombreInput);
    formulario.appendChild(emailInput);
    formulario.appendChild(botonEnviar);
}