(self["webpackChunkwebpack_template_repository"] = self["webpackChunkwebpack_template_repository"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _meyerReset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meyerReset.css */ "./src/meyerReset.css");
/* harmony import */ var _weather_weatherForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather/weatherForm */ "./src/weather/weatherForm.js");
/* harmony import */ var _weather_weatherForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_weather_weatherForm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _weather_weatherAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather/weatherAPI */ "./src/weather/weatherAPI.js");
/* harmony import */ var _weather_changeBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/changeBackground */ "./src/weather/changeBackground.js");
/* harmony import */ var _weather_weatherAppDataObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weatherAppDataObj */ "./src/weather/weatherAppDataObj.js");
/* harmony import */ var _weather_mainViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather/mainViews */ "./src/weather/mainViews.js");
/* harmony import */ var _weather_mainViews__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_weather_mainViews__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */








var farenheitSelector = true;
var searchBtn = document.querySelector('.search-btn');
var searchInput = document.querySelector('.search-input');
var toggle = document.querySelector('#toggle');
var userInput = '33045';
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
  farenheitSelector ? farenheitSelector = false : farenheitSelector = true;
  clearWeatherCards();
  drawWeatherCards();
  console.log(farenheitSelector);
});
async function getWeatherData(userLocation) {
  var data = userLocation;
  console.log(data);
  try {
    var weatherData = await (0,_weather_weatherAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    var weatherObjects = await (0,_weather_weatherAppDataObj__WEBPACK_IMPORTED_MODULE_5__["default"])(weatherData);
    console.log(weatherObjects);
    (0,_weather_changeBackground__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherObjects.currentConditionsObj.textCondition);
    return weatherObjects;
  } catch (err) {
    console.log(err);
  }
}
async function drawWeatherCards() {
  var currentCard = document.querySelector('.current-weather-card');
  var weatherObjects = await getWeatherData(userInput);
  var currentHorizontalDiv = document.createElement('div');
  currentHorizontalDiv.classList.add('current-horizontal-div');
  currentCard.appendChild(currentHorizontalDiv);
  var weatherImg = document.createElement('img');
  weatherImg.classList.add('weather-img');
  weatherImg.src = weatherObjects.currentConditionsObj.conditionIcon;
  weatherImg.style.height = '100px';
  weatherImg.style.width = '100px';
  currentHorizontalDiv.appendChild(weatherImg);
  var currentTextCondition = document.createElement('h3');
  currentTextCondition.classList.add('current-text-condition');
  currentTextCondition.textContent = weatherObjects.currentConditionsObj.textCondition;
  currentHorizontalDiv.appendChild(currentTextCondition);
  var location = document.createElement('h3');
  location.classList.add('location');
  location.textContent = "".concat(weatherObjects.currentConditionsObj.name, " - ").concat(weatherObjects.currentConditionsObj.region, " - ").concat(weatherObjects.currentConditionsObj.country);
  currentCard.appendChild(location);
  var temp = document.createElement('p');
  temp.classList.add('temp');
  farenheitSelector ? temp.textContent = "It's currently ".concat(weatherObjects.currentConditionsObj.tempF, " \xB0F and feels like it's ").concat(weatherObjects.currentConditionsObj.feelsLikeF, " \xB0F") : temp.textContent = "It's currently ".concat(weatherObjects.currentConditionsObj.tempC, " \xB0C and feels like it's ").concat(weatherObjects.currentConditionsObj.feelsLikeC, " \xB0C");
  currentCard.appendChild(temp);
  var wind = document.createElement('p');
  wind.classList.add('wind');
  farenheitSelector ? wind.textContent = "Wind Speed is ".concat(weatherObjects.currentConditionsObj.windMPH, " mph and is blowing from an ").concat(weatherObjects.currentConditionsObj.windDirection, " heading") : wind.textContent = "Wind Speed is ".concat(weatherObjects.currentConditionsObj.windKPH, " kph and is blowing from an ").concat(weatherObjects.currentConditionsObj.windDirection, " heading");
  currentCard.appendChild(wind);
  var forecastCards = document.querySelector('.forecast-cards');
  console.log(weatherObjects.results);
  weatherObjects.results.forEach(function (_, index) {
    var forecastCard = document.createElement('section');
    forecastCard.classList.add('forecast-card');
    var horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontal-div');
    forecastCard.appendChild(horizontalDiv);
    var forecastDate = document.createElement('h3');
    forecastDate.classList.add('forecast-date');
    forecastDate.textContent = weatherObjects.results[index].date;
    horizontalDiv.appendChild(forecastDate);
    var forecastImg = document.createElement('img');
    forecastImg.classList.add('forecast-img');
    forecastImg.src = weatherObjects.results[index].forecastConditionIcon;
    forecastImg.style.height = '100px';
    forecastImg.style.width = '100px';
    horizontalDiv.appendChild(forecastImg);
    var forecastTemp = document.createElement('p');
    forecastTemp.classList.add('forecast-temp');
    farenheitSelector ? forecastTemp.textContent = "High: ".concat(weatherObjects.results[index].maxTempF, " \xB0F - Low: ").concat(weatherObjects.results[index].minTempF, " \xB0F") : forecastTemp.textContent = "High: ".concat(weatherObjects.results[index].maxTempC, " \xB0C - Low: ").concat(weatherObjects.results[index].minTempC, " \xB0C");
    forecastCard.appendChild(forecastTemp);
    var forecastRain = document.createElement('p');
    forecastRain.classList.add('forecast-wind');
    forecastRain.textContent = "Chance of Rain: ".concat(weatherObjects.results[index].dailyChanceOfRain, " % - UV Index: ").concat(weatherObjects.results[index].uvIndex);
    forecastCard.appendChild(forecastRain);
    forecastCards.appendChild(forecastCard);
  });
}
drawWeatherCards();
function clearWeatherCards() {
  var currentCard = document.querySelector('.current-weather-card');
  var forecastCards = document.querySelector('.forecast-cards');
  currentCard.innerHTML = '';
  forecastCards.innerHTML = '';
}

/***/ }),

/***/ "./src/weather/changeBackground.js":
/*!*****************************************!*\
  !*** ./src/weather/changeBackground.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pixabay = "34655524-102c7cf8c87709af60a371265";
var weatherCondition = document.querySelector('.weather-condition');
var background = document.querySelector('body');
async function changeBackground(weatherText) {
  var searchTerm = encodeSearchTerm(weatherText);
  var pixabayData = {};
  var newUrl = new URL("https://pixabay.com/api/?key=34655524-102c7cf8c87709af60a371265&q=outdoor+".concat(searchTerm, "+weather&image_type=photo&category=nature&per_page=3"));
  var response = await fetch(newUrl.href, {
    mode: 'cors'
  });
  try {
    pixabayData = await response.json();
    console.log(pixabayData.hits[0].largeImageURL);
    background.style.backgroundImage = "url(".concat(pixabayData.hits[0].largeImageURL, ")");
  } catch (err) {
    console.log(err);
  }
  return pixabayData;
}
function encodeSearchTerm(searchTerm) {
  return searchTerm.replaceAll(/ /g, '+');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBackground);

/***/ }),

/***/ "./src/weather/mainViews.js":
/*!**********************************!*\
  !*** ./src/weather/mainViews.js ***!
  \**********************************/
/***/ (() => {

var mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

// current weather section
var container = document.createElement('section');
container.classList.add('current-weather-section');
mainContainer.appendChild(container);
var header = document.createElement('h2');
header.classList.add('current-weather-header');
header.textContent = 'Current Weather';
container.appendChild(header);
var currentWeatherCard = document.createElement('section');
currentWeatherCard.classList.add('current-weather-card');
currentWeatherCard.textContent = '';
container.appendChild(currentWeatherCard);

// forecast section

var forecastMainContainer = document.createElement('section');
forecastMainContainer.classList.add('forecast-section');
mainContainer.appendChild(forecastMainContainer);
var forecastHeader = document.createElement('h2');
forecastHeader.classList.add('forecast-header');
forecastHeader.textContent = '3 Day Forecast';
forecastMainContainer.appendChild(forecastHeader);

// forecast card container
var forecastCards = document.createElement('div');
forecastCards.classList.add('forecast-cards');
forecastMainContainer.appendChild(forecastCards);

// footer

var footerDiv = document.createElement('div');
footerDiv.classList.add('footer-div');
mainContainer.appendChild(footerDiv);
var footerText = document.createElement('p');
footerText.classList.add('footer-copyright');
footerText.textContent = '© 2023 JustWaveThings -';
footerDiv.appendChild(footerText);
var footerLink = document.createElement('a');
footerLink.classList.add('footer-link');
footerLink.textContent = 'Background Images by Pixabay';
footerLink.href = 'https://pixabay.com/';
footerDiv.appendChild(footerLink);

/***/ }),

/***/ "./src/weather/weatherAPI.js":
/*!***********************************!*\
  !*** ./src/weather/weatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var weatherApiKey = "2cf89fcf31c74d7785a20551232003";
async function getWeather(locationSearch) {
  var forecastDays = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var location = convertInputsToUrlReady(locationSearch);
  var days = convertInputsToUrlReady(forecastDays);
  var weatherData = {};
  var newUrl = new URL("https://api.weatherapi.com/v1/forecast.json?key=".concat(weatherApiKey, "&q=").concat(location, "&days=").concat(days, "&aqi=no&alerts=no"));
  console.log(newUrl.href);
  var response = await fetch(newUrl.href, {
    mode: 'cors'
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

// eslint-disable-next-line consistent-return
function convertInputsToUrlReady(userInput) {
  if (typeof +userInput === 'number') {
    console.log('either a number type or can be coereced to a number');
    return userInput;
  }
  if (typeof userInput === 'string') {
    return userInput.replaceAll(/ /g, '');
  }
  console.log('Error: Input is not a string or number');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./src/weather/weatherAppDataObj.js":
/*!******************************************!*\
  !*** ./src/weather/weatherAppDataObj.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */

async function pullWeatherData(weatherAPIResponse) {
  var _await$weatherAPIResp = await weatherAPIResponse,
    _await$weatherAPIResp2 = _await$weatherAPIResp.location,
    region = _await$weatherAPIResp2.region,
    name = _await$weatherAPIResp2.name,
    country = _await$weatherAPIResp2.country,
    localDateTime = _await$weatherAPIResp2.localtime,
    _await$weatherAPIResp3 = _await$weatherAPIResp.current,
    tempF = _await$weatherAPIResp3.temp_f,
    tempC = _await$weatherAPIResp3.temp_c,
    feelsLikeF = _await$weatherAPIResp3.feelslike_f,
    feelsLikeC = _await$weatherAPIResp3.feelslike_c,
    windMPH = _await$weatherAPIResp3.wind_mph,
    windKPH = _await$weatherAPIResp3.wind_kph,
    windDirection = _await$weatherAPIResp3.wind_dir,
    isDay = _await$weatherAPIResp3.is_day,
    _await$weatherAPIResp4 = _await$weatherAPIResp3.condition,
    textCondition = _await$weatherAPIResp4.text,
    conditionIcon = _await$weatherAPIResp4.icon;
  var currentConditionsObj = {
    name: name,
    region: region,
    country: country,
    localDate: localDateTime.split(' ')[0],
    localTime: localDateTime.split(' ')[1],
    tempF: tempF,
    feelsLikeF: feelsLikeF,
    tempC: tempC,
    feelsLikeC: feelsLikeC,
    windMPH: windMPH,
    windKPH: windKPH,
    windDirection: windDirection,
    isDay: isDay,
    textCondition: textCondition,
    conditionIcon: "https:".concat(conditionIcon)
  };
  var forecastDays = await weatherAPIResponse.forecast.forecastday;
  var results = [];
  for (var i = 0; i < forecastDays.length; i++) {
    var _forecastDays$i = forecastDays[i],
      date = _forecastDays$i.date,
      _forecastDays$i$day = _forecastDays$i.day,
      avgTempC = _forecastDays$i$day.avgtemp_c,
      maxTempC = _forecastDays$i$day.maxtemp_c,
      minTempC = _forecastDays$i$day.mintemp_c,
      averageHumidity = _forecastDays$i$day.avghumidity,
      avgTempF = _forecastDays$i$day.avgtemp_f,
      dailyChanceOfRain = _forecastDays$i$day.daily_chance_of_rain,
      dailyChanceOfSnow = _forecastDays$i$day.daily_chance_of_snow,
      maxTempF = _forecastDays$i$day.maxtemp_f,
      minTempF = _forecastDays$i$day.mintemp_f,
      totalPrecipIn = _forecastDays$i$day.totalprecip_in,
      totalSnowCm = _forecastDays$i$day.totalsnow_cm,
      uvIndex = _forecastDays$i$day.uv,
      _forecastDays$i$day$c = _forecastDays$i$day.condition,
      forecastTextCondition = _forecastDays$i$day$c.text,
      forecastConditionIcon = _forecastDays$i$day$c.icon;
    var forecastObj = {
      date: date,
      averageHumidity: averageHumidity,
      avgTempF: avgTempF,
      avgTempC: avgTempC,
      dailyChanceOfRain: dailyChanceOfRain,
      dailyChanceOfSnow: dailyChanceOfSnow,
      maxTempF: maxTempF,
      maxTempC: maxTempC,
      minTempF: minTempF,
      minTempC: minTempC,
      totalPrecipIn: totalPrecipIn,
      totalSnowCm: totalSnowCm,
      uvIndex: uvIndex,
      forecastTextCondition: forecastTextCondition,
      forecastConditionIcon: "https:".concat(forecastConditionIcon)
    };
    results.push(forecastObj);
  }
  return {
    currentConditionsObj: currentConditionsObj,
    results: results
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pullWeatherData);

/***/ }),

/***/ "./src/weather/weatherForm.js":
/*!************************************!*\
  !*** ./src/weather/weatherForm.js ***!
  \************************************/
/***/ (() => {

/// where the dom for user input will be rendered
var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
var header = document.createElement('header');
header.classList.add('header');
header.textContent = 'Weather App';
container.appendChild(header);
var nav = document.createElement('nav');
nav.classList.add('nav', 'container');
container.appendChild(nav);
var searchForm = document.createElement('form');
searchForm.classList.add('search-form', 'container');
searchForm.id = 'search-form';
searchForm.name = 'search-form';
searchForm.noValidate = true;
nav.appendChild(searchForm);
var fieldset = document.createElement('fieldset');
fieldset.classList.add('fieldset');
searchForm.appendChild(fieldset);
var legend = document.createElement('legend');
legend.classList.add('legend');
legend.textContent = '';
searchForm.appendChild(legend);
var searchInput = document.createElement('input');
searchInput.classList.add('search-input');
searchInput.id = 'search-input';
searchInput.name = 'search-input';
searchInput.type = 'search';
searchInput.placeholder = 'Enter a Location';
searchInput.required = true;
searchForm.appendChild(searchInput);
var searchBtn = document.createElement('button');
searchBtn.classList.add('search-btn');
searchBtn.textContent = 'Search';
searchForm.appendChild(searchBtn);
var searchBtnIcon = document.createElement('i');
searchBtnIcon.classList.add('fa', 'fasearch');
searchBtn.appendChild(searchBtnIcon);
var toggle = document.createElement('button');
toggle.classList.add('search-btn');
toggle.id = 'toggle';
toggle.textContent = 'F°/ C°';
searchForm.appendChild(toggle);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/meyerReset.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/meyerReset.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video{\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/meyerReset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,aAAa;CACb,eAAe;CACf,wBAAwB;AACzB;;AAEA,gDAAgD;AAChD;;CAEC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb;;AAEA;;CAEC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video{\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: RobotoRegular, Arial, Helvetica, sans-serif;\n\tsrc: 'url(./fonts/Roboto-Regular.ttf)';\n}\n\nbody {\n\tbackground-color: lightgray;\n\tcolor: black;\n\tfont-family: RobotoRegular, sans-serif;\n\tfont-size: 16px;\n\theight: 100svh;\n\topacity: .8;\n\tbackground-size: cover;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: flex-start;\n\tgap: 1rem;\n\tpadding: 2rem;\n\tflex-wrap: wrap;\n\n}\n\n.current-weather-header, .forecast-header{\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tletter-spacing: .1rem;\n\tbackground-color: whitesmoke;\n\tpadding: .7rem 1rem;\n\tborder-radius: .5rem;\n\tcolor: black;\n\ttext-align: center;\n\tmargin: 2rem;\n}\n\n.current-weather-section {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.current-horizontal-div{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tgap: 30%;\n\talign-items: center;\n\tflex-wrap: wrap;\n}\n\n.current-text-condition {\n\tfont-size: 1.5rem;\n\tfont-weight: 300;\n\n\n}\n\n.forecast-section {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\n}\n\n.forecast-cards {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\tflex-wrap: wrap;\n}\n\n\n\n.forecast-card, .current-weather-card {\n\tdisplay: flex;\n\tgap: 1rem;\n\tpadding: 3rem;\n\tflex-direction: column;\n\tbackground-color: whitesmoke;\n\tflex-shrink: 0;\n\tborder-radius: .5rem;\n}\n\n.horizontal-div{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n}\n\n.current-weather-card{\n\tflex-grow: 1;\n}\n\n.container {\n\tbackground-color: black;\n\tcolor: whitesmoke;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tpadding: 1rem 3rem;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tflex-wrap: wrap;\n\n}\n\n.header{\n\tmargin-right: auto;\n}\n\nlegend, fieldset {\n\tdisplay: none;\n}\n\nform.search-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n}\n\n.search-input {\n\tflex-grow: 1;\n}\n\n\n.search-btn, .search-input {\n\tpadding: .5rem 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tborder-radius: .5rem;\n}\n\n.search-btn:hover, .search-input:hover {\n\tcursor: pointer;\n\ttransition: scale  0.3s cubic-bezier(0.25, 0.1, 0, 3.04);\n\ttransform: scale(1.1);\n}\n\n.search-input:hover{\n\tcursor: text;\n\ttransform: scale(1.05)\n}\n\n.footer {\n\tmargin-top: auto;\n\tcolor: whitesmoke;\n\tpadding-top: 4rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-end;\n\tgap: 1rem;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\n}\n\n.footer-div{\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 0.25rem;\n}\n\n.footer-link, .footer-copyright{\n\tbackground-color: black;\n\ttext-decoration: none;\n\tcolor: whitesmoke;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,wDAAwD;CACxD,sCAAsC;AACvC;;AAEA;CACC,2BAA2B;CAC3B,YAAY;CACZ,sCAAsC;CACtC,eAAe;CACf,cAAc;CACd,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,uBAAuB;CACvB,SAAS;CACT,aAAa;CACb,eAAe;;AAEhB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,4BAA4B;CAC5B,mBAAmB;CACnB,oBAAoB;CACpB,YAAY;CACZ,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,QAAQ;CACR,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;;;AAGjB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;;AAEpB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;CACT,eAAe;AAChB;;;;AAIA;CACC,aAAa;CACb,SAAS;CACT,aAAa;CACb,sBAAsB;CACtB,4BAA4B;CAC5B,cAAc;CACd,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,uBAAuB;CACvB,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,mBAAmB;CACnB,kBAAkB;CAClB,eAAe;CACf,gBAAgB;CAChB,eAAe;;AAEhB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,2BAA2B;CAC3B,mBAAmB;CACnB,SAAS;CACT,WAAW;CACX,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;;AAGA;CACC,mBAAmB;CACnB,sCAAsC;CACtC,mBAAmB;CACnB,eAAe;CACf,gBAAgB;CAChB,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,wDAAwD;CACxD,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ;AACD;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,qBAAqB;CACrB,SAAS;CACT,eAAe;CACf,gBAAgB;;AAEjB;;AAEA;CACC,eAAe;CACf,OAAO;CACP,QAAQ;CACR,SAAS;CACT,YAAY;;CAEZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,uBAAuB;CACvB,qBAAqB;CACrB,iBAAiB;AAClB","sourcesContent":["@font-face {\n\tfont-family: RobotoRegular, Arial, Helvetica, sans-serif;\n\tsrc: 'url(./fonts/Roboto-Regular.ttf)';\n}\n\nbody {\n\tbackground-color: lightgray;\n\tcolor: black;\n\tfont-family: RobotoRegular, sans-serif;\n\tfont-size: 16px;\n\theight: 100svh;\n\topacity: .8;\n\tbackground-size: cover;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: flex-start;\n\tgap: 1rem;\n\tpadding: 2rem;\n\tflex-wrap: wrap;\n\n}\n\n.current-weather-header, .forecast-header{\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tletter-spacing: .1rem;\n\tbackground-color: whitesmoke;\n\tpadding: .7rem 1rem;\n\tborder-radius: .5rem;\n\tcolor: black;\n\ttext-align: center;\n\tmargin: 2rem;\n}\n\n.current-weather-section {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.current-horizontal-div{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tgap: 30%;\n\talign-items: center;\n\tflex-wrap: wrap;\n}\n\n.current-text-condition {\n\tfont-size: 1.5rem;\n\tfont-weight: 300;\n\n\n}\n\n.forecast-section {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\n}\n\n.forecast-cards {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\tflex-wrap: wrap;\n}\n\n\n\n.forecast-card, .current-weather-card {\n\tdisplay: flex;\n\tgap: 1rem;\n\tpadding: 3rem;\n\tflex-direction: column;\n\tbackground-color: whitesmoke;\n\tflex-shrink: 0;\n\tborder-radius: .5rem;\n}\n\n.horizontal-div{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n}\n\n.current-weather-card{\n\tflex-grow: 1;\n}\n\n.container {\n\tbackground-color: black;\n\tcolor: whitesmoke;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tpadding: 1rem 3rem;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tflex-wrap: wrap;\n\n}\n\n.header{\n\tmargin-right: auto;\n}\n\nlegend, fieldset {\n\tdisplay: none;\n}\n\nform.search-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n}\n\n.search-input {\n\tflex-grow: 1;\n}\n\n\n.search-btn, .search-input {\n\tpadding: .5rem 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tborder-radius: .5rem;\n}\n\n.search-btn:hover, .search-input:hover {\n\tcursor: pointer;\n\ttransition: scale  0.3s cubic-bezier(0.25, 0.1, 0, 3.04);\n\ttransform: scale(1.1);\n}\n\n.search-input:hover{\n\tcursor: text;\n\ttransform: scale(1.05)\n}\n\n.footer {\n\tmargin-top: auto;\n\tcolor: whitesmoke;\n\tpadding-top: 4rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-end;\n\tgap: 1rem;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\n}\n\n.footer-div{\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 0.25rem;\n}\n\n.footer-link, .footer-copyright{\n\tbackground-color: black;\n\ttext-decoration: none;\n\tcolor: whitesmoke;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/meyerReset.css":
/*!****************************!*\
  !*** ./src/meyerReset.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_meyerReset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./meyerReset.css */ "./node_modules/css-loader/dist/cjs.js!./src/meyerReset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_meyerReset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_meyerReset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_meyerReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_meyerReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvd2VhdGhlci9jaGFuZ2VCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy93ZWF0aGVyL21haW5WaWV3cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvd2VhdGhlci93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy93ZWF0aGVyL3dlYXRoZXJBcHBEYXRhT2JqLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy93ZWF0aGVyL3dlYXRoZXJGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9tZXllclJlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvbWV5ZXJSZXNldC5jc3M/ODdkZCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbWV5ZXJSZXNldC5jc3MnO1xuaW1wb3J0ICcuL3dlYXRoZXIvd2VhdGhlckZvcm0nO1xuaW1wb3J0IHRoZVdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXJBUEknO1xuaW1wb3J0IGNoYW5nZUJhY2tncm91bmQgZnJvbSAnLi93ZWF0aGVyL2NoYW5nZUJhY2tncm91bmQnO1xuaW1wb3J0IHB1bGxXZWF0aGVyRGF0YSBmcm9tICcuL3dlYXRoZXIvd2VhdGhlckFwcERhdGFPYmonO1xuaW1wb3J0ICcuL3dlYXRoZXIvbWFpblZpZXdzJztcblxubGV0IGZhcmVuaGVpdFNlbGVjdG9yID0gdHJ1ZTtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZScpO1xuXG5sZXQgdXNlcklucHV0ID0gJzMzMDQ1Jztcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyhzZWFyY2hJbnB1dC52YWx1ZSk7XG5cdGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gJycgfHwgc2VhcmNoSW5wdXQudmFsdWUgPT09IG51bGwpIHtcblx0XHR1c2VySW5wdXQgPSAnMzMwNDUnO1xuXHR9IGVsc2Uge1xuXHRcdHVzZXJJbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuXHR9XG5cdGdldFdlYXRoZXJEYXRhKHVzZXJJbnB1dCk7XG5cdGNsZWFyV2VhdGhlckNhcmRzKCk7XG5cdGRyYXdXZWF0aGVyQ2FyZHMoKTtcbn0pO1xuXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGZhcmVuaGVpdFNlbGVjdG9yID8gKGZhcmVuaGVpdFNlbGVjdG9yID0gZmFsc2UpIDogKGZhcmVuaGVpdFNlbGVjdG9yID0gdHJ1ZSk7XG5cdGNsZWFyV2VhdGhlckNhcmRzKCk7XG5cdGRyYXdXZWF0aGVyQ2FyZHMoKTtcblx0Y29uc29sZS5sb2coZmFyZW5oZWl0U2VsZWN0b3IpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVzZXJMb2NhdGlvbikge1xuXHRjb25zdCBkYXRhID0gdXNlckxvY2F0aW9uO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblx0dHJ5IHtcblx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHRoZVdlYXRoZXIoZGF0YSk7XG5cdFx0Y29uc3Qgd2VhdGhlck9iamVjdHMgPSBhd2FpdCBwdWxsV2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuXHRcdGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzKTtcblx0XHRjaGFuZ2VCYWNrZ3JvdW5kKHdlYXRoZXJPYmplY3RzLmN1cnJlbnRDb25kaXRpb25zT2JqLnRleHRDb25kaXRpb24pO1xuXHRcdHJldHVybiB3ZWF0aGVyT2JqZWN0cztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBkcmF3V2VhdGhlckNhcmRzKCkge1xuXHRjb25zdCBjdXJyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItY2FyZCcpO1xuXHRjb25zdCB3ZWF0aGVyT2JqZWN0cyA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHVzZXJJbnB1dCk7XG5cblx0Y29uc3QgY3VycmVudEhvcml6b250YWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y3VycmVudEhvcml6b250YWxEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1ob3Jpem9udGFsLWRpdicpO1xuXHRjdXJyZW50Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50SG9yaXpvbnRhbERpdik7XG5cblx0Y29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHR3ZWF0aGVySW1nLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItaW1nJyk7XG5cdHdlYXRoZXJJbWcuc3JjID0gd2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmouY29uZGl0aW9uSWNvbjtcblx0d2VhdGhlckltZy5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuXHR3ZWF0aGVySW1nLnN0eWxlLndpZHRoID0gJzEwMHB4Jztcblx0Y3VycmVudEhvcml6b250YWxEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cblx0Y29uc3QgY3VycmVudFRleHRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRjdXJyZW50VGV4dENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXRleHQtY29uZGl0aW9uJyk7XG5cdGN1cnJlbnRUZXh0Q29uZGl0aW9uLnRleHRDb250ZW50ID1cblx0XHR3ZWF0aGVyT2JqZWN0cy5jdXJyZW50Q29uZGl0aW9uc09iai50ZXh0Q29uZGl0aW9uO1xuXHRjdXJyZW50SG9yaXpvbnRhbERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGV4dENvbmRpdGlvbik7XG5cblx0Y29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuXHRsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmplY3RzLmN1cnJlbnRDb25kaXRpb25zT2JqLm5hbWV9IC0gJHt3ZWF0aGVyT2JqZWN0cy5jdXJyZW50Q29uZGl0aW9uc09iai5yZWdpb259IC0gJHt3ZWF0aGVyT2JqZWN0cy5jdXJyZW50Q29uZGl0aW9uc09iai5jb3VudHJ5fWA7XG5cdGN1cnJlbnRDYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuXHRjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHR0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcblx0ZmFyZW5oZWl0U2VsZWN0b3Jcblx0XHQ/ICh0ZW1wLnRleHRDb250ZW50ID0gYEl0J3MgY3VycmVudGx5ICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmoudGVtcEZ9IMKwRiBhbmQgZmVlbHMgbGlrZSBpdCdzICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmouZmVlbHNMaWtlRn0gwrBGYClcblx0XHQ6ICh0ZW1wLnRleHRDb250ZW50ID0gYEl0J3MgY3VycmVudGx5ICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmoudGVtcEN9IMKwQyBhbmQgZmVlbHMgbGlrZSBpdCdzICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmouZmVlbHNMaWtlQ30gwrBDYCk7XG5cdGN1cnJlbnRDYXJkLmFwcGVuZENoaWxkKHRlbXApO1xuXG5cdGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHdpbmQuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xuXHRmYXJlbmhlaXRTZWxlY3RvclxuXHRcdD8gKHdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZCBpcyAke3dlYXRoZXJPYmplY3RzLmN1cnJlbnRDb25kaXRpb25zT2JqLndpbmRNUEh9IG1waCBhbmQgaXMgYmxvd2luZyBmcm9tIGFuICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmoud2luZERpcmVjdGlvbn0gaGVhZGluZ2ApXG5cdFx0OiAod2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkIGlzICR7d2VhdGhlck9iamVjdHMuY3VycmVudENvbmRpdGlvbnNPYmoud2luZEtQSH0ga3BoIGFuZCBpcyBibG93aW5nIGZyb20gYW4gJHt3ZWF0aGVyT2JqZWN0cy5jdXJyZW50Q29uZGl0aW9uc09iai53aW5kRGlyZWN0aW9ufSBoZWFkaW5nYCk7XG5cdGN1cnJlbnRDYXJkLmFwcGVuZENoaWxkKHdpbmQpO1xuXG5cdGNvbnN0IGZvcmVjYXN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtY2FyZHMnKTtcblxuXHRjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0cy5yZXN1bHRzKTtcblxuXHR3ZWF0aGVyT2JqZWN0cy5yZXN1bHRzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgZm9yZWNhc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXHRcdGZvcmVjYXN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1jYXJkJyk7XG5cdFx0Y29uc3QgaG9yaXpvbnRhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGhvcml6b250YWxEaXYuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1kaXYnKTtcblx0XHRmb3JlY2FzdENhcmQuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbERpdik7XG5cblx0XHRjb25zdCBmb3JlY2FzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRcdGZvcmVjYXN0RGF0ZS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXRlJyk7XG5cdFx0Zm9yZWNhc3REYXRlLnRleHRDb250ZW50ID0gd2VhdGhlck9iamVjdHMucmVzdWx0c1tpbmRleF0uZGF0ZTtcblx0XHRob3Jpem9udGFsRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF0ZSk7XG5cblx0XHRjb25zdCBmb3JlY2FzdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGZvcmVjYXN0SW1nLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWltZycpO1xuXHRcdGZvcmVjYXN0SW1nLnNyYyA9IHdlYXRoZXJPYmplY3RzLnJlc3VsdHNbaW5kZXhdLmZvcmVjYXN0Q29uZGl0aW9uSWNvbjtcblx0XHRmb3JlY2FzdEltZy5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuXHRcdGZvcmVjYXN0SW1nLnN0eWxlLndpZHRoID0gJzEwMHB4Jztcblx0XHRob3Jpem9udGFsRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0SW1nKTtcblxuXHRcdGNvbnN0IGZvcmVjYXN0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRmb3JlY2FzdFRlbXAuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtdGVtcCcpO1xuXHRcdGZhcmVuaGVpdFNlbGVjdG9yXG5cdFx0XHQ/IChmb3JlY2FzdFRlbXAudGV4dENvbnRlbnQgPSBgSGlnaDogJHt3ZWF0aGVyT2JqZWN0cy5yZXN1bHRzW2luZGV4XS5tYXhUZW1wRn0gwrBGIC0gTG93OiAke3dlYXRoZXJPYmplY3RzLnJlc3VsdHNbaW5kZXhdLm1pblRlbXBGfSDCsEZgKVxuXHRcdFx0OiAoZm9yZWNhc3RUZW1wLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7d2VhdGhlck9iamVjdHMucmVzdWx0c1tpbmRleF0ubWF4VGVtcEN9IMKwQyAtIExvdzogJHt3ZWF0aGVyT2JqZWN0cy5yZXN1bHRzW2luZGV4XS5taW5UZW1wQ30gwrBDYCk7XG5cdFx0Zm9yZWNhc3RDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcCk7XG5cblx0XHRjb25zdCBmb3JlY2FzdFJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0Zm9yZWNhc3RSYWluLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LXdpbmQnKTtcblx0XHRmb3JlY2FzdFJhaW4udGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7d2VhdGhlck9iamVjdHMucmVzdWx0c1tpbmRleF0uZGFpbHlDaGFuY2VPZlJhaW59ICUgLSBVViBJbmRleDogJHt3ZWF0aGVyT2JqZWN0cy5yZXN1bHRzW2luZGV4XS51dkluZGV4fWA7XG5cdFx0Zm9yZWNhc3RDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0UmFpbik7XG5cdFx0Zm9yZWNhc3RDYXJkcy5hcHBlbmRDaGlsZChmb3JlY2FzdENhcmQpO1xuXHR9KTtcbn1cblxuZHJhd1dlYXRoZXJDYXJkcygpO1xuXG5mdW5jdGlvbiBjbGVhcldlYXRoZXJDYXJkcygpIHtcblx0Y29uc3QgY3VycmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWNhcmQnKTtcblx0Y29uc3QgZm9yZWNhc3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1jYXJkcycpO1xuXHRjdXJyZW50Q2FyZC5pbm5lckhUTUwgPSAnJztcblx0Zm9yZWNhc3RDYXJkcy5pbm5lckhUTUwgPSAnJztcbn1cbiIsImNvbnN0IHBpeGFiYXkgPSBwcm9jZXNzLmVudi5QSVhBQkFZX0FQSV9LRVk7XG5cbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb25kaXRpb24nKTtcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQod2VhdGhlclRleHQpIHtcblx0Y29uc3Qgc2VhcmNoVGVybSA9IGVuY29kZVNlYXJjaFRlcm0od2VhdGhlclRleHQpO1xuXHRsZXQgcGl4YWJheURhdGEgPSB7fTtcblx0Y29uc3QgbmV3VXJsID0gbmV3IFVSTChcblx0XHRgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0zNDY1NTUyNC0xMDJjN2NmOGM4NzcwOWFmNjBhMzcxMjY1JnE9b3V0ZG9vciske3NlYXJjaFRlcm19K3dlYXRoZXImaW1hZ2VfdHlwZT1waG90byZjYXRlZ29yeT1uYXR1cmUmcGVyX3BhZ2U9M2Bcblx0KTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdVcmwuaHJlZiwge1xuXHRcdG1vZGU6ICdjb3JzJyxcblx0fSk7XG5cdHRyeSB7XG5cdFx0cGl4YWJheURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2cocGl4YWJheURhdGEuaGl0c1swXS5sYXJnZUltYWdlVVJMKTtcblx0XHRiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwaXhhYmF5RGF0YS5oaXRzWzBdLmxhcmdlSW1hZ2VVUkx9KWA7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cblx0cmV0dXJuIHBpeGFiYXlEYXRhO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVTZWFyY2hUZXJtKHNlYXJjaFRlcm0pIHtcblx0cmV0dXJuIHNlYXJjaFRlcm0ucmVwbGFjZUFsbCgvIC9nLCAnKycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VCYWNrZ3JvdW5kO1xuIiwiY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuLy8gY3VycmVudCB3ZWF0aGVyIHNlY3Rpb25cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItc2VjdGlvbicpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlci1oZWFkZXInKTtcbmhlYWRlci50ZXh0Q29udGVudCA9ICdDdXJyZW50IFdlYXRoZXInO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmN1cnJlbnRXZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItY2FyZCcpO1xuY3VycmVudFdlYXRoZXJDYXJkLnRleHRDb250ZW50ID0gJyc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJDYXJkKTtcblxuLy8gZm9yZWNhc3Qgc2VjdGlvblxuXG5jb25zdCBmb3JlY2FzdE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5mb3JlY2FzdE1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3Qtc2VjdGlvbicpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdE1haW5Db250YWluZXIpO1xuXG5jb25zdCBmb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5mb3JlY2FzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1oZWFkZXInKTtcbmZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gJzMgRGF5IEZvcmVjYXN0JztcbmZvcmVjYXN0TWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEhlYWRlcik7XG5cbi8vIGZvcmVjYXN0IGNhcmQgY29udGFpbmVyXG5jb25zdCBmb3JlY2FzdENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JlY2FzdENhcmRzLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWNhcmRzJyk7XG5mb3JlY2FzdE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RDYXJkcyk7XG5cbi8vIGZvb3RlclxuXG5jb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItZGl2Jyk7XG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG5cbmNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5mb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb3B5cmlnaHQnKTtcbmZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnwqkgMjAyMyBKdXN0V2F2ZVRoaW5ncyAtJztcbmZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxpbmsnKTtcbmZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnQmFja2dyb3VuZCBJbWFnZXMgYnkgUGl4YWJheSc7XG5mb290ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9waXhhYmF5LmNvbS8nO1xuZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuIiwiY29uc3Qgd2VhdGhlckFwaUtleSA9IHByb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvblNlYXJjaCwgZm9yZWNhc3REYXlzID0gMykge1xuXHRjb25zdCBsb2NhdGlvbiA9IGNvbnZlcnRJbnB1dHNUb1VybFJlYWR5KGxvY2F0aW9uU2VhcmNoKTtcblx0Y29uc3QgZGF5cyA9IGNvbnZlcnRJbnB1dHNUb1VybFJlYWR5KGZvcmVjYXN0RGF5cyk7XG5cdGxldCB3ZWF0aGVyRGF0YSA9IHt9O1xuXHRjb25zdCBuZXdVcmwgPSBuZXcgVVJMKFxuXHRcdGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3dlYXRoZXJBcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0ke2RheXN9JmFxaT1ubyZhbGVydHM9bm9gXG5cdCk7XG5cdGNvbnNvbGUubG9nKG5ld1VybC5ocmVmKTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdVcmwuaHJlZiwge1xuXHRcdG1vZGU6ICdjb3JzJyxcblx0fSk7XG5cdHRyeSB7XG5cdFx0d2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9XG5cdHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuLyogUXVlcnkgcGFyYW1ldGVyIGJhc2VkIG9uIHdoaWNoIGRhdGEgaXMgc2VudCBiYWNrLiBJdCBjb3VsZCBiZSBmb2xsb3dpbmc6XG5cbmNpdHkgbmFtZSBlLmcuOiBQYXJpc1xuVVMgemlwIGUuZy46IDEwMDAxXG5VSyBwb3N0Y29kZSBlLmc6IFNXMVxuQ2FuYWRhIHBvc3RhbCBjb2RlIGUuZzogRzJKXG5tZXRhcjo8bWV0YXIgY29kZT4gZS5nOiBtZXRhcjpFR0xMXG5pYXRhOjwzIGRpZ2l0IGFpcnBvcnQgY29kZT4gZS5nOiBpYXRhOkRYQlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gY29udmVydElucHV0c1RvVXJsUmVhZHkodXNlcklucHV0KSB7XG5cdGlmICh0eXBlb2YgK3VzZXJJbnB1dCA9PT0gJ251bWJlcicpIHtcblx0XHRjb25zb2xlLmxvZygnZWl0aGVyIGEgbnVtYmVyIHR5cGUgb3IgY2FuIGJlIGNvZXJlY2VkIHRvIGEgbnVtYmVyJyk7XG5cdFx0cmV0dXJuIHVzZXJJbnB1dDtcblx0fVxuXHRpZiAodHlwZW9mIHVzZXJJbnB1dCA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdXNlcklucHV0LnJlcGxhY2VBbGwoLyAvZywgJycpO1xuXHR9XG5cdGNvbnNvbGUubG9nKCdFcnJvcjogSW5wdXQgaXMgbm90IGEgc3RyaW5nIG9yIG51bWJlcicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuYXN5bmMgZnVuY3Rpb24gcHVsbFdlYXRoZXJEYXRhKHdlYXRoZXJBUElSZXNwb25zZSkge1xuXHRjb25zdCB7XG5cdFx0bG9jYXRpb246IHsgcmVnaW9uLCBuYW1lLCBjb3VudHJ5LCBsb2NhbHRpbWU6IGxvY2FsRGF0ZVRpbWUgfSxcblx0XHRjdXJyZW50OiB7XG5cdFx0XHR0ZW1wX2Y6IHRlbXBGLFxuXHRcdFx0dGVtcF9jOiB0ZW1wQyxcblx0XHRcdGZlZWxzbGlrZV9mOiBmZWVsc0xpa2VGLFxuXHRcdFx0ZmVlbHNsaWtlX2M6IGZlZWxzTGlrZUMsXG5cdFx0XHR3aW5kX21waDogd2luZE1QSCxcblx0XHRcdHdpbmRfa3BoOiB3aW5kS1BILFxuXHRcdFx0d2luZF9kaXI6IHdpbmREaXJlY3Rpb24sXG5cdFx0XHRpc19kYXk6IGlzRGF5LFxuXHRcdFx0Y29uZGl0aW9uOiB7IHRleHQ6IHRleHRDb25kaXRpb24sIGljb246IGNvbmRpdGlvbkljb24gfSxcblx0XHR9LFxuXHR9ID0gYXdhaXQgd2VhdGhlckFQSVJlc3BvbnNlO1xuXG5cdGNvbnN0IGN1cnJlbnRDb25kaXRpb25zT2JqID0ge1xuXHRcdG5hbWUsXG5cdFx0cmVnaW9uLFxuXHRcdGNvdW50cnksXG5cdFx0bG9jYWxEYXRlOiBsb2NhbERhdGVUaW1lLnNwbGl0KCcgJylbMF0sXG5cdFx0bG9jYWxUaW1lOiBsb2NhbERhdGVUaW1lLnNwbGl0KCcgJylbMV0sXG5cdFx0dGVtcEYsXG5cdFx0ZmVlbHNMaWtlRixcblx0XHR0ZW1wQyxcblx0XHRmZWVsc0xpa2VDLFxuXHRcdHdpbmRNUEgsXG5cdFx0d2luZEtQSCxcblx0XHR3aW5kRGlyZWN0aW9uLFxuXHRcdGlzRGF5LFxuXHRcdHRleHRDb25kaXRpb24sXG5cdFx0Y29uZGl0aW9uSWNvbjogYGh0dHBzOiR7Y29uZGl0aW9uSWNvbn1gLFxuXHR9O1xuXG5cdGNvbnN0IGZvcmVjYXN0RGF5cyA9IGF3YWl0IHdlYXRoZXJBUElSZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGF0ZSxcblx0XHRcdGRheToge1xuXHRcdFx0XHRhdmd0ZW1wX2M6IGF2Z1RlbXBDLFxuXHRcdFx0XHRtYXh0ZW1wX2M6IG1heFRlbXBDLFxuXHRcdFx0XHRtaW50ZW1wX2M6IG1pblRlbXBDLFxuXHRcdFx0XHRhdmdodW1pZGl0eTogYXZlcmFnZUh1bWlkaXR5LFxuXHRcdFx0XHRhdmd0ZW1wX2Y6IGF2Z1RlbXBGLFxuXHRcdFx0XHRkYWlseV9jaGFuY2Vfb2ZfcmFpbjogZGFpbHlDaGFuY2VPZlJhaW4sXG5cdFx0XHRcdGRhaWx5X2NoYW5jZV9vZl9zbm93OiBkYWlseUNoYW5jZU9mU25vdyxcblx0XHRcdFx0bWF4dGVtcF9mOiBtYXhUZW1wRixcblx0XHRcdFx0bWludGVtcF9mOiBtaW5UZW1wRixcblx0XHRcdFx0dG90YWxwcmVjaXBfaW46IHRvdGFsUHJlY2lwSW4sXG5cdFx0XHRcdHRvdGFsc25vd19jbTogdG90YWxTbm93Q20sXG5cdFx0XHRcdHV2OiB1dkluZGV4LFxuXHRcdFx0XHRjb25kaXRpb246IHsgdGV4dDogZm9yZWNhc3RUZXh0Q29uZGl0aW9uLCBpY29uOiBmb3JlY2FzdENvbmRpdGlvbkljb24gfSxcblx0XHRcdH0sXG5cdFx0fSA9IGZvcmVjYXN0RGF5c1tpXTtcblxuXHRcdGNvbnN0IGZvcmVjYXN0T2JqID0ge1xuXHRcdFx0ZGF0ZSxcblx0XHRcdGF2ZXJhZ2VIdW1pZGl0eSxcblx0XHRcdGF2Z1RlbXBGLFxuXHRcdFx0YXZnVGVtcEMsXG5cdFx0XHRkYWlseUNoYW5jZU9mUmFpbixcblx0XHRcdGRhaWx5Q2hhbmNlT2ZTbm93LFxuXHRcdFx0bWF4VGVtcEYsXG5cdFx0XHRtYXhUZW1wQyxcblx0XHRcdG1pblRlbXBGLFxuXHRcdFx0bWluVGVtcEMsXG5cdFx0XHR0b3RhbFByZWNpcEluLFxuXHRcdFx0dG90YWxTbm93Q20sXG5cdFx0XHR1dkluZGV4LFxuXHRcdFx0Zm9yZWNhc3RUZXh0Q29uZGl0aW9uLFxuXHRcdFx0Zm9yZWNhc3RDb25kaXRpb25JY29uOiBgaHR0cHM6JHtmb3JlY2FzdENvbmRpdGlvbkljb259YCxcblx0XHR9O1xuXG5cdFx0cmVzdWx0cy5wdXNoKGZvcmVjYXN0T2JqKTtcblx0fVxuXHRyZXR1cm4geyBjdXJyZW50Q29uZGl0aW9uc09iaiwgcmVzdWx0cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwdWxsV2VhdGhlckRhdGE7XG4iLCIvLy8gd2hlcmUgdGhlIGRvbSBmb3IgdXNlciBpbnB1dCB3aWxsIGJlIHJlbmRlcmVkXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5oZWFkZXIudGV4dENvbnRlbnQgPSAnV2VhdGhlciBBcHAnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xubmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdjb250YWluZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtZm9ybScsICdjb250YWluZXInKTtcbnNlYXJjaEZvcm0uaWQgPSAnc2VhcmNoLWZvcm0nO1xuc2VhcmNoRm9ybS5uYW1lID0gJ3NlYXJjaC1mb3JtJztcbnNlYXJjaEZvcm0ubm9WYWxpZGF0ZSA9IHRydWU7XG5uYXYuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5cbmNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbmZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkc2V0Jyk7XG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG5sZWdlbmQuY2xhc3NMaXN0LmFkZCgnbGVnZW5kJyk7XG5sZWdlbmQudGV4dENvbnRlbnQgPSAnJztcbnNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWlucHV0Jyk7XG5zZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtaW5wdXQnO1xuc2VhcmNoSW5wdXQubmFtZSA9ICdzZWFyY2gtaW5wdXQnO1xuc2VhcmNoSW5wdXQudHlwZSA9ICdzZWFyY2gnO1xuc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBMb2NhdGlvbic7XG5zZWFyY2hJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ0bicpO1xuc2VhcmNoQnRuLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ0bik7XG5jb25zdCBzZWFyY2hCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuc2VhcmNoQnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdmYScsICdmYXNlYXJjaCcpO1xuc2VhcmNoQnRuLmFwcGVuZENoaWxkKHNlYXJjaEJ0bkljb24pO1xuXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnRuJyk7XG50b2dnbGUuaWQgPSAndG9nZ2xlJztcbnRvZ2dsZS50ZXh0Q29udGVudCA9ICdGwrAvIEPCsCc7XG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW97XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjpiZWZvcmUsIGJsb2NrcXVvdGU6OmFmdGVyLFxcbnE6OmJlZm9yZSwgcTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWV5ZXJSZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsYUFBYTtDQUNiLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7O0FBRUEsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVve1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlLCBibG9ja3F1b3RlOjphZnRlcixcXG5xOjpiZWZvcmUsIHE6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFx0c3JjOiAndXJsKC4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSc7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG9wYWNpdHk6IC44O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1oZWFkZXIsIC5mb3JlY2FzdC1oZWFkZXJ7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuXFx0cGFkZGluZzogLjdyZW0gMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtaG9yaXpvbnRhbC1kaXZ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMzAlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3VycmVudC10ZXh0LWNvbmRpdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXG5cXG59XFxuXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcblxcbi5mb3JlY2FzdC1jYXJkLCAuY3VycmVudC13ZWF0aGVyLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDNyZW07XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kaXZ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1jYXJke1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxcmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4uaGVhZGVye1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxubGVnZW5kLCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9ybS5zZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcblxcbi5zZWFyY2gtYnRuLCAuc2VhcmNoLWlucHV0IHtcXG5cXHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDggMjU1IC8gNDIuMyUpO1xcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcbi5zZWFyY2gtYnRuOmhvdmVyLCAuc2VhcmNoLWlucHV0OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogc2NhbGUgIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMCwgMy4wNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0OmhvdmVye1xcblxcdGN1cnNvcjogdGV4dDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXFxufVxcblxcbi5mb290ZXIge1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0cGFkZGluZy10b3A6IDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFxufVxcblxcbi5mb290ZXItZGl2e1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1saW5rLCAuZm9vdGVyLWNvcHlyaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyx3REFBd0Q7Q0FDeEQsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixzQ0FBc0M7Q0FDdEMsZUFBZTtDQUNmLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsZUFBZTs7QUFFaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFFBQVE7Q0FDUixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7OztBQUdqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7QUFFcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGVBQWU7QUFDaEI7Ozs7QUFJQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0NBQ1QsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIsY0FBYztDQUNkLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZUFBZTs7QUFFaEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOzs7QUFHQTtDQUNDLG1CQUFtQjtDQUNuQixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHdEQUF3RDtDQUN4RCxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1o7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1QsZUFBZTtDQUNmLGdCQUFnQjs7QUFFakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsT0FBTztDQUNQLFFBQVE7Q0FDUixTQUFTO0NBQ1QsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFx0c3JjOiAndXJsKC4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSc7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG9wYWNpdHk6IC44O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1oZWFkZXIsIC5mb3JlY2FzdC1oZWFkZXJ7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuXFx0cGFkZGluZzogLjdyZW0gMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtaG9yaXpvbnRhbC1kaXZ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMzAlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3VycmVudC10ZXh0LWNvbmRpdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXG5cXG59XFxuXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcblxcbi5mb3JlY2FzdC1jYXJkLCAuY3VycmVudC13ZWF0aGVyLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDNyZW07XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kaXZ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1jYXJke1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxcmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4uaGVhZGVye1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxubGVnZW5kLCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9ybS5zZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcblxcbi5zZWFyY2gtYnRuLCAuc2VhcmNoLWlucHV0IHtcXG5cXHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDggMjU1IC8gNDIuMyUpO1xcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcbi5zZWFyY2gtYnRuOmhvdmVyLCAuc2VhcmNoLWlucHV0OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogc2NhbGUgIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMCwgMy4wNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0OmhvdmVye1xcblxcdGN1cnNvcjogdGV4dDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXFxufVxcblxcbi5mb290ZXIge1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxuXFx0cGFkZGluZy10b3A6IDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFxufVxcblxcbi5mb290ZXItZGl2e1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1saW5rLCAuZm9vdGVyLWNvcHlyaWdodHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXJSZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsidGhlV2VhdGhlciIsImNoYW5nZUJhY2tncm91bmQiLCJwdWxsV2VhdGhlckRhdGEiLCJmYXJlbmhlaXRTZWxlY3RvciIsInNlYXJjaEJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaElucHV0IiwidG9nZ2xlIiwidXNlcklucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImdldFdlYXRoZXJEYXRhIiwiY2xlYXJXZWF0aGVyQ2FyZHMiLCJkcmF3V2VhdGhlckNhcmRzIiwidXNlckxvY2F0aW9uIiwiZGF0YSIsIndlYXRoZXJEYXRhIiwid2VhdGhlck9iamVjdHMiLCJjdXJyZW50Q29uZGl0aW9uc09iaiIsInRleHRDb25kaXRpb24iLCJlcnIiLCJjdXJyZW50Q2FyZCIsImN1cnJlbnRIb3Jpem9udGFsRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwid2VhdGhlckltZyIsInNyYyIsImNvbmRpdGlvbkljb24iLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiY3VycmVudFRleHRDb25kaXRpb24iLCJ0ZXh0Q29udGVudCIsImxvY2F0aW9uIiwiY29uY2F0IiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJ0ZW1wIiwidGVtcEYiLCJmZWVsc0xpa2VGIiwidGVtcEMiLCJmZWVsc0xpa2VDIiwid2luZCIsIndpbmRNUEgiLCJ3aW5kRGlyZWN0aW9uIiwid2luZEtQSCIsImZvcmVjYXN0Q2FyZHMiLCJyZXN1bHRzIiwiZm9yRWFjaCIsIl8iLCJpbmRleCIsImZvcmVjYXN0Q2FyZCIsImhvcml6b250YWxEaXYiLCJmb3JlY2FzdERhdGUiLCJkYXRlIiwiZm9yZWNhc3RJbWciLCJmb3JlY2FzdENvbmRpdGlvbkljb24iLCJmb3JlY2FzdFRlbXAiLCJtYXhUZW1wRiIsIm1pblRlbXBGIiwibWF4VGVtcEMiLCJtaW5UZW1wQyIsImZvcmVjYXN0UmFpbiIsImRhaWx5Q2hhbmNlT2ZSYWluIiwidXZJbmRleCIsImlubmVySFRNTCIsInBpeGFiYXkiLCJwcm9jZXNzIiwiZW52IiwiUElYQUJBWV9BUElfS0VZIiwid2VhdGhlckNvbmRpdGlvbiIsImJhY2tncm91bmQiLCJ3ZWF0aGVyVGV4dCIsInNlYXJjaFRlcm0iLCJlbmNvZGVTZWFyY2hUZXJtIiwicGl4YWJheURhdGEiLCJuZXdVcmwiLCJVUkwiLCJyZXNwb25zZSIsImZldGNoIiwiaHJlZiIsIm1vZGUiLCJqc29uIiwiaGl0cyIsImxhcmdlSW1hZ2VVUkwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXBsYWNlQWxsIiwibWFpbkNvbnRhaW5lciIsImJvZHkiLCJjb250YWluZXIiLCJoZWFkZXIiLCJjdXJyZW50V2VhdGhlckNhcmQiLCJmb3JlY2FzdE1haW5Db250YWluZXIiLCJmb3JlY2FzdEhlYWRlciIsImZvb3RlckRpdiIsImZvb3RlclRleHQiLCJmb290ZXJMaW5rIiwid2VhdGhlckFwaUtleSIsIldFQVRIRVJfQVBJX0tFWSIsImdldFdlYXRoZXIiLCJsb2NhdGlvblNlYXJjaCIsImZvcmVjYXN0RGF5cyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnZlcnRJbnB1dHNUb1VybFJlYWR5IiwiZGF5cyIsIndlYXRoZXJBUElSZXNwb25zZSIsIl9hd2FpdCR3ZWF0aGVyQVBJUmVzcCIsIl9hd2FpdCR3ZWF0aGVyQVBJUmVzcDIiLCJsb2NhbERhdGVUaW1lIiwibG9jYWx0aW1lIiwiX2F3YWl0JHdlYXRoZXJBUElSZXNwMyIsImN1cnJlbnQiLCJ0ZW1wX2YiLCJ0ZW1wX2MiLCJmZWVsc2xpa2VfZiIsImZlZWxzbGlrZV9jIiwid2luZF9tcGgiLCJ3aW5kX2twaCIsIndpbmRfZGlyIiwiaXNEYXkiLCJpc19kYXkiLCJfYXdhaXQkd2VhdGhlckFQSVJlc3A0IiwiY29uZGl0aW9uIiwidGV4dCIsImljb24iLCJsb2NhbERhdGUiLCJzcGxpdCIsImxvY2FsVGltZSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJpIiwiX2ZvcmVjYXN0RGF5cyRpIiwiX2ZvcmVjYXN0RGF5cyRpJGRheSIsImRheSIsImF2Z1RlbXBDIiwiYXZndGVtcF9jIiwibWF4dGVtcF9jIiwibWludGVtcF9jIiwiYXZlcmFnZUh1bWlkaXR5IiwiYXZnaHVtaWRpdHkiLCJhdmdUZW1wRiIsImF2Z3RlbXBfZiIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwiZGFpbHlDaGFuY2VPZlNub3ciLCJkYWlseV9jaGFuY2Vfb2Zfc25vdyIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsInRvdGFsUHJlY2lwSW4iLCJ0b3RhbHByZWNpcF9pbiIsInRvdGFsU25vd0NtIiwidG90YWxzbm93X2NtIiwidXYiLCJfZm9yZWNhc3REYXlzJGkkZGF5JGMiLCJmb3JlY2FzdFRleHRDb25kaXRpb24iLCJmb3JlY2FzdE9iaiIsInB1c2giLCJuYXYiLCJzZWFyY2hGb3JtIiwiaWQiLCJub1ZhbGlkYXRlIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNlYXJjaEJ0bkljb24iXSwic291cmNlUm9vdCI6IiJ9