// Sounds

let tomOneSound = new Audio("/sounds/tom-1.mp3");
let tomTwoSound = new Audio("/sounds/tom-2.mp3");

// Buttons

var tomOneElement = document.getElementsByClassName("drum")[0];
var tomTwoElement = document.getElementsByClassName("drum")[1];

// Event Listeners

tomOneElement.addEventListener("click", tomOnePlaySound);
tomTwoElement.addEventListener("click", tomTwoPlaySound);

// Click Handler Function

function tomOnePlaySound() {
  tomOneSound.play();
}

function tomTwoPlaySound() {
  tomTwoSound.play();
}
