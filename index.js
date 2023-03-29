// Length of returned array from querySelectorAll method
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// standard for loop that increments the index as long as the index is less than the length of the numberOfDrumButtons array and adds an event listener with each iteration
for (var index = 0; index < numberOfDrumButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      this.style.color = "white";
    });
}
