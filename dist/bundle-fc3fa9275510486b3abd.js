!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=function(e){var t=document.querySelector(".words"),n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),document.execCommand("copy")};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"start",value:function(e){e.classList.add("anim-pulse")}},{key:"stop",value:function(e){e.classList.remove("anim-pulse")}}],(n=null)&&o(t.prototype,n),r&&o(t,r),e}();function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(){document.querySelector(".copy-btn").addEventListener("click",r),function(){var e=!1,t=new(window.SpeechRecognition||window.webkitSpeechRecognition),n=document.querySelector(".speak-btn"),r=document.querySelector(".stop-btn"),o=document.querySelector(".svg-holder");t.interimResults=!0,t.lang="en-US";var a=document.createElement("p"),u=document.querySelector(".words");u.appendChild(a),t.addEventListener("result",function(e){var t=c(e.results).map(function(e){return e[0]}).map(function(e){return e.transcript}).join("");a.textContent=t,e.results[0].isFinal&&(a=document.createElement("p"),u.appendChild(a)),t.includes("hello")&&console.log("unicorn 🦄");var n=t.replace(/poop|poo|shit|dump|unicorn/gi,"💩");a.textContent=n}),t.addEventListener("end",function(){e?t.stop():t.start()}),n.addEventListener("click",function(){e=!1,t.start(),i.start(o),n.classList.add("disabled"),r.classList.remove("disabled")}),r.addEventListener("click",function(){e=!0,t.stop(),i.stop(o),n.classList.remove("disabled"),r.classList.add("disabled")})}()};window.onload=function(){console.log("%c Loaded","color:lightgreen;"),a()}}]);