/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

import './style.css';
import './meyerReset.css';
import userFormData from './weather/weatherForm';
import theWeather from './weather/weatherAPI';
import pullWeatherData from './weather/weatherAppDataObj';
import './weather/mainViews';

async function getWeatherData(userInput) {
	const data = userInput;
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
	const weatherObjects = await getWeatherData(userFormData);

	const weatherImg = document.createElement('img');
	weatherImg.classList.add('weather-img');
	weatherImg.src = await weatherObjects.currentConditionsObj.conditionIcon;
	currentCard.appendChild(weatherImg);
}

drawWeatherCards();
