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
      var _props = this.props,
          event = _props.event,
          currentpagenumber = _props.currentpagenumber;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-1252905796"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_2__assets_icons_arrow_right_svg___default.a,
        alt: "P\xE1gina siguiente",
        onClick: function onClick(e) {
          return event('nextPage');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-1252905796"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_arrow_left_svg___default.a,
        alt: "P\xE1gina anterior",
        onClick: function onClick(e) {
          return event('prevPage');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1252905796"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1252905796",
        css: "img.jsx-1252905796{float:right;padding-left:12px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcb3B0aW9uc1xcUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlc0IsQUFHd0IsWUFDTSxrQkFDSCxlQUNmIiwiZmlsZSI6ImNvbXBvbmVudHNcXGNhdGFsb2d1ZVxcb3B0aW9uc1xcUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJFOlxcRG9jdW1lbnRvc1xcUHJveWVjdG9zXFxBZXJvbGFiXFxhcHAiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBc3NldHNcclxuaW1wb3J0IHJpZ2h0IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmcnXHJcbmltcG9ydCBsZWZ0IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1sZWZ0LnN2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0ICAgIHN1cGVyKHByb3BzKVxyXG5cdH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgIFx0Y29uc3Qge2V2ZW50LCBjdXJyZW50cGFnZW51bWJlcn0gPSB0aGlzLnByb3BzICAgIFx0XHJcblxyXG5cdCAgICByZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdj4gXHJcblx0ICAgICAgICBcdDxpbWcgc3JjPXtyaWdodH0gYWx0PVwiUMOhZ2luYSBzaWd1aWVudGVcIiBvbkNsaWNrPXtlID0+IGV2ZW50KCduZXh0UGFnZScpfSAvPiBcdFxyXG5cdCAgICAgICAgXHQ8aW1nIHNyYz17bGVmdH0gYWx0PVwiUMOhZ2luYSBhbnRlcmlvclwiIG9uQ2xpY2s9e2UgPT4gZXZlbnQoJ3ByZXZQYWdlJyl9IC8+XHQgICAgICAgIFx0ICAgXHJcblx0ICAgICAgICBcdDxzdHlsZSBqc3g+e2BcclxuXHQgICAgICAgIFx0XHRpbWd7XHJcblx0ICAgICAgICBcdFx0XHRmbG9hdDpyaWdodDtcclxuXHQgICAgICAgIFx0XHRcdHBhZGRpbmctbGVmdDoxMnB4O1xyXG5cdCAgICAgICAgXHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0ICAgICAgICBcdFx0fVxyXG5cdCAgICAgICAgXHRgfTwvc3R5bGU+ICAgICAgXHJcblx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgKTtcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\catalogue\\options\\Pagination.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.9ed1d5519732bb1bd01e.hot-update.js.map