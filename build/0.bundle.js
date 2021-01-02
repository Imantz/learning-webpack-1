webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageViewer = undefined;

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageViewer = exports.imageViewer = function imageViewer() {
  var image = document.createElement('img');
  image.src = _small2.default;

  document.body.appendChild(image);
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "img {\n  border: 10px solid black;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMyWlpacnJzFxcW3t7ejo6OxsbGqqqq+vr4XMAYiAAACk0lEQVR42u3Zz0/iQBQH8O+UtnBsQXSPbd1dOQ4Yw7Ulkr1i4OCxkHivbuLuEb3sv73zpqBUkRhK3Gz8fhLfWB72zc96KEBERERERERERERERERERERERPR5NO6+aWDUTlfhyTCZYmtiD0477sAP46MyPIuTUG9N7GFe+Cfon7baZXhiPp0X2xL7uNJoI0txu7QByApkOeB1oKJKoobETIxUeshtMPP3RT6DE8EJKokaLmFGEgP9wgag1fVlBdxURrKZqMU9ka73JzbIBGZRmTATV0nUWvqOGYvptg3m+iEsN6wf6mqihmZ7We1ws1smbns41Ega8RTVqXfK/TroahxqTbyTch9nuQ2yFLHdSlfFy8T+MrlX5Tgkg065HV4mah1GVA62f+zL/T2pdKgTHydJUnlEDczp0LIySRId6tkVGpWH7Ty3U6jM58GhnsJERERERERERERERERE9I+o1c//UiRs/3xfkcBcyWtNeTHvBHJpDOMZcBFO7Vv6+M0iQePX+4vY2F1ivCrS+K7/mHC+0Ooa7tXbRTDA3Rkc7Zpf/KSAWgTSNJO5FFmcwUtNZqPI0QSzVZFmXga/UGN42a4i/vQib6Z9/MDN+T3U1DY359IxZVKtCPebRYJeK1oVcXQZGpFylo9q13Q5uhG1ikX6G6emz0rb5hR9KWJSmJmf9etnKTL20lURtQ6BcicztWvhbQej3iSSG8nfSBOs1yTAYzOtjMQZ4fVI8DXaMRL5lnR3cj0x3bd3kmZjJM6isvCBf4zXa4J5vrOIrAkW6SjHWA/lTtI8rwnco2oRe2Hjxu7aeajky2Z34UH3Ndy4J1+V5nl3wY22FCmndBiuz0ndk+ulH/AQG33Eg7LHfxb0qfwFJo505oyJXisAAAAASUVORK5CYII="

/***/ })
]);