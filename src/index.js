/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

import './style.css';
import './meyerReset.css';
import './weather/weatherForm';
import theWeather from './weather/weatherAPI';
import pullWeatherData from './weather/weatherAppDataObj';
import './weather/mainViews';

let farenheitSelector = true;

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const toggle = document.querySelector('#toggle');

let userInput = '33045';

searchBtn.addEventListener('click', function (e) {
	e.preventDefault();
	console.log(searchInput.value);
	if (searchInput.value === '' || searchInput.value === null) {
		userInput = '33045';
	} else {
		userInput = searchInput.value;
	}
	getWeatherData(userInput);
	clearWeatherCards();
	drawWeatherCards();
});

toggle.addEventListener('click', function (e) {
	e.preventDefault();
	farenheitSelector ? (farenheitSelector = false) : (farenheitSelector = true);
	clearWeatherCards();
	drawWeatherCards();
	console.log(farenheitSelector);
});

async function getWeatherData(userLocation) {
	const data = userLocation;
	console.log(data);
	try {
		const weatherData = await theWeather(data);
		const weatherObjects = await pullWeatherData(weatherData);
		console.log(weatherObjects);
		return weatherObjects;
	} catch (err) {
		console.log(err);
	}
}

async function drawWeatherCards() {
	const currentCard = document.querySelector('.current-weather-card');
	const weatherObjects = await getWeatherData(userInput);

	const weatherImg = document.createElement('img');
	weatherImg.classList.add('weather-img');
	weatherImg.src = weatherObjects.currentConditionsObj.conditionIcon;
	weatherImg.style.height = '100px';
	weatherImg.style.width = '100px';
	currentCard.appendChild(weatherImg);

	const location = document.createElement('h3');
	location.classList.add('location');
	location.textContent = `${weatherObjects.currentConditionsObj.name} - ${weatherObjects.currentConditionsObj.region} - ${weatherObjects.currentConditionsObj.country}`;
	currentCard.appendChild(location);

	const temp = document.createElement('p');
	temp.classList.add('temp');
	farenheitSelector
		? (temp.textContent = `It's currently ${weatherObjects.currentConditionsObj.tempF} °F and feels like it's ${weatherObjects.currentConditionsObj.feelsLikeF} °F`)
		: (temp.textContent = `It's currently ${weatherObjects.currentConditionsObj.tempC} °C and feels like it's ${weatherObjects.currentConditionsObj.feelsLikeC} °C`);
	currentCard.appendChild(temp);

	const wind = document.createElement('p');
	wind.classList.add('wind');
	farenheitSelector
		? (wind.textContent = `Wind Speed is ${weatherObjects.currentConditionsObj.windMPH} mph and is blowing from an ${weatherObjects.currentConditionsObj.windDirection} heading`)
		: (wind.textContent = `Wind Speed is ${weatherObjects.currentConditionsObj.windKPH} kph and is blowing from an ${weatherObjects.currentConditionsObj.windDirection} heading`);
	currentCard.appendChild(wind);

	const forecastCards = document.querySelector('.forecast-cards');

	console.log(weatherObjects.results);

	weatherObjects.results.forEach((_, index) => {
		const forecastCard = document.createElement('section');
		forecastCard.classList.add('forecast-card');
		const horizontalDiv = document.createElement('div');
		horizontalDiv.classList.add('horizontal-div');
		forecastCard.appendChild(horizontalDiv);

		const forecastDate = document.createElement('h3');
		forecastDate.classList.add('forecast-date');
		forecastDate.textContent = weatherObjects.results[index].date;
		horizontalDiv.appendChild(forecastDate);

		const forecastImg = document.createElement('img');
		forecastImg.classList.add('forecast-img');
		forecastImg.src = weatherObjects.results[index].forecastConditionIcon;
		forecastImg.style.height = '100px';
		forecastImg.style.width = '100px';
		horizontalDiv.appendChild(forecastImg);

		const forecastTemp = document.createElement('p');
		forecastTemp.classList.add('forecast-temp');
		farenheitSelector
			? (forecastTemp.textContent = `High: ${weatherObjects.results[index].maxTempF} °F - Low: ${weatherObjects.results[index].minTempF} °F`)
			: (forecastTemp.textContent = `High: ${weatherObjects.results[index].maxHighC} °C - Low: ${weatherObjects.results[index].minHighC} °C`);
		forecastCard.appendChild(forecastTemp);

		const forecastRain = document.createElement('p');
		forecastRain.classList.add('forecast-wind');
		forecastRain.textContent = `Chance of Rain: ${weatherObjects.results[index].dailyChanceOfRain} % - UV Index: ${weatherObjects.results[index].uvIndex}`;
		forecastCard.appendChild(forecastRain);
		forecastCards.appendChild(forecastCard);
	});
}

drawWeatherCards();

function clearWeatherCards() {
	const currentCard = document.querySelector('.current-weather-card');
	const forecastCards = document.querySelector('.forecast-cards');
	currentCard.innerHTML = '';
	forecastCards.innerHTML = '';
}
