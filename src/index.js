"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const summer_mp3_1 = __importDefault(require("../public/assets/sounds/summer.mp3"));
const rain_mp3_1 = __importDefault(require("../public/assets/sounds/rain.mp3"));
const winter_mp3_1 = __importDefault(require("../public/assets/sounds/winter.mp3"));
const background = document.getElementsByTagName("body");
const buttonsWrapper = document.getElementById("buttonsWrapper");
const volume = document.querySelector("#volume-control");
const audio = new Audio();
let idClicked = 0;
// function playOrPause(classname : string): void {
//   let nested = event.target.querySelector("div")!.classList[0];
//   if ((event.target.id !== String(idClicked)) && audio.paused) {
//     event.target.querySelector("div")!.classList.remove("pause");
//     event.target.querySelector("div")!.classList.add(classname);
//     audio.play();
//     idClicked = Number(event.target.id);
//   } else if (Number(event.target.id) === idClicked) {
//     audio.pause();
//     event.target.querySelector("div")!.classList.remove(nested);
//     event.target.querySelector("div")!.classList.add("pause");
//     idClicked = 0;
//   }
// }
function playOrPause(classname, event) {
    const targetElement = event.target;
    let nested = targetElement.querySelector("div").classList[0];
    if ((targetElement.id !== String(idClicked)) && audio.paused) {
        targetElement.querySelector("div").classList.remove("pause");
        targetElement.querySelector("div").classList.add(classname);
        audio.play();
        idClicked = Number(targetElement.id);
    }
    else if (Number(targetElement.id) === idClicked) {
        audio.pause();
        targetElement.querySelector("div").classList.remove(nested);
        targetElement.querySelector("div").classList.add("pause");
        idClicked = 0;
    }
}
function addSomeClass(classname) {
    background[0].classList.remove("sun-background", "rain-background", "snow-background");
    background[0].classList.add(`${classname}`);
}
volume === null || volume === void 0 ? void 0 : volume.addEventListener("change", function (e) {
    if (e.target === null)
        return;
    const value = e.target;
    audio.volume = Number(value.value) / 100;
});
buttonsWrapper === null || buttonsWrapper === void 0 ? void 0 : buttonsWrapper.addEventListener("click", (event) => {
    if (event.target === null)
        return;
    const button = event.target;
    switch (button.id) {
        case "1":
            audio.src = summer_mp3_1.default;
            playOrPause("sun", event);
            addSomeClass("sun-background");
            break;
        case "2":
            audio.src = rain_mp3_1.default;
            playOrPause("rain", event);
            addSomeClass("rain-background");
            break;
        case "3":
            audio.src = winter_mp3_1.default;
            playOrPause("snow", event);
            addSomeClass("snow-background");
            break;
    }
});
