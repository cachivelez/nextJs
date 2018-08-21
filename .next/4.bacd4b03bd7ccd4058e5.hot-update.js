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
        className: "jsx-4102014283"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-4102014283" + " " + 'card'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-4102014283" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-4102014283" + " " + "insufficient"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-4102014283"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-4102014283"
      }, "You need 8000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-4102014283"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-4102014283" + " " + "buy"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: item.img.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-4102014283"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-4102014283"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-4102014283" + " " + "category"
      }, item.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-4102014283" + " " + "item"
      }, item.name))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4102014283",
        css: ".content.jsx-4102014283{padding:25px;}.card.jsx-4102014283{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}.card.jsx-4102014283:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}hr.jsx-4102014283{border-top:1px solid #d9d9d9;}.insufficient.jsx-4102014283{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.insufficient.jsx-4102014283 div.jsx-4102014283{font-size:14px;color:#ffffff;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}.insufficient.jsx-4102014283 img.jsx-4102014283{width:20px;}.buy.jsx-4102014283{cursor:pointer;width:42px;float:right;}img.jsx-4102014283{width:100%;}.category.jsx-4102014283{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}.item.jsx-4102014283{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBRzRCLEFBR0csQUFLc0IsQUFLWCxBQUdsQixBQVNNLEFBT04sQUFHRyxBQUtKLEFBR0ksQUFNQSxXQWhCZixBQVFBLENBeEJhLENBaEJWLEVBeUJLLEFBVUcsQUFRSCxBQU1BLElBOUM0QixPQWlDeEIsR0F2QlosQUFhaUIsQUFrQkEsQUFNQSxFQWpDSCxPQW9CZCxFQTdCbUIsV0FVYixVQWRELEVBZUMsU0FkTixHQWVNLFNBWGlCLEdBWVosbURBTVMsQUFrQlYsQUFNQSxnQkFMVixBQU1BLENBeEJxQixNQU5yQixDQVpBLE9BbUJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcRG9jdW1lbnRvc1xcUHJveWVjdG9zXFxBZXJvbGFiXFxhcHAiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBc3NldHNcclxuaW1wb3J0IGJ1eSBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYnV5LWJsdWUuc3ZnJ1xyXG5pbXBvcnQgY29pbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY29pbi5zdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXRGdWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgIFx0Y29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wc1xyXG5cdCAgICByZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+ICAgICAgICAgXHRcclxuXHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VmZmljaWVudFwiPlxyXG4gICAgICAgICAgICBcdFx0XHRcdDxkaXY+PHNwYW4+WW91IG5lZWQgODAwMDwvc3Bhbj48aW1nIHNyYz17Y29pbn0gYWx0PVwiY29pblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJ1eVwiIHNyYz17YnV5fSAvPlxyXG4gICAgICAgICAgICBcdFx0XHQ8aW1nIHNyYz17aXRlbS5pbWcudXJsfSAvPlxyXG5cdFx0ICAgICAgICAgICAgXHQ8aHIgLz5cclxuXHRcdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntpdGVtLmNhdGVnb3J5fTwvZGl2PlxyXG5cdFx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj57aXRlbS5uYW1lfTwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgICAgIFx0LmNvbnRlbnR7XHJcblx0ICAgICAgICAgICAgXHRcdHBhZGRpbmc6MjVweDtcclxuXHQgICAgICAgICAgICBcdH1cclxuXHRcdFx0ICAgICAgICAuY2FyZHtcclxuXHRcdFx0ICAgICAgICBcdGJhY2tncm91bmQ6I2ZmZmZmZjtcclxuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzoycHggMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5jYXJkOmhvdmVye1xyXG5cdFx0XHQgICAgICAgIFx0Ym94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRcdFx0ICAgICAgICBcdHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICBcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGhye1xyXG5cdFx0XHQgICAgICAgIFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5pbnN1ZmZpY2llbnR7XHJcblx0XHRcdCAgICAgICAgXHRvcGFjaXR5OjAuODtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojNjE2MTYxO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjEwMHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDoxNDJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjQycHg7XHJcblx0XHRcdFx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5pbnN1ZmZpY2llbnQgZGl2e1xyXG5cdFx0XHQgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2ZmZmZmZjtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDNweDtcclxuXHRcdFx0ICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDJweDsgICBcclxuXHRcdCAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgICBcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudCBpbWd7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDoyMHB4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuYnV5e1xyXG5cdFx0XHQgICAgICAgIFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdCAgICAgICAgXHR3aWR0aDo0MnB4O1xyXG5cdFx0XHQgICAgICAgIFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGltZ3tcclxuXHRcdFx0ICAgICAgICBcdHdpZHRoOjEwMCU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5jYXRlZ29yeXtcclxuXHRcdFx0ICAgICAgICBcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojYTNhM2EzO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wNHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5pdGVte1xyXG5cdFx0XHQgICAgICAgIFx0Zm9udC1zaXplOjE4cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiM2MTYxNjE7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOi0wLjA0cHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246bGVmdDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICBgfTwvc3R5bGU+XHJcblx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgKTtcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\catalogue\\content\\Card.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.bacd4b03bd7ccd4058e5.hot-update.js.map