(()=>{"use strict";var e={958:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=r.p+"assets/audio/rain.mp3"},191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=r.p+"assets/audio/summer.mp3"},259:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=r.p+"assets/audio/winter.mp3"},568:(e,t,r)=>{r.r(t)},237:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(568);const n=o(r(191)),s=o(r(958)),a=o(r(259)),u=document.getElementsByTagName("body"),i=document.getElementById("buttonsWrapper"),c=document.querySelector("#volume-control"),l=new Audio;let d=0;function p(e,t){const r=t.target;let o=r.querySelector("div").classList[0];r.id!==String(d)&&l.paused?(r.querySelector("div").classList.remove("pause"),r.querySelector("div").classList.add(e),l.play(),d=Number(r.id)):Number(r.id)===d&&(l.pause(),r.querySelector("div").classList.remove(o),r.querySelector("div").classList.add("pause"),d=0)}function f(e){u[0].classList.remove("sun-background","rain-background","snow-background"),u[0].classList.add(`${e}`)}null==c||c.addEventListener("change",(function(e){if(null===e.target)return;const t=e.target;l.volume=Number(t.value)/100})),null==i||i.addEventListener("click",(e=>{if(null===e.target)return;switch(e.target.id){case"1":l.src=n.default,p("sun",e),f("sun-background");break;case"2":l.src=s.default,p("rain",e),f("rain-background");break;case"3":l.src=a.default,p("snow",e),f("snow-background")}}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();r(237)})();