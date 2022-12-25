import showSeasons from './modules/showSeasons';
import updateNav from './modules/updateNav';
import showEpisode from './modules/showEpisode';
import showCharacter from './modules/showCharacter';

document.addEventListener("click", handleClick);
function handleClick({ target }) {
    handleIfSeasonSelector(target);
    handleIfEpisodeSelector(target);
    handleIfCharacterSelector(target);
}
function handleIfEpisodeSelector(target) {
    if (!defineElementByAttribute(target, "episode-selector")) return;
    const episodeSelector = defineElementByAttribute(target, "episode-selector");
    const episodeID = episodeSelector.getAttribute("episode-selector");
    showEpisode(`${episodeID}`);
}

function handleIfSeasonSelector(target) {
    if (!defineElementByAttribute(target, "season-selector")) return;
    const seasonSelector = defineElementByAttribute(target, "season-selector");
    const seasonID = seasonSelector.getAttribute("season-selector");
    updateNav(`${seasonID}`);
}

function handleIfCharacterSelector(target) {
    if (!defineElementByAttribute(target, "character-selector")) return;
    const characterSelector = defineElementByAttribute(target, "character-selector");
    const characterID = characterSelector.getAttribute("character-selector");
    showCharacter(`${characterID}`);
}

function defineElementByAttribute(target, dataAttributeSelector) {
    const element = target.hasAttribute(dataAttributeSelector)
        ? target
        : target.closest(`[${dataAttributeSelector}]`)
            ? target.closest(`[${dataAttributeSelector}]`)
            : false;
    return element;
}

showSeasons();





