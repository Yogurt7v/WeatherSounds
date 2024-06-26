"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const summer_mp3_1 = __importDefault(require("../public/assets/sounds/summer.mp3"));
const rain_mp3_1 = __importDefault(require("../public/assets/sounds/rain.mp3"));
const winter_mp3_1 = __importDefault(require("../public/assets/sounds/winter.mp3"));
const backgroundElement = document.getElementsByTagName("body")[0];
const buttonsWrapper = document.getElementById("buttonsWrapper");
const volumeInput = document.querySelector("#volume-control");
const audio = new Audio();
audio.currentTime = 0;
let currentButtonId = null;
const classnames = ["sun", "rain", "snow"];
function playOrPause(buttonClass, soundUrl, event) {
    return __awaiter(this, void 0, void 0, function* () {
        const clickedButton = event.target;
        const buttonClassList = clickedButton.querySelector("div").classList;
        audio.src = soundUrl;
        if (clickedButton.id !== (currentButtonId === null || currentButtonId === void 0 ? void 0 : currentButtonId.toString())) {
            const buttonsArray = document.querySelectorAll("button");
            for (let i = 0; i < buttonsArray.length; i++) {
                buttonsArray[i].querySelector("div").classList.remove("pause");
                buttonsArray[i].querySelector("div").classList.add(classnames[i]);
            }
            // buttonClassList.remove("pause");
            // buttonClassList.add(buttonClass);
            yield audio.play();
            currentButtonId = Number(clickedButton.id);
        }
        else {
            buttonClassList.remove(buttonClass);
            buttonClassList.add("pause");
            audio.pause();
            currentButtonId = null;
        }
    });
}
function updateBackground(backgroundClass) {
    const backgroundClassList = backgroundElement.classList;
    backgroundClassList.remove("sun-background", "rain-background", "snow-background");
    backgroundClassList.add(backgroundClass);
}
volumeInput === null || volumeInput === void 0 ? void 0 : volumeInput.addEventListener("change", () => {
    audio.volume = Number(volumeInput.value) / 100;
});
buttonsWrapper === null || buttonsWrapper === void 0 ? void 0 : buttonsWrapper.addEventListener("click", (event) => {
    const clickedButton = event.target;
    switch (clickedButton.id) {
        case "1":
            playOrPause("sun", summer_mp3_1.default, event);
            updateBackground("sun-background");
            break;
        case "2":
            playOrPause("rain", rain_mp3_1.default, event);
            updateBackground("rain-background");
            break;
        case "3":
            playOrPause("snow", winter_mp3_1.default, event);
            updateBackground("snow-background");
            break;
    }
});
