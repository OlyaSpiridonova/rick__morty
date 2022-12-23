/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/layouts/layouts.js":
/*!***********************************!*\
  !*** ./src/js/layouts/layouts.js ***!
  \***********************************/
/*! exports provided: clearContainer, layoutCharacterSelector, layoutCharacterEpisode, layoutEpisodeSelector, layoutCharactersSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearContainer", function() { return clearContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharacterSelector", function() { return layoutCharacterSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharacterEpisode", function() { return layoutCharacterEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutEpisodeSelector", function() { return layoutEpisodeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharactersSelector", function() { return layoutCharactersSelector; });
function clearContainer(selector) {
  selector.querySelectorAll('*').forEach(n => n.remove());
}
function layoutEpisodeSelector(episodeID) {
  return `<a class="links__episode" episode-selector="${episodeID}">Episode ${episodeID}</a>`;
}
function layoutCharactersSelector(image, name, species, status, characterID) {
  return `<li class="links__ep" character-selector='${characterID}'>
                    <img src=${image}>
                    <p id='name'>${name}</p>
                    <p id='name'>${species + " | " + status}</p>
                </li>`;
}
function layoutCharacterSelector(image, name, species, gender, status, originName) {
  return `<div characterDescription-selector>
                    <img src=${image}>
                    <div class = "character_description">
                        <h2>${name}</h2>
                        <p class='character_name'>${species + " | " + gender + " | " + status}</p>
                        <p class='location'>${"Origin: " + originName}</p>
                    </div>
                </div>
                <ul class="character__episode"></ul>`;
}
function layoutCharacterEpisode(name, episode) {
  return `
            <li class='link__episode'>
                 <h3>${name}</h3>
                 <p>${episode}</p>
            </li>`;
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_updateNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/updateNav */ "./src/js/modules/updateNav.js");
/* harmony import */ var _modules_showEpisode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showEpisode */ "./src/js/modules/showEpisode.js");
/* harmony import */ var _modules_showCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showCharacter */ "./src/js/modules/showCharacter.js");



document.addEventListener("click", handleClick);
function handleClick(_ref) {
  let {
    target
  } = _ref;
  handleIfEpisodeSelector(target);
  handleIfCharacterSelector(target);
}
function handleIfEpisodeSelector(target) {
  console.log("target", target);
  if (!defineElementByAttribute(target, "episode-selector")) return;
  const episodeSelector = defineElementByAttribute(target, "episode-selector");
  const episodeID = episodeSelector.getAttribute("episode-selector");
  Object(_modules_showEpisode__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://rickandmortyapi.com/api/episode/${episodeID}`);
}
function handleIfCharacterSelector(target) {
  console.log("target", target);
  if (!defineElementByAttribute(target, "character-selector")) return;
  const characterSelector = defineElementByAttribute(target, "character-selector");
  const characterID = characterSelector.getAttribute("character-selector");
  Object(_modules_showCharacter__WEBPACK_IMPORTED_MODULE_2__["default"])(`https://rickandmortyapi.com/api/character/${characterID}`);
}
function defineElementByAttribute(target, dataAttributeSelector) {
  const element = target.hasAttribute(dataAttributeSelector) ? target : target.closest(`[${dataAttributeSelector}]`) ? target.closest(`[${dataAttributeSelector}]`) : false;
  console.log("target", target);
  console.log("element", element);
  console.log("dataAttributeSelector", dataAttributeSelector);
  return element;
}
Object(_modules_updateNav__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/modules/showCharacter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/showCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/layouts */ "./src/js/layouts/layouts.js");


async function showCharacter(characterURL) {
  const character = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacter"])(characterURL);
  const {
    image,
    name,
    species,
    gender,
    status,
    origin
  } = character;
  const mainContainer = document.querySelector('.main__container');
  Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["clearContainer"])(mainContainer);
  mainContainer.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterSelector"])(image, name, species, gender, status, origin.name));
  for (let i = 0; i < character.episode.length; i++) {
    const characterEpisode = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getEpisode"])(character.episode[i]);
    const ulEpisode = document.querySelector('.character__episode');
    ulEpisode.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterEpisode"])(characterEpisode.name, characterEpisode.episode));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (showCharacter);

/***/ }),

/***/ "./src/js/modules/showEpisode.js":
/*!***************************************!*\
  !*** ./src/js/modules/showEpisode.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/layouts */ "./src/js/layouts/layouts.js");


async function showEpisode(episod) {
  const respData = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getEpisode"])(episod);
  const mainContainer = document.querySelector('.main__container');
  const {
    id,
    name,
    episode,
    air_date
  } = respData;
  mainContainer.innerHTML = `
        <h2> Episode ${id + " • " + name}</h2>
        <p>${episode + " • " + air_date}</p>
        <ul></ul>`;
  const mainContainerUl = document.querySelector(".main__container ul");
  for (let i = 0; i < respData.characters.length; i++) {
    const character = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacters"])(respData.characters[i]);
    mainContainerUl.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharactersSelector"])(character.image, character.name, character.species, character.status, character.id));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (showEpisode);

/***/ }),

/***/ "./src/js/modules/updateNav.js":
/*!*************************************!*\
  !*** ./src/js/modules/updateNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/layouts */ "./src/js/layouts/layouts.js");


async function updateNav() {
  const allEpisode = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getAllEpisodes"])();
  const navEpisodes = document.querySelector('.nav__episodes');
  let key;
  for (key in allEpisode) {
    navEpisodes.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutEpisodeSelector"])(allEpisode[key].id));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (updateNav);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getAllEpisodes, getEpisode, getCharacters, getCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEpisodes", function() { return getAllEpisodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEpisode", function() { return getEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return getCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
const apiSrc = "https://rickandmortyapi.com/api/";
async function getData(url) {
  const res = await fetch(`${apiSrc}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recivied ${res.status}`);
  }
  return await res.json();
}
async function getAllEpisodes() {
  const res = await getData("episode");
  const episodes = res.results;
  let nextPage = res.info.next;
  do {
    const nextUrl = nextPage.slice(32);
    const newRes = await getData(nextUrl);
    episodes.push(...newRes.results);
    nextPage = newRes.info.next;
  } while (nextPage);
  console.log("allEpisodes", episodes);
  return episodes;
}
async function getEpisode(url) {
  const res = await fetch(url);
  const episod = res.json();
  console.log('episod', episod);
  return episod;
}
async function getCharacters(url) {
  const res = await fetch(url);
  const characters = res.json();
  return characters;
}
async function getCharacter(url) {
  const res = await fetch(url);
  const character = res.json();
  console.log('character', character);
  return character;
}


/***/ })

/******/ });
//# sourceMappingURL=script.js.map