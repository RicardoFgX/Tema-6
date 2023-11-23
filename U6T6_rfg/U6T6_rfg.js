//Elementos para addEventListener
let agregar = document.getElementById("agregar");
let borrarPrimero = document.getElementById("borrarPrimero");
let borrarUltimo = document.getElementById("borrarUltimo");

agregar.addEventListener("click", agregarElemento)
borrarPrimero.addEventListener("click", borrarPrimerElemento)
borrarUltimo.addEventListener("click", borrarUltimoElemento)

//Agrega un nuevo elemento a la lista
function agregarElemento(e) {
    let nuevoElemento = prompt("Introduce un texto:");
    if (nuevoElemento !== null) {
        let lista = document.getElementById("lista");
        let nuevoLi = document.createElement("li");
        nuevoLi.appendChild(document.createTextNode(nuevoElemento));
        lista.appendChild(nuevoLi);
    }
}

//Borrar el primer elemento de la lista
function borrarPrimerElemento(e) {
    let lista = document.getElementById("lista");
    console.log("Intento de borrar el primer li")
    if (lista.hasChildNodes()) {
        console.log("Apunto de borrar el primer li")
        lista.removeChild(lista.firstElementChild);
        console.log("He borrado el primer li")
    }
}

//Borrar el último elemento de la lista
function borrarUltimoElemento(e) {
    let lista = document.getElementById("lista");
    if (lista.hasChildNodes()) {
        lista.removeChild(lista.lastElementChild);
    }
}


