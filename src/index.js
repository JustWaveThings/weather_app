/* eslint-disable no-plusplus */
import './style.css';
import mossFire from './itcrowdmossfire.gif';

const giphyApiKey = process.env.GIPHY_API_KEY;

let gifArray = [];
let counter = 1;
const defaultGif = new Image();
defaultGif.src = mossFire;

// dom insertion
const container = document.createElement('div');
container.classList.add('main-container');
document.body.appendChild(container);

const header = document.createElement('header');
header.classList.add('header');
container.appendChild(header);

const headerTitle = document.createElement('h1');
headerTitle.classList.add('header-title');
headerTitle.textContent = 'Working With APIs';
header.appendChild(headerTitle);

const main = document.createElement('main');
main.classList.add('main', 'container');
container.appendChild(main);

const mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = 'Giphy API Output';
main.appendChild(mainTitle);

const giphyImg = document.createElement('img');
giphyImg.src = defaultGif.src;
giphyImg.classList.add('giphy-img');
main.appendChild(giphyImg);

const giphyTitle = document.createElement('h2');
giphyTitle.classList.add('giphy-title');
giphyTitle.textContent =
	'Search for a Giphy, then click "next" to cycle through the 25 results';
main.appendChild(giphyTitle);

const giphyNav = document.createElement('nav');
giphyNav.classList.add('giphy-nav', 'container');
container.appendChild(giphyNav);

const giphySearchForm = document.createElement('form');
giphySearchForm.classList.add('giphy-search-form', 'container');
giphySearchForm.id = 'giphy-search-form';
giphySearchForm.name = 'giphy-search-form';
giphySearchForm.noValidate = true;
giphyNav.appendChild(giphySearchForm);

const fieldset = document.createElement('fieldset');
fieldset.classList.add('fieldset');
giphySearchForm.appendChild(fieldset);

const legend = document.createElement('legend');
legend.classList.add('legend');
legend.textContent = '';
giphySearchForm.appendChild(legend);

const giphySearchInput = document.createElement('input');
giphySearchInput.classList.add('giphy-search-input');
giphySearchInput.id = 'giphy-search-input';
giphySearchInput.name = 'giphy-search-input';
giphySearchInput.type = 'search';
giphySearchInput.placeholder = 'Search for a Giphy';
giphySearchInput.required = true;
giphySearchForm.appendChild(giphySearchInput);

const giphySearchBtn = document.createElement('button');
giphySearchBtn.classList.add('giphy-search-btn');
giphySearchForm.appendChild(giphySearchBtn);
const giphySearchBtnIcon = document.createElement('i');
giphySearchBtnIcon.classList.add('fa', 'fa-search');
giphySearchBtn.appendChild(giphySearchBtnIcon);

giphySearchBtn.addEventListener('click', function (e) {
	e.preventDefault();
	getGiphy(giphySearchInput.value);

	giphySearchInput.value = '';
	displayGif();
});

const nextGiphyBtn = document.createElement('button');
nextGiphyBtn.classList.add('next-giphy-btn');
nextGiphyBtn.textContent = 'Next Giphy';
giphySearchForm.appendChild(nextGiphyBtn);

nextGiphyBtn.addEventListener('click', e => {
	e.preventDefault();
	displayGif();
});
function getGiphy(searchTerm = 'beach', offsetNumber = 500) {
	const searchTermConverted = convertSearchStringToUrlInsert(searchTerm);
	const urlWithSearch = new URL(
		`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTermConverted}&limit=25&offset=${offsetNumber}&rating=r&lang=en`
	);

	fetch(urlWithSearch.href, {
		mode: 'cors',
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			// console.log(response.data.images.original.url);
			// console.log(response.data.title);

			addGifsToGifArray(response.data);
			giphyImg.src = response.data[0].images.original.url;
			giphyTitle.textContent = response.data.title;
			counter = 1;
		})
		.catch(err => {
			giphyImg.src = defaultGif;
			giphyTitle.textContent = 'No Gifs Found or Error';
			// console.log(err);
		});
}

function convertSearchStringToUrlInsert(searchString) {
	return searchString.replaceAll(/ /g, '+');
}

// eslint-disable-next-line no-sequences, arrow-body-style
const gifFactory = (src, title) => {
	return { src, title };
};
// eslint-disable-next-line consistent-return
function addGifsToGifArray(response) {
	if (gifArray.length > 0) {
		gifArray = [];
	}
	response.forEach(gif => {
		const newGif = gifFactory(gif.images.original.url, gif.title);
		gifArray.push(newGif);
	});
}

// eslint-disable-next-line consistent-return
function displayGif() {
	if (typeof gifArray === 'undefined' || gifArray.length === 0) {
		giphyImg.src = defaultGif.src;
		giphyTitle.textContent = 'Try Another Search';
		return;
	}
	// eslint-disable-next-line no-param-reassign
	if (counter === gifArray.length - 1) {
		// eslint-disable-next-line no-param-reassign
		counter = 0;
	}
	giphyImg.src = gifArray[counter].src;
	if (giphyImg.src === '') {
		displayGif(defaultGif);
	}

	giphyTitle.textContent = gifArray[counter].title;
	// eslint-disable-next-line no-param-reassign
	++counter;
	console.log(counter);
}

console.log(gifArray);
