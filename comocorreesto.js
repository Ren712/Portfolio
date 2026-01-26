let jugadorActual = "X"; 
let colorAct = "red";
let tablero = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
let ganadosx = 0;
let ganadoso = 0;

  function reload(){
      location.reload(); // Esta función recarga la página actual
  }

  function hayGanador(f, c, jugador) {

    // 1️⃣ Fila
    if (
      tablero[f][0] === jugador &&
      tablero[f][1] === jugador &&
      tablero[f][2] === jugador
    ) {
      return true;
    }
  
    // 2️⃣ Columna
    if (
      tablero[0][c] === jugador &&
      tablero[1][c] === jugador &&
      tablero[2][c] === jugador
    ) {
      return true;
    }
  
    // 3️⃣ Diagonal principal
      if (
        tablero[0][0] === jugador &&
        tablero[1][1] === jugador &&
        tablero[2][2] === jugador
      ) {
        return true;
      }
  
    // 4️⃣ Diagonal secundaria
      if (
        tablero[0][2] === jugador &&
        tablero[1][1] === jugador &&
        tablero[2][0] === jugador
      ) {
        return true;
      }
  
    return false;
  }
  
  function mostrarPopup(texto) {
    document.getElementById("mensaje").textContent = texto;
    document.getElementById("popup1").classList.remove("oculto");
    pausar();
  }
  
  function cerrarPopup() {
    document.getElementById("popup1").classList.add("oculto");
    tablero = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  }

  function pausar(){
    const elementos = document.querySelectorAll('.celda');
    elementos.forEach(elemento => {elemento.style.pointerEvents = 'none';});
    document.getElementById("contenido").classList.add("capa-oscura");

  }
  
  function jugar(boton) {
    const f = parseInt(boton.dataset.fila);
    const c = parseInt(boton.dataset.col);

    document.getElementById("cons").classList.add("oculto");
  
    if (tablero[f][c] !== "") return;
  
    tablero[f][c] = jugadorActual;
    boton.textContent = jugadorActual;
    
    boton.classList.add(jugadorActual.toLowerCase());

    if (hayGanador(f, c, jugadorActual)) {
      mostrarPopup("Ganó " + jugadorActual + "!!");
      if (jugadorActual=="X") {
        ganadosx++;
      }else{
        ganadoso++;
      }
      document.getElementById("cons").classList.remove("oculto");
      document.getElementById("cons").textContent = 'Ganados x:' + ganadosx + '- Ganados o:'+ ganadoso;
    }

    boton.disabled = true;
    jugadorActual = jugadorActual === "X" ? "O" : "X";
  }