let buttons = document.querySelectorAll(".buttons");
let screen = document.querySelector("#screen");
const clickSound = new Audio("button_click.mp3");
let string = "";

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        playSound();

        string = eval(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        playSound();

        string = "";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "Del") {
        playSound();

        string = string.slice(0, -1);
        document.querySelector("input").value = string;
      } else {
        playSound();
        console.log(e.target);
        console.log(e.target.innerHTML);
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    } catch (error) {
      string = "Error";
      document.querySelector("input").value = string;
    }
  });
});
