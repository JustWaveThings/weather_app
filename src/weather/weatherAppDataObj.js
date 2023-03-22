/* eslint-disable no-plusplus */

function pullWeatherData(weatherAPIResponse) {
	const {
		location: { name, region, country, localtime: localDateTime },
		current: {
			temp_f: tempF,
			feelslike_f: feelsLikeF,
			wind_mph: windMPH,
			wind_dir: windDirection,
			is_day: isDay,
			condition: { text: textCondition, icon: conditionIcon },
		},
	} = weatherAPIResponse;

	const CurrentConditionsObj = {
		name,
		region,
		country,
		localDate: localDateTime.split(' ')[0],
		localTime: localDateTime.split(' ')[1],
		tempF,
		feelsLikeF,
		windMPH,
		windDirection,
		isDay,
		textCondition,
		conditionIcon: `https:${conditionIcon}`,
	};

	const forecastDays = weatherAPIResponse.forecast.forecastday;
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
	return { results, CurrentConditionsObj };
}

export default pullWeatherData;
