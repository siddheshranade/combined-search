/* I. Query relevant DOM elements */

const searchForm = document.querySelector('form');
const textInput = document.querySelector('#search-input');
const checkboxes = document.querySelectorAll('.checkboxes');

/* II. Add listeners */

searchForm.addEventListener('submit', search);

/* III. Define functions */

function search(e) {
    e.preventDefault();
    const searchQuery = getSearchQuery(textInput.value);

    if (document.querySelector('#reddit-check').checked) {
        searchReddit(searchQuery);
    }
    if (document.querySelector('#google-check').checked) {
        searchGoogle(searchQuery);
    }
    if (document.querySelector('#wikipedia-check').checked) {
        searchWikipedia(searchQuery);
    }
}

function searchGoogle(query) {
    let url = `https://www.google.com/search?q=${query}`;
    console.log('Opening Google');
    window.open(url);
}

function searchWikipedia(query) {
    let url = `https://en.wikipedia.org/w/index.php?search=${query}`;
    console.log('Opening Wikipedia');
    window.open(url);
}

function searchReddit(query) {
    let url = `https://www.reddit.com/search?q=${query}`;
    console.log('Opening Reddit');
    window.open(url);
}

function getSearchQuery(str) {
    return str.replaceAll(' ', '+');
}