webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_LayoutFull__ = __webpack_require__("./components/layout/LayoutFull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__("./pages/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hero__ = __webpack_require__("./components/hero/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_catalogue__ = __webpack_require__("./components/catalogue/index.js");

var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // components




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, _ref2, _ref3, reqUser, reqProducts, user, products;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([fetch("https://aerolab-challenge.now.sh/user/me?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk"), fetch("https://aerolab-challenge.now.sh/products?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk")]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                reqUser = _ref3[0];
                reqProducts = _ref3[1];

                if (!(reqUser.status >= 400)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", {
                  user: null,
                  products: null,
                  statusCode: req.status
                });

              case 10:
                _context.next = 12;
                return reqUser.json();

              case 12:
                user = _context.sent;
                _context.next = 15;
                return reqProducts.json();

              case 15:
                products = _context.sent;
                return _context.abrupt("return", {
                  user: user,
                  products: products,
                  statusCode: 200
                });

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  user: null,
                  products: null,
                  statusCode: 503
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 19]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.handleClickAddCoins = _this.handleClickAddCoins.bind(_assertThisInitialized(_this));
    _this.state = {
      user: _this.props.user,
      products: _this.props.products,
      statusCode: _this.props.statusCode
    };
    return _this;
  }

  _createClass(_default, [{
    key: "handleClickAddCoins",
    value: function () {
      var _handleClickAddCoins = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(arg) {
        var reqPoints, coins;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch('https://aerolab-challenge.now.sh/user/points', {
                  method: 'POST',
                  body: JSON.stringify({
                    amount: 1000
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk'
                  }
                });

              case 3:
                reqPoints = _context2.sent;

                if (reqPoints.status >= 400) {
                  alert('Error');
                }

                _context2.next = 7;
                return reqPoints.json();

              case 7:
                coins = _context2.sent;
                alert(coins.message);
                this.props.user.points = this.props.user.points + 1000;
                this.setState({
                  user: this.props.user
                });
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                alert('Error');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      return function handleClickAddCoins(_x2) {
        return _handleClickAddCoins.apply(this, arguments);
      };
    }()
  }, {
    key: "handleClickRemoveCoins",
    value: function handleClickRemoveCoins(coins) {
      this.props.user.points = this.props.user.points - coins;
      this.setState({
        user: this.props.user
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          user = _state.user,
          products = _state.products,
          statusCode = _state.statusCode;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__error__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout_LayoutFull__["a" /* default */], {
        user: user.name,
        coins: user.points,
        title: "Catalogue",
        eventAddCoins: this.handleClickAddCoins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_hero__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_catalogue__["a" /* default */], {
        user: user,
        products: products,
        eventRemoveCoins: this.handleClickRemoveCoins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.ebf32b673e44e6edfbf4.hot-update.js.map