// Varaibles sacadas de las etiquetas html
let contenedorCentral = document.getElementById("contenedorCentral");
let cuadroCentral = document.getElementById("cuadro");
let lateralIzquierdo = document.getElementById("lateralIzquierdo");
let lateralDerecho = document.getElementById("lateralDerecho");
let imagenCentral = document.getElementById("imagenCentral");
let zoomIn = document.getElementById("zoomIn");
let zoomOut = document.getElementById("zoomOut");
let colores = document.getElementById("colores");

console.log(colores);

//Función inicial poner tamaño al inicio del programa
function inicio() {
    cuadroCentral.firstElementChild.width = 150;
}
inicio();

// Cambiar la imagen del cuadro al hacer click en las imagenes
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

// Ampliar la imagen al hacer click en la imagen zoomIn. Como la imagen es cuadrada, se tiene en cuenta la longituD con respecto a la altura del cuadro, ya que toca primera por el alto del cuadroo
zoomIn.addEventListener("click", ampliar);

function ampliar(e) {
    let d1 = imagenCentral.offsetWidth;
    console.log(d1);
    let d2 = imagenCentral.offsetHeight;
    console.log(d2);
    if (d1 + 30 <= cuadroCentral.offsetWidth && d2 + 30 <= cuadroCentral.offsetHeight) {
        imagenCentral.width += 30;
    }
}

// Reducir la imagen al hacer click en la imagen zoomOut. Como la imagen es cuadrada, se tiene en cuenta la longituD con respecto a la altura del cuadro, ya que toca primera por el alto del cuadroo
zoomOut.addEventListener("click", reducir);

function reducir(e) {
    let d1 = imagenCentral.offsetWidth;
    console.log(d1);
    let d2 = imagenCentral.offsetHeight;
    console.log(d2);
    if (d1 - 30 >= 5) {
        imagenCentral.width += -30;
    }
}

// Cambio de color del marco al pasar el ratón por encima de los cuadros de colores
colores.addEventListener("mouseover", cambiarColor);

function cambiarColor(e) {
    let color = window.getComputedStyle(e.target).backgroundColor;
    if (!(color === "rgba(0, 0, 0, 0)")) {
        cuadroCentral.style.borderColor = color;
    }

    /*
    if (e.target.className == "black" || e.target.className == "red" ||
        e.target.className == "blue" || e.target.className == "yellow" ||
        e.target.className == "green" || e.target.className == "pink") {
        cuadroCentral.style.borderColor = e.target.className;
    }
    */
}


// Restablecer el color del marco cuando el ratón sale de los cuadros de colores. Color default = negro
colores.addEventListener("mouseout", ratonFueraColor)

function ratonFueraColor(e) {
    cuadroCentral.style.borderColor = "black";
}
