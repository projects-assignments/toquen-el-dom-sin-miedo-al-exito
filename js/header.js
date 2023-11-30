var header = document.getElementById("miHeader");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.classList.add("pequeno");// Hace más peque
        header.classList.remove("animado"); // Remueve la animación
        header.style.height = "10vh"; // Altura
        header.style.width = "40%"; // Tamaño el header
        header.style.marginLeft = 0; // Alineación a la izquierda
    }else {
        header.classList.remove("pequeno");
        header.style.width = "100%"; // Ancho completo al hacer scroll hacia arriba del todo
        header.style.justifyContent = "space.between"; 
}});


document.addEventListener("click", function(event) {
    if (!header.contains(event.target)) {
        header.classList.remove("pequeno");
        header.style.width = "100%";
        header.style.justifyContent = "";
    }
})


header.addEventListener("click", function() {
    header.classList.toggle("animado"); // toogle animado al hacer click

if (!header.classList.contains("animado")) { // verifica la clase animago si no está presente
    header.style.width = "100%"; // Si no está presente, el ancho vuelve al 100%
}
});