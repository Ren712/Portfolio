function saludar() {
    alert("¡Hola desde JavaScript!");
  }

  function CBoton(idBoton) {
    // 1. Obtenemos el botón por su ID
    const boton = document.getElementById(idBoton);
    // 2. Verificamos que el botón exista
    if (boton) {
        // 3. Cambiamos su color de fondo
        boton.style.backgroundColor = nuevoColor;
        // Opcional: Cambiar el color del texto
        boton.style.color = 'white'; 
        // Opcional: Añadir una transición suave (CSS)
        // boton.style.transition = 'background-color 0.3s ease'; 
    }
}
