import showSeasons from './showSeasons.js';
import { getSeason } from '../services/services.js';
import { layoutEpisodeSelector } from '../layouts/layouts.js';

async function updateNav(season) {
  const navEpisodes = document.querySelector('.nav__episodes');

  const seasons = await getSeason(season);

  navEpisodes.innerHTML =
    '<a class="nav__return" return-selector>Вернуться</a>';
  const returnSeasons = document.querySelector('[return-selector]');
  returnSeasons.addEventListener('click', () => {
    showSeasons();
  });

  seasons.results.forEach(function (season) {
    navEpisodes.insertAdjacentHTML('beforeend', layoutEpisodeSelector(season));
  });
}

export default updateNav;
