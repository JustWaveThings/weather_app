// eslint-disable-next-line consistent-return

async function getWeather() {
	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${locationSearch}&days=3&aqi=no&alerts=no`,
		{
			mode: 'cors',
		}
	);
	try {
		const weatherData = await response.json();
		console.log(weatherData);
	} catch (err) {
		console.log(err);
	}
}

export default getWeather;
