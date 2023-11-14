let texto = document.getElementById("texto");


let botonRojo = document.getElementById("redButton");
let botonAmarillo = document.getElementById("yellowButton");
let botonVerde = document.getElementById("greenButton");

function cambiarRojo(e){
    texto.className = "rojo";
}

function cambiarAmarillo(e){
    texto.className = "yellow";
}

function cambiarVerde(e){
    texto.className = "green";
}

botonRojo.addEventListener("click", cambiarRojo);
botonAmarillo.addEventListener("click", cambiarAmarillo);
botonVerde.addEventListener("click", cambiarVerde);