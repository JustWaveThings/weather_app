/* eslint-disable no-plusplus */
import './style.css';
import weather from './weather/weatherAPI';
import pullWeatherData from './weather/weatherAppDataObj';
import {
	sampleObject,
	CurrentConditionsObj,
	results,
} from './weather/exampleWeatherObj';

const weatherObjects = pullWeatherData(sampleObject);
console.log(weatherObjects);
