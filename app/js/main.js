!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ({\n  $window: window,\n  $document: document,\n  $html: document.documentElement,\n  $body: document.body\n});\n\n//# sourceURL=webpack:///./src/js/_vars.js?')},"./src/js/functions/resize.js":
/*!************************************!*\
  !*** ./src/js/functions/resize.js ***!
  \************************************/
/*! exports provided: resizeContent */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resizeContent\", function() { return resizeContent; });\nvar resizeContent = function resizeContent(selector) {\n  var mobileWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 576;\n  var isPlugin = arguments.length > 2 ? arguments[2] : undefined;\n  var desktopAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var mobileAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n\n  if (!isPlugin) {\n    // actions with selector\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n    } else {\n      mobileAction();\n    }\n  } else {\n    if (window.innerWidth <= mobileWidth && selector.dataset.pluginActivated == 'false') {\n      mobileAction();\n      selector.dataset.pluginActivated = 'true';\n    }\n\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n      selector.dataset.pluginActivated = 'false';\n    }\n  }\n}; // plugin selector must have data-plugin-activated attribute\n\n/*\nconst slider = document.querySelector('.swiper-container');\n\nlet mySwiper;\n\nfunction sliderMobile() {\n\tmySwiper = new Swiper(slider, {\n\t\tspeed: 400,\n\t\tspaceBetween: 100\n\t});\n}\n\nfunction disableSlider() {\n\tif (slider.classList.contains('swiper-container-initialized')) {\n\t\tmySwiper.destroy();\n\t}\n}\n\nresizeContent(slider, 768, true, disableSlider, sliderMobile);\n\nwindow.addEventListener('resize', () => {\n\tresizeContent(slider, 768, true, disableSlider, sliderMobile);\n});\n\n*/\n\n//# sourceURL=webpack:///./src/js/functions/resize.js?")},"./src/js/functions/smooth-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/smooth-scroll.js ***!
  \*******************************************/
/*! exports provided: scrollTo */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollTo\", function() { return scrollTo; });\nvar scrollTo = function scrollTo(element) {\n  window.scroll({\n    behavior: 'smooth',\n    left: 0,\n    top: element.offsetTop // - document.querySelector('.nav').clientHeight,\n\n  });\n}; // usage\n// anchors.forEach((el) => {\n// \tel.addEventListener('click', (e) => {\n// \t\te.preventDefault();\n// \t\tlet id = e.currentTarget.getAttribute('href');\n// \t\tscrollTo(document.querySelector(id))\n// \t});\n// });\n\n//# sourceURL=webpack:///./src/js/functions/smooth-scroll.js?")},"./src/js/functions/stop-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/functions/stop-scroll.js ***!
  \*****************************************/
/*! exports provided: disableScroll, enableScroll */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScroll\", function() { return disableScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScroll\", function() { return enableScroll; });\nvar disableScroll = function disableScroll(fix) {\n  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';\n  document.body.style.paddingRight = paddingOffset;\n  fix.forEach(function (el) {\n    el.style.paddingRight = paddingOffset;\n  });\n  var pagePosition = window.scrollY;\n  document.body.classList.add('disable-scroll');\n  document.body.dataset.position = pagePosition;\n  document.body.style.top = -pagePosition + 'px';\n};\nvar enableScroll = function enableScroll(fix) {\n  var pagePosition = parseInt(document.body.dataset.position, 10);\n  document.body.style.top = 'auto';\n  document.body.classList.remove('disable-scroll');\n  fix.forEach(function (el) {\n    el.style.paddingRight = '0px';\n  });\n  body.style.paddingRight = '0px';\n  window.scroll({\n    top: pagePosition,\n    left: 0\n  });\n  document.body.removeAttribute('data-position');\n};\n\n//# sourceURL=webpack:///./src/js/functions/stop-scroll.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ \"./src/js/_vars.js\");\n/* harmony import */ var _functions_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/resize */ \"./src/js/functions/resize.js\");\n/* harmony import */ var _functions_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/smooth-scroll */ \"./src/js/functions/smooth-scroll.js\");\n/* harmony import */ var _functions_stop_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/stop-scroll */ \"./src/js/functions/stop-scroll.js\");\n\n\n\n\n\nwindow.onload = function () {\n  var burger = document.querySelector('.header__burger');\n  var navClose = document.querySelector('.nav__close');\n  var nav = document.querySelector('.menu');\n  burger.addEventListener('click', function () {\n    nav.classList.add('nav--visible');\n  });\n  navClose.addEventListener('click', function () {\n    nav.classList.remove('nav--visible');\n  });\n};\n\n//# sourceURL=webpack:///./src/js/main.js?")}});