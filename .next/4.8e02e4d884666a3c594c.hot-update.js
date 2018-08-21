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
      console.log(item);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-2574575944"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-2574575944" + " " + 'card'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-2574575944" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2574575944" + " " + "price"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2574575944"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2574575944"
      }, item.cost), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2574575944"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-2574575944" + " " + "insufficient"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2574575944"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2574575944"
      }, "You need 8000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2574575944"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2574575944" + " " + "buy"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: item.img.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2574575944"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2574575944"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-2574575944" + " " + "category"
      }, item.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-2574575944" + " " + "item"
      }, item.name))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2574575944",
        css: ".content.jsx-2574575944{padding:25px;}.card.jsx-2574575944{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}.card.jsx-2574575944:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}hr.jsx-2574575944{border-top:1px solid #d9d9d9;}.price.jsx-2574575944{float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.price.jsx-2574575944 div.jsx-2574575944{font-size:14px;color:#616161;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}.price.jsx-2574575944 img.jsx-2574575944{width:20px;position:relative;top:6px;left:6px;}.insufficient.jsx-2574575944{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.insufficient.jsx-2574575944 div.jsx-2574575944{font-size:14px;color:#ffffff;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}.insufficient.jsx-2574575944 img.jsx-2574575944{width:20px;position:relative;top:6px;left:6px;}.buy.jsx-2574575944{cursor:pointer;width:42px;float:right;}img.jsx-2574575944{width:100%;}.category.jsx-2574575944{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}.item.jsx-2574575944{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnlCLEFBRzRCLEFBR0csQUFLc0IsQUFLWCxBQUd4QixBQUlZLEFBT0osQUFNRixBQVNNLEFBT0osQUFNQyxBQUtKLEFBR0ksQUFNQSxXQXpDTyxBQXNCQSxBQVd0QixDQTVDVyxBQWlCRSxDQWpDVixFQW9CSyxBQXNCQSxBQWFHLEFBUUgsQUFNQSxJQWxFNEIsT0FxRHhCLEdBM0NaLEFBUWlCLEFBT1gsQUFlVyxBQU9YLEFBY1csQUFNQSxFQXBDSCxNQUxQLEFBc0JBLENBTVAsRUFqRG1CLE1Bc0JuQixBQXNCQSxLQWpCTSxVQS9CRCxFQWdDQyxTQS9CTixHQWdDTSxTQTVCaUIsRUFRdkIsQ0FxQlcsbURBaEJTLEFBc0JBLEFBcUJWLEFBTUEsZ0JBTFYsQUFNQSxDQWpEcUIsQUFzQkEsTUFOckIsQ0E3QkEsT0FjQSxBQXNCQSIsImZpbGUiOiJjb21wb25lbnRzXFxjYXRhbG9ndWVcXGNvbnRlbnRcXENhcmQuanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXNzZXRzXHJcbmltcG9ydCBidXkgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2J1eS1ibHVlLnN2ZydcclxuaW1wb3J0IGNvaW4gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvaW4uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0RnVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcdGNvbnN0IHtpdGVtfSA9IHRoaXMucHJvcHNcclxuICAgIFx0Y29uc29sZS5sb2coaXRlbSlcclxuXHQgICAgcmV0dXJuIChcclxuXHQgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPiAgICAgICAgIFx0XHJcblx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICBcdFx0XHRcdDxkaXY+PHNwYW4+e2l0ZW0uY29zdH08L3NwYW4+PGltZyBzcmM9e2NvaW59IGFsdD1cImNvaW5cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1ZmZpY2llbnRcIj5cclxuICAgICAgICAgICAgXHRcdFx0XHQ8ZGl2PjxzcGFuPllvdSBuZWVkIDgwMDA8L3NwYW4+PGltZyBzcmM9e2NvaW59IGFsdD1cImNvaW5cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PGltZyBjbGFzc05hbWU9XCJidXlcIiBzcmM9e2J1eX0gLz5cclxuICAgICAgICAgICAgXHRcdFx0PGltZyBzcmM9e2l0ZW0uaW1nLnVybH0gLz5cclxuXHRcdCAgICAgICAgICAgIFx0PGhyIC8+XHJcblx0XHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57aXRlbS5jYXRlZ29yeX08L2Rpdj5cclxuXHRcdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+e2l0ZW0ubmFtZX08L2Rpdj5cclxuXHQgICAgICAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHQgICAgICAgICAgICBcdC5jb250ZW50e1xyXG5cdCAgICAgICAgICAgIFx0XHRwYWRkaW5nOjI1cHg7XHJcblx0ICAgICAgICAgICAgXHR9XHJcblx0XHRcdCAgICAgICAgLmNhcmR7XHJcblx0XHRcdCAgICAgICAgXHRiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6MnB4IDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2FyZDpob3ZlcntcclxuXHRcdFx0ICAgICAgICBcdGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcblx0XHRcdCAgICAgICAgXHR0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBocntcclxuXHRcdFx0ICAgICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAucHJpY2V7XHRcdFxyXG5cdFx0XHRcdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAucHJpY2UgZGl2e1xyXG5cdFx0XHQgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzYxNjE2MTtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDNweDtcclxuXHRcdFx0ICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDJweDsgICBcclxuXHRcdCAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgICBcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLnByaWNlIGltZ3tcclxuXHRcdFx0ICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuXHRcdFx0ICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRcdFx0XHRcdHRvcDogNnB4O1xyXG4gICAgXHRcdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudHtcclxuXHRcdFx0ICAgICAgICBcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM2MTYxNjE7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjE0MnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NDJweDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdFx0XHQgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudCBkaXZ7XHJcblx0XHRcdCAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojZmZmZmZmO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wM3B4O1xyXG5cdFx0XHQgICAgICAgICAgICBsaW5lLWhlaWdodDo0MnB4OyAgIFxyXG5cdFx0ICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyAgIFxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuaW5zdWZmaWNpZW50IGltZ3tcclxuXHRcdFx0ICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuXHRcdFx0ICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRcdFx0XHRcdHRvcDogNnB4O1xyXG4gICAgXHRcdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmJ1eXtcclxuXHRcdFx0ICAgICAgICBcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHQgICAgICAgIFx0d2lkdGg6NDJweDtcclxuXHRcdFx0ICAgICAgICBcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBpbWd7XHJcblx0XHRcdCAgICAgICAgXHR3aWR0aDoxMDAlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2F0ZWdvcnl7XHJcblx0XHRcdCAgICAgICAgXHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2EzYTNhMztcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDRweDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuaXRlbXtcclxuXHRcdFx0ICAgICAgICBcdGZvbnQtc2l6ZToxOHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojNjE2MTYxO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wNHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdCAgICAgICAgPC9kaXY+XHJcblx0ICAgICk7XHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\catalogue\\content\\Card.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.8e02e4d884666a3c594c.hot-update.js.map