webpackHotUpdate(4,{

/***/ "./components/catalogue/options/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_arrow_right_svg__ = __webpack_require__("./assets/icons/arrow-right.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icons_arrow_right_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_icons_arrow_right_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_arrow_left_svg__ = __webpack_require__("./assets/icons/arrow-left.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_arrow_left_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_icons_arrow_left_svg__);
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\catalogue\\options\\Pagination.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Assets



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
      console.log(this);
      var _props = this.props,
          event = _props.event,
          currentpagenumber = _props.currentpagenumber;
      console.log('aca current', currentpagenumber);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-1252905796"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_arrow_right_svg___default.a,
        alt: "P\xE1gina siguiente",
        onClick: event,
        currentpagenumber: currentpagenumber + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1252905796"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_arrow_left_svg___default.a,
        alt: "P\xE1gina anterior",
        onClick: event,
        currentpagenumber: currentpagenumber - 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1252905796"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1252905796",
        css: "img.jsx-1252905796{float:right;padding-left:12px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcb3B0aW9uc1xcUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnNCLEFBR3dCLFlBQ00sa0JBQ0gsZUFDZiIsImZpbGUiOiJjb21wb25lbnRzXFxjYXRhbG9ndWVcXG9wdGlvbnNcXFBhZ2luYXRpb24uanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXNzZXRzXHJcbmltcG9ydCByaWdodCBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnJ1xyXG5pbXBvcnQgbGVmdCBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5zdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdCAgICBzdXBlcihwcm9wcylcclxuXHR9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcdGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICBcdGNvbnN0IHtldmVudCwgY3VycmVudHBhZ2VudW1iZXJ9ID0gdGhpcy5wcm9wc1xyXG4gICAgXHRjb25zb2xlLmxvZygnYWNhIGN1cnJlbnQnLCBjdXJyZW50cGFnZW51bWJlcilcclxuXHQgICAgcmV0dXJuIChcclxuXHQgICAgICAgIDxkaXY+IFxyXG5cdCAgICAgICAgXHQ8aW1nIHNyYz17cmlnaHR9IGFsdD1cIlDDoWdpbmEgc2lndWllbnRlXCIgb25DbGljaz17ZXZlbnR9IGN1cnJlbnRwYWdlbnVtYmVyPXtjdXJyZW50cGFnZW51bWJlciArIDF9IC8+IFx0XHJcblx0ICAgICAgICBcdDxpbWcgc3JjPXtsZWZ0fSBhbHQ9XCJQw6FnaW5hIGFudGVyaW9yXCIgb25DbGljaz17ZXZlbnR9IGN1cnJlbnRwYWdlbnVtYmVyPXtjdXJyZW50cGFnZW51bWJlciAtIDF9Lz5cdCAgICAgICAgXHQgICBcclxuXHQgICAgICAgIFx0PHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgXHRcdGltZ3tcclxuXHQgICAgICAgIFx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdCAgICAgICAgXHRcdFx0cGFkZGluZy1sZWZ0OjEycHg7XHJcblx0ICAgICAgICBcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHQgICAgICAgIFx0XHR9XHJcblx0ICAgICAgICBcdGB9PC9zdHlsZT4gICAgICBcclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgICApO1xyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=components\\catalogue\\options\\Pagination.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.eafb4f35d034f42492f9.hot-update.js.map