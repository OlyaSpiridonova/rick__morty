import { getLocation, getCharacters } from '../services/services.js';
import {
  layoutLocation,
  layoutCharacterDescription,
} from '../layouts/layouts.js';

async function showLocation(name) {
  const location = await getLocation(name);
  const locationData = location.results[0];
  console.log(locationData);

  const mainContainer = document.querySelector('.main__container');
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('beforeend', layoutLocation(locationData));

  const mainContainerUl = document.querySelector('.main__container ul');

  const CharactersData = await Promise.all(
    locationData.residents.map(async (url) => getCharacters(url))
  );
  CharactersData.forEach(function (character) {
    mainContainerUl.insertAdjacentHTML(
      'beforeend',
      layoutCharacterDescription(character)
    );
  });
}

export default showLocation;

export default showLocation;