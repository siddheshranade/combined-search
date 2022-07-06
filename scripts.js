/* I. Define a global map of websites and their search URLs */

const URLsByWebsites = {
    'Google' : 'https://www.google.com/search?q=',
    'Reddit' : 'https://www.reddit.com/search?q=',
    'Wikipedia' : 'https://en.wikipedia.org/w/index.php?search=',
    'YouTube' : 'https://www.youtube.com/results?search_query=',
    'Hacker News' : 'https://hn.algolia.com/?q=',
    'Quora' : 'https://www.quora.com/search?q=',
    'Stack Overflow' : 'https://stackoverflow.com/search?q=',
    'Twitter' : 'https://twitter.com/search?q='
}

/* II. Query relevant DOM elements */

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search-text-input');
const checkboxesParentDiv = document.querySelector('#checkboxes-parent');

/* III. Define listeners and things to do on page load */

addWebsiteCheckboxesToDOM();
searchInput.focus();

searchForm.addEventListener('submit', search);

/* IV. Define functions */

function addWebsiteCheckboxesToDOM() {
    let websites = Object.keys(URLsByWebsites);

    checkboxesParentDiv.innerHTML =
        websites.map(website => getWebsiteCheckboxHTMLElement(website)).join('');
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

function getWebsiteCheckboxHTMLElement(websiteName) {
    return `
            <label for="${websiteName}">
                <input type="checkbox" class="checkboxes" id="${websiteName}">
                ${websiteName}
            </label>
        `;
}

function getSearchQuery(str) {
    return str.replaceAll(' ', '+');
}