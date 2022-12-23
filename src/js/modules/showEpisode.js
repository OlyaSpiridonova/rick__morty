import { getEpisode, getCharacters } from '../services/services';
import {layoutCharactersSelector} from '../layouts/layouts';

async function showEpisode(episod) {

    const respData = await getEpisode(episod);

    const mainContainer = document.querySelector('.main__container');

    const { id, name, episode, air_date } = respData;

    mainContainer.innerHTML = `
        <h2> Episode ${id + " • " + name}</h2>
        <p>${episode + " • " + air_date}</p>
        <ul></ul>`;

    const mainContainerUl = document.querySelector(".main__container ul");

    for (let i = 0; i < respData.characters.length; i++) {
        const character = await getCharacters(respData.characters[i]);
        mainContainerUl.insertAdjacentHTML('beforeend', layoutCharactersSelector(character.image, character.name, character.species, character.status, character.id));
    }
}

export default showEpisode;