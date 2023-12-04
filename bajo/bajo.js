const string1 = document.getElementById("string1Sound");
const string2 = document.getElementById("string2Sound");
const string3 = document.getElementById("string3Sound");
const string4 = document.getElementById("string4Sound");

const stringElements = document.querySelectorAll(".string");


stringElements.forEach((string, index) => {
    string.addEventListener("click", () => {

        switch (index) {
            case 0:
                string1.currentTime = 0;
                string1.play();
                break;
            case 1:
                string2.currentTime = 0;
                string2.play();
                break;
            case 2:
                string3.currentTime = 0;
                string3.play();
                break;
            case 3:
                string4.currentTime = 0;
                string4.play();
                break;
        }
    });
});

function playSound(key) {
    switch (key) {
        case "a":
            string1.currentTime = 0;
            string1.play();
            break;
        case "s":
            string2.currentTime = 0;
            string2.play();
            break;
        case "d":
            string3.currentTime = 0;
            string3.play();
            break;
        case "f":
            string4.currentTime = 0;
            string4.play();
            break;

    }
}


document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === "a" || key === "s" || key === "d" || key === "f") {
        playSound(key);
    }
});

