// Sounds

let tomOneSound = new Audio("/sounds/tom-1.mp3");
let tomTwoSound = new Audio("/sounds/tom-2.mp3");
let tomThreeSound = new Audio("/sounds/tom-3.mp3");
let tomFourSound = new Audio("/sounds/tom-4.mp3");
// let tomTwoSound = new Audio("/sounds/tom-2.mp3");
// let tomTwoSound = new Audio("/sounds/tom-2.mp3");
// let tomTwoSound = new Audio("/sounds/tom-2.mp3");

// Buttons

var tomOneElement = document.getElementsByClassName("drum")[0];
var tomTwoElement = document.getElementsByClassName("drum")[1];
var tomThreeElement = document.getElementsByClassName("drum")[2];
var tomFourElement = document.getElementsByClassName("drum")[3];

// Event Listeners

tomOneElement.addEventListener("click", tomOnePlaySound);
tomTwoElement.addEventListener("click", tomTwoPlaySound);
tomThreeElement.addEventListener("click", tomThreePlaySound);
tomFourElement.addEventListener("click", tomFourPlaySound);

// Click Handler Function

function tomOnePlaySound() {
  tomOneSound.play();
}

function tomTwoPlaySound() {
  tomTwoSound.play();
}

function tomThreePlaySound() {
  tomThreeSound.play();
}

function tomFourPlaySound() {
  tomFourSound.play();
}
