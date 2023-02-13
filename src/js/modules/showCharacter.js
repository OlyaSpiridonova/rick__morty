import { getCharacters, getCharacter } from '../services/services.js';
import {
  layoutCharacterSelector,
  layoutCharacterEpisode,
} from '../layouts/layouts.js';

async function showCharacter(characterId) {
  const character = await getCharacter(characterId);

  const mainContainer = document.querySelector('.main__container');
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML(
    'beforeend',
    layoutCharacterSelector(character)
  );
  const ulEpisode = document.querySelector('.character__episode');

  const characterEpisodes = character.episode;
  const episodesData = await Promise.all(
    characterEpisodes.map(async (url) => getCharacters(url))
  );
  episodesData.forEach(function (episodes) {
    ulEpisode.insertAdjacentHTML('beforeend', layoutCharacterEpisode(episodes));
  });
}

export default showCharacter;

export default showCharacter;