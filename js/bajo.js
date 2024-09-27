const stringSounds = [
    document.getElementById("string1Sound"),
    document.getElementById("string2Sound"),
    document.getElementById("string3Sound"),
    document.getElementById("string4Sound")
];

const stringElements = document.querySelectorAll(".string");

// Reproducción de sonido al hacer clic en las cuerdas
stringElements.forEach((string, index) => {
    string.addEventListener("click", () => {
        const sound = stringSounds[index];
        sound.currentTime = 0; // Reiniciar el sonido si ya se está reproduciendo
        sound.play();          // Reproducir el sonido
        string.classList.add("clicked"); // Añadir la clase de animación

        // Remover la animación después de que termine la interacción
        setTimeout(() => {
            string.classList.remove("clicked");
        }, 400); // Duración de la animación (0.8s)
    });
});

// Reproducción de sonido al presionar teclas del teclado
function playSound(key) {
    const soundMap = {
        "a": stringSounds[0],  // Cuerda 1
        "s": stringSounds[1],  // Cuerda 2
        "d": stringSounds[2],  // Cuerda 3
        "f": stringSounds[3]   // Cuerda 4
    };

    const sound = soundMap[key];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    playSound(key);
});
