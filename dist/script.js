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
/*! exports provided: layoutCharacterSelector, layoutEpisodeTitle, layoutCharacterEpisode, layoutEpisodeSelector, layoutCharacterDescription, layoutLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharacterSelector", function() { return layoutCharacterSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutEpisodeTitle", function() { return layoutEpisodeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharacterEpisode", function() { return layoutCharacterEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutEpisodeSelector", function() { return layoutEpisodeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutCharacterDescription", function() { return layoutCharacterDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutLocation", function() { return layoutLocation; });
function layoutEpisodeSelector(_ref) {
  let {
    id
  } = _ref;
  return `<a class="links__episode" episode-selector="${id}">Episode ${id}</a>`;
}
function layoutEpisodeTitle(_ref2) {
  let {
    id,
    name,
    episode,
    air_date
  } = _ref2;
  return `<h2> Episode ${id + " • " + name}</h2>
            <p>${episode + " • " + air_date}</p>
            <ul></ul>`;
}
function layoutCharacterDescription(_ref3) {
  let {
    image,
    name,
    species,
    status,
    id
  } = _ref3;
  return `<li class="links__ep" character-selector='${id}'>
                    <img src=${image}>
                    <p id='name'>${name}</p>
                    <p id='name'>${species + " | " + status}</p>
                </li>`;
}
function layoutCharacterSelector(_ref4) {
  let {
    image,
    name,
    species,
    gender,
    status,
    origin
  } = _ref4;
  return `<div characterDescription-selector>
                    <img src=${image}>
                    <div class = "character_description">
                        <h2>${name}</h2>
                        <p class='character_name'>${species + " | " + gender + " | " + status}</p>
                        <p location-selector="${origin.name}" class='location'>${"Origin: " + origin.name}</p>
                    </div>
                </div>
                <ul class="character__episode"></ul>`;
}
function layoutCharacterEpisode(_ref5) {
  let {
    id,
    name,
    episode
  } = _ref5;
  return `
            <li episode-selector="${id}" class='link__episode'>
                 <h3>${name}</h3>
                 <p>${episode}</p>
            </li>`;
}
function layoutLocation(_ref6) {
  let {
    name
  } = _ref6;
  return `
            <h1>${name}</h1>
            <h2>Residents</h2>
            <ul></ul>
    `;
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
/* harmony import */ var _modules_showSeasons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showSeasons */ "./src/js/modules/showSeasons.js");
/* harmony import */ var _modules_updateNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/updateNav */ "./src/js/modules/updateNav.js");
/* harmony import */ var _modules_showEpisode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showEpisode */ "./src/js/modules/showEpisode.js");
/* harmony import */ var _modules_showCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showCharacter */ "./src/js/modules/showCharacter.js");
/* harmony import */ var _modules_showLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showLocation */ "./src/js/modules/showLocation.js");





document.addEventListener("click", handleClick);
function handleClick(_ref) {
  let {
    target
  } = _ref;
  handleIfSeasonSelector(target);
  handleIfEpisodeSelector(target);
  handleIfCharacterSelector(target);
  handleLocationSelector(target);
}
function handleIfEpisodeSelector(target) {
  if (!defineElementByAttribute(target, "episode-selector")) return;
  const episodeSelector = defineElementByAttribute(target, "episode-selector");
  const episodeID = episodeSelector.getAttribute("episode-selector");
  Object(_modules_showEpisode__WEBPACK_IMPORTED_MODULE_2__["default"])(`${episodeID}`);
}
function handleIfSeasonSelector(target) {
  if (!defineElementByAttribute(target, "season-selector")) return;
  const seasonSelector = defineElementByAttribute(target, "season-selector");
  const seasonID = seasonSelector.getAttribute("season-selector");
  Object(_modules_updateNav__WEBPACK_IMPORTED_MODULE_1__["default"])(`${seasonID}`);
}
function handleIfCharacterSelector(target) {
  if (!defineElementByAttribute(target, "character-selector")) return;
  const characterSelector = defineElementByAttribute(target, "character-selector");
  const characterID = characterSelector.getAttribute("character-selector");
  Object(_modules_showCharacter__WEBPACK_IMPORTED_MODULE_3__["default"])(`${characterID}`);
}
function handleLocationSelector(target) {
  if (!defineElementByAttribute(target, 'location-selector')) return;
  const locationSelector = defineElementByAttribute(target, "location-selector");
  const nameLocation = locationSelector.getAttribute("location-selector");
  console.log(`${nameLocation}`);
  Object(_modules_showLocation__WEBPACK_IMPORTED_MODULE_4__["default"])(`${nameLocation}`);
}
function defineElementByAttribute(target, dataAttributeSelector) {
  const element = target.hasAttribute(dataAttributeSelector) ? target : target.closest(`[${dataAttributeSelector}]`) ? target.closest(`[${dataAttributeSelector}]`) : false;
  return element;
}
Object(_modules_showSeasons__WEBPACK_IMPORTED_MODULE_0__["default"])();

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


async function showCharacter(characterId) {
  const character = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacter"])(characterId);
  const mainContainer = document.querySelector('.main__container');
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterSelector"])(character));
  const ulEpisode = document.querySelector('.character__episode');
  const characterEpisodes = character.episode;
  const episodesData = await Promise.all(characterEpisodes.map(async url => Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacters"])(url)));
  episodesData.forEach(function (episodes) {
    ulEpisode.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterEpisode"])(episodes));
  });
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
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutEpisodeTitle"])(respData));
  const mainContainerUl = document.querySelector(".main__container ul");
  const characters = respData.characters;
  const CharactersData = await Promise.all(characters.map(async url => Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacters"])(url)));
  CharactersData.forEach(function (character) {
    mainContainerUl.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterDescription"])(character));
  });
}
/* harmony default export */ __webpack_exports__["default"] = (showEpisode);

/***/ }),

/***/ "./src/js/modules/showLocation.js":
/*!****************************************!*\
  !*** ./src/js/modules/showLocation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/layouts */ "./src/js/layouts/layouts.js");


async function showLocation(name) {
  const location = await Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(name);
  const locationData = location.results[0];
  console.log(locationData);
  const mainContainer = document.querySelector('.main__container');
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutLocation"])(locationData));
  const mainContainerUl = document.querySelector(".main__container ul");
  const CharactersData = await Promise.all(locationData.residents.map(async url => Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getCharacters"])(url)));
  CharactersData.forEach(function (character) {
    mainContainerUl.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_1__["layoutCharacterDescription"])(character));
  });
}
/* harmony default export */ __webpack_exports__["default"] = (showLocation);

/***/ }),

/***/ "./src/js/modules/showSeasons.js":
/*!***************************************!*\
  !*** ./src/js/modules/showSeasons.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showSeasons() {
  const navEpisodes = document.querySelector('.nav__episodes');
  navEpisodes.innerHTML = `
                <a class="nav__seasons" season-selector='s01'>Season 1</a>
                <a class="nav__seasons" season-selector='s02'>Season 2</a>
                <a class="nav__seasons" season-selector='s03'>Season 3</a>
                <a class="nav__seasons" season-selector='s04'>Season 4</a>
                <a class="nav__seasons" season-selector='s05'>Season 5</a>
    `;
}
/* harmony default export */ __webpack_exports__["default"] = (showSeasons);

/***/ }),

/***/ "./src/js/modules/updateNav.js":
/*!*************************************!*\
  !*** ./src/js/modules/updateNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showSeasons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showSeasons */ "./src/js/modules/showSeasons.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/layouts */ "./src/js/layouts/layouts.js");



async function updateNav(season) {
  const navEpisodes = document.querySelector('.nav__episodes');
  const seasons = await Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["getSeason"])(season);
  navEpisodes.innerHTML = '<a class="nav__return" return-selector>Вернуться</a>';
  const returnSeasons = document.querySelector('[return-selector]');
  returnSeasons.addEventListener('click', () => {
    Object(_showSeasons__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  seasons.results.forEach(function (season) {
    navEpisodes.insertAdjacentHTML('beforeend', Object(_layouts_layouts__WEBPACK_IMPORTED_MODULE_2__["layoutEpisodeSelector"])(season));
  });
}
/* harmony default export */ __webpack_exports__["default"] = (updateNav);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getAllEpisodes, getEpisode, getSeason, getCharacters, getCharacter, getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEpisodes", function() { return getAllEpisodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEpisode", function() { return getEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeason", function() { return getSeason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return getCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
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
async function getEpisode(id) {
  return await getData(`episode/${id}`);
}
async function getSeason(season) {
  return await getData(`episode/?episode=${season}`);
}
async function getCharacters(url) {
  const res = await fetch(url);
  const characters = res.json();
  return characters;
}
async function getCharacter(id) {
  return await getData(`character/${id}`);
}
async function getLocation(name) {
  return await getData(`location/?name=${name}`);
}


/***/ })

/******/ });
//# sourceMappingURL=script.js.map