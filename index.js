// Sounds

let tomOneSound = new Audio("/sounds/tom-1.mp3");

// Buttons

var tomOne = document.getElementsByClassName("drum")[0];

// Click Handler Function

function tomOneClick() {
  tomOneSound.play();
}

// Event Listeners

tomOne.addEventListener("click", tomOneClick);
