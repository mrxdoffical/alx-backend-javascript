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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: cpp, java, react, cTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cpp\", function() { return cpp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"java\", function() { return java; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"react\", function() { return react; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cTeacher\", function() { return cTeacher; });\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ \"./js/subjects/Cpp.ts\");\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ \"./js/subjects/Java.ts\");\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ \"./js/subjects/React.ts\");\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_2__);\n// task_4/js/main.ts\n// Importing necessary classes and interfaces\n\n\n\n// Creating constants for each subject\nvar cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__[\"Cpp\"]();\nvar java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__[\"Java\"]();\nvar react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__[\"React\"]();\n// Creating a Teacher object with experienceTeachingC\nvar cTeacher = {\n    firstName: 'John',\n    lastName: 'Doe',\n    experienceTeachingC: 10,\n};\n// For Cpp subject\nconsole.log('C++');\ncpp.setTeacher(cTeacher);\nconsole.log(cpp.getRequirements());\nconsole.log(cpp.getAvailableTeacher());\n// For Java subject\nconsole.log('Java');\njava.setTeacher(cTeacher);\nconsole.log(java.getRequirements());\nconsole.log(java.getAvailableTeacher());\n// For React subject\nconsole.log('React');\nreact.setTeacher(cTeacher);\nconsole.log(react.getRequirements());\nconsole.log(react.getAvailableTeacher());\n\n\n//# sourceURL=webpack:///./js/main.ts?");

/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// task_4/js/subjects/Cpp.ts\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var Cpp = /** @class */ (function (_super) {\n        __extends(Cpp, _super);\n        function Cpp() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        Cpp.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for Cpp';\n        };\n        Cpp.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingC > 0) {\n                return \"Available Teacher: \" + this.teacher.firstName;\n            }\n            return 'No available teacher';\n        };\n        return Cpp;\n    }(Subjects.Subject));\n    Subjects.Cpp = Cpp;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack:///./js/subjects/Cpp.ts?");

/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// task_4/js/subjects/Java.ts\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var Java = /** @class */ (function (_super) {\n        __extends(Java, _super);\n        function Java() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        Java.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for Java';\n        };\n        Java.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingJava > 0) {\n                return \"Available Teacher: \" + this.teacher.firstName;\n            }\n            return 'No available teacher';\n        };\n        return Java;\n    }(Subjects.Subject));\n    Subjects.Java = Java;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack:///./js/subjects/Java.ts?");

/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// task_4/js/subjects/React.ts\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var React = /** @class */ (function (_super) {\n        __extends(React, _super);\n        function React() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        React.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for React';\n        };\n        React.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingReact > 0) {\n                return \"Available Teacher: \" + this.teacher.firstName;\n            }\n            return 'No available teacher';\n        };\n        return React;\n    }(Subjects.Subject));\n    Subjects.React = React;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack:///./js/subjects/React.ts?");

/***/ })

/******/ });