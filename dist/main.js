/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/dot.svg */ "./src/assets/dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/x.svg */ "./src/assets/x.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Chelsea Market\", cursive;\n}\n\nbody {\n    background-color: #b4d2e7;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header {\n    height: 17.5vh;\n    font-family: \"Chelsea Market\", cursive;\n    font-size: 5rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    display: flex;\n    height: calc(100vh - 17.5vh);\n    justify-content: center;\n    align-items: center;\n    gap: 7.5rem;\n}\n\n.board {\n    height: 40rem;\n    width: 40rem;\n    border: 5px solid rgb(27, 27, 27);\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.square {\n    background-color: #b4d2e7;\n    border: 2px solid rgb(27, 27, 27);\n}\n\n.ship {\n    background-color: #3e92cc;\n}\n\n.missed {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n.hit {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 33px;\n    background-color: #fd3535;\n}\n\n.disabled {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.darkenedbg {\n    background-color: rgb(0, 0, 0, 0.6);\n}\n\n.over {\n    background-color: #b4d2e7;\n    height: 50vh;\n    width: 40vw;\n    border-radius: 10px;\n    border: 6px solid rgb(27, 27, 27);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n\n.wonlost {\n    font-size: 5rem;\n}\n\n.message {\n    font-size: 3rem;\n}\n\n.button {\n    height: 5rem;\n    width: 15rem;\n    font-size: 2rem;\n    border-radius: 10px;\n}\n\n.won {\n    background-color: #3e92cc;\n}\n\n.lost {\n    background-color: #fd3535;\n}\n\n.placements {\n    background-color: #b4d2e7;\n    height: 90vh;\n    width: 40vw;\n    border-radius: 10px;\n    border: 6px solid rgb(27, 27, 27);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2.15rem;\n}\n\n.placementtext {\n    font-size: 2.5rem;\n}\n\n.axisbtn {\n    font-size: 1.3rem;\n    background-color: #3e92cc;\n    border-radius: 5px;\n    padding: 0.5rem;\n}\n\n.sunkship {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 33px;\n    background-color: #b10f0f;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,sCAAsC;IACtC,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yDAAyC;IACzC,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,yDAAuC;IACvC,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yDAAuC;IACvC,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;IACrB,yBAAyB;AAC7B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Chelsea Market\", cursive;\n}\n\nbody {\n    background-color: #b4d2e7;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header {\n    height: 17.5vh;\n    font-family: \"Chelsea Market\", cursive;\n    font-size: 5rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    display: flex;\n    height: calc(100vh - 17.5vh);\n    justify-content: center;\n    align-items: center;\n    gap: 7.5rem;\n}\n\n.board {\n    height: 40rem;\n    width: 40rem;\n    border: 5px solid rgb(27, 27, 27);\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.square {\n    background-color: #b4d2e7;\n    border: 2px solid rgb(27, 27, 27);\n}\n\n.ship {\n    background-color: #3e92cc;\n}\n\n.missed {\n    background-image: url(\"./assets/dot.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n.hit {\n    background-image: url(\"./assets/x.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 33px;\n    background-color: #fd3535;\n}\n\n.disabled {\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.darkenedbg {\n    background-color: rgb(0, 0, 0, 0.6);\n}\n\n.over {\n    background-color: #b4d2e7;\n    height: 50vh;\n    width: 40vw;\n    border-radius: 10px;\n    border: 6px solid rgb(27, 27, 27);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n\n.wonlost {\n    font-size: 5rem;\n}\n\n.message {\n    font-size: 3rem;\n}\n\n.button {\n    height: 5rem;\n    width: 15rem;\n    font-size: 2rem;\n    border-radius: 10px;\n}\n\n.won {\n    background-color: #3e92cc;\n}\n\n.lost {\n    background-color: #fd3535;\n}\n\n.placements {\n    background-color: #b4d2e7;\n    height: 90vh;\n    width: 40vw;\n    border-radius: 10px;\n    border: 6px solid rgb(27, 27, 27);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2.15rem;\n}\n\n.placementtext {\n    font-size: 2.5rem;\n}\n\n.axisbtn {\n    font-size: 1.3rem;\n    background-color: #3e92cc;\n    border-radius: 5px;\n    padding: 0.5rem;\n}\n\n.sunkship {\n    background-image: url(\"./assets/x.svg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 33px;\n    background-color: #b10f0f;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/factory-functions.js":
/*!**********************************!*\
  !*** ./src/factory-functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
    const numberOfHits = 0;

    function hit() {
        this.numberOfHits += 1;
    }

    function isSunk() {
        if (this.numberOfHits < this.length) return false;
        return true;
    }

    return { length, numberOfHits, hit, isSunk, name };
}

function Gameboard() {
    const board = createBoard();

    const ships = [];

    const shotsHit = [];

    const shotsMissed = [];

    function placeShip(ship, startCoordinate, axis) {
        ship.coordinates = [startCoordinate];

        for (let i = 1; i < ship.length; i++) {
            if (axis === "x")
                ship.coordinates[i] = [
                    ship.coordinates[i - 1][0] + 1,
                    ship.coordinates[i - 1][1],
                ];
            else if (axis === "y")
                ship.coordinates[i] = [
                    ship.coordinates[i - 1][0],
                    ship.coordinates[i - 1][1] - 1,
                ];
        }

        ship.coordinates.forEach((coordinates) => {
            const index = board.findIndex((element) => {
                return element.toString() === coordinates.toString();
            });
            if (index === -1) return (ship.coordinates = null);
            else board.splice(index, 1);
        });

        if (ship.coordinates === null) return null;

        this.ships.push(ship);
    }

    function placeComputerShip(ship) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        let axis;
        if (randomNumber <= 5) axis = "x";
        if (randomNumber >= 6) axis = "y";

        let startCoordinate;

        if (axis === "x") {
            startCoordinate = [
                Math.floor(Math.random() * 9),
                Math.floor(Math.random() * 10),
            ];
        } else if (axis === "y") {
            startCoordinate = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 9) + 1,
            ];
        }

        const coordinates = this.placeShip(ship, startCoordinate, axis);
        if (coordinates === null) this.placeComputerShip(ship);
    }

    let attacksReceived = 0;

    function receiveAttack(coordinates) {
        let result;
        this.ships.forEach((ship) =>
            ship.coordinates.forEach((shipCoordinates) => {
                if (shipCoordinates.toString() === coordinates.toString()) {
                    ship.numberOfHits++;
                    this.shotsHit.push(coordinates);
                    this.attacksReceived++;
                    result = "hit";
                }
            })
        );

        if (result === "hit") return result;

        this.shotsMissed.push(coordinates);

        this.attacksReceived++;

        result = "missed";

        return result;
    }

    function isEverythingSunk() {
        let everythingSunk = true;

        if (this.ships.length === 0) everythingSunk = false;

        this.ships.forEach((ship) => {
            if (ship.isSunk() !== true) everythingSunk = false;
        });
        return everythingSunk;
    }

    return {
        placeShip,
        receiveAttack,
        isEverythingSunk,
        shotsHit,
        shotsMissed,
        ships,
        attacksReceived,
        placeComputerShip,
    };
}

function createBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
        for (let n = 0; n < 10; n++) {
            board.push([i, n]);
        }
    }
    return board;
}

function Player(name, isComputer, opponent) {
    const gameboard = Gameboard();

    const carrier = Ship(5, "Carrier");
    const battleship = Ship(4, "Battleship");
    const destroyer = Ship(3, "Destroyer");
    const submarine = Ship(3, "Submarine");
    const patrolBoat = Ship(2, "Patrol Boat");

    if (isComputer) {
        const computerAttacks = [];

        const computerAttack = function () {
            let lastShotHit =
                opponent.gameboard.shotsHit[
                    opponent.gameboard.shotsHit.length - 1
                ];

            if (lastShotHit) {
                opponent.gameboard.ships.forEach((ship) =>
                    ship.coordinates.forEach((coordinates) => {
                        if (
                            lastShotHit.toString() === coordinates.toString() &&
                            ship.isSunk()
                        )
                            lastShotHit = "sunk";
                    })
                );
            }

            let attackCoordinates;

            if (lastShotHit && lastShotHit !== "sunk") {
                if (
                    !computerAttacks.includes(
                        [lastShotHit[0] + 1, lastShotHit[1]].toString()
                    )
                ) {
                    attackCoordinates = [lastShotHit[0] + 1, lastShotHit[1]];
                    if (
                        attackCoordinates[0] < 0 ||
                        attackCoordinates[0] > 9 ||
                        attackCoordinates[1] < 0 ||
                        attackCoordinates[1] > 9
                    )
                        attackCoordinates = null;
                }

                if (
                    !computerAttacks.includes(
                        [lastShotHit[0] - 1, lastShotHit[1]].toString()
                    ) &&
                    !attackCoordinates
                ) {
                    attackCoordinates = [lastShotHit[0] - 1, lastShotHit[1]];
                    if (
                        attackCoordinates[0] < 0 ||
                        attackCoordinates[0] > 9 ||
                        attackCoordinates[1] < 0 ||
                        attackCoordinates[1] > 9
                    )
                        attackCoordinates = null;
                }

                if (
                    !computerAttacks.includes(
                        [lastShotHit[0], lastShotHit[1] - 1].toString()
                    ) &&
                    !attackCoordinates
                ) {
                    attackCoordinates = [lastShotHit[0], lastShotHit[1] - 1];
                    if (
                        attackCoordinates[0] < 0 ||
                        attackCoordinates[0] > 9 ||
                        attackCoordinates[1] < 0 ||
                        attackCoordinates[1] > 9
                    )
                        attackCoordinates = null;
                }

                if (
                    !computerAttacks.includes(
                        [lastShotHit[0], lastShotHit[1] + 1].toString()
                    ) &&
                    !attackCoordinates
                ) {
                    attackCoordinates = [lastShotHit[0], lastShotHit[1] + 1];
                    if (
                        attackCoordinates[0] < 0 ||
                        attackCoordinates[0] > 9 ||
                        attackCoordinates[1] < 0 ||
                        attackCoordinates[1] > 9
                    )
                        attackCoordinates = null;
                }
            }

            if (!attackCoordinates) {
                attackCoordinates = [
                    Math.floor(Math.random() * 10),
                    Math.floor(Math.random() * 10),
                ];
            }

            if (computerAttacks.includes(attackCoordinates.toString()))
                attackCoordinates = computerAttack();

            computerAttacks.push(attackCoordinates.toString());

            return attackCoordinates;
        };
        return {
            name,
            gameboard,
            computerAttack,
            carrier,
            battleship,
            destroyer,
            submarine,
            patrolBoat,
            isComputer,
        };
    }

    return {
        name,
        gameboard,
        carrier,
        battleship,
        destroyer,
        submarine,
        patrolBoat,
        isComputer,
    };
}




/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "gameOverScreen": () => (/* binding */ gameOverScreen),
/* harmony export */   "placeShipScreen": () => (/* binding */ placeShipScreen),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "renderSunkShips": () => (/* binding */ renderSunkShips)
/* harmony export */ });
const container = document.getElementById("container");

const main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);

function renderGameboard(player, div = main) {
    const board = document.createElement("div");
    board.classList.add("board");
    div.appendChild(board);

    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.createElement("div");
            square.classList.add(`${n},${i}`, "square");

            if (player.isComputer)
                square.classList.add(`${n},${i}`, "computersquare");

            createSquareFunctionality(player, square, n, i);

            board.appendChild(square);
        }
    }
}

function createSquareFunctionality(player, square, x, y) {
    if (player) {
        player.gameboard.ships.forEach((ship) => {
            ship.coordinates.forEach((coordinate) => {
                if (coordinate.toString() === `${x},${y}`) {
                    if (!player.isComputer) square.classList.add("ship");
                    else
                        square.addEventListener("click", function () {
                            square.classList.remove("missed");
                            square.classList.add("hit");
                        });
                } else if (player.isComputer) {
                    square.addEventListener("click", function () {
                        if (!square.classList.contains("hit"))
                            square.classList.add("missed");
                    });
                }
            });
        });
    }
}

function addClass(coordinates, hitOrMissed) {
    const square = document.getElementsByClassName(coordinates.toString())[0];
    square.classList.add(hitOrMissed);
}

function renderSunkShips(ships, gameboardIndex) {
    ships.forEach((ship) =>
        ship.coordinates.forEach((coordinates) => {
            if (ship.isSunk()) {
                const square = document.getElementsByClassName(
                    coordinates.toString()
                )[gameboardIndex];
                square.classList.add("sunkship");
            }
        })
    );
}

function gameOverScreen(winner) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    container.appendChild(overlay);

    const screen = document.createElement("div");
    screen.classList.add("over");
    overlay.appendChild(screen);

    const wonOrLost = document.createElement("div");
    wonOrLost.classList.add("wonlost");

    const message = document.createElement("div");
    message.classList.add("message");

    const tryAgainBtn = document.createElement("button");
    tryAgainBtn.classList.add("button");
    tryAgainBtn.textContent = "Play Again";
    tryAgainBtn.addEventListener("click", function () {
        window.location.reload();
    });

    if (winner === "player") {
        wonOrLost.textContent = "You won!";
        message.textContent = "Congratulations";
        tryAgainBtn.classList.add("won");
    } else if (winner === "computer") {
        wonOrLost.textContent = "You lost!";
        message.textContent = "Better luck next time";
        tryAgainBtn.classList.add("lost");
    }

    screen.appendChild(wonOrLost);
    screen.appendChild(message);
    screen.appendChild(tryAgainBtn);
}

let axis = "x";

let gameboardIndex = 5;

function placeShipScreen(ship, player) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    if (!document.querySelector(".overlay"))
        overlay.classList.add("darkenedbg");
    container.appendChild(overlay);

    const screen = document.createElement("div");
    screen.classList.add("placements");
    overlay.appendChild(screen);

    const title = document.createElement("div");
    title.classList.add("placementtext");
    title.textContent = `Place your ${ship.name}`;
    screen.appendChild(title);

    const changeAxisButton = document.createElement("button");
    changeAxisButton.classList.add("axisbtn");
    if (axis === "x") changeAxisButton.textContent = `Change to vertical`;
    if (axis === "y") changeAxisButton.textContent = `Change to horizontal`;
    screen.appendChild(changeAxisButton);

    changeAxisButton.addEventListener("click", () => {
        if (axis === "x") {
            axis = "y";
            changeAxisButton.textContent = `Change to horizontal`;
            overlay.remove();
            placeShipScreen(ship, player);
            updateGameboardRender(player, gameboardIndex + 1);
        } else if (axis === "y") {
            axis = "x";
            changeAxisButton.textContent = `Change to vertical`;
            overlay.remove();
            placeShipScreen(ship, player);
            updateGameboardRender(player, gameboardIndex + 1);
        }
    });

    renderGameboard("", screen);

    const squares = screen.querySelectorAll(".square");
    squares.forEach((square, index) => {
        if (axis === "x") {
            square.addEventListener("mouseenter", function () {
                if (axis === "y") {
                    overlay.remove();
                    placeShipScreen(ship, player);
                    updateGameboardRender(player, gameboardIndex + 1);
                }
            });
            if (squares[index + ship.length - 1]) {
                if (
                    square.className.charAt(2) ===
                    squares[index + ship.length - 1].className.charAt(2)
                ) {
                    square.addEventListener("mouseenter", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index
                        );

                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i].style.backgroundColor =
                                    "#3e92cc";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i].classList[2]) {
                                    squares[index + i].style.backgroundColor =
                                        "rgb(70, 70, 70)";
                                }
                            }
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index
                        );

                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i].style.backgroundColor =
                                    "#b4d2e7";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i].classList[2]) {
                                    squares[index + i].style.backgroundColor =
                                        "#b4d2e7";
                                }
                            }
                        }
                    });
                    square.addEventListener("click", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index
                        );

                        if (result === true) {
                            player.gameboard.placeShip(
                                ship,
                                [
                                    +square.classList[0].charAt(0),
                                    +square.classList[0].charAt(2),
                                ],
                                "x"
                            );
                            updateGameboardRender(player);
                            if (gameboardIndex > 1) {
                                updateGameboardRender(player, gameboardIndex);
                                gameboardIndex--;
                            }
                            overlay.remove();
                        }
                    });
                } else {
                    square.addEventListener("mouseenter", function () {
                        for (
                            let i = 0;
                            square.className.charAt(2) ===
                            squares[index + i].className.charAt(2);
                            i++
                        ) {
                            if (!squares[index + i].classList[2])
                                squares[index + i].style.backgroundColor =
                                    "rgb(70, 70, 70)";
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        for (
                            let i = 0;
                            square.className.charAt(2) ===
                            squares[index + i].className.charAt(2);
                            i++
                        ) {
                            if (!squares[index + i].classList[2])
                                squares[index + i].style.backgroundColor =
                                    "#b4d2e7";
                        }
                    });
                }
            } else {
                square.addEventListener("mouseenter", function () {
                    for (let i = 0; squares[index + i]; i++) {
                        if (!squares[index + i].classList[2])
                            squares[index + i].style.backgroundColor =
                                "rgb(70, 70, 70)";
                    }
                });
                square.addEventListener("mouseout", function () {
                    for (let i = 0; squares[index + i]; i++) {
                        if (!squares[index + i].classList[2])
                            squares[index + i].style.backgroundColor =
                                "#b4d2e7";
                    }
                });
            }
        }
        if (axis === "y") {
            if (squares[index + 10 * (ship.length - 1)]) {
                if (
                    square.className.charAt(0) ===
                    squares[index + 10 * (ship.length - 1)].className.charAt(0)
                ) {
                    square.addEventListener("mouseenter", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index,
                            "y"
                        );

                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i * 10].style.backgroundColor =
                                    "#3e92cc";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i * 10].classList[2]) {
                                    squares[
                                        index + i * 10
                                    ].style.backgroundColor = "rgb(70, 70, 70)";
                                }
                            }
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index,
                            "y"
                        );

                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i * 10].style.backgroundColor =
                                    "#b4d2e7";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i * 10].classList[2]) {
                                    squares[
                                        index + i * 10
                                    ].style.backgroundColor = "#b4d2e7";
                                }
                            }
                        }
                    });
                    square.addEventListener("click", function () {
                        const result = canPlaceAShip(
                            player,
                            ship,
                            squares,
                            index,
                            "y"
                        );

                        if (result === true) {
                            player.gameboard.placeShip(
                                ship,
                                [
                                    +square.classList[0].charAt(0),
                                    +square.classList[0].charAt(2),
                                ],
                                "y"
                            );
                            updateGameboardRender(player);
                            if (gameboardIndex > 1) {
                                updateGameboardRender(player, gameboardIndex);
                                gameboardIndex--;
                            }
                            overlay.remove();
                        }
                    });
                } else {
                    square.addEventListener("mouseenter", function () {
                        for (
                            let i = 0;
                            square.className.charAt(0) ===
                            squares[index + i * 10].className.charAt(0);
                            i++
                        ) {
                            squares[index + i * 10].style.backgroundColor =
                                "rgb(70, 70, 70)";
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        for (
                            let i = 0;
                            square.className.charAt(0) ===
                            squares[index + i * 10].className.charAt(0);
                            i++
                        ) {
                            squares[index + i * 10].style.backgroundColor =
                                "#b4d2e7";
                        }
                    });
                }
            } else {
                square.addEventListener("mouseenter", function () {
                    for (let i = 0; squares[index + i * 10]; i++) {
                        if (!squares[index + i * 10].classList[2])
                            squares[index + i * 10].style.backgroundColor =
                                "rgb(70, 70, 70)";
                    }
                });
                square.addEventListener("mouseout", function () {
                    for (let i = 0; squares[index + i * 10]; i++) {
                        if (!squares[index + i * 10].classList[2])
                            squares[index + i * 10].style.backgroundColor =
                                "#b4d2e7";
                    }
                });
            }
        }
    });
}

function canPlaceAShip(player, ship, squares, index, axis = "x") {
    let result = true;
    let multiplier;
    if (axis === "x") multiplier = 1;
    else if (axis === "y") multiplier = 10;
    player.gameboard.ships.forEach((element) => {
        element.coordinates.forEach((coordinate) => {
            for (let i = 0; i < ship.length; i++) {
                if (
                    coordinate.toString() ===
                    squares[index + i * multiplier].classList[0].toString()
                )
                    result = false;
            }
        });
    });
    return result;
}

function updateGameboardRender(player, gameboardIndex = 0) {
    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.getElementsByClassName(`${n},${i}`)[
                gameboardIndex
            ];

            createSquareFunctionality(player, square, n, i);
        }
    }
}




/***/ }),

/***/ "./src/assets/dot.svg":
/*!****************************!*\
  !*** ./src/assets/dot.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f62825a1fbbd20638b2.svg";

/***/ }),

/***/ "./src/assets/x.svg":
/*!**************************!*\
  !*** ./src/assets/x.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7de33bea13cec8901776.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory-functions */ "./src/factory-functions.js");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




const player1 = _factory_functions__WEBPACK_IMPORTED_MODULE_0__.Player("Player", false);

const player2 = _factory_functions__WEBPACK_IMPORTED_MODULE_0__.Player("PC", true, player1);

_user_interface__WEBPACK_IMPORTED_MODULE_1__.placeShipScreen(player1.patrolBoat, player1);
_user_interface__WEBPACK_IMPORTED_MODULE_1__.placeShipScreen(player1.submarine, player1);
_user_interface__WEBPACK_IMPORTED_MODULE_1__.placeShipScreen(player1.destroyer, player1);
_user_interface__WEBPACK_IMPORTED_MODULE_1__.placeShipScreen(player1.battleship, player1);
_user_interface__WEBPACK_IMPORTED_MODULE_1__.placeShipScreen(player1.carrier, player1);

player2.gameboard.placeComputerShip(player2.carrier);
player2.gameboard.placeComputerShip(player2.battleship);
player2.gameboard.placeComputerShip(player2.destroyer);
player2.gameboard.placeComputerShip(player2.submarine);
player2.gameboard.placeComputerShip(player2.patrolBoat);

_user_interface__WEBPACK_IMPORTED_MODULE_1__.renderGameboard(player1);

_user_interface__WEBPACK_IMPORTED_MODULE_1__.renderGameboard(player2);

const computerSquares = document.querySelectorAll(".computersquare");
const squares = document.querySelectorAll(".square");

computerSquares.forEach((square) =>
    square.addEventListener("click", function () {
        player2.gameboard.receiveAttack([
            +square.classList[0].charAt(0),
            +square.classList[0].charAt(2),
        ]);
    })
);

squares.forEach((square) =>
    square.addEventListener(
        "click",
        function () {
            _user_interface__WEBPACK_IMPORTED_MODULE_1__.renderSunkShips(player2.gameboard.ships, 1);
            if (
                player1.gameboard.isEverythingSunk() ||
                player2.gameboard.isEverythingSunk()
            ) {
                squares.forEach((square) => square.classList.add("disabled"));
                if (player1.gameboard.isEverythingSunk())
                    _user_interface__WEBPACK_IMPORTED_MODULE_1__.gameOverScreen("computer");
                else if (player2.gameboard.isEverythingSunk())
                    _user_interface__WEBPACK_IMPORTED_MODULE_1__.gameOverScreen("player");
                return;
            }
            if (
                player2.gameboard.attacksReceived >
                player1.gameboard.attacksReceived
            ) {
                const computerAttackCoordinates = player2.computerAttack();
                const attackReceived = player1.gameboard.receiveAttack(
                    computerAttackCoordinates
                );
                _user_interface__WEBPACK_IMPORTED_MODULE_1__.addClass(
                    computerAttackCoordinates,
                    attackReceived
                );
                _user_interface__WEBPACK_IMPORTED_MODULE_1__.renderSunkShips(player1.gameboard.ships, 0);
            }
            if (
                player1.gameboard.isEverythingSunk() ||
                player2.gameboard.isEverythingSunk()
            ) {
                squares.forEach((square) => square.classList.add("disabled"));
                if (player1.gameboard.isEverythingSunk())
                    _user_interface__WEBPACK_IMPORTED_MODULE_1__.gameOverScreen("computer");
                else if (player2.gameboard.isEverythingSunk())
                    _user_interface__WEBPACK_IMPORTED_MODULE_1__.gameOverScreen("player");
                return;
            }
        },
        { once: true }
    )
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQSxvQkFBb0IsMkRBQTRCO0FBQ2hEO0FBQ0Esb0JBQW9CLDJEQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBNEI7QUFDaEQ7QUFDQSxvQkFBb0IsMkRBQTRCO0FBQ2hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2RvdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy94LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hlbHNlYStNYXJrZXQmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIkNoZWxzZWEgTWFya2V0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTcuNXZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNoZWxzZWEgTWFya2V0XFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3LjV2aCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDcuNXJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5MmNjO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMzUzNTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFya2VuZWRiZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ub3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLndvbmxvc3Qge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTkyY2M7XFxufVxcblxcbi5sb3N0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMzUzNTtcXG59XFxuXFxuLnBsYWNlbWVudHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMmU3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIuMTVyZW07XFxufVxcblxcbi5wbGFjZW1lbnR0ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5heGlzYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTkyY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uc3Vua3NoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxMGYwZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5REFBeUM7SUFDekMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5REFBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoZWxzZWErTWFya2V0JmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2hlbHNlYSBNYXJrZXRcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDJlNztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNy41dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2hlbHNlYSBNYXJrZXRcXFwiLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcuNXZoKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNy41cmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBoZWlnaHQ6IDQwcmVtO1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDJlNztcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI3LCAyNywgMjcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTkyY2M7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2RvdC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3guc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQzNTM1O1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXJrZW5lZGJnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5vdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDJlNztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDI3LCAyNywgMjcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ud29ubG9zdCB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ud29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTJjYztcXG59XFxuXFxuLmxvc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQzNTM1O1xcbn1cXG5cXG4ucGxhY2VtZW50cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi4xNXJlbTtcXG59XFxuXFxuLnBsYWNlbWVudHRleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmF4aXNidG4ge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTJjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zdW5rc2hpcCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMveC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTBmMGY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICAgIGNvbnN0IG51bWJlck9mSGl0cyA9IDA7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkhpdHMgPCB0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsZW5ndGgsIG51bWJlck9mSGl0cywgaGl0LCBpc1N1bmssIG5hbWUgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBzaG90c0hpdCA9IFtdO1xuXG4gICAgY29uc3Qgc2hvdHNNaXNzZWQgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBzdGFydENvb3JkaW5hdGUsIGF4aXMpIHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtzdGFydENvb3JkaW5hdGVdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKVxuICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaV0gPSBbXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaSAtIDFdWzBdICsgMSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpIC0gMV1bMV0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKVxuICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaV0gPSBbXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaSAtIDFdWzBdLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2kgLSAxXVsxXSAtIDEsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudG9TdHJpbmcoKSA9PT0gY29vcmRpbmF0ZXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIChzaGlwLmNvb3JkaW5hdGVzID0gbnVsbCk7XG4gICAgICAgICAgICBlbHNlIGJvYXJkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXAoc2hpcCkge1xuICAgICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuXG4gICAgICAgIGxldCBheGlzO1xuICAgICAgICBpZiAocmFuZG9tTnVtYmVyIDw9IDUpIGF4aXMgPSBcInhcIjtcbiAgICAgICAgaWYgKHJhbmRvbU51bWJlciA+PSA2KSBheGlzID0gXCJ5XCI7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q29vcmRpbmF0ZTtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0ZSA9IFtcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGUgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMucGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgYXhpcyk7XG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gbnVsbCkgdGhpcy5wbGFjZUNvbXB1dGVyU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgYXR0YWNrc1JlY2VpdmVkID0gMDtcblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PlxuICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLnRvU3RyaW5nKCkgPT09IGNvb3JkaW5hdGVzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5udW1iZXJPZkhpdHMrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG90c0hpdC5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tzUmVjZWl2ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJoaXRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5zaG90c01pc3NlZC5wdXNoKGNvb3JkaW5hdGVzKTtcblxuICAgICAgICB0aGlzLmF0dGFja3NSZWNlaXZlZCsrO1xuXG4gICAgICAgIHJlc3VsdCA9IFwibWlzc2VkXCI7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0V2ZXJ5dGhpbmdTdW5rKCkge1xuICAgICAgICBsZXQgZXZlcnl0aGluZ1N1bmsgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PT0gMCkgZXZlcnl0aGluZ1N1bmsgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpICE9PSB0cnVlKSBldmVyeXRoaW5nU3VuayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV2ZXJ5dGhpbmdTdW5rO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgaXNFdmVyeXRoaW5nU3VuayxcbiAgICAgICAgc2hvdHNIaXQsXG4gICAgICAgIHNob3RzTWlzc2VkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgYXR0YWNrc1JlY2VpdmVkLFxuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMTA7IG4rKykge1xuICAgICAgICAgICAgYm9hcmQucHVzaChbaSwgbl0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbn1cblxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGlzQ29tcHV0ZXIsIG9wcG9uZW50KSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcIkNhcnJpZXJcIik7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgXCJEZXN0cm95ZXJcIik7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcIlN1Ym1hcmluZVwiKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpO1xuXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2tzID0gW107XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFNob3RIaXQgPVxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWVib2FyZC5zaG90c0hpdFtcbiAgICAgICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnNob3RzSGl0Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAobGFzdFNob3RIaXQpIHtcbiAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTaG90SGl0LnRvU3RyaW5nKCkgPT09IGNvb3JkaW5hdGVzLnRvU3RyaW5nKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmlzU3VuaygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNob3RIaXQgPSBcInN1bmtcIjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRpbmF0ZXM7XG5cbiAgICAgICAgICAgIGlmIChsYXN0U2hvdEhpdCAmJiBsYXN0U2hvdEhpdCAhPT0gXCJzdW5rXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFjb21wdXRlckF0dGFja3MuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFNob3RIaXRbMF0gKyAxLCBsYXN0U2hvdEhpdFsxXV0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gW2xhc3RTaG90SGl0WzBdICsgMSwgbGFzdFNob3RIaXRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA8IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1sxXSA+IDlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIWNvbXB1dGVyQXR0YWNrcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYXN0U2hvdEhpdFswXSAtIDEsIGxhc3RTaG90SGl0WzFdXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gW2xhc3RTaG90SGl0WzBdIC0gMSwgbGFzdFNob3RIaXRbMV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA8IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1sxXSA+IDlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIWNvbXB1dGVyQXR0YWNrcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYXN0U2hvdEhpdFswXSwgbGFzdFNob3RIaXRbMV0gLSAxXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gW2xhc3RTaG90SGl0WzBdLCBsYXN0U2hvdEhpdFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA8IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1sxXSA+IDlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIWNvbXB1dGVyQXR0YWNrcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYXN0U2hvdEhpdFswXSwgbGFzdFNob3RIaXRbMV0gKyAxXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gW2xhc3RTaG90SGl0WzBdLCBsYXN0U2hvdEhpdFsxXSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA8IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1sxXSA+IDlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhdHRhY2tDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29tcHV0ZXJBdHRhY2tzLmluY2x1ZGVzKGF0dGFja0Nvb3JkaW5hdGVzLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gY29tcHV0ZXJBdHRhY2soKTtcblxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2tzLnB1c2goYXR0YWNrQ29vcmRpbmF0ZXMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tDb29yZGluYXRlcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgICAgICBjb21wdXRlckF0dGFjayxcbiAgICAgICAgICAgIGNhcnJpZXIsXG4gICAgICAgICAgICBiYXR0bGVzaGlwLFxuICAgICAgICAgICAgZGVzdHJveWVyLFxuICAgICAgICAgICAgc3VibWFyaW5lLFxuICAgICAgICAgICAgcGF0cm9sQm9hdCxcbiAgICAgICAgICAgIGlzQ29tcHV0ZXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBjYXJyaWVyLFxuICAgICAgICBiYXR0bGVzaGlwLFxuICAgICAgICBkZXN0cm95ZXIsXG4gICAgICAgIHN1Ym1hcmluZSxcbiAgICAgICAgcGF0cm9sQm9hdCxcbiAgICAgICAgaXNDb21wdXRlcixcbiAgICB9O1xufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllciwgZGl2ID0gbWFpbikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDEwOyBuKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgJHtufSwke2l9YCwgXCJzcXVhcmVcIik7XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNDb21wdXRlcilcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgJHtufSwke2l9YCwgXCJjb21wdXRlcnNxdWFyZVwiKTtcblxuICAgICAgICAgICAgY3JlYXRlU3F1YXJlRnVuY3Rpb25hbGl0eShwbGF5ZXIsIHNxdWFyZSwgbiwgaSk7XG5cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNxdWFyZUZ1bmN0aW9uYWxpdHkocGxheWVyLCBzcXVhcmUsIHgsIHkpIHtcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT0gYCR7eH0sJHt5fWApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXIuaXNDb21wdXRlcikgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNvb3JkaW5hdGVzLCBoaXRPck1pc3NlZCkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29vcmRpbmF0ZXMudG9TdHJpbmcoKSlbMF07XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoaGl0T3JNaXNzZWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdW5rU2hpcHMoc2hpcHMsIGdhbWVib2FyZEluZGV4KSB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgKVtnYW1lYm9hcmRJbmRleF07XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzdW5rc2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnYW1lT3ZlclNjcmVlbih3aW5uZXIpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJvdmVyXCIpO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcblxuICAgIGNvbnN0IHdvbk9yTG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd29uT3JMb3N0LmNsYXNzTGlzdC5hZGQoXCJ3b25sb3N0XCIpO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcblxuICAgIGNvbnN0IHRyeUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0cnlBZ2FpbkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIHRyeUFnYWluQnRuLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gICAgdHJ5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHdpbm5lciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICB3b25Pckxvc3QudGV4dENvbnRlbnQgPSBcIllvdSB3b24hXCI7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNvbmdyYXR1bGF0aW9uc1wiO1xuICAgICAgICB0cnlBZ2FpbkJ0bi5jbGFzc0xpc3QuYWRkKFwid29uXCIpO1xuICAgIH0gZWxzZSBpZiAod2lubmVyID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgd29uT3JMb3N0LnRleHRDb250ZW50ID0gXCJZb3UgbG9zdCFcIjtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQmV0dGVyIGx1Y2sgbmV4dCB0aW1lXCI7XG4gICAgICAgIHRyeUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJsb3N0XCIpO1xuICAgIH1cblxuICAgIHNjcmVlbi5hcHBlbmRDaGlsZCh3b25Pckxvc3QpO1xuICAgIHNjcmVlbi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBzY3JlZW4uYXBwZW5kQ2hpbGQodHJ5QWdhaW5CdG4pO1xufVxuXG5sZXQgYXhpcyA9IFwieFwiO1xuXG5sZXQgZ2FtZWJvYXJkSW5kZXggPSA1O1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBTY3JlZW4oc2hpcCwgcGxheWVyKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKSlcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZGFya2VuZWRiZ1wiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcmVlbi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50c1wiKTtcbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHNjcmVlbik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudHRleHRcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXAubmFtZX1gO1xuICAgIHNjcmVlbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBjaGFuZ2VBeGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjaGFuZ2VBeGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJheGlzYnRuXCIpO1xuICAgIGlmIChheGlzID09PSBcInhcIikgY2hhbmdlQXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IGBDaGFuZ2UgdG8gdmVydGljYWxgO1xuICAgIGlmIChheGlzID09PSBcInlcIikgY2hhbmdlQXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IGBDaGFuZ2UgdG8gaG9yaXpvbnRhbGA7XG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKGNoYW5nZUF4aXNCdXR0b24pO1xuXG4gICAgY2hhbmdlQXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGF4aXMgPSBcInlcIjtcbiAgICAgICAgICAgIGNoYW5nZUF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBgQ2hhbmdlIHRvIGhvcml6b250YWxgO1xuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHBsYWNlU2hpcFNjcmVlbihzaGlwLCBwbGF5ZXIpO1xuICAgICAgICAgICAgdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllciwgZ2FtZWJvYXJkSW5kZXggKyAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgY2hhbmdlQXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IGBDaGFuZ2UgdG8gdmVydGljYWxgO1xuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHBsYWNlU2hpcFNjcmVlbihzaGlwLCBwbGF5ZXIpO1xuICAgICAgICAgICAgdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllciwgZ2FtZWJvYXJkSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVuZGVyR2FtZWJvYXJkKFwiXCIsIHNjcmVlbik7XG5cbiAgICBjb25zdCBzcXVhcmVzID0gc2NyZWVuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFNjcmVlbihzaGlwLCBwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyLCBnYW1lYm9hcmRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNxdWFyZXNbaW5kZXggKyBzaGlwLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lLmNoYXJBdCgyKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIHNoaXAubGVuZ3RoIC0gMV0uY2xhc3NOYW1lLmNoYXJBdCgyKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FuUGxhY2VBU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjM2U5MmNjXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NMaXN0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYW5QbGFjZUFTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNiNGQyZTdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZXNbaW5kZXggKyBpXS5jbGFzc0xpc3RbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYW5QbGFjZUFTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3NxdWFyZS5jbGFzc0xpc3RbMF0uY2hhckF0KDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3NxdWFyZS5jbGFzc0xpc3RbMF0uY2hhckF0KDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZEluZGV4ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyLCBnYW1lYm9hcmRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZEluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lLmNoYXJBdCgyKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NOYW1lLmNoYXJBdCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGldLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lLmNoYXJBdCgyKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NOYW1lLmNoYXJBdCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGldLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNiNGQyZTdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgc3F1YXJlc1tpbmRleCArIGldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGldLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2IoNzAsIDcwLCA3MClcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgc3F1YXJlc1tpbmRleCArIGldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGldLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjYjRkMmU3XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChzcXVhcmVzW2luZGV4ICsgMTAgKiAoc2hpcC5sZW5ndGggLSAxKV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUuY2hhckF0KDApID09PVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgMTAgKiAoc2hpcC5sZW5ndGggLSAxKV0uY2xhc3NOYW1lLmNoYXJBdCgwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FuUGxhY2VBU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpICogMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMzZTkyY2NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZXNbaW5kZXggKyBpICogMTBdLmNsYXNzTGlzdFsyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIGkgKiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYW5QbGFjZUFTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICsgaSAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYW5QbGFjZUFTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3NxdWFyZS5jbGFzc0xpc3RbMF0uY2hhckF0KDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3NxdWFyZS5jbGFzc0xpc3RbMF0uY2hhckF0KDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZEluZGV4ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyLCBnYW1lYm9hcmRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZEluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lLmNoYXJBdCgwKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5jbGFzc05hbWUuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2IoNzAsIDcwLCA3MClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTmFtZS5jaGFyQXQoMCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uY2xhc3NOYW1lLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpICogMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZXNbaW5kZXggKyBpICogMTBdLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZXNbaW5kZXggKyBpICogMTBdLmNsYXNzTGlzdFsyXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNiNGQyZTdcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhblBsYWNlQVNoaXAocGxheWVyLCBzaGlwLCBzcXVhcmVzLCBpbmRleCwgYXhpcyA9IFwieFwiKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgbGV0IG11bHRpcGxpZXI7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSBtdWx0aXBsaWVyID0gMTtcbiAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikgbXVsdGlwbGllciA9IDEwO1xuICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZS50b1N0cmluZygpID09PVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIG11bHRpcGxpZXJdLmNsYXNzTGlzdFswXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllciwgZ2FtZWJvYXJkSW5kZXggPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMTA7IG4rKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtufSwke2l9YClbXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkSW5kZXhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGNyZWF0ZVNxdWFyZUZ1bmN0aW9uYWxpdHkocGxheWVyLCBzcXVhcmUsIG4sIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICBhZGRDbGFzcyxcbiAgICBnYW1lT3ZlclNjcmVlbixcbiAgICBwbGFjZVNoaXBTY3JlZW4sXG4gICAgcmVuZGVyU3Vua1NoaXBzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBmYWN0b3JpZXMgZnJvbSBcIi4vZmFjdG9yeS1mdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHVzZXJJbnRlcmZhY2UgZnJvbSBcIi4vdXNlci1pbnRlcmZhY2VcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBmYWN0b3JpZXMuUGxheWVyKFwiUGxheWVyXCIsIGZhbHNlKTtcblxuY29uc3QgcGxheWVyMiA9IGZhY3Rvcmllcy5QbGF5ZXIoXCJQQ1wiLCB0cnVlLCBwbGF5ZXIxKTtcblxudXNlckludGVyZmFjZS5wbGFjZVNoaXBTY3JlZW4ocGxheWVyMS5wYXRyb2xCb2F0LCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuc3VibWFyaW5lLCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuZGVzdHJveWVyLCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuYmF0dGxlc2hpcCwgcGxheWVyMSk7XG51c2VySW50ZXJmYWNlLnBsYWNlU2hpcFNjcmVlbihwbGF5ZXIxLmNhcnJpZXIsIHBsYXllcjEpO1xuXG5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZUNvbXB1dGVyU2hpcChwbGF5ZXIyLmNhcnJpZXIpO1xucGxheWVyMi5nYW1lYm9hcmQucGxhY2VDb21wdXRlclNoaXAocGxheWVyMi5iYXR0bGVzaGlwKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIuZGVzdHJveWVyKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIuc3VibWFyaW5lKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIucGF0cm9sQm9hdCk7XG5cbnVzZXJJbnRlcmZhY2UucmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuXG51c2VySW50ZXJmYWNlLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyKTtcblxuY29uc3QgY29tcHV0ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlcnNxdWFyZVwiKTtcbmNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKTtcblxuY29tcHV0ZXJTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbXG4gICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMCksXG4gICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMiksXG4gICAgICAgIF0pO1xuICAgIH0pXG4pO1xuXG5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1c2VySW50ZXJmYWNlLnJlbmRlclN1bmtTaGlwcyhwbGF5ZXIyLmdhbWVib2FyZC5zaGlwcywgMSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuaXNFdmVyeXRoaW5nU3VuaygpIHx8XG4gICAgICAgICAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQuaXNFdmVyeXRoaW5nU3VuaygpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5nYW1lT3ZlclNjcmVlbihcImNvbXB1dGVyXCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllcjIuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5nYW1lT3ZlclNjcmVlbihcInBsYXllclwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQuYXR0YWNrc1JlY2VpdmVkID5cbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5hdHRhY2tzUmVjZWl2ZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIyLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrUmVjZWl2ZWQgPSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZWNlaXZlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5yZW5kZXJTdW5rU2hpcHMocGxheWVyMS5nYW1lYm9hcmQuc2hpcHMsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSB8fFxuICAgICAgICAgICAgICAgIHBsYXllcjIuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIikpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5pc0V2ZXJ5dGhpbmdTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2UuZ2FtZU92ZXJTY3JlZW4oXCJjb21wdXRlclwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXIyLmdhbWVib2FyZC5pc0V2ZXJ5dGhpbmdTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2UuZ2FtZU92ZXJTY3JlZW4oXCJwbGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgIClcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=