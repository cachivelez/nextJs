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
        className: "jsx-2864949077"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-2864949077" + " " + 'card'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-2864949077" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2864949077" + " " + "price"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2864949077"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2864949077"
      }, item.cost), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-2864949077"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-2864949077" + " " + "insufficient"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2864949077"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2864949077"
      }, "You need 8000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2864949077"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_buy_blue_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2864949077" + " " + "buy"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: item.img.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2864949077"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2864949077"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-2864949077" + " " + "category"
      }, item.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-2864949077" + " " + "item"
      }, item.name))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2864949077",
        css: ".content.jsx-2864949077{padding:25px;}.card.jsx-2864949077{background:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);width:100%;}.card.jsx-2864949077:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);-webkit-transition:all 1s;transition:all 1s;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}hr.jsx-2864949077{border-top:1px solid #d9d9d9;}.price.jsx-2864949077{width:142px;height:42px;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.price.jsx-2864949077 div.jsx-2864949077{font-size:14px;color:#ffffff;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}.price.jsx-2864949077 img.jsx-2864949077{width:20px;position:relative;top:6px;left:6px;}.insufficient.jsx-2864949077{opacity:0.8;background:#616161;border-radius:100px;width:142px;height:42px;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.insufficient.jsx-2864949077 div.jsx-2864949077{font-size:14px;color:#ffffff;-webkit-letter-spacing:-0.03px;-moz-letter-spacing:-0.03px;-ms-letter-spacing:-0.03px;letter-spacing:-0.03px;line-height:42px;margin:0 auto;}.insufficient.jsx-2864949077 img.jsx-2864949077{width:20px;position:relative;top:6px;left:6px;}.buy.jsx-2864949077{cursor:pointer;width:42px;float:right;}img.jsx-2864949077{width:100%;}.category.jsx-2864949077{font-size:16px;color:#a3a3a3;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}.item.jsx-2864949077{font-size:18px;color:#616161;-webkit-letter-spacing:-0.04px;-moz-letter-spacing:-0.04px;-ms-letter-spacing:-0.04px;letter-spacing:-0.04px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnlCLEFBRzRCLEFBR0csQUFLc0IsQUFLWCxBQUd4QixBQU1ZLEFBT0osQUFNRixBQVNNLEFBT0osQUFNQyxBQUtKLEFBR0ksQUFNQSxXQXpDTyxBQXNCQSxBQVd0QixDQTlDTSxBQW1CTyxDQW5DVixFQXNCSyxBQXNCQSxBQWFHLEFBUUgsQUFNQSxJQXBFNEIsS0FjOUIsRUF5Q00sR0E3Q1osQUFVaUIsQUFPWCxBQWVXLEFBT1gsQUFjVyxBQU1BLEVBcENILEtBbEJILENBYUosQUFzQkEsQ0FNUCxFQW5EbUIsTUF3Qm5CLEFBc0JBLEtBakJNLFVBakNELEVBa0NDLFNBakNOLEdBa0NNLFNBOUJpQixHQStCWix1QkFyQlgsNEJBS29CLEFBc0JBLEFBcUJWLEFBTUEsZ0JBTFYsQUFNQSxDQWpEcUIsQUFzQkEsTUFOckIsQ0EvQkEsT0FnQkEsQUFzQkEiLCJmaWxlIjoiY29tcG9uZW50c1xcY2F0YWxvZ3VlXFxjb250ZW50XFxDYXJkLmpzIiwic291cmNlUm9vdCI6IkU6XFxEb2N1bWVudG9zXFxQcm95ZWN0b3NcXEFlcm9sYWJcXGFwcCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFzc2V0c1xyXG5pbXBvcnQgYnV5IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9idXktYmx1ZS5zdmcnXHJcbmltcG9ydCBjb2luIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2luLnN2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dEZ1bGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgXHRjb25zdCB7aXRlbX0gPSB0aGlzLnByb3BzXHJcbiAgICBcdGNvbnNvbGUubG9nKGl0ZW0pXHJcblx0ICAgIHJldHVybiAoXHJcblx0ICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz4gICAgICAgICBcdFxyXG5cdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgXHRcdFx0XHQ8ZGl2PjxzcGFuPntpdGVtLmNvc3R9PC9zcGFuPjxpbWcgc3JjPXtjb2lufSBhbHQ9XCJjb2luXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zdWZmaWNpZW50XCI+XHJcbiAgICAgICAgICAgIFx0XHRcdFx0PGRpdj48c3Bhbj5Zb3UgbmVlZCA4MDAwPC9zcGFuPjxpbWcgc3JjPXtjb2lufSBhbHQ9XCJjb2luXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdDxpbWcgY2xhc3NOYW1lPVwiYnV5XCIgc3JjPXtidXl9IC8+XHJcbiAgICAgICAgICAgIFx0XHRcdDxpbWcgc3JjPXtpdGVtLmltZy51cmx9IC8+XHJcblx0XHQgICAgICAgICAgICBcdDxociAvPlxyXG5cdFx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2l0ZW0uY2F0ZWdvcnl9PC9kaXY+XHJcblx0XHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPntpdGVtLm5hbWV9PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblx0ICAgICAgICAgICAgXHQuY29udGVudHtcclxuXHQgICAgICAgICAgICBcdFx0cGFkZGluZzoyNXB4O1xyXG5cdCAgICAgICAgICAgIFx0fVxyXG5cdFx0XHQgICAgICAgIC5jYXJke1xyXG5cdFx0XHQgICAgICAgIFx0YmFja2dyb3VuZDojZmZmZmZmO1xyXG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OjJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcblx0XHRcdCAgICAgICAgXHRib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG5cdFx0XHQgICAgICAgIFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgIFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaHJ7XHJcblx0XHRcdCAgICAgICAgXHRib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLnByaWNle1x0XHRcdCAgICAgICAgXHRcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTQycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDo0MnB4O1xyXG5cdFx0XHRcdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAucHJpY2UgZGl2e1xyXG5cdFx0XHQgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2ZmZmZmZjtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDNweDtcclxuXHRcdFx0ICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDJweDsgICBcclxuXHRcdCAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgICBcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLnByaWNlIGltZ3tcclxuXHRcdFx0ICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuXHRcdFx0ICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRcdFx0XHRcdHRvcDogNnB4O1xyXG4gICAgXHRcdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudHtcclxuXHRcdFx0ICAgICAgICBcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM2MTYxNjE7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjE0MnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NDJweDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdFx0XHQgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmluc3VmZmljaWVudCBkaXZ7XHJcblx0XHRcdCAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojZmZmZmZmO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wM3B4O1xyXG5cdFx0XHQgICAgICAgICAgICBsaW5lLWhlaWdodDo0MnB4OyAgIFxyXG5cdFx0ICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyAgIFxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuaW5zdWZmaWNpZW50IGltZ3tcclxuXHRcdFx0ICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuXHRcdFx0ICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRcdFx0XHRcdHRvcDogNnB4O1xyXG4gICAgXHRcdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLmJ1eXtcclxuXHRcdFx0ICAgICAgICBcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHQgICAgICAgIFx0d2lkdGg6NDJweDtcclxuXHRcdFx0ICAgICAgICBcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBpbWd7XHJcblx0XHRcdCAgICAgICAgXHR3aWR0aDoxMDAlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2F0ZWdvcnl7XHJcblx0XHRcdCAgICAgICAgXHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2EzYTNhMztcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6LTAuMDRweDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuaXRlbXtcclxuXHRcdFx0ICAgICAgICBcdGZvbnQtc2l6ZToxOHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojNjE2MTYxO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4wNHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdCAgICAgICAgPC9kaXY+XHJcblx0ICAgICk7XHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\catalogue\\content\\Card.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.867d6a189df32da88de9.hot-update.js.map