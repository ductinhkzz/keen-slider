!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:v(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function v(e,t){var n,r,o;if(t.singleton){var i=g++;n=h||(h=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(0),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"html{scroll-behavior:smooth}button{padding:0;background:transparent;border:none}button:focus{outline:none;box-shadow:none}.slider-wrapper{color:#fff;display:inline-block;position:relative}.keen-slider{width:calc(100vw - 30px);height:70vw}@media(min-width: 576px){.keen-slider{width:450px;height:220px}}@media(min-width: 768px){.keen-slider{width:600px;height:294px}}@media(min-width: 990px){.keen-slider{width:900px;height:440px}}.slide{height:100%;width:100%;display:flex;justify-content:center;align-items:center;position:relative}.slide img{border:none;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:auto;height:100%}@media(min-width: 576px){.slide img{width:100%;height:auto}}.arrow{position:absolute;left:5px;top:50%;transform:translateY(-50%);color:#fff;cursor:pointer;font-size:3em}.arrow.right{left:auto;right:5px}.arrow.disabled{color:gray}.svg-icon{display:inline-block;vertical-align:text-bottom}.svg-icon svg{overflow:hidden;vertical-align:middle}#dots{display:flex;padding:10px 0;justify-content:center}#dots .dot{width:10px;height:10px;background:#c5c5c5;border-radius:50%;margin:0 5px;padding:5px}#dots .dot.active{background:#000}.code-link-title{font-style:italic}.stack-group{display:flex;flex-wrap:wrap;justify-content:center}.stack-group .stack-link{font-size:2.5rem;margin:.3rem .6rem;text-decoration:none}.stack-group .stack-link.vuejs{color:#4fc08d}.stack-group .stack-link.angular{color:#dd0031}.stack-group .stack-link.react{color:#61dafb}.stack-group .stack-link.js{color:#f0db4f}.stack-group .stack-link span{font-size:.7rem;display:block;color:#212529;font-weight:bold;margin-top:-5px}.footer{font-size:.8rem}.links{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.links>.btn{margin:.3rem .3rem}",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,".keen-slider{display:block;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.keen-slider__track{display:flex;height:100%}.keen-slider__slide{height:100%;overflow:hidden}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(3),n(5);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var i=function(e,t){var n={changed:null,created:null,dragEnd:null,dragStart:null,touchControl:!0,selectorSlide:".keen-slider__slide",selectorTrack:".keen-slider__track",moveEasing:function(e){return--e*e*e+1},initialSlide:0,loop:!0,moveDuration:500},i=null,a=null,c=null,l=[],u=null,s=[],d=null,f=!1,p=null,h=null,g=0,v=null,m=null,b=null,y=null,w=null,k=0,x=null,j=0,S=null,E=null;function T(e){null!==w&&i.loop&&(w<-q()*D()-q()/2&&(k-=D(),w=-q()+q()/2-(-q()*D()-q()/2-w)),w>-q()/2&&(k+=D(),w=-q()*R()+q()/2+(w- -q()/2))),w-=e,i.loop||(w=L(w,-q()*R(),0)),c.style.transform="translate3d(".concat(w,"px, 0, 0)")}function O(e){return L(e,0,R())}function L(e,t,n){return Math.min(Math.max(e,t),n)}function M(e){f||(i.dragStart&&i.dragStart.call(re),f=!0,y=function(e){return void 0===e.targetTouches?"default":e.targetTouches[0].identifier}(e),J(),p=B(e),h=p,g=0,v=w)}function A(e){if(null!==p&&f&&function(e){return void 0===e.targetTouches||e.targetTouches[0].identifier===y}(e)){var t=B(e);!function(e){if(void 0===e.targetTouches)return;var t=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY;null===m&&(m=t);null===b&&(b=n);if(Math.abs(b-n)>=Math.abs(m-t))return m=t,b=n,!0}(e)?(e.preventDefault(),g=t-h,d=h?Math.sign(t-h):Math.sign(g-p),T(h-t),h=t):h=t}}function C(e){f&&function(e){return void 0===e.changedTouches||e.changedTouches[0].identifier===y}(e)&&(i.dragEnd&&i.dragEnd.call(re),f=!1,Y(function(e){if(e<0&&d<0)return k+1;if(e>0&&d>0)return k-1;return k}(w-v)))}function _(){return console.error("keen-slider error: markup not correct"),!1}function N(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Array.isArray(e))e.forEach((function(e){N(e,t,n,r)}));else{if(!e||!e.addEventListener)return console.info("event handler could not be assigned");e.addEventListener(t,n,r),s.push([e,t,n])}}function P(){N(a,"dragstart",(function(e){e.preventDefault()})),N(a,"mousedown",M),N(a,"mousemove",A),N(a,"mouseleave",C),N(a,"mouseup",C),N(a,"touchstart",M),N(a,"touchmove",A),N(a,"touchend",C),N(a,"touchcancel",C),N(a,"touchleave",C),N(window,"wheel",ne,{passive:!1}),N(window,"scroll",$)}function I(){s.forEach((function(e,t){e[0].removeEventListener(e[1],e[2]),delete s[t]}))}function q(){return a.offsetWidth}function B(e){return void 0===e.targetTouches?e.pageX:e.targetTouches[0].screenX}function D(){return i.loop?l.length-2:l.length}function z(){return l.length}function R(){return l.length-1}function F(){return document.hidden}function U(e){Z(e,!0);var t=function(e){return-q()*L(e,0,R())}(e);T(w-t)}function H(e){var t,n,r;Q(),i.touchControl&&P(),N(window,"orientationchange",W),N(window,"resize",W),i.loop&&(t=l[0].parentNode,n=l[0].cloneNode(!0),r=l[R()].cloneNode(!0),n.setAttribute("data-ke-sl-lo",!0),r.setAttribute("data-ke-sl-lo",!0),t.appendChild(n),t.insertBefore(r,t.firstChild),Q()),U(e),K()}function X(e){j||(j=e);var t=e-j;if(t>=i.moveDuration)return j=null,void T(S-E);var n,r=(n=t,S*i.moveEasing(n/i.moveDuration)-E);E+=r,T(r),x=window.requestAnimationFrame(X)}function Y(e){Z(e,!i.loop),J(),S=-(function(e){return-q()*e}(e)-w),E=0,window.requestAnimationFrame(X)}function J(){x&&(window.cancelAnimationFrame(x),x=null),j=null}function W(){K(),setTimeout(K,500),setTimeout(K,2e3)}function G(){i.loop&&function(){for(var e=c.querySelectorAll("[data-ke-sl-lo]"),t=0;t<e.length;t++){var n=e[t];n.parentNode.removeChild(n)}}(),I()}function K(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=window.innerWidth;if(t!==u||e){var n=q();c.style.width=n*l.length+"px",V(q()),u=t,f||U(k)}}function Q(){l="function"!=typeof i.selectorSlide?a.querySelectorAll(i.selectorSlide):i.selectorSlide()}function V(e){for(var t=0;t<l.length;t++)l[t].style.width=e+"px"}function Z(e,t){k=t?O(e):e,i.changed&&i.changed.call(re,te(k))}function $(e){f&&(f=!1,i.dragEnd&&i.dragEnd.call(re),Y(k))}function ee(e){return i.loop?e+1:e}function te(e){return i.loop?(0===e&&(e=z()-2),e===z()-1&&(e=1),(e-=1)%D()):e}function ne(e){f&&e.preventDefault()}var re={destroy:function(){G()},prev:function(){F()||Y(k-1)},next:function(){F()||Y(k+1)},moveToSlide:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O(ee(e));return t?U(n):Y(n)},reset:function(){G(),H(k)},updateLoop:function(){Q();var e=l[0].parentNode,t=l[0],n=l[1].cloneNode(!0),r=l[R()],o=l[R()-1].cloneNode(!0);n.setAttribute("data-ke-sl-lo",!0),o.setAttribute("data-ke-sl-lo",!0),e.replaceChild(n,r),e.replaceChild(o,t)},resize:function(){K(!0)},setTouchControls:function(e){e?P():I()},get current(){return te(k)},get length(){return D()}};return function(e,t){(a=function(e){if("string"==typeof e)return document.querySelector(e);return e}(e))instanceof HTMLElement==!1?_():(i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},t),(c=function(e){if("string"==typeof e)return a.querySelector(e);return e}(i.selectorTrack))instanceof HTMLElement==!1?_():(H(ee(i.initialSlide)),i.created&&i.created.call(re)))}(e,t),re};window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),new i("#slider-basic"),new i(document.getElementById("slider-with-arrows"),{loop:!1,initialSlide:1,created:function(){var e=this;document.getElementById("arrow-left").addEventListener("click",(function(){e.prev()})),document.getElementById("arrow-right").addEventListener("click",(function(){e.next()})),document.querySelectorAll(".dot").forEach((function(t,n){t.addEventListener("click",(function(){e.moveToSlide(n)}))}))},changed:function(e){var t=this,n=document.getElementById("arrow-left"),r=document.getElementById("arrow-right");0===e?n.classList.add("disabled"):n.classList.remove("disabled"),e===t.length-1?r.classList.add("disabled"):r.classList.remove("disabled"),document.querySelectorAll(".dot").forEach((function(e,n){n===t.current?e.classList.add("active"):e.classList.remove("active")}))}});var a=new i(document.getElementById("slider-autoplay"),{touchControl:!1});setInterval(a.next,2e3);var c=document.getElementById("slider-lazy-load"),l=c.querySelectorAll(".keen-slider__slide");new i(c,{created:function(){u(l[this.current])},changed:function(e){var t=this;u(l[e],(function(){t.updateLoop()}))}});function u(e,t){e&&setTimeout((function(){var n=e.querySelector("img");n.setAttribute("src",n.getAttribute("data-src")),t&&t()}),500)}}])}));
//# sourceMappingURL=keen-slider.bundle.js.map