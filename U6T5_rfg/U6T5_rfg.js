let celdas = document.querySelectorAll("td, th");

for (const item of celdas) {
    item.addEventListener('mouseenter', entrando);
    item.addEventListener('mouseleave', saliendo);
}

function entrando(e){

    let parent = e.target.parentElement;

    let hijos = parent.children;
    for (const item of hijos) {
        item.style.backgroundColor = '#F00';
    }
}

function saliendo(e){
    let parent = e.target.parentElement;

    let hijos = parent.children;
    for (const item of hijos) {
        item.style.backgroundColor = "#FFF";
        
    }
}