function clearContainer(selector) {
    selector.querySelectorAll('*').forEach((n) => n.remove());
}

function layoutEpisodeSelector(episodeID) {
    return `<a class="links__episode" episode-selector="${episodeID}">Episode ${episodeID}</a>`;
}

function layoutCharactersSelector(image, name, species, status, characterID) {
    return `<li class="links__ep" character-selector='${characterID}'>
                    <img src=${image}>
                    <p id='name'>${name}</p>
                    <p id='name'>${species + " | " + status}</p>
                </li>`;
}

function layoutCharacterSelector(image, name, species, gender, status, originName) {
    return `<div characterDescription-selector>
                    <img src=${image}>
                    <div class = "character_description">
                        <h2>${name}</h2>
                        <p class='character_name'>${species + " | " + gender + " | " + status}</p>
                        <p class='location'>${"Origin: " + originName}</p>
                    </div>
                </div>
                <ul class="character__episode"></ul>`;
}

function layoutCharacterEpisode(name, episode) {
    return `
            <li class='link__episode'>
                 <h3>${name}</h3>
                 <p>${episode}</p>
            </li>`;
}


export {clearContainer, layoutCharacterSelector, layoutCharacterEpisode, layoutEpisodeSelector, layoutCharactersSelector};