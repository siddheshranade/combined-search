let searchButton = document.querySelector('#search');
searchButton.addEventListener('click', search);

function search() {
    let input = document.querySelector('#input');
    let url = `https://www.google.com/search?q=${input.value}`;
    console.log(url);
    console.log('OPENING');
    window.open(url);
}