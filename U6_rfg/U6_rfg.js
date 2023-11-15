

let cuadroCentral = document.getElementById("cuadro");
let lateralIzquierdo = document.getElementById("lateralIzquierdo");
let lateralDerecho = document.getElementById("lateralDerecho");
let zoomIn = document.getElementById("zoomIn");
let zoomOut = document.getElementById("zoomOut");
let colores = document.getElementById("colores");

function inicio(){
    cuadroCentral.firstElementChild.width = 150;
}

inicio();
// Imágenes en el lateral izquierdo
lateralIzquierdo.addEventListener("click", imagenIzquierda);

function imagenIzquierda(e) {
    if (e.target.tagName === "IMG") {
        let imageUrl = e.target.src;
        console.log(imageUrl);
        let widthAuxliar = cuadroCentral.firstElementChild.width;
        cuadroCentral.innerHTML = '<img src="' + imageUrl + '" alt="imagenCentral">';
        cuadroCentral.firstElementChild.width = widthAuxliar;
    }

}

// Zoom out
zoomIn.addEventListener("click", ampliar);

function ampliar(e) {
    let currentWidth = cuadroCentral.firstElementChild.width;
    let newWidth = currentWidth + 30;
    if (newWidth <= cuadroCentral.clientWidth) {
        cuadroCentral.firstElementChild.width = newWidth;
    }
}

// Zoom in
zoomOut.addEventListener("click", reducir);

function reducir(e) {
    var currentWidth = cuadroCentral.firstElementChild.width;
    var newWidth = currentWidth - 30;
    if (newWidth >= 5) {
        cuadroCentral.firstElementChild.width = newWidth;
    }
}

// Cambio de color del marco al pasar el ratón por encima de los cuadros de colores
colores.addEventListener("mouseover", cambiarColor)

function cambiarColor(e) {
    if (e.target.classList.contains("negro") || e.target.classList.contains("rojo") ||
        e.target.classList.contains("azul") || e.target.classList.contains("amarillo") ||
        e.target.classList.contains("verde") || e.target.classList.contains("rosa")) {
        cuadroCentral.style.borderColor = e.target.className;
    }
}

// Restablecer el color del marco cuando el ratón sale de los cuadros de colores
colores.addEventListener("mouseout", ratonFueraColor)

function ratonFueraColor(e) {
    cuadroCentral.style.borderColor = "";
}
