// Detecting Button Press

// Length of returned array from querySelectorAll method
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// standard for loop that increments the index as long as the index is less than the length of the numberOfDrumButtons array and adds an event listener with each iteration
for (var index = 0; index < numberOfDrumButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;

      characterChecker(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  characterChecker(event.key);

  buttonAnimation(event.key);
});

// function that takes a character and checks it against the switch statement in order to play the correct sound, then call it inside of the event listener for keypress and inside of the event listener for the drum buttons

function characterChecker(character) {
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// button animation function

function buttonAnimation(currentKey) {
  // assign current key to a variable
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  function removePressedClass() {
    activeButton.classList.remove("pressed");
  }
  var countDown = 1 / 10;
  setTimeout(removePressedClass, countDown);
}
