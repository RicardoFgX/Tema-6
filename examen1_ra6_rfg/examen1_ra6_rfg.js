//Variable que guarda todos los elementos con la etiqueta 'li'
let lista = document.getElementsByTagName("li");
//Prueba para ver el número de 'li' que existen en el html
console.log(lista);

//Para cada 'li' se crea un eventListener
for (const item of lista) {
    item.addEventListener("click", marcado);
}

//Función que cambia el classname de un 'li' por 'done' en caso de que no fuera esa su clase previamente. 
//Si ya poseía ese nombre, se sustituye por vacio para quitar los estilos de la clase 'done'.
function marcado(e){
    if(e.target.className != "done"){
        e.target.className = "done";
    } else{
        e.target.className = "";
    }
}