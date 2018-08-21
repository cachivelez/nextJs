module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(6)();

routes.add('index', '/', 'index');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzkgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGODgwMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkY2NjAwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNhdGFsb2ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0xNi4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj4KICAgICAgICAgICAgPGcgaWQ9InRvcCI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDYuODY4MjQ0LDE2LjQwNDU0NCBDNDYuNjQwNTk1OCwxNi4wMTc3Mjc4IDQ2LjEzNjMwMDMsMTUuODg1MTA1MSA0NS43NDIxNzY3LDE2LjEwODUzMjUgTDMyLjI0ODIzODIsMjMuNzU0NjQ5NiBDMzEuOTQxMTU2NiwyMy45Mjg3OTE2IDMxLjc4MTY4MTIsMjQuMjc2NDc4MSAzMS44NTI4OTczLDI0LjYxNzU5MzMgTDM2LjM5NDI1ODIsNDYuMzk4ODEyNyBDMzYuNDE2MTMwMSw0Ni41MDM3MTQ4IDM2LjM3MDc3OSw0Ni42NTg1NzgyIDM2LjMwMjA2NDksNDYuNzM0NjM2IEwzNS43NTAzMDc2LDQ3LjM0NTM2MTIgQzM0LjYwMzI0MDYsNDguNjE1MTM0IDMzLjYzMTQ3NSw0OS4zMDMwMzk2IDMxLjc4NDQyMDIsNDkuMzAzMDM5NiBDMjkuNzEzMzY5NCw0OS4zMDMwMzk2IDI4Ljc0MDk5NTEsNDguMjMxNjAzNSAyNy4yMDEzMjYzLDQ2LjMzNzg0NjkgQzI1LjM2MjQ4ODgsNDQuMDc2MzkwOCAyMy4wNzQ0NDE4LDQxLjI2MjA0MTQgMTcuNTExMzY0OSw0MS4yNjIwNDE0IEwxNy4zNzM4MDIxLDQxLjI2MjA0MTQgQzE2LjYxNTA3NjIsNDEuMjYyMDQxNCAxNiw0MS44NjU3MTM3IDE2LDQyLjYxMDM3MjMgQzE2LDQzLjM1NTAzMDggMTYuNjE1MDc2Miw0My45NTg3MDMxIDE3LjM3MzgwMjEsNDMuOTU4NzAzMSBMMTcuNTExMzY0OSw0My45NTg3MDMxIEMyMS43NTE0NjQ5LDQzLjk1ODcwMzEgMjMuMzU1MzQ5OSw0NS45MzEzMTY1IDI1LjA1MzU4MTIsNDguMDE5ODI1NCBDMjYuNTcwNDI0Myw0OS44ODU1MDQyIDI4LjI4OTY1NTEsNTIgMzEuNzg0NDIwMiw1MiBDMzQuODAxMzY3Niw1MiAzNi40NjE1NTYsNTAuNjIyNjk1MyAzNy44MDYxNDEzLDQ5LjEzNDU3MyBMNDIuNzY1NzA2OSw0My42NDU2NjU3IEM0Mi43NjU3MDY5LDQzLjY0NTM2NyA1NC41NjE3MTg1LDMwLjU4OTQ5ODEgNTQuNTYxNzE4NSwzMC41ODk0OTgxIEM1NC43OTY5NzUyLDMwLjMyOTAzMTkgNTQuODM2MjM1NCwyOS45NDk5ODE5IDU0LjY1ODgwMzcsMjkuNjQ4Mjk1MSBMNDYuODY4MjQ0LDE2LjQwNDU0NCBaIiBpZD0ibG9nbyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(2);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./assets/aerolab-logo.svg
var aerolab_logo = __webpack_require__(4);
var aerolab_logo_default = /*#__PURE__*/__webpack_require__.n(aerolab_logo);

// CONCATENATED MODULE: ./components/layout/LayoutSimple.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // Assets



var LayoutSimple_LayoutFull =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayoutFull, _React$Component);

  function LayoutFull() {
    _classCallCheck(this, LayoutFull);

    return _possibleConstructorReturn(this, (LayoutFull.__proto__ || Object.getPrototypeOf(LayoutFull)).apply(this, arguments));
  }

  _createClass(LayoutFull, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title;
      return external__react__default.a.createElement("div", {
        className: "jsx-2870673967"
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", {
        className: "jsx-2870673967"
      }, title), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2870673967"
      })), children, external__react__default.a.createElement(style__default.a, {
        styleId: "2870673967",
        css: ["@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');", "body{margin:0;font-family:'Source Sans Pro',sans-serif;background:white;}"]
      }));
    }
  }]);

  return LayoutFull;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./assets/error.png
var error = __webpack_require__(7);
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./pages/_error.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _error_Error; });


function _error__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _error__typeof = function _typeof(obj) { return typeof obj; }; } else { _error__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _error__typeof(obj); }

function _error__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _error__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _error__createClass(Constructor, protoProps, staticProps) { if (protoProps) _error__defineProperties(Constructor.prototype, protoProps); if (staticProps) _error__defineProperties(Constructor, staticProps); return Constructor; }

function _error__possibleConstructorReturn(self, call) { if (call && (_error__typeof(call) === "object" || typeof call === "function")) { return call; } return _error__assertThisInitialized(self); }

function _error__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _error__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 // Assets



var _error_Error =
/*#__PURE__*/
function (_React$Component) {
  _error__inherits(Error, _React$Component);

  function Error() {
    _error__classCallCheck(this, Error);

    return _error__possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _error__createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return external__react__default.a.createElement(LayoutSimple_LayoutFull, null, statusCode === 404 ? external__react__default.a.createElement("div", {
        className: "jsx-1619840814" + " " + "message"
      }, external__react__default.a.createElement("img", {
        src: error_default.a,
        className: "jsx-1619840814"
      }), external__react__default.a.createElement("h1", {
        className: "jsx-1619840814"
      }, "No encontramos la p\xE1gina solicitada"), external__react__default.a.createElement("p", {
        className: "jsx-1619840814"
      }, external__react__default.a.createElement(routes["Link"], {
        route: "/"
      }, external__react__default.a.createElement("a", {
        className: "jsx-1619840814"
      }, "Volver al inicio")))) : external__react__default.a.createElement("div", {
        className: "jsx-1619840814" + " " + "message"
      }, external__react__default.a.createElement("img", {
        src: error_default.a,
        className: "jsx-1619840814"
      }), external__react__default.a.createElement("h1", {
        className: "jsx-1619840814"
      }, "Tuvimos un problema"), external__react__default.a.createElement("p", {
        className: "jsx-1619840814"
      }, "Intent\xE1 nuevamente en unos segundos")), external__react__default.a.createElement(style__default.a, {
        styleId: "1619840814",
        css: ["img.jsx-1619840814{width:250px;}", ".message.jsx-1619840814{padding:100px 30px;text-align:center;}", "h1.jsx-1619840814{font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;text-align:center;}", "a.jsx-1619840814,p.jsx-1619840814{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:center;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(external__react__default.a.Component);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/error-fd5dae518999e6a8e5abda7b7ca974ad.png";

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);