import "./index.css";
import sunSound from "../public/assets/sounds/summer.mp3";
import rainSound from "../public/assets/sounds/rain.mp3";
import winterSound from "../public/assets/sounds/winter.mp3";

const background = document.getElementsByTagName("body");
const buttonsWrapper = document.getElementById("buttonsWrapper");
const volume = document.querySelector("#volume-control");

const audio = new Audio();
let idClicked = 0;

function playOrPause(classname) {
  let nested = event.target.querySelector("div").classList[0];
  console.log(nested);
  if (event.target.id !== idClicked && audio.paused) {
    event.target.querySelector("div").classList.remove("pause");
    event.target.querySelector("div").classList.add(classname);
    audio.play();
    idClicked = event.target.id;
  } else if (event.target.id === idClicked) {
    audio.pause();
    event.target.querySelector("div").classList.remove(nested);
    event.target.querySelector("div").classList.add("pause");
    idClicked = 0;
  }
}

function addSomeClass(classname) {
  background[0].classList.remove(
    "sun-background",
    "rain-background",
    "snow-background"
  );
  background[0].classList.add(`${classname}`);
}

volume.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value / 100;
});

buttonsWrapper.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "1":
      audio.src = sunSound;
      playOrPause("sun");
      addSomeClass("sun-background");
      break;
    case "2":
      audio.src = rainSound;
      playOrPause("rain");
      addSomeClass("rain-background");
      break;
    case "3":
      audio.src = winterSound;
      playOrPause("snow");
      addSomeClass("snow-background");
      break;
  }
});
