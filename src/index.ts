import "./index.css";
import summerSound from "../public/assets/sounds/summer.mp3";
import rainSound from "../public/assets/sounds/rain.mp3";
import winterSound from "../public/assets/sounds/winter.mp3";

const backgroundElement = document.getElementsByTagName("body")[0];
const buttonsWrapper = document.getElementById("buttonsWrapper");
const volumeInput = document.querySelector("#volume-control") as HTMLInputElement;

const audio = new Audio();
let currentButtonId: number | null = null;
const classnames: string[] = ["sun", "rain", "snow"];

async function playOrPause(buttonClass: string, soundUrl: string, event: MouseEvent): Promise<void> {
  const clickedButton = event.target as HTMLButtonElement;
  const buttonClassList = clickedButton.querySelector("div")!.classList;
  audio.src = soundUrl;
  
  if (clickedButton.id !== currentButtonId?.toString()) {
    const buttonsArray = document.querySelectorAll("button");
    for (let i = 0; i < buttonsArray.length; i++) {
      buttonsArray[i].querySelector("div")!.classList.remove("pause");
      buttonsArray[i].querySelector("div")!.classList.add(classnames[i]);
    }
    await audio.play();
    currentButtonId = Number(clickedButton.id);
  } else {
    buttonClassList.remove(buttonClass);
    buttonClassList.add("pause");
    audio.pause();
    currentButtonId = null;
  }
}

function updateBackground(backgroundClass: string): void {
  const backgroundClassList = backgroundElement.classList;
  backgroundClassList.remove("sun-background", "rain-background", "snow-background");
  backgroundClassList.add(backgroundClass);
}

volumeInput?.addEventListener("change", () => {
  audio.volume = Number(volumeInput.value) / 100;
});

buttonsWrapper?.addEventListener("click", (event) => {
  const clickedButton = event.target as HTMLButtonElement;

  switch (clickedButton.id) {
    case "1":
      playOrPause("sun", summerSound, event);
      updateBackground("sun-background");
      break;
    case "2":
      playOrPause("rain", rainSound, event);
      updateBackground("rain-background");
      break;
    case "3":
      playOrPause("snow", winterSound, event);
      updateBackground("snow-background");
      break;
  }
});

