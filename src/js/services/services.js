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

async function getEpisode(url) {
    const res = await fetch(url);
    const episod = res.json();
    console.log('episod', episod);
    return episod;
}

async function getCharacters(url) {
    const res = await fetch(url);
    const characters = res.json();
    return characters;
}

async function getCharacter(url) {
    const res = await fetch(url);
    const character = res.json();
    console.log('character', character);
    return character;
}

export { getAllEpisodes, getEpisode, getCharacters, getCharacter};