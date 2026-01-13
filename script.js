const scenes = document.querySelectorAll(".scene");
const song = document.getElementById("song");
const startBtn = document.querySelector(".start");
const fadeOut = document.querySelector(".fade-out");

let current = 0;

function startFilm() {
  startBtn.style.display = "none";
  song.play();

  scenes[0].classList.add("active");

  setTimeout(() => changeScene(), 8000);
  setTimeout(() => changeScene(), 16000);

  // fade to black near song end
  setTimeout(() => {
    fadeOut.classList.add("active");
  }, 21000);
}

function changeScene() {
  scenes[current].classList.remove("active");
  current++;
  if (scenes[current]) {
    scenes[current].classList.add("active");
  }
}
