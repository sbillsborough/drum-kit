let btns = document.querySelectorAll(".drum");

for (index of btns) {
  index.addEventListener("click", function () {
    alert("Clicked!");
  });
}
