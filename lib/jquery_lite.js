/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function DOMNodeCollection (arr) {\n//   this.array = arr;\n// \n// }\n\nclass DOMNodeCollection{\n  constructor(arr){\n    this.array = arr;\n  }\n  \n  html(arg){\n    if (arg) {\n      this.array.forEach(el => {\n        el.innerHTML = arg;\n      });\n    } else {\n      return this.array[0].innerHTML;\n    }\n  }\n  \n  \n  empty(arg){\n    this.html(\"\");\n    \n  }\n  \n  append(arg){\n    if(arg.constructor.name === \"String\"){\n      this.array.forEach(el =>{\n        el.insertAdjacentHTML('afterend', arg);\n      });\n    } \n    else if (Object.getPrototypeOf(arg.constructor).name == \"HTMLElement\"){\n      this.array.forEach(el =>{\n        el.insertAdjacentHTML('afterend', arg.outerHTML);\n      });\n      // arg.constructor.name === `DOMNodeCollection` \n    } else if(arg instanceof DOMNodeCollection){\n      let data = \"\";\n      \n      for (var i = 0; i < arg.array.length; i++) {\n        data = data.concat(arg.array[i].outerHTML);\n      }\n      console.log(data);\n      this.append(\"data\");\n    }\n  }\n  \n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = function(arg){\n  let array = [];\n  if(arg.constructor.name === \"String\"){\n    array = Array.from(document.querySelectorAll(arg));\n    return new DOMNodeCollection(array);\n  } else if(Object.getPrototypeOf(arg.constructor).name == \"HTMLElement\"){\n    array.push(arg);\n    return new DOMNodeCollection(array);\n  }\n};  \n\n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });