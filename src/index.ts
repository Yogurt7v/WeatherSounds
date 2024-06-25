import "./index.css";
import sunSound from "../public/assets/sounds/summer.mp3";
import rainSound from "../public/assets/sounds/rain.mp3";
import winterSound from "../public/assets/sounds/winter.mp3";

const background = document.getElementsByTagName("body");
const buttonsWrapper = document.getElementById("buttonsWrapper");
const volume = document.querySelector("#volume-control");

const audio = new Audio();
let idClicked: number = 0;

function playOrPause(classname: string, event: MouseEvent): void {
  const targetElement = event.target as Element;
  let nested = targetElement.querySelector("div")!.classList[0];

  console.log("targetElement", targetElement.id);
  console.log("idClicked", idClicked);
  

  if ((targetElement.id !== String(idClicked)) && audio.paused) {
    targetElement.querySelector("div")!.classList.remove("pause");
    targetElement.querySelector("div")!.classList.add(classname);
    audio.play();
    idClicked = Number(targetElement.id);
  } else if (Number(targetElement.id) === idClicked) {
    audio.pause();
    targetElement.querySelector("div")!.classList.remove(nested);
    targetElement.querySelector("div")!.classList.add("pause");
    idClicked = 0;
  }
}

function addSomeClass(classname: string): void {
  background[0].classList.remove(
    "sun-background",
    "rain-background",
    "snow-background"
  );
  background[0].classList.add(`${classname}`);
}

volume?.addEventListener("change", function (e) {
  if (e.target === null) return;
  const value = (e.target as HTMLInputElement);
  audio.volume = Number(value.value) / 100;
});

buttonsWrapper?.addEventListener("click", (event) => {
  if (event.target === null) return
  const button = event.target as HTMLButtonElement;

  switch (button.id) {
    case "1":
      audio.src = sunSound;
      playOrPause("sun", event);
      addSomeClass("sun-background");
      break;
    case "2":
      audio.src = rainSound;
      playOrPause("rain", event);
      addSomeClass("rain-background");
      break;
    case "3":
      audio.src = winterSound;
      playOrPause("snow", event);
      addSomeClass("snow-background");
      break;
  }
});
