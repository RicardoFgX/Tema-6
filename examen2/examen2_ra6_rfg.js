let imgLike = document.getElementById("like");
let imgDislike = document.getElementById("dislike");

let contadorLikes = document.getElementById("contadorLikes");
let likes = parseInt(contadorLikes.textContent);
let contadorDislikes = document.getElementById("contadorDislikes");
let dislikes = parseInt(contadorDislikes.textContent);

let contactar = document.getElementById("boton");
console.log(contactar);
let formulario = document.getElementById("formulario");

imgLike.addEventListener("click", pulsarLike);
console.log(imgLike);

function pulsarLike(e) {
    if (e.target.src != "file:///C:/Users/usuario_ma%C3%B1ana/Desktop/Cliente/Tema%206/examen2/img/gusta.png") {
        e.target.src = "img/gusta.png";
        contadorLikes.textContent = likes + 1;
    } else{
        e.target.src = "img/gusta2.png";
        contadorLikes.textContent = likes;
    }
}

imgDislike.addEventListener("click", pulsarDislike);
console.log(imgDislike);

function pulsarDislike(e) {
    if (e.target.src != "file:///C:/Users/usuario_ma%C3%B1ana/Desktop/Cliente/Tema%206/examen2/img/disgusto.png") {
        e.target.src = "img/disgusto.png";
        contadorDislikes.textContent = dislikes + 1;
    } else{
        e.target.src = "img/disgusto2.png";
        contadorDislikes.textContent = dislikes;
    }
}
contactar.addEventListener("click", generarFormulario);
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