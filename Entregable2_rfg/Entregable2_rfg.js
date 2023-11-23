let generar = document.getElementById("generarCampos")
let agregar = document.getElementById("agregar");
let borrarPrimero = document.getElementById("borrarPrimero");
let borrarUltimo = document.getElementById("borrarUltimo");

generar.addEventListener("click", generarCampos)
agregar.addEventListener("click", agregarElementos)
borrarPrimero.addEventListener("click", borrarPrimerElemento)
borrarUltimo.addEventListener("click", borrarUltimoElemento)

//Genera los cuadros inputs según el número dado
function generarCampos(e) {
    let numElementos = document.getElementById("numElementos").value;
    let contenedor = document.getElementById("lista");

    for (let i = 0; i < numElementos; i++) {
        let nuevoInput = document.createElement("input");
        nuevoInput.setAttribute("type", "text");
        contenedor.appendChild(nuevoInput);
    }
}

//Agrega elementos a la lista
function agregarElementos() {
    let contenedor = document.getElementById("lista");
    let elementos = contenedor.getElementsByTagName("input");

    //Itera para  crear cada elemento de la lista
    for (let i = 0; i < elementos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.appendChild(document.createTextNode(elementos[i].value));
        contenedor.appendChild(nuevoLi);
    }

    //Quita todos los campos de input previos
    while (elementos.length > 0) {
        contenedor.removeChild(elementos[0]);
    }
}

//Borra el primer elemento de la lista
function borrarPrimerElemento(e) {
    let lista = document.getElementById("lista");
    if (lista.hasChildNodes()) {
        lista.removeChild(lista.firstElementChild);
    }
}

//Borra el último elemento de la lista
function borrarUltimoElemento(e) {
    let lista = document.getElementById("lista");
    if (lista.hasChildNodes()) {
        lista.removeChild(lista.lastElementChild);
    }
}

