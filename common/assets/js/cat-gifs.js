const output = document.querySelector('.output');
const catBtn = document.querySelector('.cat-button');
catBtn.addEventListener('click', displayImages);

const url = "https://api.thecatapi.com/v1/images/search?limit=4&mime_types=gif";

let req = new Request(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'ada7a0df-938c-4e86-9355-68a0a5803352' },
        mode: 'cors' });

function displayImages() {
    output.replaceChildren();

    fetch(req)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function(datum) {
        const imgElem = document.createElement('img');
        imgElem.src = datum.url;
        output.appendChild(imgElem);
      })
    })
}
