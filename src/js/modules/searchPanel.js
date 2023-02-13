import { getSearch } from '../services/services.js';
import showEpisode from '../modules/showEpisode.js';

function searchPanel() {
  const search = document.querySelector('form');
  search.addEventListener('submit', async (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    const searchData = await getSearch(`${input.value}`);
    let episodeId = searchData.results.map((item) => item.id);
    showEpisode(episodeId);
    input.value = '';
  });
}

export default searchPanel;

export default searchPanel;