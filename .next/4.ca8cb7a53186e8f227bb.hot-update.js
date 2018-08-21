webpackHotUpdate(4,{

/***/ "./components/catalogue/content/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Card__ = __webpack_require__("./components/catalogue/content/Card.js");
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\catalogue\\content\\index.js";



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

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var currentProducts = this.props.currentProducts;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-4226700395" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-4226700395" + " " + "grid-container"
      }, currentProducts.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Card__["a" /* default */], {
          item: item,
          key: item._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4226700395",
        css: ".content.jsx-4226700395{width:100%;float:left;padding-bottom:60px;}.grid-container.jsx-4226700395{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-gap:25px 25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3lCLEFBRzBCLEFBS0csV0FKSCxFQUtrRCxTQUp4QyxvQkFDckIsNkJBSXVCLG1CQUMxQiIsImZpbGUiOiJjb21wb25lbnRzXFxjYXRhbG9ndWVcXGNvbnRlbnRcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6XFxEb2N1bWVudG9zXFxQcm95ZWN0b3NcXEFlcm9sYWJcXGFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHQgICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgIFx0Y29uc3Qge2N1cnJlbnRQcm9kdWN0c30gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgXHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG5cdFx0ICAgICAgICAgICAgeyBjdXJyZW50UHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHQgICAgICAgIFx0PENhcmQgaXRlbT17aXRlbX0ga2V5PXtpdGVtLl9pZH0gLz5cclxuXHRcdFx0ICAgICAgXHQpKX1cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblx0ICAgICAgICAgICAgXHQuY29udGVudHtcclxuXHQgICAgICAgICAgICBcdFx0d2lkdGg6MTAwJTtcclxuXHQgICAgICAgICAgICBcdFx0ZmxvYXQ6bGVmdDtcclxuXHQgICAgICAgICAgICBcdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XHJcblx0ICAgICAgICAgICAgXHR9XHJcblx0XHRcdCAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuXHRcdFx0ICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0ICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjYwcHgsIDFmcikpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyNXB4IDI1cHg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdCAgICAgICAgPC9kaXY+ICAgICAgIFxyXG5cdCAgICApO1x0XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */\n/*@ sourceURL=components\\catalogue\\content\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.ca8cb7a53186e8f227bb.hot-update.js.map