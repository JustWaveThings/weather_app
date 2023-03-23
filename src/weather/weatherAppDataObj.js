/* eslint-disable no-plusplus */

async function pullWeatherData(weatherAPIResponse) {
	const {
		location: { region, name, country, localtime: localDateTime },
		current: {
			temp_f: tempF,
			temp_c: tempC,
			feelslike_f: feelsLikeF,
			feelslike_c: feelsLikeC,
			wind_mph: windMPH,
			wind_kph: windKPH,
			wind_dir: windDirection,
			is_day: isDay,
			condition: { text: textCondition, icon: conditionIcon },
		},
	} = await weatherAPIResponse;

	const currentConditionsObj = {
		name,
		region,
		country,
		localDate: localDateTime.split(' ')[0],
		localTime: localDateTime.split(' ')[1],
		tempF,
		feelsLikeF,
		tempC,
		feelsLikeC,
		windMPH,
		windKPH,
		windDirection,
		isDay,
		textCondition,
		conditionIcon: `https:${conditionIcon}`,
	};

	const forecastDays = await weatherAPIResponse.forecast.forecastday;
	const results = [];

	for (let i = 0; i < forecastDays.length; i++) {
		const {
			date,
			day: {
				avgtemp_c: avgTempC,
				maxtemp_c: maxTempC,
				mintemp_c: minTempC,
				avghumidity: averageHumidity,
				avgtemp_f: avgTempF,
				daily_chance_of_rain: dailyChanceOfRain,
				daily_chance_of_snow: dailyChanceOfSnow,
				maxtemp_f: maxTempF,
				mintemp_f: minTempF,
				totalprecip_in: totalPrecipIn,
				totalsnow_cm: totalSnowCm,
				uv: uvIndex,
				condition: { text: forecastTextCondition, icon: forecastConditionIcon },
			},
		} = forecastDays[i];

		const forecastObj = {
			date,
			averageHumidity,
			avgTempF,
			avgTempC,
			dailyChanceOfRain,
			dailyChanceOfSnow,
			maxTempF,
			maxTempC,
			minTempF,
			minTempC,
			totalPrecipIn,
			totalSnowCm,
			uvIndex,
			forecastTextCondition,
			forecastConditionIcon: `https:${forecastConditionIcon}`,
		};

		results.push(forecastObj);
	}
	return { currentConditionsObj, results };
}

export default pullWeatherData;
