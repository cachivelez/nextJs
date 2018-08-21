webpackHotUpdate(4,{

/***/ "./components/catalogue/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__("./components/catalogue/options/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__("./components/catalogue/content/index.js");
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\catalogue\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      itemsPerPage: 15,
      currentpagenumber: 1,
      activeItem: 'Most recent',
      products: _this.props.products
    };
    _this.handleClickPagination = _this.handleClickPagination.bind(_assertThisInitialized(_this));
    _this.handleClickSort = _this.handleClickSort.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "handleClickSort",
    value: function handleClickSort(arg) {
      var products = this.state.products;
      var productsAux;

      switch (arg.title) {
        case "Lowest price":
          {
            productsAux = [];
          }

        case "Highest price":
          {
            productsAux = [];
          }

        default:
          productsAux = products;
      }

      console.log(productsAux);
      this.setState({
        activeItem: arg.title,
        products: productsAux
      });
    }
  }, {
    key: "handleClickPagination",
    value: function handleClickPagination(arg) {
      var currentpagenumber = this.state.currentpagenumber;
      var newPage = arg == 'nextPage' ? currentpagenumber + 1 : currentpagenumber - 1;
      this.setState({
        currentpagenumber: Number(newPage)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          products = _state.products,
          currentpagenumber = _state.currentpagenumber,
          itemsPerPage = _state.itemsPerPage,
          activeItem = _state.activeItem; // paginado

      var totalProducts = products.length;
      var indexOfLastProducts = currentpagenumber * itemsPerPage;
      var indexOfFirstProducts = indexOfLastProducts - itemsPerPage;
      var currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
      var lastPage = Math.ceil(totalProducts / itemsPerPage);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */], {
        eventSort: this.handleClickSort,
        activeItem: activeItem,
        section: "header",
        actual: currentProducts.length,
        total: totalProducts,
        event: this.handleClickPagination,
        currentpagenumber: currentpagenumber,
        lastPage: lastPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__content__["a" /* default */], {
        currentProducts: currentProducts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */], {
        section: "footer",
        actual: currentProducts.length,
        total: totalProducts,
        event: this.handleClickPagination,
        currentpagenumber: currentpagenumber,
        lastPage: lastPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.75d0798a119e9923f021.hot-update.js.map