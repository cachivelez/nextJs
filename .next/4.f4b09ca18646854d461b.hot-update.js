webpackHotUpdate(4,{

/***/ "./components/catalogue/options/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chip__ = __webpack_require__("./components/catalogue/options/Chip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pagination__ = __webpack_require__("./components/catalogue/options/Pagination.js");
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\catalogue\\options\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          total = _props.total,
          section = _props.section,
          actual = _props.actual,
          event = _props.event,
          currentPageNumber = _props.currentPageNumber;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-1358827268"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-1358827268" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-1358827268" + " " + "amount"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1358827268"
      }, actual, " of ", total, " products")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-1358827268" + " " + ((section !== 'header' ? 'disabled' : '') || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1358827268" + " " + "sort"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1358827268" + " " + "Disabled"
      }, "Sort by:")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1358827268" + " " + "options grid"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Chip__["a" /* default */], {
        title: "Most recent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Chip__["a" /* default */], {
        title: "Lowest price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Chip__["a" /* default */], {
        title: "Highest price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1358827268" + " " + "pagination"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Pagination__["a" /* default */], {
        event: event,
        currentPageNumber: currentPageNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1358827268",
        css: ".content.jsx-1358827268{font-size:24px;color:#616161;font-weigth:regular;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;float:left;width:100%;padding-bottom:24px;margin-bottom:42px;border-bottom:1px solid #d9d9d9;}.amount.jsx-1358827268{float:left;padding-right:24px;}.sort.jsx-1358827268{float:left;font-size:24px;color:#a3a3a3;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;border-left:1px solid #d9d9d9;}.sort.jsx-1358827268 span.jsx-1358827268{padding:0 24px;}.options.jsx-1358827268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;float:left;}.pagination.jsx-1358827268{float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcb3B0aW9uc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEI0QixBQUd3QixBQWFXLEFBSUEsQUFTSSxBQUdELEFBS0YsV0FwQk8sQUFJSixDQWlCRCxHQWxDZixBQTBCRixXQVJpQixHQWpCVCxDQWFSLFVBSzBCLFNBakJmLHlCQTJCUSxZQU1uQiw2Q0FMYyxXQUNkLE9BWG9CLFNBakJmLFFBa0JjLFNBakJmLE9Ba0I4QixTQWpCbkIsV0FDQSxVQWlCZixDQWhCd0Isb0JBQ0QsbUJBQ2EsZ0NBQzFDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcb3B0aW9uc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoaXAgZnJvbSAnLi9DaGlwJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7ICBcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b3RhbCwgc2VjdGlvbiwgYWN0dWFsLCBldmVudCwgY3VycmVudFBhZ2VOdW1iZXIgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FjdHVhbH0gb2Yge3RvdGFsfSBwcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbiAhPT0gJ2hlYWRlcicgPyAnZGlzYWJsZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkRpc2FibGVkXCI+U29ydCBieTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdGl0bGU9XCJNb3N0IHJlY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCB0aXRsZT1cIkxvd2VzdCBwcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCB0aXRsZT1cIkhpZ2hlc3QgcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gZXZlbnQ9e2V2ZW50fSBjdXJyZW50UGFnZU51bWJlcj17Y3VycmVudFBhZ2VOdW1iZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFx0XHQgICAgICAgIC5jb250ZW50e1xyXG4gICAgXHRcdFx0XHRcdGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgXHRcdFx0XHRcdGNvbG9yOiM2MTYxNjE7XHJcbiAgICBcdFx0XHRcdFx0Zm9udC13ZWlndGg6cmVndWxhcjtcclxuICAgIFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzotMC4xNXB4O1xyXG4gICAgXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjQ4cHg7XHJcbiAgICBcdFx0XHRcdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkOWQ5OyAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdCAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hbW91bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNvcnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojYTNhM2EzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC4xNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb25ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHQgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\catalogue\\options\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.f4b09ca18646854d461b.hot-update.js.map