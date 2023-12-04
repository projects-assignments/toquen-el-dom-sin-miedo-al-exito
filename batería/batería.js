var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j].addEventListener("click", function(){
        
        var buttonStyle = this.innerHTML;
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
            var sound1 = new Audio("assets/drums/R8-Cl-Hi-Hat.wav");
            sound1.play();
            break;

            case "s":
            var sound2 = new Audio("assets/drums/R8-Crash.wav");
            sound2.play();
            break;

            case "d":
            var sound3 = new Audio("assets/drums/R8-Hi-Tom.wav");
            sound3.play();
            break;

            case "f":
            var sound4 = new Audio("assets/drums/R8-Kick-1.wav");
            sound4.play();
            break;

            case "j":
            var sound5 = new Audio("assets/drums/R8-Low-Tom.wav");
            sound5.play();
            break;

            case "k":
            var sound6 = new Audio("assets/drums/R8-Open-Hi-Hat.wav");
            sound6.play();
            break;

            case "l":
            var sound7 = new Audio("assets/drums/R8-Snare-1.wav");
            sound7.play();
            break;

            default: console.log(key);

    }
 }
        function animation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("animation");

            setTimeout(function() {
                activeButton.classList.remove("animation");
            }, 100);
        }




