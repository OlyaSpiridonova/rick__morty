const apiSrc = "https://rickandmortyapi.com/api/";

async function getData(url) {
    const res = await fetch(`${apiSrc}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, recivied ${res.status}`);
    }
    return await res.json();
}
async function getAllEpisodes() {
    const res = await getData("episode");
    const episodes = res.results;
    let nextPage = res.info.next;
    do {
        const nextUrl = nextPage.slice(32);
        const newRes = await getData(nextUrl);
        episodes.push(...newRes.results);
        nextPage = newRes.info.next;
    } while (nextPage);
    console.log("allEpisodes", episodes);
    return episodes;
}

async function getEpisode(id) {
    return await getData(`episode/${id}`);
}
async function getSeason(season) {
    return await getData(`episode/?episode=${season}`);
}

async function getCharacters(url) {
    const res = await fetch(url);
    const characters = res.json();
    return characters;
}

async function getCharacter(id) {
    return await getData(`character/${id}`);
}

async function getLocation(name) {
    return await getData(`location/?name=${name}`);
}
export { getAllEpisodes, getEpisode, getSeason, getCharacters, getCharacter, getLocation};