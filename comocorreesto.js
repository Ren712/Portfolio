let turno = 0; 
let nuevoColor = "red";
let text2 = "x";

function CBoton(idBoton) {
    const boton = document.getElementById(idBoton);
    turno++;

    if(turno%2==0){
        nuevoColor = "red";
        text2 = "x";
    }
    else{
        nuevoColor = "blue";
        text2 = "o";
    }

    if (boton) {
        boton.style.backgroundColor = nuevoColor;
        boton.style.color = "white";
        boton.innerText = text2;
    }
}