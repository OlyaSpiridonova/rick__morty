import updateNav from './modules/updateNav';
import showEpisode from './modules/showEpisode';
import showCharacter from './modules/showCharacter';

document.addEventListener("click", handleClick);
function handleClick({ target }) {
    handleIfEpisodeSelector(target);
    handleIfCharacterSelector(target);
}
function handleIfEpisodeSelector(target) {
    console.log("target", target);
    if (!defineElementByAttribute(target, "episode-selector")) return;
    const episodeSelector = defineElementByAttribute(target, "episode-selector");
    const episodeID = episodeSelector.getAttribute("episode-selector");
    showEpisode(`https://rickandmortyapi.com/api/episode/${episodeID}`);
}

function handleIfCharacterSelector(target) {
    console.log("target", target);
    if (!defineElementByAttribute(target, "character-selector")) return;
    const characterSelector = defineElementByAttribute(target, "character-selector");
    const characterID = characterSelector.getAttribute("character-selector");
    showCharacter(`https://rickandmortyapi.com/api/character/${characterID}`);
}

function defineElementByAttribute(target, dataAttributeSelector) {
    const element = target.hasAttribute(dataAttributeSelector)
        ? target
        : target.closest(`[${dataAttributeSelector}]`)
            ? target.closest(`[${dataAttributeSelector}]`)
            : false;
    console.log("target", target);
    console.log("element", element);
    console.log("dataAttributeSelector", dataAttributeSelector);
    return element;
}

updateNav();





