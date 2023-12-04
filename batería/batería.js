let numberOfButtons = document.querySelectorAll(".button").length;

for (let j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j].addEventListener("click", function(){
        
        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}
 
    document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
 });

 function sound(key) {
    switch (key) {
        case "a":
            let sound1 = new Audio("assets/drums/R8-Cl-Hi-Hat.wav");
            sound1.play();
            break;

            case "s":
            let sound2 = new Audio("assets/drums/R8-Crash.wav");
            sound2.play();
            break;

            case "d":
            let sound3 = new Audio("assets/drums/R8-Hi-Tom.wav");
            sound3.play();
            break;

            case "f":
            let sound4 = new Audio("assets/drums/R8-Kick-1.wav");
            sound4.play();
            break;

            case "j":
            let sound5 = new Audio("assets/drums/R8-Low-Tom.wav");
            sound5.play();
            break;

            case "k":
            let sound6 = new Audio("assets/drums/R8-Open-Hi-Hat.wav");
            sound6.play();
            break;

            case "l":
            let sound7 = new Audio("assets/drums/R8-Snare-1.wav");
            sound7.play();
            break;

            default: console.log(key);

    }
 }
        function animation(currentKey) {
            let activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("animation");

            setTimeout(function() {
                activeButton.classList.remove("animation");
            }, 100);
        }




