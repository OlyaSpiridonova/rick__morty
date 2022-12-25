function showSeasons() {
    const navEpisodes = document.querySelector('.nav__episodes');
    navEpisodes.innerHTML = `
                <a class="nav__seasons" season-selector='s01'>Season 1</a>
                <a class="nav__seasons" season-selector='s02'>Season 2</a>
                <a class="nav__seasons" season-selector='s03'>Season 3</a>
                <a class="nav__seasons" season-selector='s04'>Season 4</a>
                <a class="nav__seasons" season-selector='s05'>Season 5</a>
    `;
}

export default showSeasons;