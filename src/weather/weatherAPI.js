// eslint-disable-next-line consistent-return

const weatherApiKey = process.env.WEATHER_API_KEY;

async function getWeather(locationSearch, forecastDays = 3) {
	const location = convertInputsToUrlReady(locationSearch);
	const days = convertInputsToUrlReady(forecastDays);
	let weatherData = {};
	const newUrl = new URL(
		`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=${days}&aqi=no&alerts=no`
	);
	const response = await fetch(newUrl.href, {
		mode: 'cors',
	});
	try {
		weatherData = await response.json();
		console.log(weatherData);
	} catch (err) {
		console.log(err);
	}
	return weatherData;
}

/* Query parameter based on which data is sent back. It could be following:

city name e.g.: Paris
US zip e.g.: 10001
UK postcode e.g: SW1
Canada postal code e.g: G2J
metar:<metar code> e.g: metar:EGLL
iata:<3 digit airport code> e.g: iata:DXB
 */

function convertInputsToUrlReady(userInput) {
	if (typeof +userInput === 'number') {
		console.log('number type input');
		return userInput;
	}
	if (typeof userInput === 'string') {
		return userInput.replaceAll(/ /g, '');
	}
	return console.assert('Error: Input is not a string or number');
}

export default getWeather;
