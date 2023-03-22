/* eslint-disable no-plusplus */
import './style.css';
import theWeather from './weather/weatherAPI';
import pullWeatherData from './weather/weatherAppDataObj';
import userFormData from './weather/weatherForm';

async function getWeatherData(userInput) {
	const data = userInput;
	console.log(data);
	try {
		const weatherData = await theWeather(data);
		const weatherObjects = await pullWeatherData(weatherData);
		console.log(weatherObjects);
	} catch (err) {
		console.log(err);
	}
}

getWeatherData(userFormData);
