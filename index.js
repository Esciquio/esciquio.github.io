// index.js

// Espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Cambia el contenido del encabezado al hacer clic en el botón
    document.getElementById("changeTextButton").addEventListener("click", function() {
        document.getElementById("headerText").innerText = "¡Has hecho clic en el botón!";
    });

    // Cambia el color de fondo del cuerpo al hacer clic en el botón
    document.getElementById("changeColorButton").addEventListener("click", function() {
        document.body.style.backgroundColor = "#D3D3D3";
    });
});
