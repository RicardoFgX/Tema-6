let lista = document.getElementsByTagName("li");
console.log(lista);

for (const item of lista) {
    item.addEventListener("click", marcado);
}

function marcado(e){
    if(e.target.className != "done"){
        e.target.className = "done";
    } else{
        e.target.className = "";
    }
}