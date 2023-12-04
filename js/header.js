var header = document.getElementById("miHeader");
var initialHeaderHeight = header.clientHeight; // Guardar la altura inicial del encabezado

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.classList.add("pequeno");// Agregar la clase "pequeno"
        header.classList.remove("animado");// Remover la clase "animado"
        header.style.height = initialHeaderHeight + "px"; // Restaurar la altura inicial del encabezado
        header.style.width = "50%"; // Ajustar el ancho
        header.style.logo.marginLeft = "0px";
        header.style.justifyContent = "flex-end";
        header.style.Left = 0; // Ajustar el margen
    } else {
        header.classList.remove("pequeno"); // Remover la clase "pequeno"
        header.style.width = "100%"; // Ajustar el ancho
        header.style.justifyContent = "space-between"; // Ajustar el margen
    }
});

document.addEventListener("click", function(event) { // Evento de click en el documento
    if (!header.contains(event.target)) { // Verificar si el elemento clickeado no es el encabezado
        header.classList.remove("pequeno"); // Remover la clase "pequeno"
        header.style.width = "100%"; // Ajustar el ancho
        header.style.justifyContent = ""; // Ajustar el margen
    }
});

header.addEventListener("click", function() {
    header.classList.toggle("animado");

    if (!header.classList.contains("animado")) {
        header.style.width = "100%";
    }
})


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navList.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        navList.classList.remove('show');
    }
});

// const header = document.querySelector('header')

// function disableWidthAnimationOnSmallScreens() {
//     const windowWidth = window.innerWidth;
//     const header = document.querySelector('header');
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     if (windowWidth <= 768) {
//       header.style.transition = "none";
//       hamburgerMenu.classList.add('active');
//       navList.classList.add('show');

//     } else {
//       header.style.transition = "";
//       hamburgerMenu.classList.remove('active');
//       navList.classList.remove('show');
//   }
// }
// // Llama a la función al cargar la página y al cambiar el tamaño de la ventana
// window.addEventListener('load', disableAnimationOnSmallScreens);
// window.addEventListener('resize', disableAnimationOnSmallScreens);