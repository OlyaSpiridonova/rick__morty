import { getEpisode, getCharacter } from '../services/services';
import {clearContainer, layoutCharacterSelector, layoutCharacterEpisode} from '../layouts/layouts';


async function showCharacter(characterURL) {

    const character = await getCharacter(characterURL);
    const {image, name, species, gender, status, origin} = character;

    const mainContainer = document.querySelector('.main__container');
    clearContainer(mainContainer);

    mainContainer.insertAdjacentHTML('beforeend', layoutCharacterSelector(image, name, species, gender, status, origin.name));

    for (let i = 0; i < character.episode.length; i++) {
        const characterEpisode = await getEpisode(character.episode[i]);
        const ulEpisode = document.querySelector('.character__episode');
        ulEpisode.insertAdjacentHTML('beforeend', layoutCharacterEpisode(characterEpisode.name, characterEpisode.episode));
    }
}

export default showCharacter;