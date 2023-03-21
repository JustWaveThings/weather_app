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


var giphyApiKey = "";
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
    // console.log(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3FCO0FBQ3dCO0FBRTdDLElBQU1DLFdBQVcsR0FBR0MsRUFBeUI7QUFFN0MsSUFBSUcsUUFBUSxHQUFHLEVBQUU7QUFDakIsSUFBSUMsT0FBTyxHQUFHLENBQUM7QUFDZixJQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQzlCRCxVQUFVLENBQUNFLEdBQUcsR0FBR1QsaURBQVE7O0FBRXpCO0FBQ0EsSUFBTVUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDL0NGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDekNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOLFNBQVMsQ0FBQztBQUVwQyxJQUFNTyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvQ0ssTUFBTSxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDOUJKLFNBQVMsQ0FBQ00sV0FBVyxDQUFDQyxNQUFNLENBQUM7QUFFN0IsSUFBTUMsV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFDaERNLFdBQVcsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ3pDSSxXQUFXLENBQUNDLFdBQVcsR0FBRyxtQkFBbUI7QUFDN0NGLE1BQU0sQ0FBQ0QsV0FBVyxDQUFDRSxXQUFXLENBQUM7QUFFL0IsSUFBTUUsSUFBSSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDM0NRLElBQUksQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztBQUN2Q0osU0FBUyxDQUFDTSxXQUFXLENBQUNJLElBQUksQ0FBQztBQUUzQixJQUFNQyxTQUFTLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUM5Q1MsU0FBUyxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDckNPLFNBQVMsQ0FBQ0YsV0FBVyxHQUFHLGtCQUFrQjtBQUMxQ0MsSUFBSSxDQUFDSixXQUFXLENBQUNLLFNBQVMsQ0FBQztBQUUzQixJQUFNQyxRQUFRLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5Q1UsUUFBUSxDQUFDYixHQUFHLEdBQUdGLFVBQVUsQ0FBQ0UsR0FBRztBQUM3QmEsUUFBUSxDQUFDVCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDbkNNLElBQUksQ0FBQ0osV0FBVyxDQUFDTSxRQUFRLENBQUM7QUFFMUIsSUFBTUMsVUFBVSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFDL0NXLFVBQVUsQ0FBQ1YsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ3ZDUyxVQUFVLENBQUNKLFdBQVcsR0FDckIsdUVBQXVFO0FBQ3hFQyxJQUFJLENBQUNKLFdBQVcsQ0FBQ08sVUFBVSxDQUFDO0FBRTVCLElBQU1DLFFBQVEsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzlDWSxRQUFRLENBQUNYLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7QUFDaERKLFNBQVMsQ0FBQ00sV0FBVyxDQUFDUSxRQUFRLENBQUM7QUFFL0IsSUFBTUMsZUFBZSxHQUFHZCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDdERhLGVBQWUsQ0FBQ1osU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDO0FBQy9EVyxlQUFlLENBQUNDLEVBQUUsR0FBRyxtQkFBbUI7QUFDeENELGVBQWUsQ0FBQ0UsSUFBSSxHQUFHLG1CQUFtQjtBQUMxQ0YsZUFBZSxDQUFDRyxVQUFVLEdBQUcsSUFBSTtBQUNqQ0osUUFBUSxDQUFDUixXQUFXLENBQUNTLGVBQWUsQ0FBQztBQUVyQyxJQUFNSSxRQUFRLEdBQUdsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDbkRpQixRQUFRLENBQUNoQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDbENXLGVBQWUsQ0FBQ1QsV0FBVyxDQUFDYSxRQUFRLENBQUM7QUFFckMsSUFBTUMsTUFBTSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQy9Da0IsTUFBTSxDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQzlCZ0IsTUFBTSxDQUFDWCxXQUFXLEdBQUcsRUFBRTtBQUN2Qk0sZUFBZSxDQUFDVCxXQUFXLENBQUNjLE1BQU0sQ0FBQztBQUVuQyxJQUFNQyxnQkFBZ0IsR0FBR3BCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUN4RG1CLGdCQUFnQixDQUFDbEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7QUFDcERpQixnQkFBZ0IsQ0FBQ0wsRUFBRSxHQUFHLG9CQUFvQjtBQUMxQ0ssZ0JBQWdCLENBQUNKLElBQUksR0FBRyxvQkFBb0I7QUFDNUNJLGdCQUFnQixDQUFDQyxJQUFJLEdBQUcsUUFBUTtBQUNoQ0QsZ0JBQWdCLENBQUNFLFdBQVcsR0FBRyxvQkFBb0I7QUFDbkRGLGdCQUFnQixDQUFDRyxRQUFRLEdBQUcsSUFBSTtBQUNoQ1QsZUFBZSxDQUFDVCxXQUFXLENBQUNlLGdCQUFnQixDQUFDO0FBRTdDLElBQU1JLGNBQWMsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUN2RHVCLGNBQWMsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0FBQ2hEVyxlQUFlLENBQUNULFdBQVcsQ0FBQ21CLGNBQWMsQ0FBQztBQUMzQyxJQUFNQyxrQkFBa0IsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztBQUN0RHdCLGtCQUFrQixDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztBQUNuRHFCLGNBQWMsQ0FBQ25CLFdBQVcsQ0FBQ29CLGtCQUFrQixDQUFDO0FBRTlDRCxjQUFjLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDckRBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBQ2xCQyxRQUFRLENBQUNULGdCQUFnQixDQUFDVSxLQUFLLENBQUM7RUFFaENWLGdCQUFnQixDQUFDVSxLQUFLLEdBQUcsRUFBRTtFQUMzQkMsVUFBVSxFQUFFO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsSUFBTUMsWUFBWSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQ3JEK0IsWUFBWSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDNUM2QixZQUFZLENBQUN4QixXQUFXLEdBQUcsWUFBWTtBQUN2Q00sZUFBZSxDQUFDVCxXQUFXLENBQUMyQixZQUFZLENBQUM7QUFFekNBLFlBQVksQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFDLENBQUMsRUFBSTtFQUMzQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7RUFDbEJHLFVBQVUsRUFBRTtBQUNiLENBQUMsQ0FBQztBQUNGLFNBQVNGLFFBQVFBLENBQUEsRUFBMkM7RUFBQSxJQUExQ0ksVUFBVSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxPQUFPO0VBQUEsSUFBRUcsWUFBWSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxHQUFHO0VBQ3pELElBQU1JLG1CQUFtQixHQUFHQyw4QkFBOEIsQ0FBQ04sVUFBVSxDQUFDO0VBQ3RFLElBQU1PLGFBQWEsR0FBRyxJQUFJQyxHQUFHLGlEQUFBQyxNQUFBLENBQ29CcEQsV0FBVyxTQUFBb0QsTUFBQSxDQUFNSixtQkFBbUIsdUJBQUFJLE1BQUEsQ0FBb0JMLFlBQVksdUJBQ3BIO0VBRURNLEtBQUssQ0FBQ0gsYUFBYSxDQUFDSSxJQUFJLEVBQUU7SUFDekJDLElBQUksRUFBRTtFQUNQLENBQUMsQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO0lBQ3pCLE9BQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3ZCLENBQUMsQ0FBQyxDQUNERixJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO0lBQ3pCO0lBQ0E7O0lBRUFFLGlCQUFpQixDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQztJQUNoQ3ZDLFFBQVEsQ0FBQ2IsR0FBRyxHQUFHaUQsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHO0lBQ25EekMsVUFBVSxDQUFDSixXQUFXLEdBQUd1QyxRQUFRLENBQUNHLElBQUksQ0FBQ0ksS0FBSztJQUM1QzNELE9BQU8sR0FBRyxDQUFDO0VBQ1osQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBNEQsR0FBRyxFQUFJO0lBQ2I1QyxRQUFRLENBQUNiLEdBQUcsR0FBR0YsVUFBVTtJQUN6QmdCLFVBQVUsQ0FBQ0osV0FBVyxHQUFHLHdCQUF3QjtJQUNqRDtFQUNELENBQUMsQ0FBQztBQUNKOztBQUVBLFNBQVMrQiw4QkFBOEJBLENBQUNpQixZQUFZLEVBQUU7RUFDckQsT0FBT0EsWUFBWSxDQUFDQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUMxQzs7QUFFQTtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJNUQsR0FBRyxFQUFFd0QsS0FBSyxFQUFLO0VBQ2xDLE9BQU87SUFBRXhELEdBQUcsRUFBSEEsR0FBRztJQUFFd0QsS0FBSyxFQUFMQTtFQUFNLENBQUM7QUFDdEIsQ0FBQztBQUNEO0FBQ0EsU0FBU0wsaUJBQWlCQSxDQUFDRixRQUFRLEVBQUU7RUFDcEMsSUFBSXJELFFBQVEsQ0FBQ3lDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDeEJ6QyxRQUFRLEdBQUcsRUFBRTtFQUNkO0VBQ0FxRCxRQUFRLENBQUNZLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDdkIsSUFBTUMsTUFBTSxHQUFHSCxVQUFVLENBQUNFLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsRUFBRU8sR0FBRyxDQUFDTixLQUFLLENBQUM7SUFDN0Q1RCxRQUFRLENBQUNvRSxJQUFJLENBQUNELE1BQU0sQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDSDs7QUFFQTtBQUNBLFNBQVM5QixVQUFVQSxDQUFBLEVBQUc7RUFDckIsSUFBSSxPQUFPckMsUUFBUSxLQUFLLFdBQVcsSUFBSUEsUUFBUSxDQUFDeUMsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUM3RHhCLFFBQVEsQ0FBQ2IsR0FBRyxHQUFHRixVQUFVLENBQUNFLEdBQUc7SUFDN0JjLFVBQVUsQ0FBQ0osV0FBVyxHQUFHLG9CQUFvQjtJQUM3QztFQUNEO0VBQ0E7RUFDQSxJQUFJYixPQUFPLEtBQUtELFFBQVEsQ0FBQ3lDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDcEM7SUFDQXhDLE9BQU8sR0FBRyxDQUFDO0VBQ1o7RUFDQWdCLFFBQVEsQ0FBQ2IsR0FBRyxHQUFHSixRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDRyxHQUFHO0VBQ3BDLElBQUlhLFFBQVEsQ0FBQ2IsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUN4QmlDLFVBQVUsQ0FBQ25DLFVBQVUsQ0FBQztFQUN2QjtFQUVBZ0IsVUFBVSxDQUFDSixXQUFXLEdBQUdkLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMyRCxLQUFLO0VBQ2hEO0VBQ0EsRUFBRTNELE9BQU87RUFDVG9FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDckUsT0FBTyxDQUFDO0FBQ3JCO0FBRUFvRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ3RFLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtyQjtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELDZEQUE2RCwyQ0FBMkMsR0FBRyxjQUFjLDRCQUE0QixpQkFBaUIsMEJBQTBCLDJDQUEyQyxvQkFBb0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGNBQWMsZUFBZSxrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLCtIQUErSCxvQ0FBb0MsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5QixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsdUJBQXVCLHFCQUFxQiwyQ0FBMkMsd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsY0FBYyxHQUFHLGlCQUFpQixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsNEJBQTRCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLHdCQUF3QixjQUFjLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsNkRBQTZELHdCQUF3QiwyQ0FBMkMsd0JBQXdCLG9CQUFvQixxQkFBcUIseUJBQXlCLEdBQUcsbUZBQW1GLG9CQUFvQiw2REFBNkQsMEJBQTBCLEdBQUcsOEJBQThCLGlCQUFpQiw2QkFBNkIsYUFBYSw0RUFBNEUsS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLHVDQUF1Qyw2REFBNkQsMkNBQTJDLEdBQUcsY0FBYyw0QkFBNEIsaUJBQWlCLDBCQUEwQiwyQ0FBMkMsb0JBQW9CLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixjQUFjLGVBQWUsa0JBQWtCLEtBQUssbUJBQW1CLHNCQUFzQiwrSEFBK0gsb0NBQW9DLDBCQUEwQix1QkFBdUIsS0FBSyx5QkFBeUIsa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLHVCQUF1QixxQkFBcUIsMkNBQTJDLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcsV0FBVyxzQkFBc0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGNBQWMsR0FBRyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IscUJBQXFCLGlCQUFpQixnQkFBZ0IsMEJBQTBCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLGdDQUFnQyx3QkFBd0IsY0FBYyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxxQkFBcUIsdUJBQXVCLDZEQUE2RCx3QkFBd0IsMkNBQTJDLHdCQUF3QixvQkFBb0IscUJBQXFCLHlCQUF5QixHQUFHLG1GQUFtRixvQkFBb0IsNkRBQTZELDBCQUEwQixHQUFHLDhCQUE4QixpQkFBaUIsNkJBQTZCLHlCQUF5QjtBQUM3cks7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZhOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlX3JlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZV9yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGVfcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbW9zc0ZpcmUgZnJvbSAnLi9pdGNyb3dkbW9zc2ZpcmUuZ2lmJztcblxuY29uc3QgZ2lwaHlBcGlLZXkgPSBwcm9jZXNzLmVudi5HSVBIWV9BUElfS0VZO1xuXG5sZXQgZ2lmQXJyYXkgPSBbXTtcbmxldCBjb3VudGVyID0gMTtcbmNvbnN0IGRlZmF1bHRHaWYgPSBuZXcgSW1hZ2UoKTtcbmRlZmF1bHRHaWYuc3JjID0gbW9zc0ZpcmU7XG5cbi8vIGRvbSBpbnNlcnRpb25cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnV29ya2luZyBXaXRoIEFQSXMnO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicsICdjb250YWluZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbm1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlJyk7XG5tYWluVGl0bGUudGV4dENvbnRlbnQgPSAnR2lwaHkgQVBJIE91dHB1dCc7XG5tYWluLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbmNvbnN0IGdpcGh5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5naXBoeUltZy5zcmMgPSBkZWZhdWx0R2lmLnNyYztcbmdpcGh5SW1nLmNsYXNzTGlzdC5hZGQoJ2dpcGh5LWltZycpO1xubWFpbi5hcHBlbmRDaGlsZChnaXBoeUltZyk7XG5cbmNvbnN0IGdpcGh5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuZ2lwaHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdnaXBoeS10aXRsZScpO1xuZ2lwaHlUaXRsZS50ZXh0Q29udGVudCA9XG5cdCdTZWFyY2ggZm9yIGEgR2lwaHksIHRoZW4gY2xpY2sgXCJuZXh0XCIgdG8gY3ljbGUgdGhyb3VnaCB0aGUgMjUgcmVzdWx0cyc7XG5tYWluLmFwcGVuZENoaWxkKGdpcGh5VGl0bGUpO1xuXG5jb25zdCBnaXBoeU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuZ2lwaHlOYXYuY2xhc3NMaXN0LmFkZCgnZ2lwaHktbmF2JywgJ2NvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGdpcGh5TmF2KTtcblxuY29uc3QgZ2lwaHlTZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZ2lwaHlTZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2dpcGh5LXNlYXJjaC1mb3JtJywgJ2NvbnRhaW5lcicpO1xuZ2lwaHlTZWFyY2hGb3JtLmlkID0gJ2dpcGh5LXNlYXJjaC1mb3JtJztcbmdpcGh5U2VhcmNoRm9ybS5uYW1lID0gJ2dpcGh5LXNlYXJjaC1mb3JtJztcbmdpcGh5U2VhcmNoRm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbmdpcGh5TmF2LmFwcGVuZENoaWxkKGdpcGh5U2VhcmNoRm9ybSk7XG5cbmNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbmZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkc2V0Jyk7XG5naXBoeVNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG5jb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbmxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdsZWdlbmQnKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9ICcnO1xuZ2lwaHlTZWFyY2hGb3JtLmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbmNvbnN0IGdpcGh5U2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZ2lwaHlTZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdnaXBoeS1zZWFyY2gtaW5wdXQnKTtcbmdpcGh5U2VhcmNoSW5wdXQuaWQgPSAnZ2lwaHktc2VhcmNoLWlucHV0JztcbmdpcGh5U2VhcmNoSW5wdXQubmFtZSA9ICdnaXBoeS1zZWFyY2gtaW5wdXQnO1xuZ2lwaHlTZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCc7XG5naXBoeVNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBmb3IgYSBHaXBoeSc7XG5naXBoeVNlYXJjaElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbmdpcGh5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChnaXBoeVNlYXJjaElucHV0KTtcblxuY29uc3QgZ2lwaHlTZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmdpcGh5U2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoJ2dpcGh5LXNlYXJjaC1idG4nKTtcbmdpcGh5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChnaXBoeVNlYXJjaEJ0bik7XG5jb25zdCBnaXBoeVNlYXJjaEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5naXBoeVNlYXJjaEJ0bkljb24uY2xhc3NMaXN0LmFkZCgnZmEnLCAnZmEtc2VhcmNoJyk7XG5naXBoeVNlYXJjaEJ0bi5hcHBlbmRDaGlsZChnaXBoeVNlYXJjaEJ0bkljb24pO1xuXG5naXBoeVNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Z2V0R2lwaHkoZ2lwaHlTZWFyY2hJbnB1dC52YWx1ZSk7XG5cblx0Z2lwaHlTZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuXHRkaXNwbGF5R2lmKCk7XG59KTtcblxuY29uc3QgbmV4dEdpcGh5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5uZXh0R2lwaHlCdG4uY2xhc3NMaXN0LmFkZCgnbmV4dC1naXBoeS1idG4nKTtcbm5leHRHaXBoeUJ0bi50ZXh0Q29udGVudCA9ICdOZXh0IEdpcGh5JztcbmdpcGh5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChuZXh0R2lwaHlCdG4pO1xuXG5uZXh0R2lwaHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRkaXNwbGF5R2lmKCk7XG59KTtcbmZ1bmN0aW9uIGdldEdpcGh5KHNlYXJjaFRlcm0gPSAnYmVhY2gnLCBvZmZzZXROdW1iZXIgPSA1MDApIHtcblx0Y29uc3Qgc2VhcmNoVGVybUNvbnZlcnRlZCA9IGNvbnZlcnRTZWFyY2hTdHJpbmdUb1VybEluc2VydChzZWFyY2hUZXJtKTtcblx0Y29uc3QgdXJsV2l0aFNlYXJjaCA9IG5ldyBVUkwoXG5cdFx0YGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9hcGlfa2V5PSR7Z2lwaHlBcGlLZXl9JnE9JHtzZWFyY2hUZXJtQ29udmVydGVkfSZsaW1pdD0yNSZvZmZzZXQ9JHtvZmZzZXROdW1iZXJ9JnJhdGluZz1yJmxhbmc9ZW5gXG5cdCk7XG5cblx0ZmV0Y2godXJsV2l0aFNlYXJjaC5ocmVmLCB7XG5cdFx0bW9kZTogJ2NvcnMnLFxuXHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudGl0bGUpO1xuXG5cdFx0XHRhZGRHaWZzVG9HaWZBcnJheShyZXNwb25zZS5kYXRhKTtcblx0XHRcdGdpcGh5SW1nLnNyYyA9IHJlc3BvbnNlLmRhdGFbMF0uaW1hZ2VzLm9yaWdpbmFsLnVybDtcblx0XHRcdGdpcGh5VGl0bGUudGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXRhLnRpdGxlO1xuXHRcdFx0Y291bnRlciA9IDE7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGdpcGh5SW1nLnNyYyA9IGRlZmF1bHRHaWY7XG5cdFx0XHRnaXBoeVRpdGxlLnRleHRDb250ZW50ID0gJ05vIEdpZnMgRm91bmQgb3IgRXJyb3InO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZXJyKTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFNlYXJjaFN0cmluZ1RvVXJsSW5zZXJ0KHNlYXJjaFN0cmluZykge1xuXHRyZXR1cm4gc2VhcmNoU3RyaW5nLnJlcGxhY2VBbGwoLyAvZywgJysnKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlcywgYXJyb3ctYm9keS1zdHlsZVxuY29uc3QgZ2lmRmFjdG9yeSA9IChzcmMsIHRpdGxlKSA9PiB7XG5cdHJldHVybiB7IHNyYywgdGl0bGUgfTtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmZ1bmN0aW9uIGFkZEdpZnNUb0dpZkFycmF5KHJlc3BvbnNlKSB7XG5cdGlmIChnaWZBcnJheS5sZW5ndGggPiAwKSB7XG5cdFx0Z2lmQXJyYXkgPSBbXTtcblx0fVxuXHRyZXNwb25zZS5mb3JFYWNoKGdpZiA9PiB7XG5cdFx0Y29uc3QgbmV3R2lmID0gZ2lmRmFjdG9yeShnaWYuaW1hZ2VzLm9yaWdpbmFsLnVybCwgZ2lmLnRpdGxlKTtcblx0XHRnaWZBcnJheS5wdXNoKG5ld0dpZik7XG5cdH0pO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmZ1bmN0aW9uIGRpc3BsYXlHaWYoKSB7XG5cdGlmICh0eXBlb2YgZ2lmQXJyYXkgPT09ICd1bmRlZmluZWQnIHx8IGdpZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdGdpcGh5SW1nLnNyYyA9IGRlZmF1bHRHaWYuc3JjO1xuXHRcdGdpcGh5VGl0bGUudGV4dENvbnRlbnQgPSAnVHJ5IEFub3RoZXIgU2VhcmNoJztcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdGlmIChjb3VudGVyID09PSBnaWZBcnJheS5sZW5ndGggLSAxKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdFx0Y291bnRlciA9IDA7XG5cdH1cblx0Z2lwaHlJbWcuc3JjID0gZ2lmQXJyYXlbY291bnRlcl0uc3JjO1xuXHRpZiAoZ2lwaHlJbWcuc3JjID09PSAnJykge1xuXHRcdGRpc3BsYXlHaWYoZGVmYXVsdEdpZik7XG5cdH1cblxuXHRnaXBoeVRpdGxlLnRleHRDb250ZW50ID0gZ2lmQXJyYXlbY291bnRlcl0udGl0bGU7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHQrK2NvdW50ZXI7XG5cdGNvbnNvbGUubG9nKGNvdW50ZXIpO1xufVxuXG5jb25zb2xlLmxvZyhnaWZBcnJheSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcdHNyYzogJ3VybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZiknO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAzLjVyZW07XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJlZCxcXG5cXHRcXHRibHVlLFxcblxcdFxcdGdyZWVuLFxcblxcdFxcdG9yYW5nZSxcXG5cXHRcXHR5ZWxsb3csXFxuXFx0XFx0cHVycGxlXFxuXFx0KTtcXG5cXG5cXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uaGVhZGVyLCAuY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMXJlbSAzcmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2IoMjQwIDI0OCAyNTUgLyA0Mi4zJSk7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1haW4ge1xcblxcdG1pbi1oZWlnaHQ6IDUwZHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2lwaHktdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRvcGFjaXR5OiAuNztcXG5cXHRsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcbmxlZ2VuZCwgZmllbGRzZXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmZvcm0uZ2lwaHktc2VhcmNoLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmdpcGh5LXNlYXJjaC1pbnB1dCB7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmV4dC1naXBoeS1idG4ge1xcblxcdGZsZXgtYmFzaXM6IGF1dG9cXG59XFxuXFxuLmdpcGh5LXNlYXJjaC1idG4sIC5uZXh0LWdpcGh5LWJ0biwgLmdpcGh5LXNlYXJjaC1pbnB1dCB7XFxuXFx0cGFkZGluZzogLjVyZW0gMXJlbTtcXG5cXHRib3JkZXItY29sb3I6IHJnYigyNDAgMjQ4IDI1NSAvIDQyLjMlKTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG5cXG5cXG4uZ2lwaHktc2VhcmNoLWJ0bjpob3ZlciwgLm5leHQtZ2lwaHktYnRuOmhvdmVyLCAuZ2lwaHktc2VhcmNoLWlucHV0OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogc2NhbGUgIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMCwgMy4wNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWlucHV0OmhvdmVye1xcblxcdGN1cnNvcjogdGV4dDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0NBQ0Msd0RBQXdEO0NBQ3hELHNDQUFzQztBQUN2Qzs7OztBQUlBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsc0NBQXNDO0NBQ3RDLGVBQWU7Q0FDZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVixhQUFhOztBQUVkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCOzs7Ozs7OztFQVFDOztDQUVELDZCQUE2QjtDQUM3QixxQkFBcUI7Q0FDckIsa0JBQWtCOztBQUVuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0FBQ3JCOzs7O0FBSUE7Q0FDQyxlQUFlO0NBQ2Ysd0RBQXdEO0NBQ3hELHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcdHNyYzogJ3VybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZiknO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAzLjVyZW07XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJlZCxcXG5cXHRcXHRibHVlLFxcblxcdFxcdGdyZWVuLFxcblxcdFxcdG9yYW5nZSxcXG5cXHRcXHR5ZWxsb3csXFxuXFx0XFx0cHVycGxlXFxuXFx0KTtcXG5cXG5cXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4uaGVhZGVyLCAuY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMXJlbSAzcmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2IoMjQwIDI0OCAyNTUgLyA0Mi4zJSk7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1haW4ge1xcblxcdG1pbi1oZWlnaHQ6IDUwZHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2lwaHktdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRvcGFjaXR5OiAuNztcXG5cXHRsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcbmxlZ2VuZCwgZmllbGRzZXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmZvcm0uZ2lwaHktc2VhcmNoLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmdpcGh5LXNlYXJjaC1pbnB1dCB7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmV4dC1naXBoeS1idG4ge1xcblxcdGZsZXgtYmFzaXM6IGF1dG9cXG59XFxuXFxuLmdpcGh5LXNlYXJjaC1idG4sIC5uZXh0LWdpcGh5LWJ0biwgLmdpcGh5LXNlYXJjaC1pbnB1dCB7XFxuXFx0cGFkZGluZzogLjVyZW0gMXJlbTtcXG5cXHRib3JkZXItY29sb3I6IHJnYigyNDAgMjQ4IDI1NSAvIDQyLjMlKTtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG5cXG5cXG4uZ2lwaHktc2VhcmNoLWJ0bjpob3ZlciwgLm5leHQtZ2lwaHktYnRuOmhvdmVyLCAuZ2lwaHktc2VhcmNoLWlucHV0OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogc2NhbGUgIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMCwgMy4wNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZ2lwaHktc2VhcmNoLWlucHV0OmhvdmVye1xcblxcdGN1cnNvcjogdGV4dDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJtb3NzRmlyZSIsImdpcGh5QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdJUEhZX0FQSV9LRVkiLCJnaWZBcnJheSIsImNvdW50ZXIiLCJkZWZhdWx0R2lmIiwiSW1hZ2UiLCJzcmMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsInRleHRDb250ZW50IiwibWFpbiIsIm1haW5UaXRsZSIsImdpcGh5SW1nIiwiZ2lwaHlUaXRsZSIsImdpcGh5TmF2IiwiZ2lwaHlTZWFyY2hGb3JtIiwiaWQiLCJuYW1lIiwibm9WYWxpZGF0ZSIsImZpZWxkc2V0IiwibGVnZW5kIiwiZ2lwaHlTZWFyY2hJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZ2lwaHlTZWFyY2hCdG4iLCJnaXBoeVNlYXJjaEJ0bkljb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0R2lwaHkiLCJ2YWx1ZSIsImRpc3BsYXlHaWYiLCJuZXh0R2lwaHlCdG4iLCJzZWFyY2hUZXJtIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwib2Zmc2V0TnVtYmVyIiwic2VhcmNoVGVybUNvbnZlcnRlZCIsImNvbnZlcnRTZWFyY2hTdHJpbmdUb1VybEluc2VydCIsInVybFdpdGhTZWFyY2giLCJVUkwiLCJjb25jYXQiLCJmZXRjaCIsImhyZWYiLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImFkZEdpZnNUb0dpZkFycmF5IiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwidGl0bGUiLCJlcnIiLCJzZWFyY2hTdHJpbmciLCJyZXBsYWNlQWxsIiwiZ2lmRmFjdG9yeSIsImZvckVhY2giLCJnaWYiLCJuZXdHaWYiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=