const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    audio = new Audio();

// Carga previa de los archivos de sonido en un objeto
const soundMap = {};
pianoKeys.forEach(key => {
    const keyName = key.dataset.key;
    allKeys.push(keyName);
    soundMap[keyName] = new Audio(`/assets/tunes/${keyName}.wav`); // Pre-cargar el sonido para cada tecla

    // Asignar evento de clic
    key.addEventListener("click", () => playTune(keyName));
});

// Reproducir el sonido asociado a la tecla
const playTune = (key) => {
    if (soundMap[key]) {
        soundMap[key].currentTime = 0; // Reiniciar el sonido si ya se está reproduciendo
        soundMap[key].play(); // Reproducir sonido

        // Añadir clase para la animación
        const clickedKey = document.querySelector(`[data-key=${key}]`);
        clickedKey.classList.add("active");

        // Remover la clase de animación después de 150ms
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

// Manejar el control de volumen
const handleVolume = (e) => {
    const volume = e.target.value;
    Object.values(soundMap).forEach(audio => {
        audio.volume = volume; // Ajustar el volumen de todos los sonidos
    });
};

// Mostrar u ocultar las teclas
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

// Reproducir sonido con el teclado
const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};

// Eventos
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
