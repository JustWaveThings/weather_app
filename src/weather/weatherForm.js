/// where the dom for user input will be rendered
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const header = document.createElement('header');
header.classList.add('header');
header.textContent = 'Weather App';
container.appendChild(header);

const nav = document.createElement('nav');
nav.classList.add('nav', 'container');
container.appendChild(nav);

const searchForm = document.createElement('form');
searchForm.classList.add('search-form', 'container');
searchForm.id = 'search-form';
searchForm.name = 'search-form';
searchForm.noValidate = true;
nav.appendChild(searchForm);

const fieldset = document.createElement('fieldset');
fieldset.classList.add('fieldset');
searchForm.appendChild(fieldset);

const legend = document.createElement('legend');
legend.classList.add('legend');
legend.textContent = '';
searchForm.appendChild(legend);

const searchInput = document.createElement('input');
searchInput.classList.add('search-input');
searchInput.id = 'search-input';
searchInput.name = 'search-input';
searchInput.type = 'search';
searchInput.placeholder = 'Enter a Location';
searchInput.required = true;
searchForm.appendChild(searchInput);

const searchBtn = document.createElement('button');
searchBtn.classList.add('search-btn');
searchBtn.textContent = 'Search';
searchForm.appendChild(searchBtn);
const searchBtnIcon = document.createElement('i');
searchBtnIcon.classList.add('fa', 'fasearch');
searchBtn.appendChild(searchBtnIcon);

searchBtn.addEventListener('click', function (e) {
	e.preventDefault();
	console.log(searchInput.value);
	searchInput.value = '';
});

const userInput = [33045];

export default userInput;
