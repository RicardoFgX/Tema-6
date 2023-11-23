let numeroListas = 2;
let numeroElementosListas = 3;

//Función que carga la página
function generate_card() {
    // Crear un div con la clase 'container'
    let contenedor = document.createElement("div");
    contenedor.classList.add("container");

    // Crear dos listas ul con varios elementos li
    for (let i = 1; i <= numeroListas; i++) {
        let ul = document.createElement("ul");
        for (let j = 1; j <= numeroElementosListas; j++) {
            let li = document.createElement("li");
            li.textContent = i + "." + j;
            ul.appendChild(li);
        }
        contenedor.appendChild(ul);
    }

    // Crear un párrafo con texto específico
    let parrafo = document.createElement("p");
    parrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque nobis vitae, animi quis eligendi laudantium odio esse id sit, commodi modi voluptatum qui eveniet omnis atque, eius blanditiis ipsam.";
    contenedor.appendChild(parrafo);

    // Crear un encabezado h1 con el texto 'hola'
    let textoFinal = document.createElement("h1");
    textoFinal.textContent = "hola";
    contenedor.appendChild(textoFinal);

    // Agregar el div al html
    document.body.appendChild(contenedor);
}

// Llamar a la función cuando se carga la página
generate_card();
