import { getEpisode, getCharacters } from '../services/services';
import {layoutEpisodeTitle, layoutCharacterDescription} from '../layouts/layouts';

async function showEpisode(episod) {

    const respData = await getEpisode(episod);

    const mainContainer = document.querySelector('.main__container');

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', layoutEpisodeTitle(respData));

    const mainContainerUl = document.querySelector(".main__container ul");

    const characters = respData.characters;
    const CharactersData = await Promise.all(characters.map(async (url) => getCharacters(url)));
    CharactersData.forEach(function (character) {
        mainContainerUl.insertAdjacentHTML('beforeend', layoutCharacterDescription(character));
    });
}

export default showEpisode;