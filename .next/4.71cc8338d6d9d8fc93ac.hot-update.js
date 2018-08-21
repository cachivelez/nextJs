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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      activeItem: 'Most recent'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var currentProducts = this.props.currentProducts;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-4226700395" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-4226700395" + " " + "grid-container"
      }, currentProducts.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Card__["a" /* default */], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4226700395",
        css: ".content.jsx-4226700395{width:100%;float:left;padding-bottom:60px;}.grid-container.jsx-4226700395{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-gap:25px 25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcY29udGVudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J5QixBQUcwQixBQUtHLFdBSkgsRUFLa0QsU0FKeEMsb0JBQ3JCLDZCQUl1QixtQkFDMUIiLCJmaWxlIjoiY29tcG9uZW50c1xcY2F0YWxvZ3VlXFxjb250ZW50XFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcRG9jdW1lbnRvc1xcUHJveWVjdG9zXFxBZXJvbGFiXFxhcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1x0XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdNb3N0IHJlY2VudCdcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBcdGNvbnN0IHtjdXJyZW50UHJvZHVjdHN9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIFx0cmV0dXJuIChcclxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuXHRcdCAgICAgICAgICAgIHsgY3VycmVudFByb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0ICAgICAgICBcdDxDYXJkIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IC8+XHJcblx0XHRcdCAgICAgIFx0KSl9XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgICAgIFx0LmNvbnRlbnR7XHJcblx0ICAgICAgICAgICAgXHRcdHdpZHRoOjEwMCU7XHJcblx0ICAgICAgICAgICAgXHRcdGZsb2F0OmxlZnQ7XHJcblx0ICAgICAgICAgICAgXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG5cdCAgICAgICAgICAgIFx0fVxyXG5cdFx0XHQgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcblx0XHRcdCAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdCAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuXHRcdCAgICAgICAgICAgICAgICBncmlkLWdhcDogMjVweCAyNXB4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgIGB9PC9zdHlsZT5cclxuXHQgICAgICAgIDwvZGl2PiAgICAgICBcclxuXHQgICAgKTtcdFxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */\n/*@ sourceURL=components\\catalogue\\content\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.71cc8338d6d9d8fc93ac.hot-update.js.map