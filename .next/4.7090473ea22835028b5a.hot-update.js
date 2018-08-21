webpackHotUpdate(4,{

/***/ "./components/catalogue/content/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutFull; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg__ = __webpack_require__("./assets/icons/buy-blue.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg__ = __webpack_require__("./assets/icons/coin.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg__);
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\catalogue\\content\\Card.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Assets



var LayoutFull =
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
      var item = this.props.item;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-2519990952"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-2519990952" + " " + 'card'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-2519990952" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-2519990952" + " " + "insufficient"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2519990952"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2519990952"
      }, "1000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2519990952"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-2519990952" + " " + "buy"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: item.img.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-2519990952"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2519990952"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-2519990952" + " " + "category"
      }, item.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2519990952" + " " + "item"
      }, item.name))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2519990952",
        css: ".content.jsx-2519990952{padding:25px;}.card.jsx-2519990952{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}.card.jsx-2519990952:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}hr.jsx-2519990952{border-top:1px solid #d9d9d9;}.insufficient.jsx-2519990952{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;}.buy.jsx-2519990952{cursor:pointer;width:42px;float:right;}img.jsx-2519990952{width:100%;}.category.jsx-2519990952{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}.item.jsx-2519990952{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBRzRCLEFBR0csQUFLc0IsQUFLWCxBQUdsQixBQVFHLEFBS0osQUFHSSxBQU1BLFdBUmYsQ0FiYSxDQWhCVixFQXdCUSxBQVFILEFBTUEsSUFuQzRCLE9Bc0J4QixHQVpaLEFBb0JpQixBQU1BLEVBdEJILE9BU2QsRUFsQm1CLFdBVWIsVUFkRCxFQWVDLFNBZE4sR0FlTSxTQVhpQixHQVl2QixtREFhVSxBQU1BLGdCQUxWLEFBTUEsUUEvQkEiLCJmaWxlIjoiY29tcG9uZW50c1xcY2F0YWxvZ3VlXFxjb250ZW50XFxDYXJkLmpzIiwic291cmNlUm9vdCI6IkU6XFxEb2N1bWVudG9zXFxQcm95ZWN0b3NcXEFlcm9sYWJcXGFwcCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFzc2V0c1xyXG5pbXBvcnQgYnV5IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9idXktYmx1ZS5zdmcnXHJcbmltcG9ydCBjb2luIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2luLnN2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dEZ1bGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgXHRjb25zdCB7aXRlbX0gPSB0aGlzLnByb3BzXHJcblx0ICAgIHJldHVybiAoXHJcblx0ICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz4gICAgICAgICBcdFxyXG5cdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zdWZmaWNpZW50XCI+XHJcbiAgICAgICAgICAgIFx0XHRcdFx0PGRpdj48c3Bhbj4xMDAwPC9zcGFuPjxpbWcgc3JjPXtjb2lufSBhbHQ9XCJjb2luXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdDxpbWcgY2xhc3NOYW1lPVwiYnV5XCIgc3JjPXtidXl9IC8+XHJcbiAgICAgICAgICAgIFx0XHRcdDxpbWcgc3JjPXtpdGVtLmltZy51cmx9IC8+XHJcblx0XHQgICAgICAgICAgICBcdDxociAvPlxyXG5cdFx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2l0ZW0uY2F0ZWdvcnl9PC9kaXY+XHJcblx0XHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPntpdGVtLm5hbWV9PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblx0ICAgICAgICAgICAgXHQuY29udGVudHtcclxuXHQgICAgICAgICAgICBcdFx0cGFkZGluZzoyNXB4O1xyXG5cdCAgICAgICAgICAgIFx0fVxyXG5cdFx0XHQgICAgICAgIC5jYXJke1xyXG5cdFx0XHQgICAgICAgIFx0YmFja2dyb3VuZDojZmZmZmZmO1xyXG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OjJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcblx0XHRcdCAgICAgICAgXHRib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG5cdFx0XHQgICAgICAgIFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgIFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaHJ7XHJcblx0XHRcdCAgICAgICAgXHRib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudHtcclxuXHRcdFx0ICAgICAgICBcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM2MTYxNjE7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjE0MnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NDJweDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5idXl7XHJcblx0XHRcdCAgICAgICAgXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0ICAgICAgICBcdHdpZHRoOjQycHg7XHJcblx0XHRcdCAgICAgICAgXHRmbG9hdDpyaWdodDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaW1ne1xyXG5cdFx0XHQgICAgICAgIFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmNhdGVnb3J5e1xyXG5cdFx0XHQgICAgICAgIFx0Zm9udC1zaXplOjE2cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiNhM2EzYTM7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOi0wLjA0cHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLml0ZW17XHJcblx0XHRcdCAgICAgICAgXHRmb250LXNpemU6MThweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzYxNjE2MTtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDRweDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgIGB9PC9zdHlsZT5cclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgICApO1xyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=components\\catalogue\\content\\Card.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.7090473ea22835028b5a.hot-update.js.map