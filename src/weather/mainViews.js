const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

// current weather section
const container = document.createElement('section');
container.classList.add('current-weather-section');
mainContainer.appendChild(container);

const header = document.createElement('h2');
header.classList.add('current-weather-header');
header.textContent = 'Current Weather';
container.appendChild(header);

const currentWeatherCard = document.createElement('section');
currentWeatherCard.classList.add('current-weather-card');
currentWeatherCard.textContent = '';
container.appendChild(currentWeatherCard);

// forecast section

const forecastMainContainer = document.createElement('section');
forecastMainContainer.classList.add('forecast-section');
mainContainer.appendChild(forecastMainContainer);

const forecastHeader = document.createElement('h2');
forecastHeader.classList.add('forecast-header');
forecastHeader.textContent = '3 Day Forecast';
forecastMainContainer.appendChild(forecastHeader);

// forecast card container
const forecastCards = document.createElement('div');
forecastCards.classList.add('forecast-cards');
forecastMainContainer.appendChild(forecastCards);
