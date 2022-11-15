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

            if (player) {
                player.gameboard.ships.forEach((ship) => {
                    ship.coordinates.forEach((coordinate) => {
                        if (coordinate.toString() === `${n},${i}`) {
                            if (!player.isComputer)
                                square.classList.add("ship");
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

            if (player.isComputer) {
                square.addEventListener("click", function () {
                    player.gameboard.receiveAttack([n, i]);
                });
            }

            board.appendChild(square);
        }
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
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

function updateGameboardRender(player, gameboardIndex = 0) {
    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.getElementsByClassName(`${n},${i}`)[
                gameboardIndex
            ];

            if (player) {
                player.gameboard.ships.forEach((ship) => {
                    ship.coordinates.forEach((coordinate) => {
                        if (coordinate.toString() === `${n},${i}`) {
                            if (!player.isComputer)
                                square.classList.add("ship");
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

            if (player.isComputer) {
                square.addEventListener("click", function () {
                    player.gameboard.receiveAttack([n, i]);
                });
            }
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

const squares = document.querySelectorAll(".square");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZHQUFtQztBQUMvRSw0Q0FBNEMseUdBQWlDO0FBQzdFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNEhBQTRIO0FBQzVILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QiwrQ0FBK0MsR0FBRyxVQUFVLGdDQUFnQyxvQkFBb0IsbUJBQW1CLEdBQUcsYUFBYSxxQkFBcUIsK0NBQStDLHNCQUFzQix5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQixtQ0FBbUMsOEJBQThCLDBCQUEwQixrQkFBa0IsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsd0NBQXdDLG9CQUFvQiwwQ0FBMEMsNkNBQTZDLEdBQUcsYUFBYSxnQ0FBZ0Msd0NBQXdDLEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxhQUFhLHdFQUF3RSxtQ0FBbUMsa0NBQWtDLDRCQUE0QixHQUFHLFVBQVUsd0VBQXdFLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLGdDQUFnQyxHQUFHLGVBQWUsMkJBQTJCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLGtCQUFrQixhQUFhLGdCQUFnQixlQUFlLGNBQWMsdUJBQXVCLDBCQUEwQix3QkFBd0IseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsaUJBQWlCLDBDQUEwQyxHQUFHLFdBQVcsZ0NBQWdDLG1CQUFtQixrQkFBa0IsMEJBQTBCLHdDQUF3QyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxjQUFjLHNCQUFzQixHQUFHLGFBQWEsbUJBQW1CLG1CQUFtQixzQkFBc0IsMEJBQTBCLEdBQUcsVUFBVSxnQ0FBZ0MsR0FBRyxXQUFXLGdDQUFnQyxHQUFHLGlCQUFpQixnQ0FBZ0MsbUJBQW1CLGtCQUFrQiwwQkFBMEIsd0NBQXdDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixtQkFBbUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsY0FBYyx3QkFBd0IsZ0NBQWdDLHlCQUF5QixzQkFBc0IsR0FBRyxlQUFlLHdFQUF3RSxtQ0FBbUMsa0NBQWtDLDRCQUE0QixnQ0FBZ0MsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGdIQUFnSCxPQUFPLGdCQUFnQixpQkFBaUIsNkJBQTZCLCtDQUErQyxHQUFHLFVBQVUsZ0NBQWdDLG9CQUFvQixtQkFBbUIsR0FBRyxhQUFhLHFCQUFxQiwrQ0FBK0Msc0JBQXNCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLG1DQUFtQyw4QkFBOEIsMEJBQTBCLGtCQUFrQixHQUFHLFlBQVksb0JBQW9CLG1CQUFtQix3Q0FBd0Msb0JBQW9CLDBDQUEwQyw2Q0FBNkMsR0FBRyxhQUFhLGdDQUFnQyx3Q0FBd0MsR0FBRyxXQUFXLGdDQUFnQyxHQUFHLGFBQWEsa0RBQWtELG1DQUFtQyxrQ0FBa0MsNEJBQTRCLEdBQUcsVUFBVSxnREFBZ0QsbUNBQW1DLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLEdBQUcsZUFBZSwyQkFBMkIsR0FBRyxjQUFjLHlCQUF5QixtQkFBbUIsa0JBQWtCLGFBQWEsZ0JBQWdCLGVBQWUsY0FBYyx1QkFBdUIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxpQkFBaUIsMENBQTBDLEdBQUcsV0FBVyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQiwwQkFBMEIsd0NBQXdDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsYUFBYSxtQkFBbUIsbUJBQW1CLHNCQUFzQiwwQkFBMEIsR0FBRyxVQUFVLGdDQUFnQyxHQUFHLFdBQVcsZ0NBQWdDLEdBQUcsaUJBQWlCLGdDQUFnQyxtQkFBbUIsa0JBQWtCLDBCQUEwQix3Q0FBd0Msb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxjQUFjLHdCQUF3QixnQ0FBZ0MseUJBQXlCLHNCQUFzQixHQUFHLGVBQWUsZ0RBQWdELG1DQUFtQyxrQ0FBa0MsNEJBQTRCLGdDQUFnQyxHQUFHLHFCQUFxQjtBQUNucU87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0M7QUFDN0I7O0FBRXJCLGdCQUFnQixzREFBZ0I7O0FBRWhDLGdCQUFnQixzREFBZ0I7O0FBRWhDLDREQUE2QjtBQUM3Qiw0REFBNkI7QUFDN0IsNERBQTZCO0FBQzdCLDREQUE2QjtBQUM3Qiw0REFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTZCOztBQUU3Qiw0REFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBNkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUE0QjtBQUNoRDtBQUNBLG9CQUFvQiwyREFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQTRCO0FBQ2hEO0FBQ0Esb0JBQW9CLDJEQUE0QjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNULFVBQVU7QUFDVjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMveC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoZWxzZWErTWFya2V0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDaGVsc2VhIE1hcmtldFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMmU3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE3LjV2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDaGVsc2VhIE1hcmtldFxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNy41dmgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3LjVyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGhlaWdodDogNDByZW07XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI3LCAyNywgMjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMmU3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTJjYztcXG59XFxuXFxuLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDM1MzU7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhcmtlbmVkYmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLm92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMmU3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi53b25sb3N0IHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi53b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5MmNjO1xcbn1cXG5cXG4ubG9zdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDM1MzU7XFxufVxcblxcbi5wbGFjZW1lbnRzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDJlNztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDI3LCAyNywgMjcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyLjE1cmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50dGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uYXhpc2J0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5MmNjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnN1bmtzaGlwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTBmMGY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseURBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseURBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DaGVsc2VhK01hcmtldCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIkNoZWxzZWEgTWFya2V0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTcuNXZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNoZWxzZWEgTWFya2V0XFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3LjV2aCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDcuNXJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5MmNjO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9kb3Quc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy94LnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMzUzNTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFya2VuZWRiZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ub3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQyZTc7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLndvbmxvc3Qge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTkyY2M7XFxufVxcblxcbi5sb3N0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMzUzNTtcXG59XFxuXFxuLnBsYWNlbWVudHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMmU3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIuMTVyZW07XFxufVxcblxcbi5wbGFjZW1lbnR0ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5heGlzYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTkyY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uc3Vua3NoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3guc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjEwZjBmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgICBjb25zdCBudW1iZXJPZkhpdHMgPSAwO1xuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyArPSAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZIaXRzIDwgdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBudW1iZXJPZkhpdHMsIGhpdCwgaXNTdW5rLCBuYW1lIH07XG59XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3Qgc2hvdHNIaXQgPSBbXTtcblxuICAgIGNvbnN0IHNob3RzTWlzc2VkID0gW107XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBheGlzKSB7XG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbc3RhcnRDb29yZGluYXRlXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIilcbiAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2kgLSAxXVswXSArIDEsXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaSAtIDFdWzFdLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIilcbiAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2kgLSAxXVswXSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpIC0gMV1bMV0gLSAxLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGJvYXJkLmZpbmRJbmRleCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnRvU3RyaW5nKCkgPT09IGNvb3JkaW5hdGVzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiAoc2hpcC5jb29yZGluYXRlcyA9IG51bGwpO1xuICAgICAgICAgICAgZWxzZSBib2FyZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlcyA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwKHNoaXApIHtcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcblxuICAgICAgICBsZXQgYXhpcztcbiAgICAgICAgaWYgKHJhbmRvbU51bWJlciA8PSA1KSBheGlzID0gXCJ4XCI7XG4gICAgICAgIGlmIChyYW5kb21OdW1iZXIgPj0gNikgYXhpcyA9IFwieVwiO1xuXG4gICAgICAgIGxldCBzdGFydENvb3JkaW5hdGU7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGUgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlID0gW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDEsXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLnBsYWNlU2hpcChzaGlwLCBzdGFydENvb3JkaW5hdGUsIGF4aXMpO1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPT09IG51bGwpIHRoaXMucGxhY2VDb21wdXRlclNoaXAoc2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IGF0dGFja3NSZWNlaXZlZCA9IDA7XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy50b1N0cmluZygpID09PSBjb29yZGluYXRlcy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAubnVtYmVyT2ZIaXRzKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdHNIaXQucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc1JlY2VpdmVkKys7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIHRoaXMuc2hvdHNNaXNzZWQucHVzaChjb29yZGluYXRlcyk7XG5cbiAgICAgICAgdGhpcy5hdHRhY2tzUmVjZWl2ZWQrKztcblxuICAgICAgICByZXN1bHQgPSBcIm1pc3NlZFwiO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFdmVyeXRoaW5nU3VuaygpIHtcbiAgICAgICAgbGV0IGV2ZXJ5dGhpbmdTdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSAhPT0gdHJ1ZSkgZXZlcnl0aGluZ1N1bmsgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBldmVyeXRoaW5nU3VuaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzRXZlcnl0aGluZ1N1bmssXG4gICAgICAgIHNob3RzSGl0LFxuICAgICAgICBzaG90c01pc3NlZCxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIGF0dGFja3NSZWNlaXZlZCxcbiAgICAgICAgcGxhY2VDb21wdXRlclNoaXAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDEwOyBuKyspIHtcbiAgICAgICAgICAgIGJvYXJkLnB1c2goW2ksIG5dKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCBpc0NvbXB1dGVyLCBvcHBvbmVudCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgXCJDYXJyaWVyXCIpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsIFwiRGVzdHJveWVyXCIpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgXCJTdWJtYXJpbmVcIik7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMiwgXCJQYXRyb2wgQm9hdFwiKTtcblxuICAgIGlmIChpc0NvbXB1dGVyKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxhc3RTaG90SGl0ID1cbiAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lYm9hcmQuc2hvdHNIaXRbXG4gICAgICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWVib2FyZC5zaG90c0hpdC5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgaWYgKGxhc3RTaG90SGl0KSB7XG4gICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U2hvdEhpdC50b1N0cmluZygpID09PSBjb29yZGluYXRlcy50b1N0cmluZygpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTaG90SGl0ID0gXCJzdW5rXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGVzO1xuXG4gICAgICAgICAgICBpZiAobGFzdFNob3RIaXQgJiYgbGFzdFNob3RIaXQgIT09IFwic3Vua1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhY29tcHV0ZXJBdHRhY2tzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RTaG90SGl0WzBdICsgMSwgbGFzdFNob3RIaXRbMV1dLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IFtsYXN0U2hvdEhpdFswXSArIDEsIGxhc3RTaG90SGl0WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMF0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzFdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPiA5XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFjb21wdXRlckF0dGFja3MuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFNob3RIaXRbMF0gLSAxLCBsYXN0U2hvdEhpdFsxXV0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICFhdHRhY2tDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IFtsYXN0U2hvdEhpdFswXSAtIDEsIGxhc3RTaG90SGl0WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMF0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzFdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPiA5XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFjb21wdXRlckF0dGFja3MuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFNob3RIaXRbMF0sIGxhc3RTaG90SGl0WzFdIC0gMV0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICFhdHRhY2tDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IFtsYXN0U2hvdEhpdFswXSwgbGFzdFNob3RIaXRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMF0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzFdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPiA5XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFjb21wdXRlckF0dGFja3MuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFNob3RIaXRbMF0sIGxhc3RTaG90SGl0WzFdICsgMV0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICFhdHRhY2tDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IFtsYXN0U2hvdEhpdFswXSwgbGFzdFNob3RIaXRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMF0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlc1swXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzWzFdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29vcmRpbmF0ZXNbMV0gPiA5XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYXR0YWNrQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbXB1dGVyQXR0YWNrcy5pbmNsdWRlcyhhdHRhY2tDb29yZGluYXRlcy50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBhdHRhY2tDb29yZGluYXRlcyA9IGNvbXB1dGVyQXR0YWNrKCk7XG5cbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcy5wdXNoKGF0dGFja0Nvb3JkaW5hdGVzLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZXM7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2ssXG4gICAgICAgICAgICBjYXJyaWVyLFxuICAgICAgICAgICAgYmF0dGxlc2hpcCxcbiAgICAgICAgICAgIGRlc3Ryb3llcixcbiAgICAgICAgICAgIHN1Ym1hcmluZSxcbiAgICAgICAgICAgIHBhdHJvbEJvYXQsXG4gICAgICAgICAgICBpc0NvbXB1dGVyLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgY2FycmllcixcbiAgICAgICAgYmF0dGxlc2hpcCxcbiAgICAgICAgZGVzdHJveWVyLFxuICAgICAgICBzdWJtYXJpbmUsXG4gICAgICAgIHBhdHJvbEJvYXQsXG4gICAgICAgIGlzQ29tcHV0ZXIsXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXIsIGRpdiA9IG1haW4pIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChib2FyZCk7XG5cbiAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCAxMDsgbisrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7bn0sJHtpfWAsIFwic3F1YXJlXCIpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT0gYCR7bn0sJHtpfWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYXllci5pc0NvbXB1dGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW24sIGldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY29vcmRpbmF0ZXMsIGhpdE9yTWlzc2VkKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb29yZGluYXRlcy50b1N0cmluZygpKVswXTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChoaXRPck1pc3NlZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN1bmtTaGlwcyhzaGlwcywgZ2FtZWJvYXJkSW5kZXgpIHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PlxuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICApW2dhbWVib2FyZEluZGV4XTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1bmtzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuKHdpbm5lcikge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW4uY2xhc3NMaXN0LmFkZChcIm92ZXJcIik7XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChzY3JlZW4pO1xuXG4gICAgY29uc3Qgd29uT3JMb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3b25Pckxvc3QuY2xhc3NMaXN0LmFkZChcIndvbmxvc3RcIik7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpO1xuXG4gICAgY29uc3QgdHJ5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRyeUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgdHJ5QWdhaW5CdG4udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgICB0cnlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBpZiAod2lubmVyID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIHdvbk9yTG9zdC50ZXh0Q29udGVudCA9IFwiWW91IHdvbiFcIjtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQ29uZ3JhdHVsYXRpb25zXCI7XG4gICAgICAgIHRyeUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJ3b25cIik7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICB3b25Pckxvc3QudGV4dENvbnRlbnQgPSBcIllvdSBsb3N0IVwiO1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJCZXR0ZXIgbHVjayBuZXh0IHRpbWVcIjtcbiAgICAgICAgdHJ5QWdhaW5CdG4uY2xhc3NMaXN0LmFkZChcImxvc3RcIik7XG4gICAgfVxuXG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHdvbk9yTG9zdCk7XG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIHNjcmVlbi5hcHBlbmRDaGlsZCh0cnlBZ2FpbkJ0bik7XG59XG5cbmxldCBheGlzID0gXCJ4XCI7XG5cbmxldCBnYW1lYm9hcmRJbmRleCA9IDU7XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcFNjcmVlbihzaGlwLCBwbGF5ZXIpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrZW5lZGJnXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRzXCIpO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50dGV4dFwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7c2hpcC5uYW1lfWA7XG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGNoYW5nZUF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNoYW5nZUF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZChcImF4aXNidG5cIik7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSBjaGFuZ2VBeGlzQnV0dG9uLnRleHRDb250ZW50ID0gYENoYW5nZSB0byB2ZXJ0aWNhbGA7XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSBjaGFuZ2VBeGlzQnV0dG9uLnRleHRDb250ZW50ID0gYENoYW5nZSB0byBob3Jpem9udGFsYDtcbiAgICBzY3JlZW4uYXBwZW5kQ2hpbGQoY2hhbmdlQXhpc0J1dHRvbik7XG5cbiAgICBjaGFuZ2VBeGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgYXhpcyA9IFwieVwiO1xuICAgICAgICAgICAgY2hhbmdlQXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IGBDaGFuZ2UgdG8gaG9yaXpvbnRhbGA7XG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgcGxhY2VTaGlwU2NyZWVuKHNoaXAsIHBsYXllcik7XG4gICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyLCBnYW1lYm9hcmRJbmRleCArIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBheGlzID0gXCJ4XCI7XG4gICAgICAgICAgICBjaGFuZ2VBeGlzQnV0dG9uLnRleHRDb250ZW50ID0gYENoYW5nZSB0byB2ZXJ0aWNhbGA7XG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgcGxhY2VTaGlwU2NyZWVuKHNoaXAsIHBsYXllcik7XG4gICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyLCBnYW1lYm9hcmRJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZW5kZXJHYW1lYm9hcmQoXCJcIiwgc2NyZWVuKTtcblxuICAgIGNvbnN0IHNxdWFyZXMgPSBzY3JlZW4ucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwU2NyZWVuKHNoaXAsIHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVib2FyZFJlbmRlcihwbGF5ZXIsIGdhbWVib2FyZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlc1tpbmRleCArIHNoaXAubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUuY2hhckF0KDIpID09PVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgc2hpcC5sZW5ndGggLSAxXS5jbGFzc05hbWUuY2hhckF0KDIpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlLnRvU3RyaW5nKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5jbGFzc0xpc3RbMF0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMzZTkyY2NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNxdWFyZXNbaW5kZXggKyBpXS5jbGFzc0xpc3RbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiKDcwLCA3MCwgNzApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdFswXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGldLmNsYXNzTGlzdFsyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjYjRkMmU3XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdFswXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkSW5kZXggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVib2FyZFJlbmRlcihwbGF5ZXIsIGdhbWVib2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUuY2hhckF0KDIpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5jbGFzc05hbWUuY2hhckF0KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiKDcwLCA3MCwgNzApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUuY2hhckF0KDIpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5jbGFzc05hbWUuY2hhckF0KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBzcXVhcmVzW2luZGV4ICsgaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBzcXVhcmVzW2luZGV4ICsgaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaV0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNiNGQyZTdcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgaWYgKHNxdWFyZXNbaW5kZXggKyAxMCAqIChzaGlwLmxlbmd0aCAtIDEpXSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTmFtZS5jaGFyQXQoMCkgPT09XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyAxMCAqIChzaGlwLmxlbmd0aCAtIDEpXS5jbGFzc05hbWUuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlLnRvU3RyaW5nKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyBpICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdFswXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjM2U5MmNjXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5jbGFzc0xpc3RbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyBpICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNzAsIDcwLCA3MClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZS50b1N0cmluZygpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICsgaSAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5jbGFzc0xpc3RbMF0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICsgaSAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlLnRvU3RyaW5nKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyBpICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdFswXS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArc3F1YXJlLmNsYXNzTGlzdFswXS5jaGFyQXQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmRSZW5kZXIocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkSW5kZXggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVib2FyZFJlbmRlcihwbGF5ZXIsIGdhbWVib2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUuY2hhckF0KDApID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpICogMTBdLmNsYXNzTmFtZS5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYig3MCwgNzAsIDcwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lLmNoYXJBdCgwKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2luZGV4ICsgaSAqIDEwXS5jbGFzc05hbWUuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjYjRkMmU3XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHNxdWFyZXNbaW5kZXggKyBpICogMTBdOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpICogMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiKDcwLCA3MCwgNzApXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHNxdWFyZXNbaW5kZXggKyBpICogMTBdOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0WzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXNbaW5kZXggKyBpICogMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2I0ZDJlN1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FtZWJvYXJkUmVuZGVyKHBsYXllciwgZ2FtZWJvYXJkSW5kZXggPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMTA7IG4rKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtufSwke2l9YClbXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkSW5kZXhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZS50b1N0cmluZygpID09PSBgJHtufSwke2l9YCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGxheWVyLmlzQ29tcHV0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbbiwgaV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICBhZGRDbGFzcyxcbiAgICBnYW1lT3ZlclNjcmVlbixcbiAgICBwbGFjZVNoaXBTY3JlZW4sXG4gICAgcmVuZGVyU3Vua1NoaXBzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBmYWN0b3JpZXMgZnJvbSBcIi4vZmFjdG9yeS1mdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHVzZXJJbnRlcmZhY2UgZnJvbSBcIi4vdXNlci1pbnRlcmZhY2VcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBmYWN0b3JpZXMuUGxheWVyKFwiUGxheWVyXCIsIGZhbHNlKTtcblxuY29uc3QgcGxheWVyMiA9IGZhY3Rvcmllcy5QbGF5ZXIoXCJQQ1wiLCB0cnVlLCBwbGF5ZXIxKTtcblxudXNlckludGVyZmFjZS5wbGFjZVNoaXBTY3JlZW4ocGxheWVyMS5wYXRyb2xCb2F0LCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuc3VibWFyaW5lLCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuZGVzdHJveWVyLCBwbGF5ZXIxKTtcbnVzZXJJbnRlcmZhY2UucGxhY2VTaGlwU2NyZWVuKHBsYXllcjEuYmF0dGxlc2hpcCwgcGxheWVyMSk7XG51c2VySW50ZXJmYWNlLnBsYWNlU2hpcFNjcmVlbihwbGF5ZXIxLmNhcnJpZXIsIHBsYXllcjEpO1xuXG5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZUNvbXB1dGVyU2hpcChwbGF5ZXIyLmNhcnJpZXIpO1xucGxheWVyMi5nYW1lYm9hcmQucGxhY2VDb21wdXRlclNoaXAocGxheWVyMi5iYXR0bGVzaGlwKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIuZGVzdHJveWVyKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIuc3VibWFyaW5lKTtcbnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwKHBsYXllcjIucGF0cm9sQm9hdCk7XG5cbnVzZXJJbnRlcmZhY2UucmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuXG51c2VySW50ZXJmYWNlLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyKTtcblxuY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuXG5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1c2VySW50ZXJmYWNlLnJlbmRlclN1bmtTaGlwcyhwbGF5ZXIyLmdhbWVib2FyZC5zaGlwcywgMSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuaXNFdmVyeXRoaW5nU3VuaygpIHx8XG4gICAgICAgICAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQuaXNFdmVyeXRoaW5nU3VuaygpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5nYW1lT3ZlclNjcmVlbihcImNvbXB1dGVyXCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllcjIuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5nYW1lT3ZlclNjcmVlbihcInBsYXllclwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQuYXR0YWNrc1JlY2VpdmVkID5cbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5hdHRhY2tzUmVjZWl2ZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIyLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrUmVjZWl2ZWQgPSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZWNlaXZlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdXNlckludGVyZmFjZS5yZW5kZXJTdW5rU2hpcHMocGxheWVyMS5nYW1lYm9hcmQuc2hpcHMsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSB8fFxuICAgICAgICAgICAgICAgIHBsYXllcjIuZ2FtZWJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIikpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5pc0V2ZXJ5dGhpbmdTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2UuZ2FtZU92ZXJTY3JlZW4oXCJjb21wdXRlclwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXIyLmdhbWVib2FyZC5pc0V2ZXJ5dGhpbmdTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2UuZ2FtZU92ZXJTY3JlZW4oXCJwbGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgIClcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=