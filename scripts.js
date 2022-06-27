/* I. Define a global map of websites and their search URLs */

const URLsByWebsites = {
    'Google' : 'https://www.google.com/search?q=',
    'Reddit' : 'https://www.reddit.com/search?q=',
    'Wikipedia' : 'https://en.wikipedia.org/w/index.php?search=',
    'Rate Your Music' : 'https://rateyourmusic.com/search?searchterm='
}

/* II. Query relevant DOM elements */

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const checkboxesParentDiv = document.querySelector('#checkboxes-parent');

/* III. Define listeners and things to do on page load */

addWebsiteCheckboxesToDOM();
searchInput.focus();

searchForm.addEventListener('submit', search);

/* IV. Define functions */

function addWebsiteCheckboxesToDOM() {
    let websites = Object.keys(URLsByWebsites);

    checkboxesParentDiv.innerHTML =  websites.map(website => {
        return `
            <input type="checkbox" class="checkboxes" id="${website}">
                <label for="${website}">${website}</label>
        `
    }).join('');
}

function search(e) {
    e.preventDefault();
    const searchQuery = getSearchQuery(searchInput.value);

    if (!searchQuery) {
        return;
    }

    const websiteCheckboxes = document.querySelectorAll('.checkboxes');
    websiteCheckboxes.forEach(website => {
        if (website.checked) {
            let baseSearchURL = URLsByWebsites[website.id];
            window.open(`${baseSearchURL}${searchQuery}`);
        }
    })
}

function getSearchQuery(str) {
    return str.replaceAll(' ', '+');
}