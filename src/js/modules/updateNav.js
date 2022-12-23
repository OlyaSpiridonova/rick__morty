import { getAllEpisodes } from '../services/services';
import {layoutEpisodeSelector} from '../layouts/layouts';

async function updateNav() {

    const allEpisode = await getAllEpisodes();

    const navEpisodes = document.querySelector('.nav__episodes');

    let key;

    for (key in allEpisode) {
        navEpisodes.insertAdjacentHTML('beforeend', layoutEpisodeSelector(allEpisode[key].id));
    }
}

export default updateNav;
