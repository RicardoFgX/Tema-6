let parrafos = document.getElementsByTagName("p");
console.log("Número de parrafos: " + parrafos.length);
resultado.innerHTML = "<p><b>Número de párrafos:</b> " + document.getElementsByTagName("p").length + "</p>";


console.log("Contenido del segundo parrafo:\n" + parrafos[1].textContent);
resultado.innerHTML += "<p><b>Párrafo 2:</b></p><p>" + parrafos[1].textContent + "</p>";

let enlaces = document.getElementsByTagName("a")
console.log("Numero enlaces: " + enlaces.length);
resultado.innerHTML += "<p><b>Número de enlaces:</b> " + enlaces.length + "</p>";
resultado.innerHTML += "<p>" + enlaces[0] + "</p>";
resultado.innerHTML += "<p>" + enlaces[enlaces.length-2] + "</p>";

let cont = 0;
console.log(enlaces[1]);
for (let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].pathname === "/wiki/Municipio"){
        cont ++;
    }
}
resultado.innerHTML += "<p><b>Número de Enlaces que apuntan a '/wiki/Municipio':</b> " + cont + "</p>";

let aPrimer = parrafos[0].getElementsByTagName("a");

console.log(aPrimer.length);
resultado.innerHTML += "<p><b>Número de enlaces del primer párrafo:</b> " + aPrimer.length + "</p>";


