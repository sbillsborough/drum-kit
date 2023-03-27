var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var index = 0; index < numberOfDrumButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      alert("Clicked!");
    });
}
