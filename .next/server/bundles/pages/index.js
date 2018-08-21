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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5tb25leTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgeD0iLTkuMSUiIHk9Ii05LjElIiB3aWR0aD0iMTI4LjMlIiBoZWlnaHQ9IjEyOC4zJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTEiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjIiIGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iNTAlIiBmeD0iNTAlIiBmeT0iNTAlIiByPSI2OC42Mjg0ODU4JSIgaWQ9InJhZGlhbEdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZDRjAwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGN0FFMTUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ2F0YWxvZy1wZzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDkuMDAwMDAwLCAtNzMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icHJvZHVjdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMi4wMDAwMDAsIDYyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lLTEiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwcm9kdWN0LWNhcmQtaG92ZXIiIGZpbHRlcj0idXJsKCNmaWx0ZXItMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJtb25leSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEuMDAwMDAwLCAxMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDguMDAwMDAwLCAxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC1Db3B5LTMiIGZpbGw9InVybCgjcmFkaWFsR3JhZGllbnQtMikiIGN4PSIxMyIgY3k9IjEzIiByPSIxMyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMywzLjA5NTIzODEgQzcuNTQ1ODAzNTcsMy4wOTUyMzgxIDMuMDk1MjM4MSw3LjU0NjU3NzM4IDMuMDk1MjM4MSwxMyBDMy4wOTUyMzgxLDE4LjQ1NDE5NjQgNy41NDY1NzczOCwyMi45MDQ3NjE5IDEzLDIyLjkwNDc2MTkgQzE4LjQ1NDE5NjQsMjIuOTA0NzYxOSAyMi45MDQ3NjE5LDE4LjQ1MzQyMjYgMjIuOTA0NzYxOSwxMyBDMjIuOTA0NzYxOSw3LjU0NTgwMzU3IDE4LjQ1MzQyMjYsMy4wOTUyMzgxIDEzLDMuMDk1MjM4MSBaIE0xMywyMS43NDQwNDc2IEM4LjE3ODUwODkzLDIxLjc0NDA0NzYgNC4yNTU5NTIzOCwxNy44MjE0OTExIDQuMjU1OTUyMzgsMTMgQzQuMjU1OTUyMzgsOC4xNzg1MDg5MyA4LjE3ODUwODkzLDQuMjU1OTUyMzggMTMsNC4yNTU5NTIzOCBDMTcuODIxNDkxMSw0LjI1NTk1MjM4IDIxLjc0NDA0NzYsOC4xNzg1MDg5MyAyMS43NDQwNDc2LDEzIEMyMS43NDQwNDc2LDE3LjgyMTQ5MTEgMTcuODIxNDkxMSwyMS43NDQwNDc2IDEzLDIxLjc0NDA0NzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRjhCMDEzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLDUuMjk2Mjk2MyBDOC43NjgzNDc2OSw1LjI5NjI5NjMgNS4yOTYyOTYzLDguNzY5NTY2MTQgNS4yOTYyOTYzLDEzIEM1LjI5NjI5NjMsMTcuMjMxNjUyMyA4Ljc2OTU2NjE0LDIwLjcwMzcwMzcgMTMsMjAuNzAzNzAzNyBDMTcuMjMxNjUyMywyMC43MDM3MDM3IDIwLjcwMzcwMzcsMTcuMjMwNDMzOSAyMC43MDM3MDM3LDEzIEMyMC43MDM3MDM3LDguNzY4MzQ3NjkgMTcuMjMwNDMzOSw1LjI5NjI5NjMgMTMsNS4yOTYyOTYzIFogTTEzLDE5LjUyNDU2NTQgQzkuNDAyMzMxMDcsMTkuNTI0NTY1NCA2LjQ3NTQzNDYyLDE2LjU5NzY2ODkgNi40NzU0MzQ2MiwxMyBDNi40NzU0MzQ2Miw5LjQwMjMzMTA3IDkuNDAyMzMxMDcsNi40NzU0MzQ2MiAxMyw2LjQ3NTQzNDYyIEMxNi41OTc2Njg5LDYuNDc1NDM0NjIgMTkuNTI0NTY1NCw5LjQwMjMzMTA3IDE5LjUyNDU2NTQsMTMgQzE5LjUyNDU2NTQsMTYuNTk3NjY4OSAxNi41OTc2Njg5LDE5LjUyNDU2NTQgMTMsMTkuNTI0NTY1NCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGOEIwMTMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(8);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(9);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(2);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./assets/aerolab-logo.svg
var aerolab_logo = __webpack_require__(4);
var aerolab_logo_default = /*#__PURE__*/__webpack_require__.n(aerolab_logo);

// EXTERNAL MODULE: ./assets/icons/coin.svg
var coin = __webpack_require__(10);
var coin_default = /*#__PURE__*/__webpack_require__.n(coin);

// CONCATENATED MODULE: ./components/layout/LayoutFull.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // Assets




var LayoutFull_LayoutFull =
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
          title = _props.title,
          user = _props.user,
          coins = _props.coins,
          eventAddCoins = _props.eventAddCoins;
      return external__react__default.a.createElement("div", {
        className: "jsx-2461761310"
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", {
        className: "jsx-2461761310"
      }, title), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2461761310"
      })), external__react__default.a.createElement("header", {
        className: "jsx-2461761310"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2461761310" + " " + "content"
      }, external__react__default.a.createElement(routes["Link"], {
        route: "/"
      }, external__react__default.a.createElement("a", {
        className: "jsx-2461761310"
      }, external__react__default.a.createElement("img", {
        src: aerolab_logo_default.a,
        alt: "logo",
        className: "jsx-2461761310" + " " + "logo"
      }))), external__react__default.a.createElement("div", {
        className: "jsx-2461761310" + " " + "user-info"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2461761310" + " " + "user"
      }, user), external__react__default.a.createElement("div", {
        onClick: function onClick(e) {
          return eventAddCoins();
        },
        className: "jsx-2461761310" + " " + "coins"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2461761310"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2461761310"
      }, external__react__default.a.createElement("span", {
        className: "jsx-2461761310"
      }, coins), external__react__default.a.createElement("img", {
        src: coin_default.a,
        alt: "coin",
        className: "jsx-2461761310"
      }))))))), children, external__react__default.a.createElement(style__default.a, {
        styleId: "3097104887",
        css: ["header.jsx-2461761310{background:#fff;position:fixed;width:100%;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);z-index:99;}", ".content.jsx-2461761310{padding:16px 42px;}", ".logo.jsx-2461761310{width:48px;}", ".user-info.jsx-2461761310{float:right;}", ".user.jsx-2461761310{float:left;font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;margin-right:18px;}", ".coins.jsx-2461761310{float:right;background:#ededed;border-radius:100px;width:103px;height:48px;margin:0 auto;cursor:pointer;}", ".coins.jsx-2461761310 div.jsx-2461761310{font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;margin-right:18px;text-align:right;}", ".coins.jsx-2461761310 img.jsx-2461761310{position:absolute;top:calc(48px /2);}"]
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "1032374624",
        css: ["@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');", "body{margin:0;font-family:'Source Sans Pro',sans-serif;background:white;}", ".container{padding:67px 132px;}", ".disabled{display:none;}", "@media only screen and (max-width:600px){.container{padding:15px;}.user{display:none;}}"]
      }));
    }
  }]);

  return LayoutFull;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./pages/_error.js + 1 modules
var _error = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/header-x1.png
var header_x1 = __webpack_require__(14);
var header_x1_default = /*#__PURE__*/__webpack_require__.n(header_x1);

// CONCATENATED MODULE: ./components/hero/index.js



function hero__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hero__typeof = function _typeof(obj) { return typeof obj; }; } else { hero__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hero__typeof(obj); }

function hero__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hero__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hero__createClass(Constructor, protoProps, staticProps) { if (protoProps) hero__defineProperties(Constructor.prototype, protoProps); if (staticProps) hero__defineProperties(Constructor, staticProps); return Constructor; }

function hero__possibleConstructorReturn(self, call) { if (call && (hero__typeof(call) === "object" || typeof call === "function")) { return call; } return hero__assertThisInitialized(self); }

function hero__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hero__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Assets


var hero_Layout =
/*#__PURE__*/
function (_React$Component) {
  hero__inherits(Layout, _React$Component);

  function Layout() {
    hero__classCallCheck(this, Layout);

    return hero__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  hero__createClass(Layout, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["1813538954", [header_x1_default.a]]])
      }, external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["1813538954", [header_x1_default.a]]]) + " " + "parallax"
      }, external__react__default.a.createElement("h1", {
        className: style__default.a.dynamic([["1813538954", [header_x1_default.a]]])
      }, "Electronics")), external__react__default.a.createElement(style__default.a, {
        styleId: "1813538954",
        css: [".parallax.__jsx-style-dynamic-selector{width:100%;height:412px;background-image:url(".concat(header_x1_default.a, ");background-repeat:no-repeat;background-size:cover;background-position:right;padding-top:80px;}"), "h1.__jsx-style-dynamic-selector{font-size:64px;color:#ffffff;text-align:left;padding-top:284px;padding-left:132px;margin:0;}", "@media only screen and (max-width:600px){.parallax.__jsx-style-dynamic-selector{background-position:left;}h1.__jsx-style-dynamic-selector{font-size:44px;text-align:left;padding-left:22px;}}"],
        dynamic: [header_x1_default.a]
      }));
    }
  }]);

  return Layout;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./components/catalogue/options/Chip.js



function Chip__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Chip__typeof = function _typeof(obj) { return typeof obj; }; } else { Chip__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Chip__typeof(obj); }

function Chip__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Chip__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Chip__createClass(Constructor, protoProps, staticProps) { if (protoProps) Chip__defineProperties(Constructor.prototype, protoProps); if (staticProps) Chip__defineProperties(Constructor, staticProps); return Constructor; }

function Chip__possibleConstructorReturn(self, call) { if (call && (Chip__typeof(call) === "object" || typeof call === "function")) { return call; } return Chip__assertThisInitialized(self); }

function Chip__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Chip__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip__default =
/*#__PURE__*/
function (_React$Component) {
  Chip__inherits(_default, _React$Component);

  function _default() {
    Chip__classCallCheck(this, _default);

    return Chip__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Chip__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$title = _props.title,
          title = _props$title === void 0 ? 'No title' : _props$title,
          _props$activeItem = _props.activeItem,
          activeItem = _props$activeItem === void 0 ? false : _props$activeItem,
          event = _props.event;
      return external__react__default.a.createElement("div", {
        className: "jsx-1245432486" + " " + "content"
      }, external__react__default.a.createElement("div", {
        onClick: function onClick(e) {
          return event({
            title: title
          });
        },
        className: "jsx-1245432486" + " " + ((activeItem === title ? 'chip active' : 'chip') || "")
      }, title), external__react__default.a.createElement(style__default.a, {
        styleId: "1245432486",
        css: [".chip.jsx-1245432486{background:#ededed;border-radius:100px;width:163px;height:48px;font-size:24px;color:#a3a3a3;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:center;float:left;margin-right:24px;cursor:pointer;}", ".active.jsx-1245432486{background:#0ad4fa;color:#ffffff;}", "@media only screen and (max-width:600px){.chip.jsx-1245432486{margin:20px;}}"]
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./assets/icons/arrow-right.svg
var arrow_right = __webpack_require__(15);
var arrow_right_default = /*#__PURE__*/__webpack_require__.n(arrow_right);

// EXTERNAL MODULE: ./assets/icons/arrow-left.svg
var arrow_left = __webpack_require__(16);
var arrow_left_default = /*#__PURE__*/__webpack_require__.n(arrow_left);

// CONCATENATED MODULE: ./components/catalogue/options/Pagination.js



function Pagination__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Pagination__typeof = function _typeof(obj) { return typeof obj; }; } else { Pagination__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Pagination__typeof(obj); }

function Pagination__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pagination__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Pagination__createClass(Constructor, protoProps, staticProps) { if (protoProps) Pagination__defineProperties(Constructor.prototype, protoProps); if (staticProps) Pagination__defineProperties(Constructor, staticProps); return Constructor; }

function Pagination__possibleConstructorReturn(self, call) { if (call && (Pagination__typeof(call) === "object" || typeof call === "function")) { return call; } return Pagination__assertThisInitialized(self); }

function Pagination__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Pagination__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Assets



var Pagination__default =
/*#__PURE__*/
function (_React$Component) {
  Pagination__inherits(_default, _React$Component);

  function _default(props) {
    Pagination__classCallCheck(this, _default);

    return Pagination__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  Pagination__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          event = _props.event,
          currentpagenumber = _props.currentpagenumber,
          lastPage = _props.lastPage;
      return external__react__default.a.createElement("div", {
        className: "jsx-1252905796"
      }, external__react__default.a.createElement("span", {
        className: "jsx-1252905796"
      }, "Page ", currentpagenumber), external__react__default.a.createElement("img", {
        src: arrow_right_default.a,
        alt: "P\xE1gina siguiente",
        onClick: function onClick(e) {
          return event('nextPage');
        },
        className: "jsx-1252905796" + " " + ((currentpagenumber === lastPage ? 'disabled' : '') || "")
      }), external__react__default.a.createElement("img", {
        src: arrow_left_default.a,
        alt: "P\xE1gina anterior",
        onClick: function onClick(e) {
          return event('prevPage');
        },
        className: "jsx-1252905796" + " " + ((currentpagenumber === 1 ? 'disabled' : '') || "")
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "1252905796",
        css: ["img.jsx-1252905796{float:right;padding-left:12px;cursor:pointer;}"]
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./components/catalogue/options/index.js



function options__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { options__typeof = function _typeof(obj) { return typeof obj; }; } else { options__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return options__typeof(obj); }

function options__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function options__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function options__createClass(Constructor, protoProps, staticProps) { if (protoProps) options__defineProperties(Constructor.prototype, protoProps); if (staticProps) options__defineProperties(Constructor, staticProps); return Constructor; }

function options__possibleConstructorReturn(self, call) { if (call && (options__typeof(call) === "object" || typeof call === "function")) { return call; } return options__assertThisInitialized(self); }

function options__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function options__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var options__default =
/*#__PURE__*/
function (_React$Component) {
  options__inherits(_default, _React$Component);

  function _default(props) {
    options__classCallCheck(this, _default);

    return options__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  options__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          eventSort = _props.eventSort,
          total = _props.total,
          section = _props.section,
          actual = _props.actual,
          event = _props.event,
          currentpagenumber = _props.currentpagenumber,
          lastPage = _props.lastPage,
          activeItem = _props.activeItem;
      return external__react__default.a.createElement("div", {
        className: "jsx-1358827268"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + "content"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + "amount"
      }, external__react__default.a.createElement("span", {
        className: "jsx-1358827268"
      }, actual, " of ", total, " products")), external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + ((section !== 'header' ? 'disabled' : '') || "")
      }, external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + "sort"
      }, external__react__default.a.createElement("span", {
        className: "jsx-1358827268" + " " + "Disabled"
      }, "Sort by:")), external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + "options grid"
      }, external__react__default.a.createElement(Chip__default, {
        event: eventSort,
        activeItem: activeItem,
        title: "Most recent"
      }), external__react__default.a.createElement(Chip__default, {
        event: eventSort,
        activeItem: activeItem,
        title: "Lowest price"
      }), external__react__default.a.createElement(Chip__default, {
        event: eventSort,
        activeItem: activeItem,
        title: "Highest price"
      }))), external__react__default.a.createElement("div", {
        className: "jsx-1358827268" + " " + "pagination"
      }, external__react__default.a.createElement(Pagination__default, {
        event: event,
        currentpagenumber: currentpagenumber,
        lastPage: lastPage
      }))), external__react__default.a.createElement(style__default.a, {
        styleId: "1358827268",
        css: [".content.jsx-1358827268{font-size:24px;color:#616161;font-weigth:regular;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;float:left;width:100%;padding-bottom:24px;margin-bottom:42px;border-bottom:1px solid #d9d9d9;}", ".amount.jsx-1358827268{float:left;padding-right:24px;}", ".sort.jsx-1358827268{float:left;font-size:24px;color:#a3a3a3;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;border-left:1px solid #d9d9d9;}", ".sort.jsx-1358827268 span.jsx-1358827268{padding:0 24px;}", ".options.jsx-1358827268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;float:left;}", ".pagination.jsx-1358827268{float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./assets/icons/buy-blue.svg
var buy_blue = __webpack_require__(17);
var buy_blue_default = /*#__PURE__*/__webpack_require__.n(buy_blue);

// CONCATENATED MODULE: ./components/catalogue/content/Card.js



function Card__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Card__typeof = function _typeof(obj) { return typeof obj; }; } else { Card__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Card__typeof(obj); }

function Card__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Card__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Card__createClass(Constructor, protoProps, staticProps) { if (protoProps) Card__defineProperties(Constructor.prototype, protoProps); if (staticProps) Card__defineProperties(Constructor, staticProps); return Constructor; }

function Card__possibleConstructorReturn(self, call) { if (call && (Card__typeof(call) === "object" || typeof call === "function")) { return call; } return Card__assertThisInitialized(self); }

function Card__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Card__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Assets



var Card_LayoutFull =
/*#__PURE__*/
function (_React$Component) {
  Card__inherits(LayoutFull, _React$Component);

  function LayoutFull() {
    Card__classCallCheck(this, LayoutFull);

    return Card__possibleConstructorReturn(this, (LayoutFull.__proto__ || Object.getPrototypeOf(LayoutFull)).apply(this, arguments));
  }

  Card__createClass(LayoutFull, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          item = _props.item,
          user = _props.user,
          eventRedeem = _props.eventRedeem;
      return external__react__default.a.createElement("div", {
        className: "jsx-568945291"
      }, external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + 'card'
      }, external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + "content"
      }, external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + "price"
      }, external__react__default.a.createElement("div", {
        className: "jsx-568945291"
      }, external__react__default.a.createElement("span", {
        className: "jsx-568945291"
      }, item.cost), external__react__default.a.createElement("img", {
        src: coin_default.a,
        alt: "coin",
        className: "jsx-568945291"
      }))), external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + ((item.cost > user.points ? 'insufficient' : 'disabled') || "")
      }, external__react__default.a.createElement("div", {
        className: "jsx-568945291"
      }, external__react__default.a.createElement("span", {
        className: "jsx-568945291"
      }, "You need ", item.cost - user.points), external__react__default.a.createElement("img", {
        src: coin_default.a,
        alt: "coin",
        className: "jsx-568945291"
      }))), external__react__default.a.createElement("img", {
        src: buy_blue_default.a,
        onClick: function onClick(e) {
          return eventRedeem({
            item: item
          });
        },
        className: "jsx-568945291" + " " + ((item.cost > user.points ? 'disabled' : 'buy') || "")
      }), external__react__default.a.createElement("img", {
        src: item.img.url,
        className: "jsx-568945291"
      }), external__react__default.a.createElement("hr", {
        className: "jsx-568945291"
      }), external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + "category"
      }, item.category), external__react__default.a.createElement("div", {
        className: "jsx-568945291" + " " + "item"
      }, item.name))), external__react__default.a.createElement(style__default.a, {
        styleId: "568945291",
        css: [".content.jsx-568945291{padding:25px;}", ".card.jsx-568945291{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}", ".buy.jsx-568945291:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", "hr.jsx-568945291{border-top:1px solid #d9d9d9;}", ".price.jsx-568945291{float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".price.jsx-568945291 div.jsx-568945291{font-size:16px;color:#616161;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}", ".price.jsx-568945291 img.jsx-568945291{width:20px;position:relative;top:6px;left:6px;}", ".insufficient.jsx-568945291{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".insufficient.jsx-568945291 div.jsx-568945291{font-size:14px;color:#ffffff;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}", ".insufficient.jsx-568945291 img.jsx-568945291{width:20px;position:relative;top:6px;left:6px;}", ".buy.jsx-568945291{cursor:pointer;width:42px;float:right;border-radius:100%;}", "img.jsx-568945291{width:100%;}", ".category.jsx-568945291{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}", ".item.jsx-568945291{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}"]
      }));
    }
  }]);

  return LayoutFull;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./components/catalogue/content/index.js



function content__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { content__typeof = function _typeof(obj) { return typeof obj; }; } else { content__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return content__typeof(obj); }

function content__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function content__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function content__createClass(Constructor, protoProps, staticProps) { if (protoProps) content__defineProperties(Constructor.prototype, protoProps); if (staticProps) content__defineProperties(Constructor, staticProps); return Constructor; }

function content__possibleConstructorReturn(self, call) { if (call && (content__typeof(call) === "object" || typeof call === "function")) { return call; } return content__assertThisInitialized(self); }

function content__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function content__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var content__default =
/*#__PURE__*/
function (_React$Component) {
  content__inherits(_default, _React$Component);

  function _default() {
    content__classCallCheck(this, _default);

    return content__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  content__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          currentProducts = _props.currentProducts,
          user = _props.user,
          eventRedeem = _props.eventRedeem;
      return external__react__default.a.createElement("div", {
        className: "jsx-4226700395" + " " + "content"
      }, external__react__default.a.createElement("div", {
        className: "jsx-4226700395" + " " + "grid-container"
      }, currentProducts.map(function (item, index) {
        return external__react__default.a.createElement(Card_LayoutFull, {
          user: user,
          item: item,
          key: item._id,
          eventRedeem: eventRedeem
        });
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "4226700395",
        css: [".content.jsx-4226700395{width:100%;float:left;padding-bottom:60px;}", ".grid-container.jsx-4226700395{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-gap:25px 25px;}"]
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./components/catalogue/index.js



function catalogue__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { catalogue__typeof = function _typeof(obj) { return typeof obj; }; } else { catalogue__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return catalogue__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function catalogue__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function catalogue__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function catalogue__createClass(Constructor, protoProps, staticProps) { if (protoProps) catalogue__defineProperties(Constructor.prototype, protoProps); if (staticProps) catalogue__defineProperties(Constructor, staticProps); return Constructor; }

function catalogue__possibleConstructorReturn(self, call) { if (call && (catalogue__typeof(call) === "object" || typeof call === "function")) { return call; } return catalogue__assertThisInitialized(self); }

function catalogue__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function catalogue__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var catalogue__default =
/*#__PURE__*/
function (_React$Component) {
  catalogue__inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    catalogue__classCallCheck(this, _default);

    _this = catalogue__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      itemsPerPage: 15,
      currentpagenumber: 1,
      activeItem: 'Most recent',
      products: _this.props.products
    };
    _this.handleClickRedeem = _this.handleClickRedeem.bind(catalogue__assertThisInitialized(_this));
    _this.handleClickPagination = _this.handleClickPagination.bind(catalogue__assertThisInitialized(_this));
    _this.handleClickSort = _this.handleClickSort.bind(catalogue__assertThisInitialized(_this));
    return _this;
  }

  catalogue__createClass(_default, [{
    key: "handleClickRedeem",
    value: function () {
      var _handleClickRedeem = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(arg) {
        var reqRedeem, redeemeRes;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(arg);
                _context.prev = 1;
                _context.next = 4;
                return fetch('https://aerolab-challenge.now.sh/redeem', {
                  method: 'POST',
                  body: JSON.stringify({
                    productId: arg.item._id
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk'
                  }
                });

              case 4:
                reqRedeem = _context.sent;
                _context.next = 7;
                return reqRedeem.json();

              case 7:
                redeemeRes = _context.sent;
                alert(redeemeRes.message);
                this.props.eventRemoveCoins(arg.item.cost);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                alert('Error');

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function handleClickRedeem(_x) {
        return _handleClickRedeem.apply(this, arguments);
      };
    }()
  }, {
    key: "handleClickSort",
    value: function handleClickSort(arg) {
      var products = this.state.products;
      var productsAux = [];

      switch (arg.title) {
        case "Lowest price":
          {
            productsAux = products.concat().sort(function (a, b) {
              return a.cost - b.cost;
            });
            break;
          }

        case "Highest price":
          {
            productsAux = products.concat().sort(function (a, b) {
              return b.cost - a.cost;
            });
            break;
          }

        default:
          productsAux = this.props.products;
          break;
      }

      this.setState({
        activeItem: arg.title,
        products: productsAux
      });
    }
  }, {
    key: "handleClickPagination",
    value: function handleClickPagination(arg) {
      var currentpagenumber = this.state.currentpagenumber;
      var newPage = arg == 'nextPage' ? currentpagenumber + 1 : currentpagenumber - 1;
      this.setState({
        currentpagenumber: Number(newPage)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          products = _state.products,
          currentpagenumber = _state.currentpagenumber,
          itemsPerPage = _state.itemsPerPage,
          activeItem = _state.activeItem;
      var user = this.props.user; // paginado

      var totalProducts = products.length;
      var indexOfLastProducts = currentpagenumber * itemsPerPage;
      var indexOfFirstProducts = indexOfLastProducts - itemsPerPage;
      var currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
      var lastPage = Math.ceil(totalProducts / itemsPerPage);
      return external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement(options__default, {
        eventSort: this.handleClickSort,
        activeItem: activeItem,
        section: "header",
        actual: currentProducts.length,
        total: totalProducts,
        event: this.handleClickPagination,
        currentpagenumber: currentpagenumber,
        lastPage: lastPage
      }), external__react__default.a.createElement(content__default, {
        user: user,
        eventRedeem: this.handleClickRedeem,
        currentProducts: currentProducts
      }), external__react__default.a.createElement(options__default, {
        section: "footer",
        actual: currentProducts.length,
        total: totalProducts,
        event: this.handleClickPagination,
        currentpagenumber: currentpagenumber,
        lastPage: lastPage
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages__default; });



function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function pages__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // components




var pages__default =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(_default, _React$Component);

  pages__createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = pages__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var res, _ref2, _ref3, reqUser, reqProducts, user, products;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([fetch("https://aerolab-challenge.now.sh/user/me?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk"), fetch("https://aerolab-challenge.now.sh/products?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk")]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                reqUser = _ref3[0];
                reqProducts = _ref3[1];

                if (!(reqUser.status >= 400)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", {
                  user: null,
                  products: null,
                  statusCode: req.status
                });

              case 10:
                _context.next = 12;
                return reqUser.json();

              case 12:
                user = _context.sent;
                _context.next = 15;
                return reqProducts.json();

              case 15:
                products = _context.sent;
                return _context.abrupt("return", {
                  user: user,
                  products: products,
                  statusCode: 200
                });

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  user: null,
                  products: null,
                  statusCode: 503
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 19]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default(props) {
    var _this;

    pages__classCallCheck(this, _default);

    _this = pages__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.handleClickAddCoins = _this.handleClickAddCoins.bind(pages__assertThisInitialized(_this));
    _this.handleClickRemoveCoins = _this.handleClickRemoveCoins.bind(pages__assertThisInitialized(_this));
    _this.state = {
      user: _this.props.user,
      products: _this.props.products,
      statusCode: _this.props.statusCode
    };
    return _this;
  }

  pages__createClass(_default, [{
    key: "handleClickAddCoins",
    value: function () {
      var _handleClickAddCoins = pages__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(arg) {
        var reqPoints, coins;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch('https://aerolab-challenge.now.sh/user/points', {
                  method: 'POST',
                  body: JSON.stringify({
                    amount: 1000
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk'
                  }
                });

              case 3:
                reqPoints = _context2.sent;

                if (reqPoints.status >= 400) {
                  alert('Error');
                }

                _context2.next = 7;
                return reqPoints.json();

              case 7:
                coins = _context2.sent;
                alert(coins.message);
                this.props.user.points = this.props.user.points + 1000;
                this.setState({
                  user: this.props.user
                });
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                alert('Error');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      return function handleClickAddCoins(_x2) {
        return _handleClickAddCoins.apply(this, arguments);
      };
    }()
  }, {
    key: "handleClickRemoveCoins",
    value: function handleClickRemoveCoins(coins) {
      this.props.user.points = this.props.user.points - coins;
      this.setState({
        user: this.props.user
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          user = _state.user,
          products = _state.products,
          statusCode = _state.statusCode;

      if (statusCode !== 200) {
        return external__react__default.a.createElement(_error["default"], {
          statusCode: statusCode
        });
      }

      return external__react__default.a.createElement(LayoutFull_LayoutFull, {
        user: user.name,
        coins: user.points,
        title: "Catalogue",
        eventAddCoins: this.handleClickAddCoins
      }, external__react__default.a.createElement(hero_Layout, null), external__react__default.a.createElement(catalogue__default, {
        user: user,
        products: products,
        eventRemoveCoins: this.handleClickRemoveCoins
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-x1-f0b98264ce8c93768fbf37c263885aaa.png";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hcnJvdy11cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDYXRhbG9nLXAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI2MC4wMDAwMDAsIC01MTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtZW51IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzIuMDAwMDAwLCA1MTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYXJyb3ctcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNCIgc3Ryb2tlPSIjRDlEOUQ5IiBzdHJva2Utd2lkdGg9IjEiIGN4PSIyNCIgY3k9IjI0IiByPSIyMy41Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMy43MDUwMDApIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMy43MDUwMDApICIgcG9pbnRzPSIyOC41OSAyMCAyNCAyNC41OCAxOS40MSAyMCAxOCAyMS40MSAyNCAyNy40MSAzMCAyMS40MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hcnJvdy1sZWZ0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNhdGFsb2ctcDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjAwLjAwMDAwMCwgLTUxMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Im1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMi4wMDAwMDAsIDUxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhcnJvdy1sZWZ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDY4LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTQiIHN0cm9rZT0iI0Q5RDlEOSIgY3g9IjI0IiBjeT0iMjQiIHI9IjIzLjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiNEOUQ5RDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMjMuNzA1MDAwKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuMDAwMDAwLCAtMjMuNzA1MDAwKSAiIHBvaW50cz0iMjguNTkgMjAgMjQgMjQuNTggMTkuNDEgMjAgMTggMjEuNDEgMjQgMjcuNDEgMzAgMjEuNDEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNDIgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGN4PSI1MCUiIGN5PSI1MC44NzY0OTAxJSIgZng9IjUwJSIgZnk9IjUwLjg3NjQ5MDElIiByPSI3OS44NDY5OTQ3JSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEFENEZBIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyNUJCRjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ2F0YWxvZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1NC4wMDAwMDAsIC02NDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJwcm9kdWN0cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMyLjAwMDAwMCwgNjI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUtMSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InByb2R1Y3QtY2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIyLjAwMDAwMCwgMTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLUNvcHktNSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSIgY3g9IjIxIiBjeT0iMjEiIHI9IjIxIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjkuOTk0NjkyNCwyOS4xMDc2MTcyIEwyOC44ODIyMDAxLDE1LjUzMDY5MzYgQzI4Ljg1ODAyMjUsMTUuMjI1MzAzIDI4LjU5NDQ5NSwxNC45ODk0NDM2IDI4LjI3NzUxOCwxNC45ODk0NDM2IEwyNS4yNDUyMTI1LDE0Ljk4OTQ0MzYgTDI1LjI0NTIxMjUsMTMuOTI5Njg3NSBDMjUuMjQ1MjEyNSwxMi4zMTQyNTc4IDIzLjg4NDkyMDMsMTEgMjIuMjEyOTA3MSwxMSBMMTkuNzg3MDYyNywxMSBDMTguMTE1MDQ5NCwxMSAxNi43NTQ3NTcyLDEyLjMxNDI1NzggMTYuNzU0NzU3MiwxMy45Mjk2ODc1IEwxNi43NTQ3NTcyLDE0Ljk4OTQ0MzYgTDEzLjcyMjQ1MTgsMTQuOTg5NDQzNiBDMTMuNDA1NDc0OCwxNC45ODk0NDM2IDEzLjE0MTk0NzIsMTUuMjI1MzAzIDEzLjExNzc2OTYsMTUuNTMwNjkzNiBMMTIuMDA1MzE3OCwyOS4xMDczODI4IEMxMS45NjY1NDQ3LDI5LjU5Mzk4NDQgMTIuMTQxMTY1MSwzMC4wNzg0Mzc1IDEyLjQ4NDM4MTYsMzAuNDM2NTIzNCBDMTIuODI3NTk4MiwzMC43OTQ2MDk0IDEzLjMxNDE4MjEsMzEgMTMuODE5MzIzOCwzMSBMMjguMTgwNjA1NSwzMSBDMjguNjg1NzQ3MiwzMSAyOS4xNzIyOTA3LDMwLjc5NDY0ODQgMjkuNTE1NTQ3NywzMC40MzY1NjI1IEMyOS44NTg4MDQ2LDMwLjA3ODQ3NjYgMzAuMDMzNDI1LDI5LjU5NDAyMzQgMjkuOTk0NjkyNCwyOS4xMDc2MTcyIFogTTE4LDE0LjI1IEMxOCwxMy4wMDkzNSAxOC44MDc0OCwxMiAxOS44LDEyIEwyMi4yLDEyIEMyMy4xOTI1MiwxMiAyNCwxMy4wMDkzNSAyNCwxNC4yNSBMMjQsMTUgTDE4LDE1IEwxOCwxNC4yNSBaIiBpZD0iU2hhcGUtQ29weS0yIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ })
/******/ ]);