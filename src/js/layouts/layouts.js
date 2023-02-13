function layoutEpisodeSelector({ id }) {
  return `<a class="links__episode" episode-selector="${id}">Episode ${id}</a>`;
}
function layoutEpisodeTitle({ id, name, episode, air_date }) {
  return `<h2> Episode ${id + ' • ' + name}</h2>
            <p>${episode + ' • ' + air_date}</p>
            <ul></ul>`;
}

function layoutCharacterDescription({ image, name, species, status, id }) {
  return `<li class="links__ep" character-selector='${id}'>
                    <img src=${image}>
                    <p id='name'>${name}</p>
                    <p id='name'>${species + ' | ' + status}</p>
                </li>`;
}

function layoutCharacterSelector({
  image,
  name,
  species,
  gender,
  status,
  origin,
}) {
  return `<div class="character" characterDescription-selector>
                    <img src=${image}>
                    <div class = "character_description">
                        <h2>${name}</h2>
                        <p class='character_name'>${
                          species + ' | ' + gender + ' | ' + status
                        }</p>
                        <p location-selector="${
                          origin.name
                        }" class='location'>${'Origin: ' + origin.name}</p>
                    </div>
                </div>
                <ul class="character__episode"></ul>`;
}

function layoutCharacterEpisode({ id, name, episode }) {
  return `
            <li episode-selector="${id}" class='link__episode'>
                 <h3>${name}</h3>
                 <p>${episode}</p>
            </li>`;
}

function layoutLocation({ name }) {
  return `
            <h1>${name}</h1>
            <h2>Residents</h2>
            <ul></ul>
    `;
}
export {
  layoutCharacterSelector,
  layoutEpisodeTitle,
  layoutCharacterEpisode,
  layoutEpisodeSelector,
  layoutCharacterDescription,
  layoutLocation,
};

function layoutLocation({ name }) {
  return `
            <h1>${name}</h1>
            <h2>Residents</h2>
            <ul></ul>
    `;
}
export {
  layoutCharacterSelector,
  layoutEpisodeTitle,
  layoutCharacterEpisode,
  layoutEpisodeSelector,
  layoutCharacterDescription,
  layoutLocation,
};
