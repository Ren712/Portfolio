let jugadorActual = "X"; 
let nuevoColor = "red";
let text2 = "x";
let tablero = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

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
    if (f === c) {
      if (
        tablero[0][0] === jugador &&
        tablero[1][1] === jugador &&
        tablero[2][2] === jugador
      ) {
        return true;
      }
    }
  
    // 4️⃣ Diagonal secundaria
    if (f + c === 2) {
      if (
        tablero[0][2] === jugador &&
        tablero[1][1] === jugador &&
        tablero[2][0] === jugador
      ) {
        return true;
      }
    }
  
    return false;
  }
  
  function jugar(boton) {
    const f = parseInt(boton.dataset.fila);
    const c = parseInt(boton.dataset.col);
  
    if (tablero[f][c] !== "") return;
  
    tablero[f][c] = jugadorActual;
    boton.textContent = jugadorActual;
  
    if (hayGanador(f, c, jugadorActual)) {
      alert("Ganó " + jugadorActual);
    }
  
    jugadorActual = jugadorActual === "X" ? "O" : "X";
  }