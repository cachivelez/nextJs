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
        className: "jsx-213464564"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-213464564" + " " + 'card'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-213464564" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-213464564" + " " + "insufficient"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-213464564"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-213464564"
      }, "You need 8000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-213464564"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-213464564" + " " + "buy"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: item.img.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-213464564"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-213464564"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-213464564" + " " + "category"
      }, item.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-213464564" + " " + "item"
      }, item.name))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "213464564",
        css: ".content.jsx-213464564{padding:25px;}.card.jsx-213464564{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}.card.jsx-213464564:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}hr.jsx-213464564{border-top:1px solid #d9d9d9;}.insufficient.jsx-213464564{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;}.insufficient.jsx-213464564 div.jsx-213464564{font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;margin-left:15px;}.insufficient.jsx-213464564 img.jsx-213464564{position:absolute;width:50px;}.buy.jsx-213464564{cursor:pointer;width:42px;float:right;}img.jsx-213464564{width:100%;}.category.jsx-213464564{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}.item.jsx-213464564{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBRzRCLEFBR0csQUFLc0IsQUFLWCxBQUdsQixBQVFJLEFBT0ksQUFJTCxBQUtKLEFBR0ksQUFNQSxXQVJmLENBeEJhLENBaEJWLEVBd0JZLEFBV0osQUFRSCxBQU1BLEdBbEJJLENBNUJ3QixPQWlDeEIsR0F2QlosQUFZd0IsQUFPeEIsQUFZaUIsQUFNQSxFQWpDSCxPQW9CZCxFQTdCbUIsV0FVYixVQWRELEVBZUMsU0FkTixHQWVNLFNBWGlCLEdBWXZCLG1EQUtrQixBQW1CUixBQU1BLGdCQUxWLEFBTUEsQ0F6Qm1CLE9BakJuQixVQWtCQSIsImZpbGUiOiJjb21wb25lbnRzXFxjYXRhbG9ndWVcXGNvbnRlbnRcXENhcmQuanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXNzZXRzXHJcbmltcG9ydCBidXkgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2J1eS1ibHVlLnN2ZydcclxuaW1wb3J0IGNvaW4gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvaW4uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0RnVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcdGNvbnN0IHtpdGVtfSA9IHRoaXMucHJvcHNcclxuXHQgICAgcmV0dXJuIChcclxuXHQgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPiAgICAgICAgIFx0XHJcblx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1ZmZpY2llbnRcIj5cclxuICAgICAgICAgICAgXHRcdFx0XHQ8ZGl2PjxzcGFuPllvdSBuZWVkIDgwMDA8L3NwYW4+PGltZyBzcmM9e2NvaW59IGFsdD1cImNvaW5cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PGltZyBjbGFzc05hbWU9XCJidXlcIiBzcmM9e2J1eX0gLz5cclxuICAgICAgICAgICAgXHRcdFx0PGltZyBzcmM9e2l0ZW0uaW1nLnVybH0gLz5cclxuXHRcdCAgICAgICAgICAgIFx0PGhyIC8+XHJcblx0XHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57aXRlbS5jYXRlZ29yeX08L2Rpdj5cclxuXHRcdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+e2l0ZW0ubmFtZX08L2Rpdj5cclxuXHQgICAgICAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHQgICAgICAgICAgICBcdC5jb250ZW50e1xyXG5cdCAgICAgICAgICAgIFx0XHRwYWRkaW5nOjI1cHg7XHJcblx0ICAgICAgICAgICAgXHR9XHJcblx0XHRcdCAgICAgICAgLmNhcmR7XHJcblx0XHRcdCAgICAgICAgXHRiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6MnB4IDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2FyZDpob3ZlcntcclxuXHRcdFx0ICAgICAgICBcdGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcblx0XHRcdCAgICAgICAgXHR0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBocntcclxuXHRcdFx0ICAgICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuaW5zdWZmaWNpZW50e1xyXG5cdFx0XHQgICAgICAgIFx0b3BhY2l0eTowLjg7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IzYxNjE2MTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czoxMDBweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTQycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDo0MnB4O1xyXG5cdFx0XHRcdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudCBkaXZ7XHJcblx0XHRcdCAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuXHRcdFx0ICAgICAgICAgIGNvbG9yOiM2MTYxNjE7XHJcblx0XHRcdCAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC4xNXB4O1xyXG5cdFx0XHQgICAgICAgICAgbGluZS1oZWlnaHQ6NDhweDsgICBcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyAgICBcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudCBpbWd7XHJcblx0XHRcdCAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDo1MHB4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuYnV5e1xyXG5cdFx0XHQgICAgICAgIFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdCAgICAgICAgXHR3aWR0aDo0MnB4O1xyXG5cdFx0XHQgICAgICAgIFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGltZ3tcclxuXHRcdFx0ICAgICAgICBcdHdpZHRoOjEwMCU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5jYXRlZ29yeXtcclxuXHRcdFx0ICAgICAgICBcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojYTNhM2EzO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wNHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5pdGVte1xyXG5cdFx0XHQgICAgICAgIFx0Zm9udC1zaXplOjE4cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiM2MTYxNjE7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOi0wLjA0cHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICBgfTwvc3R5bGU+XHJcblx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgKTtcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\catalogue\\content\\Card.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.9d23da5f0eb66c03dcf3.hot-update.js.map