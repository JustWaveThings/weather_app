/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

import './style.css';
import './meyerReset.css';
import userFormData from './weather/weatherForm';
import theWeather from './weather/weatherAPI';
import pullWeatherData from './weather/weatherAppDataObj';
import './weather/mainViews';

const farenheitSelector = true;

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

	const forecastCard = document.querySelectorAll('.forecast-card');

	forecastCard.forEach((card, index) => {
		const horizontalDiv = document.createElement('div');
		horizontalDiv.classList.add('horizontal-div');
		card.appendChild(horizontalDiv);

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
		card.appendChild(forecastTemp);

		const forecastRain = document.createElement('p');
		forecastRain.classList.add('forecast-wind');
		forecastRain.textContent = `Chance of Rain: ${weatherObjects.results[index].dailyChanceOfRain} % - UV Index: ${weatherObjects.results[index].uvIndex}`;
		card.appendChild(forecastRain);
	});
}

drawWeatherCards();
