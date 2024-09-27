// Selecciona todos los botones solo una vez
const buttons = document.querySelectorAll(".button");
const numberOfButtons = buttons.length;

// Objeto de teclas a sonidos
const soundMap = {
    "a": "assets/sounds/R8-Cl-Hi-Hat.wav",
    "f": "assets/sounds/R8-Crash.wav",
    "s": "assets/sounds/R8-Hi-Tom.wav",
    "d": "assets/sounds/R8-Kick-1.wav",
    "k": "assets/sounds/R8-Low-Tom.wav",
    "j": "assets/sounds/R8-Open-Hi-Hat.wav",
    "l": "assets/sounds/R8-Snare-1.wav"
};

// Predefine los sonidos para evitar recargar el mismo sonido cada vez
const soundElements = {};
for (const key in soundMap) {
    soundElements[key] = new Audio(soundMap[key]);
}

// Asigna eventos de clic a los botones
for (let j = 0; j < numberOfButtons; j++) {
    buttons[j].addEventListener("click", function() {
        let buttonStyle = this.innerHTML;
        playSound(buttonStyle);
        triggerAnimation(buttonStyle);
    });
}

// Asigna el evento de tecla presionada
document.addEventListener("keypress", function(event) {
    const key = event.key;
    playSound(key);
    triggerAnimation(key);
});

// Función para reproducir sonido
function playSound(key) {
    if (soundElements[key]) {
        soundElements[key].currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
        soundElements[key].play();
    } else {
        console.log("No sound for key: " + key);
    }
}

// Función para la animación del botón
function triggerAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("animation");

        setTimeout(function() {
            activeButton.classList.remove("animation");
        }, 100);
    }
}


