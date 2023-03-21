"use strict";
(self["webpackChunkwebpack_template_repository"] = self["webpackChunkwebpack_template_repository"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _itcrowdmossfire_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itcrowdmossfire.gif */ "./src/itcrowdmossfire.gif");
/* eslint-disable no-plusplus */


var giphyApiKey = "iodsp74qDBeVdGSHhd0FXgZtNXSj5hW9";
var gifArray = [];
var counter = 1;
var defaultGif = new Image();
defaultGif.src = _itcrowdmossfire_gif__WEBPACK_IMPORTED_MODULE_1__;

// dom insertion
var container = document.createElement('div');
container.classList.add('main-container');
document.body.appendChild(container);
var header = document.createElement('header');
header.classList.add('header');
container.appendChild(header);
var headerTitle = document.createElement('h1');
headerTitle.classList.add('header-title');
headerTitle.textContent = 'Working With APIs';
header.appendChild(headerTitle);
var main = document.createElement('main');
main.classList.add('main', 'container');
container.appendChild(main);
var mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = 'Giphy API Output';
main.appendChild(mainTitle);
var giphyImg = document.createElement('img');
giphyImg.src = defaultGif.src;
giphyImg.classList.add('giphy-img');
main.appendChild(giphyImg);
var giphyTitle = document.createElement('h2');
giphyTitle.classList.add('giphy-title');
giphyTitle.textContent = 'Search for a Giphy, then click "next" to cycle through the 25 results';
main.appendChild(giphyTitle);
var giphyNav = document.createElement('nav');
giphyNav.classList.add('giphy-nav', 'container');
container.appendChild(giphyNav);
var giphySearchForm = document.createElement('form');
giphySearchForm.classList.add('giphy-search-form', 'container');
giphySearchForm.id = 'giphy-search-form';
giphySearchForm.name = 'giphy-search-form';
giphySearchForm.noValidate = true;
giphyNav.appendChild(giphySearchForm);
var fieldset = document.createElement('fieldset');
fieldset.classList.add('fieldset');
giphySearchForm.appendChild(fieldset);
var legend = document.createElement('legend');
legend.classList.add('legend');
legend.textContent = '';
giphySearchForm.appendChild(legend);
var giphySearchInput = document.createElement('input');
giphySearchInput.classList.add('giphy-search-input');
giphySearchInput.id = 'giphy-search-input';
giphySearchInput.name = 'giphy-search-input';
giphySearchInput.type = 'search';
giphySearchInput.placeholder = 'Search for a Giphy';
giphySearchInput.required = true;
giphySearchForm.appendChild(giphySearchInput);
var giphySearchBtn = document.createElement('button');
giphySearchBtn.classList.add('giphy-search-btn');
giphySearchForm.appendChild(giphySearchBtn);
var giphySearchBtnIcon = document.createElement('i');
giphySearchBtnIcon.classList.add('fa', 'fa-search');
giphySearchBtn.appendChild(giphySearchBtnIcon);
giphySearchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  getGiphy(giphySearchInput.value);
  giphySearchInput.value = '';
  displayGif();
});
var nextGiphyBtn = document.createElement('button');
nextGiphyBtn.classList.add('next-giphy-btn');
nextGiphyBtn.textContent = 'Next Giphy';
giphySearchForm.appendChild(nextGiphyBtn);
nextGiphyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  displayGif();
});
function getGiphy() {
  var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'beach';
  var offsetNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var searchTermConverted = convertSearchStringToUrlInsert(searchTerm);
  var urlWithSearch = new URL("https://api.giphy.com/v1/gifs/search?api_key=".concat(giphyApiKey, "&q=").concat(searchTermConverted, "&limit=25&offset=").concat(offsetNumber, "&rating=r&lang=en"));
  fetch(urlWithSearch.href, {
    mode: 'cors'
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    // console.log(response.data.images.original.url);
    // console.log(response.data.title);

    addGifsToGifArray(response.data);
    giphyImg.src = response.data[0].images.original.url;
    giphyTitle.textContent = response.data.title;
    counter = 1;
  })["catch"](function (err) {
    giphyImg.src = defaultGif;
    giphyTitle.textContent = 'No Gifs Found or Error';
    console.log(err);
  });
}
function convertSearchStringToUrlInsert(searchString) {
  return searchString.replaceAll(/ /g, '+');
}

// eslint-disable-next-line no-sequences, arrow-body-style
var gifFactory = function gifFactory(src, title) {
  return {
    src: src,
    title: title
  };
};
// eslint-disable-next-line consistent-return
function addGifsToGifArray(response) {
  if (gifArray.length > 0) {
    gifArray = [];
  }
  response.forEach(function (gif) {
    var newGif = gifFactory(gif.images.original.url, gif.title);
    gifArray.push(newGif);
  });
}

// eslint-disable-next-line consistent-return
function displayGif() {
  if (typeof gifArray === 'undefined' || gifArray.length === 0) {
    giphyImg.src = defaultGif.src;
    giphyTitle.textContent = 'Try Another Search';
    return;
  }
  // eslint-disable-next-line no-param-reassign
  if (counter === gifArray.length - 1) {
    // eslint-disable-next-line no-param-reassign
    counter = 0;
  }
  giphyImg.src = gifArray[counter].src;
  if (giphyImg.src === '') {
    displayGif(defaultGif);
  }
  giphyTitle.textContent = gifArray[counter].title;
  // eslint-disable-next-line no-param-reassign
  ++counter;
  console.log(counter);
}
console.log(gifArray);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n\tfont-family: RobotoRegular, Arial, Helvetica, sans-serif;\n\tsrc: 'url(./fonts/Roboto-Regular.ttf)';\n}\n\n\n\nbody {\n\tbackground-color: black;\n\tcolor: white;\n\tletter-spacing: .1rem;\n\tfont-family: RobotoRegular, sans-serif;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\n}\n\n.header-title {\n\tfont-size: 3.5rem;\n\tbackground-image: linear-gradient(\n\t\t90deg,\n\t\tred,\n\t\tblue,\n\t\tgreen,\n\t\torange,\n\t\tyellow,\n\t\tpurple\n\t);\n\n\t-webkit-background-clip: text;\n\tbackground-clip: text;\n\tcolor: transparent;\n\n}\n\n.header, .container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 1rem 3rem;\n\tmargin-top: 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n}\n\n.main {\n\tmin-height: 50dvh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.main-title {\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n}\n\n.giphy-title {\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tcolor: white;\n\topacity: .7;\n\tletter-spacing: .1rem;\n}\n\nlegend, fieldset {\n\tdisplay: none;\n}\n\nform.giphy-search-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n}\n\n.giphy-search-input {\n\tflex-grow: 1;\n}\n\n.next-giphy-btn {\n\tflex-basis: auto\n}\n\n.giphy-search-btn, .next-giphy-btn, .giphy-search-input {\n\tpadding: .5rem 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tborder-radius: .5rem;\n}\n\n\n\n.giphy-search-btn:hover, .next-giphy-btn:hover, .giphy-search-input:hover {\n\tcursor: pointer;\n\ttransition: scale  0.3s cubic-bezier(0.25, 0.1, 0, 3.04);\n\ttransform: scale(1.1);\n}\n\n.giphy-search-input:hover{\n\tcursor: text;\n\ttransform: scale(1.05)\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;CACC,wDAAwD;CACxD,sCAAsC;AACvC;;;;AAIA;CACC,uBAAuB;CACvB,YAAY;CACZ,qBAAqB;CACrB,sCAAsC;CACtC,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,aAAa;;AAEd;;AAEA;CACC,iBAAiB;CACjB;;;;;;;;EAQC;;CAED,6BAA6B;CAC7B,qBAAqB;CACrB,kBAAkB;;AAEnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;CAClB,gBAAgB;CAChB,sCAAsC;CACtC,mBAAmB;CACnB,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,WAAW;CACX,qBAAqB;AACtB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,2BAA2B;CAC3B,mBAAmB;CACnB,SAAS;CACT,WAAW;CACX,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC;AACD;;AAEA;CACC,mBAAmB;CACnB,sCAAsC;CACtC,mBAAmB;CACnB,eAAe;CACf,gBAAgB;CAChB,oBAAoB;AACrB;;;;AAIA;CACC,eAAe;CACf,wDAAwD;CACxD,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ;AACD","sourcesContent":["\n@font-face {\n\tfont-family: RobotoRegular, Arial, Helvetica, sans-serif;\n\tsrc: 'url(./fonts/Roboto-Regular.ttf)';\n}\n\n\n\nbody {\n\tbackground-color: black;\n\tcolor: white;\n\tletter-spacing: .1rem;\n\tfont-family: RobotoRegular, sans-serif;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\n}\n\n.header-title {\n\tfont-size: 3.5rem;\n\tbackground-image: linear-gradient(\n\t\t90deg,\n\t\tred,\n\t\tblue,\n\t\tgreen,\n\t\torange,\n\t\tyellow,\n\t\tpurple\n\t);\n\n\t-webkit-background-clip: text;\n\tbackground-clip: text;\n\tcolor: transparent;\n\n}\n\n.header, .container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 1rem 3rem;\n\tmargin-top: 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 3rem;\n\tfont-weight: 700;\n}\n\n.main {\n\tmin-height: 50dvh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.main-title {\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n}\n\n.giphy-title {\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tcolor: white;\n\topacity: .7;\n\tletter-spacing: .1rem;\n}\n\nlegend, fieldset {\n\tdisplay: none;\n}\n\nform.giphy-search-form {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tgap: 1rem;\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n}\n\n.giphy-search-input {\n\tflex-grow: 1;\n}\n\n.next-giphy-btn {\n\tflex-basis: auto\n}\n\n.giphy-search-btn, .next-giphy-btn, .giphy-search-input {\n\tpadding: .5rem 1rem;\n\tborder-color: rgb(240 248 255 / 42.3%);\n\tborder-style: solid;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tborder-radius: .5rem;\n}\n\n\n\n.giphy-search-btn:hover, .next-giphy-btn:hover, .giphy-search-input:hover {\n\tcursor: pointer;\n\ttransition: scale  0.3s cubic-bezier(0.25, 0.1, 0, 3.04);\n\ttransform: scale(1.1);\n}\n\n.giphy-search-input:hover{\n\tcursor: text;\n\ttransform: scale(1.05)\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/itcrowdmossfire.gif":
/*!*********************************!*\
  !*** ./src/itcrowdmossfire.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa1da87554b0b36a71e4.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3FCO0FBQ3dCO0FBRTdDLElBQU1DLFdBQVcsR0FBR0Msa0NBQXlCO0FBRTdDLElBQUlHLFFBQVEsR0FBRyxFQUFFO0FBQ2pCLElBQUlDLE9BQU8sR0FBRyxDQUFDO0FBQ2YsSUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUdULGlEQUFROztBQUV6QjtBQUNBLElBQU1VLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQy9DRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0FBQ3pDSCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixTQUFTLENBQUM7QUFFcEMsSUFBTU8sTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDL0NLLE1BQU0sQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQzlCSixTQUFTLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO0FBRTdCLElBQU1DLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQ2hETSxXQUFXLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUN6Q0ksV0FBVyxDQUFDQyxXQUFXLEdBQUcsbUJBQW1CO0FBQzdDRixNQUFNLENBQUNELFdBQVcsQ0FBQ0UsV0FBVyxDQUFDO0FBRS9CLElBQU1FLElBQUksR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzNDUSxJQUFJLENBQUNQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7QUFDdkNKLFNBQVMsQ0FBQ00sV0FBVyxDQUFDSSxJQUFJLENBQUM7QUFFM0IsSUFBTUMsU0FBUyxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFDOUNTLFNBQVMsQ0FBQ1IsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0FBQ3JDTyxTQUFTLENBQUNGLFdBQVcsR0FBRyxrQkFBa0I7QUFDMUNDLElBQUksQ0FBQ0osV0FBVyxDQUFDSyxTQUFTLENBQUM7QUFFM0IsSUFBTUMsUUFBUSxHQUFHWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDOUNVLFFBQVEsQ0FBQ2IsR0FBRyxHQUFHRixVQUFVLENBQUNFLEdBQUc7QUFDN0JhLFFBQVEsQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ25DTSxJQUFJLENBQUNKLFdBQVcsQ0FBQ00sUUFBUSxDQUFDO0FBRTFCLElBQU1DLFVBQVUsR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQy9DVyxVQUFVLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUN2Q1MsVUFBVSxDQUFDSixXQUFXLEdBQ3JCLHVFQUF1RTtBQUN4RUMsSUFBSSxDQUFDSixXQUFXLENBQUNPLFVBQVUsQ0FBQztBQUU1QixJQUFNQyxRQUFRLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5Q1ksUUFBUSxDQUFDWCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO0FBQ2hESixTQUFTLENBQUNNLFdBQVcsQ0FBQ1EsUUFBUSxDQUFDO0FBRS9CLElBQU1DLGVBQWUsR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQ3REYSxlQUFlLENBQUNaLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztBQUMvRFcsZUFBZSxDQUFDQyxFQUFFLEdBQUcsbUJBQW1CO0FBQ3hDRCxlQUFlLENBQUNFLElBQUksR0FBRyxtQkFBbUI7QUFDMUNGLGVBQWUsQ0FBQ0csVUFBVSxHQUFHLElBQUk7QUFDakNKLFFBQVEsQ0FBQ1IsV0FBVyxDQUFDUyxlQUFlLENBQUM7QUFFckMsSUFBTUksUUFBUSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ25EaUIsUUFBUSxDQUFDaEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBQ2xDVyxlQUFlLENBQUNULFdBQVcsQ0FBQ2EsUUFBUSxDQUFDO0FBRXJDLElBQU1DLE1BQU0sR0FBR25CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvQ2tCLE1BQU0sQ0FBQ2pCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUM5QmdCLE1BQU0sQ0FBQ1gsV0FBVyxHQUFHLEVBQUU7QUFDdkJNLGVBQWUsQ0FBQ1QsV0FBVyxDQUFDYyxNQUFNLENBQUM7QUFFbkMsSUFBTUMsZ0JBQWdCLEdBQUdwQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDeERtQixnQkFBZ0IsQ0FBQ2xCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0FBQ3BEaUIsZ0JBQWdCLENBQUNMLEVBQUUsR0FBRyxvQkFBb0I7QUFDMUNLLGdCQUFnQixDQUFDSixJQUFJLEdBQUcsb0JBQW9CO0FBQzVDSSxnQkFBZ0IsQ0FBQ0MsSUFBSSxHQUFHLFFBQVE7QUFDaENELGdCQUFnQixDQUFDRSxXQUFXLEdBQUcsb0JBQW9CO0FBQ25ERixnQkFBZ0IsQ0FBQ0csUUFBUSxHQUFHLElBQUk7QUFDaENULGVBQWUsQ0FBQ1QsV0FBVyxDQUFDZSxnQkFBZ0IsQ0FBQztBQUU3QyxJQUFNSSxjQUFjLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDdkR1QixjQUFjLENBQUN0QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRFcsZUFBZSxDQUFDVCxXQUFXLENBQUNtQixjQUFjLENBQUM7QUFDM0MsSUFBTUMsa0JBQWtCLEdBQUd6QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7QUFDdER3QixrQkFBa0IsQ0FBQ3ZCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7QUFDbkRxQixjQUFjLENBQUNuQixXQUFXLENBQUNvQixrQkFBa0IsQ0FBQztBQUU5Q0QsY0FBYyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0VBQ3JEQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtFQUNsQkMsUUFBUSxDQUFDVCxnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDO0VBRWhDVixnQkFBZ0IsQ0FBQ1UsS0FBSyxHQUFHLEVBQUU7RUFDM0JDLFVBQVUsRUFBRTtBQUNiLENBQUMsQ0FBQztBQUVGLElBQU1DLFlBQVksR0FBR2hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUNyRCtCLFlBQVksQ0FBQzlCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0FBQzVDNkIsWUFBWSxDQUFDeEIsV0FBVyxHQUFHLFlBQVk7QUFDdkNNLGVBQWUsQ0FBQ1QsV0FBVyxDQUFDMkIsWUFBWSxDQUFDO0FBRXpDQSxZQUFZLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBQyxDQUFDLEVBQUk7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBQ2xCRyxVQUFVLEVBQUU7QUFDYixDQUFDLENBQUM7QUFDRixTQUFTRixRQUFRQSxDQUFBLEVBQTJDO0VBQUEsSUFBMUNJLFVBQVUsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsT0FBTztFQUFBLElBQUVHLFlBQVksR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsR0FBRztFQUN6RCxJQUFNSSxtQkFBbUIsR0FBR0MsOEJBQThCLENBQUNOLFVBQVUsQ0FBQztFQUN0RSxJQUFNTyxhQUFhLEdBQUcsSUFBSUMsR0FBRyxpREFBQUMsTUFBQSxDQUNvQnBELFdBQVcsU0FBQW9ELE1BQUEsQ0FBTUosbUJBQW1CLHVCQUFBSSxNQUFBLENBQW9CTCxZQUFZLHVCQUNwSDtFQUVETSxLQUFLLENBQUNILGFBQWEsQ0FBQ0ksSUFBSSxFQUFFO0lBQ3pCQyxJQUFJLEVBQUU7RUFDUCxDQUFDLENBQUMsQ0FDQUMsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUN6QixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUN2QixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUN6QjtJQUNBOztJQUVBRSxpQkFBaUIsQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUM7SUFDaEN2QyxRQUFRLENBQUNiLEdBQUcsR0FBR2lELFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztJQUNuRHpDLFVBQVUsQ0FBQ0osV0FBVyxHQUFHdUMsUUFBUSxDQUFDRyxJQUFJLENBQUNJLEtBQUs7SUFDNUMzRCxPQUFPLEdBQUcsQ0FBQztFQUNaLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQTRELEdBQUcsRUFBSTtJQUNiNUMsUUFBUSxDQUFDYixHQUFHLEdBQUdGLFVBQVU7SUFDekJnQixVQUFVLENBQUNKLFdBQVcsR0FBRyx3QkFBd0I7SUFDakRnRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0VBQ2pCLENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU2hCLDhCQUE4QkEsQ0FBQ21CLFlBQVksRUFBRTtFQUNyRCxPQUFPQSxZQUFZLENBQUNDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0FBQzFDOztBQUVBO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUk5RCxHQUFHLEVBQUV3RCxLQUFLLEVBQUs7RUFDbEMsT0FBTztJQUFFeEQsR0FBRyxFQUFIQSxHQUFHO0lBQUV3RCxLQUFLLEVBQUxBO0VBQU0sQ0FBQztBQUN0QixDQUFDO0FBQ0Q7QUFDQSxTQUFTTCxpQkFBaUJBLENBQUNGLFFBQVEsRUFBRTtFQUNwQyxJQUFJckQsUUFBUSxDQUFDeUMsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUN4QnpDLFFBQVEsR0FBRyxFQUFFO0VBQ2Q7RUFDQXFELFFBQVEsQ0FBQ2MsT0FBTyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUN2QixJQUFNQyxNQUFNLEdBQUdILFVBQVUsQ0FBQ0UsR0FBRyxDQUFDWCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFUyxHQUFHLENBQUNSLEtBQUssQ0FBQztJQUM3RDVELFFBQVEsQ0FBQ3NFLElBQUksQ0FBQ0QsTUFBTSxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNIOztBQUVBO0FBQ0EsU0FBU2hDLFVBQVVBLENBQUEsRUFBRztFQUNyQixJQUFJLE9BQU9yQyxRQUFRLEtBQUssV0FBVyxJQUFJQSxRQUFRLENBQUN5QyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQzdEeEIsUUFBUSxDQUFDYixHQUFHLEdBQUdGLFVBQVUsQ0FBQ0UsR0FBRztJQUM3QmMsVUFBVSxDQUFDSixXQUFXLEdBQUcsb0JBQW9CO0lBQzdDO0VBQ0Q7RUFDQTtFQUNBLElBQUliLE9BQU8sS0FBS0QsUUFBUSxDQUFDeUMsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNwQztJQUNBeEMsT0FBTyxHQUFHLENBQUM7RUFDWjtFQUNBZ0IsUUFBUSxDQUFDYixHQUFHLEdBQUdKLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNHLEdBQUc7RUFDcEMsSUFBSWEsUUFBUSxDQUFDYixHQUFHLEtBQUssRUFBRSxFQUFFO0lBQ3hCaUMsVUFBVSxDQUFDbkMsVUFBVSxDQUFDO0VBQ3ZCO0VBRUFnQixVQUFVLENBQUNKLFdBQVcsR0FBR2QsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQzJELEtBQUs7RUFDaEQ7RUFDQSxFQUFFM0QsT0FBTztFQUNUNkQsT0FBTyxDQUFDQyxHQUFHLENBQUM5RCxPQUFPLENBQUM7QUFDckI7QUFFQTZELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDL0QsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S3JCO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx3REFBd0QsNkRBQTZELDJDQUEyQyxHQUFHLGNBQWMsNEJBQTRCLGlCQUFpQiwwQkFBMEIsMkNBQTJDLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsY0FBYyxlQUFlLGtCQUFrQixLQUFLLG1CQUFtQixzQkFBc0IsK0hBQStILG9DQUFvQywwQkFBMEIsdUJBQXVCLEtBQUsseUJBQXlCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3Qix1QkFBdUIscUJBQXFCLDJDQUEyQyx3QkFBd0Isb0JBQW9CLHFCQUFxQixHQUFHLFdBQVcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixjQUFjLEdBQUcsaUJBQWlCLHNCQUFzQixxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLHFCQUFxQixpQkFBaUIsZ0JBQWdCLDBCQUEwQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyw0QkFBNEIsa0JBQWtCLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLGNBQWMsZ0JBQWdCLGlCQUFpQixpQkFBaUIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1Qiw2REFBNkQsd0JBQXdCLDJDQUEyQyx3QkFBd0Isb0JBQW9CLHFCQUFxQix5QkFBeUIsR0FBRyxtRkFBbUYsb0JBQW9CLDZEQUE2RCwwQkFBMEIsR0FBRyw4QkFBOEIsaUJBQWlCLDZCQUE2QixhQUFhLDRFQUE0RSxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssdUNBQXVDLDZEQUE2RCwyQ0FBMkMsR0FBRyxjQUFjLDRCQUE0QixpQkFBaUIsMEJBQTBCLDJDQUEyQyxvQkFBb0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGNBQWMsZUFBZSxrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLCtIQUErSCxvQ0FBb0MsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5QixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsdUJBQXVCLHFCQUFxQiwyQ0FBMkMsd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsY0FBYyxHQUFHLGlCQUFpQixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsNEJBQTRCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLHdCQUF3QixjQUFjLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsNkRBQTZELHdCQUF3QiwyQ0FBMkMsd0JBQXdCLG9CQUFvQixxQkFBcUIseUJBQXlCLEdBQUcsbUZBQW1GLG9CQUFvQiw2REFBNkQsMEJBQTBCLEdBQUcsOEJBQThCLGlCQUFpQiw2QkFBNkIseUJBQXlCO0FBQzdySztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtb3NzRmlyZSBmcm9tICcuL2l0Y3Jvd2Rtb3NzZmlyZS5naWYnO1xuXG5jb25zdCBnaXBoeUFwaUtleSA9IHByb2Nlc3MuZW52LkdJUEhZX0FQSV9LRVk7XG5cbmxldCBnaWZBcnJheSA9IFtdO1xubGV0IGNvdW50ZXIgPSAxO1xuY29uc3QgZGVmYXVsdEdpZiA9IG5ldyBJbWFnZSgpO1xuZGVmYXVsdEdpZi5zcmMgPSBtb3NzRmlyZTtcblxuLy8gZG9tIGluc2VydGlvblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG5oZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdXb3JraW5nIFdpdGggQVBJcyc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJywgJ2NvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG5jb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcbm1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdHaXBoeSBBUEkgT3V0cHV0Jztcbm1haW4uYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcblxuY29uc3QgZ2lwaHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmdpcGh5SW1nLnNyYyA9IGRlZmF1bHRHaWYuc3JjO1xuZ2lwaHlJbWcuY2xhc3NMaXN0LmFkZCgnZ2lwaHktaW1nJyk7XG5tYWluLmFwcGVuZENoaWxkKGdpcGh5SW1nKTtcblxuY29uc3QgZ2lwaHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5naXBoeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2dpcGh5LXRpdGxlJyk7XG5naXBoeVRpdGxlLnRleHRDb250ZW50ID1cblx0J1NlYXJjaCBmb3IgYSBHaXBoeSwgdGhlbiBjbGljayBcIm5leHRcIiB0byBjeWNsZSB0aHJvdWdoIHRoZSAyNSByZXN1bHRzJztcbm1haW4uYXBwZW5kQ2hpbGQoZ2lwaHlUaXRsZSk7XG5cbmNvbnN0IGdpcGh5TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5naXBoeU5hdi5jbGFzc0xpc3QuYWRkKCdnaXBoeS1uYXYnLCAnY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZ2lwaHlOYXYpO1xuXG5jb25zdCBnaXBoeVNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5naXBoeVNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnZ2lwaHktc2VhcmNoLWZvcm0nLCAnY29udGFpbmVyJyk7XG5naXBoeVNlYXJjaEZvcm0uaWQgPSAnZ2lwaHktc2VhcmNoLWZvcm0nO1xuZ2lwaHlTZWFyY2hGb3JtLm5hbWUgPSAnZ2lwaHktc2VhcmNoLWZvcm0nO1xuZ2lwaHlTZWFyY2hGb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xuZ2lwaHlOYXYuYXBwZW5kQ2hpbGQoZ2lwaHlTZWFyY2hGb3JtKTtcblxuY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnZmllbGRzZXQnKTtcbmdpcGh5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xubGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZCcpO1xubGVnZW5kLnRleHRDb250ZW50ID0gJyc7XG5naXBoeVNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuY29uc3QgZ2lwaHlTZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5naXBoeVNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2dpcGh5LXNlYXJjaC1pbnB1dCcpO1xuZ2lwaHlTZWFyY2hJbnB1dC5pZCA9ICdnaXBoeS1zZWFyY2gtaW5wdXQnO1xuZ2lwaHlTZWFyY2hJbnB1dC5uYW1lID0gJ2dpcGh5LXNlYXJjaC1pbnB1dCc7XG5naXBoeVNlYXJjaElucHV0LnR5cGUgPSAnc2VhcmNoJztcbmdpcGh5U2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoIGZvciBhIEdpcGh5JztcbmdpcGh5U2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuZ2lwaHlTZWFyY2hGb3JtLmFwcGVuZENoaWxkKGdpcGh5U2VhcmNoSW5wdXQpO1xuXG5jb25zdCBnaXBoeVNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZ2lwaHlTZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnZ2lwaHktc2VhcmNoLWJ0bicpO1xuZ2lwaHlTZWFyY2hGb3JtLmFwcGVuZENoaWxkKGdpcGh5U2VhcmNoQnRuKTtcbmNvbnN0IGdpcGh5U2VhcmNoQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmdpcGh5U2VhcmNoQnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1zZWFyY2gnKTtcbmdpcGh5U2VhcmNoQnRuLmFwcGVuZENoaWxkKGdpcGh5U2VhcmNoQnRuSWNvbik7XG5cbmdpcGh5U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRnZXRHaXBoeShnaXBoeVNlYXJjaElucHV0LnZhbHVlKTtcblxuXHRnaXBoeVNlYXJjaElucHV0LnZhbHVlID0gJyc7XG5cdGRpc3BsYXlHaWYoKTtcbn0pO1xuXG5jb25zdCBuZXh0R2lwaHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm5leHRHaXBoeUJ0bi5jbGFzc0xpc3QuYWRkKCduZXh0LWdpcGh5LWJ0bicpO1xubmV4dEdpcGh5QnRuLnRleHRDb250ZW50ID0gJ05leHQgR2lwaHknO1xuZ2lwaHlTZWFyY2hGb3JtLmFwcGVuZENoaWxkKG5leHRHaXBoeUJ0bik7XG5cbm5leHRHaXBoeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGRpc3BsYXlHaWYoKTtcbn0pO1xuZnVuY3Rpb24gZ2V0R2lwaHkoc2VhcmNoVGVybSA9ICdiZWFjaCcsIG9mZnNldE51bWJlciA9IDUwMCkge1xuXHRjb25zdCBzZWFyY2hUZXJtQ29udmVydGVkID0gY29udmVydFNlYXJjaFN0cmluZ1RvVXJsSW5zZXJ0KHNlYXJjaFRlcm0pO1xuXHRjb25zdCB1cmxXaXRoU2VhcmNoID0gbmV3IFVSTChcblx0XHRgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP2FwaV9rZXk9JHtnaXBoeUFwaUtleX0mcT0ke3NlYXJjaFRlcm1Db252ZXJ0ZWR9JmxpbWl0PTI1Jm9mZnNldD0ke29mZnNldE51bWJlcn0mcmF0aW5nPXImbGFuZz1lbmBcblx0KTtcblxuXHRmZXRjaCh1cmxXaXRoU2VhcmNoLmhyZWYsIHtcblx0XHRtb2RlOiAnY29ycycsXG5cdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmwpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS50aXRsZSk7XG5cblx0XHRcdGFkZEdpZnNUb0dpZkFycmF5KHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0Z2lwaHlJbWcuc3JjID0gcmVzcG9uc2UuZGF0YVswXS5pbWFnZXMub3JpZ2luYWwudXJsO1xuXHRcdFx0Z2lwaHlUaXRsZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRhdGEudGl0bGU7XG5cdFx0XHRjb3VudGVyID0gMTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0Z2lwaHlJbWcuc3JjID0gZGVmYXVsdEdpZjtcblx0XHRcdGdpcGh5VGl0bGUudGV4dENvbnRlbnQgPSAnTm8gR2lmcyBGb3VuZCBvciBFcnJvcic7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U2VhcmNoU3RyaW5nVG9VcmxJbnNlcnQoc2VhcmNoU3RyaW5nKSB7XG5cdHJldHVybiBzZWFyY2hTdHJpbmcucmVwbGFjZUFsbCgvIC9nLCAnKycpO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzLCBhcnJvdy1ib2R5LXN0eWxlXG5jb25zdCBnaWZGYWN0b3J5ID0gKHNyYywgdGl0bGUpID0+IHtcblx0cmV0dXJuIHsgc3JjLCB0aXRsZSB9O1xufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gYWRkR2lmc1RvR2lmQXJyYXkocmVzcG9uc2UpIHtcblx0aWYgKGdpZkFycmF5Lmxlbmd0aCA+IDApIHtcblx0XHRnaWZBcnJheSA9IFtdO1xuXHR9XG5cdHJlc3BvbnNlLmZvckVhY2goZ2lmID0+IHtcblx0XHRjb25zdCBuZXdHaWYgPSBnaWZGYWN0b3J5KGdpZi5pbWFnZXMub3JpZ2luYWwudXJsLCBnaWYudGl0bGUpO1xuXHRcdGdpZkFycmF5LnB1c2gobmV3R2lmKTtcblx0fSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gZGlzcGxheUdpZigpIHtcblx0aWYgKHR5cGVvZiBnaWZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgfHwgZ2lmQXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdFx0Z2lwaHlJbWcuc3JjID0gZGVmYXVsdEdpZi5zcmM7XG5cdFx0Z2lwaHlUaXRsZS50ZXh0Q29udGVudCA9ICdUcnkgQW5vdGhlciBTZWFyY2gnO1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0aWYgKGNvdW50ZXIgPT09IGdpZkFycmF5Lmxlbmd0aCAtIDEpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHRjb3VudGVyID0gMDtcblx0fVxuXHRnaXBoeUltZy5zcmMgPSBnaWZBcnJheVtjb3VudGVyXS5zcmM7XG5cdGlmIChnaXBoeUltZy5zcmMgPT09ICcnKSB7XG5cdFx0ZGlzcGxheUdpZihkZWZhdWx0R2lmKTtcblx0fVxuXG5cdGdpcGh5VGl0bGUudGV4dENvbnRlbnQgPSBnaWZBcnJheVtjb3VudGVyXS50aXRsZTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdCsrY291bnRlcjtcblx0Y29uc29sZS5sb2coY291bnRlcik7XG59XG5cbmNvbnNvbGUubG9nKGdpZkFycmF5KTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFx0c3JjOiAndXJsKC4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSc7XFxufVxcblxcblxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmVkLFxcblxcdFxcdGJsdWUsXFxuXFx0XFx0Z3JlZW4sXFxuXFx0XFx0b3JhbmdlLFxcblxcdFxcdHllbGxvdyxcXG5cXHRcXHRwdXJwbGVcXG5cXHQpO1xcblxcblxcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcblxcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5oZWFkZXIsIC5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxcmVtIDNyZW07XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRib3JkZXItY29sb3I6IHJnYigyNDAgMjQ4IDI1NSAvIDQyLjMlKTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0bWluLWhlaWdodDogNTBkdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5naXBoeS10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG9wYWNpdHk6IC43O1xcblxcdGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG59XFxuXFxubGVnZW5kLCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9ybS5naXBoeS1zZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWlucHV0IHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5uZXh0LWdpcGh5LWJ0biB7XFxuXFx0ZmxleC1iYXNpczogYXV0b1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWJ0biwgLm5leHQtZ2lwaHktYnRuLCAuZ2lwaHktc2VhcmNoLWlucHV0IHtcXG5cXHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDggMjU1IC8gNDIuMyUpO1xcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcblxcblxcbi5naXBoeS1zZWFyY2gtYnRuOmhvdmVyLCAubmV4dC1naXBoeS1idG46aG92ZXIsIC5naXBoeS1zZWFyY2gtaW5wdXQ6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBzY2FsZSAgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLCAzLjA0KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5naXBoeS1zZWFyY2gtaW5wdXQ6aG92ZXJ7XFxuXFx0Y3Vyc29yOiB0ZXh0O1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7Q0FDQyx3REFBd0Q7Q0FDeEQsc0NBQXNDO0FBQ3ZDOzs7O0FBSUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixzQ0FBc0M7Q0FDdEMsZUFBZTtDQUNmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsVUFBVTtDQUNWLGFBQWE7O0FBRWQ7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakI7Ozs7Ozs7O0VBUUM7O0NBRUQsNkJBQTZCO0NBQzdCLHFCQUFxQjtDQUNyQixrQkFBa0I7O0FBRW5COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsc0NBQXNDO0NBQ3RDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixvQkFBb0I7QUFDckI7Ozs7QUFJQTtDQUNDLGVBQWU7Q0FDZix3REFBd0Q7Q0FDeEQscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFx0c3JjOiAndXJsKC4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSc7XFxufVxcblxcblxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmVkLFxcblxcdFxcdGJsdWUsXFxuXFx0XFx0Z3JlZW4sXFxuXFx0XFx0b3JhbmdlLFxcblxcdFxcdHllbGxvdyxcXG5cXHRcXHRwdXJwbGVcXG5cXHQpO1xcblxcblxcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcblxcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5oZWFkZXIsIC5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxcmVtIDNyZW07XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRib3JkZXItY29sb3I6IHJnYigyNDAgMjQ4IDI1NSAvIDQyLjMlKTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0bWluLWhlaWdodDogNTBkdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5naXBoeS10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG9wYWNpdHk6IC43O1xcblxcdGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG59XFxuXFxubGVnZW5kLCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9ybS5naXBoeS1zZWFyY2gtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWlucHV0IHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5uZXh0LWdpcGh5LWJ0biB7XFxuXFx0ZmxleC1iYXNpczogYXV0b1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWJ0biwgLm5leHQtZ2lwaHktYnRuLCAuZ2lwaHktc2VhcmNoLWlucHV0IHtcXG5cXHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDggMjU1IC8gNDIuMyUpO1xcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcblxcblxcbi5naXBoeS1zZWFyY2gtYnRuOmhvdmVyLCAubmV4dC1naXBoeS1idG46aG92ZXIsIC5naXBoeS1zZWFyY2gtaW5wdXQ6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBzY2FsZSAgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLCAzLjA0KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5naXBoeS1zZWFyY2gtaW5wdXQ6aG92ZXJ7XFxuXFx0Y3Vyc29yOiB0ZXh0O1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIm1vc3NGaXJlIiwiZ2lwaHlBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiR0lQSFlfQVBJX0tFWSIsImdpZkFycmF5IiwiY291bnRlciIsImRlZmF1bHRHaWYiLCJJbWFnZSIsInNyYyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImhlYWRlclRpdGxlIiwidGV4dENvbnRlbnQiLCJtYWluIiwibWFpblRpdGxlIiwiZ2lwaHlJbWciLCJnaXBoeVRpdGxlIiwiZ2lwaHlOYXYiLCJnaXBoeVNlYXJjaEZvcm0iLCJpZCIsIm5hbWUiLCJub1ZhbGlkYXRlIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJnaXBoeVNlYXJjaElucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJnaXBoeVNlYXJjaEJ0biIsImdpcGh5U2VhcmNoQnRuSWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRHaXBoeSIsInZhbHVlIiwiZGlzcGxheUdpZiIsIm5leHRHaXBoeUJ0biIsInNlYXJjaFRlcm0iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJvZmZzZXROdW1iZXIiLCJzZWFyY2hUZXJtQ29udmVydGVkIiwiY29udmVydFNlYXJjaFN0cmluZ1RvVXJsSW5zZXJ0IiwidXJsV2l0aFNlYXJjaCIsIlVSTCIsImNvbmNhdCIsImZldGNoIiwiaHJlZiIsIm1vZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiYWRkR2lmc1RvR2lmQXJyYXkiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJ0aXRsZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hTdHJpbmciLCJyZXBsYWNlQWxsIiwiZ2lmRmFjdG9yeSIsImZvckVhY2giLCJnaWYiLCJuZXdHaWYiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==