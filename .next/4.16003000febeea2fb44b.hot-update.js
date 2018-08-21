webpackHotUpdate(4,{

/***/ "./components/layout/LayoutFull.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutFull; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_aerolab_logo_svg__ = __webpack_require__("./assets/aerolab-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_aerolab_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_aerolab_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_icons_coin_svg__ = __webpack_require__("./assets/icons/coin.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_icons_coin_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_icons_coin_svg__);
var _jsxFileName = "E:\\Documentos\\Proyectos\\Aerolab\\app\\components\\layout\\LayoutFull.js";



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
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          user = _props.user,
          coins = _props.coins;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-511760037"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-511760037"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-511760037"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-511760037"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-511760037" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-511760037"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__assets_aerolab_logo_svg___default.a,
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-511760037" + " " + "logo"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-511760037" + " " + "user-info"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-511760037" + " " + "user"
      }, user), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-511760037" + " " + "coins"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-511760037"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-511760037"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-511760037"
      }, coins), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_5__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-511760037"
      }))))))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2857286828",
        css: "header.jsx-511760037{background:#fff;position:fixed;width:100%;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);z-index:99;}.content.jsx-511760037{padding:16px 42px;}.logo.jsx-511760037{width:48px;}.user-info.jsx-511760037{float:right;}.user.jsx-511760037{float:left;font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;margin-right:18px;}.coins.jsx-511760037{float:right;background:#ededed;border-radius:100px;width:103px;height:48px;margin:0 auto;}.coins.jsx-511760037 div.jsx-511760037{font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;margin-left:10px;}.coins.jsx-511760037 img.jsx-511760037{position:absolute;top:calc(48px /2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0RnVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBRzJCLEFBT0UsQUFHUixBQUdDLEFBR0QsQUFTQyxBQVFHLEFBT0ksV0E3QnBCLEFBTWdCLENBSGhCLEFBWW9CLEdBUUwsQ0FqQ0MsRUFPaEIsQUFpQ29CLFFBdkJMLEdBaUJTLEVBakNaLEFBeUJTLEtBZXJCLElBdkJ3QixFQWhCbUIsU0F5QjlCLFlBQ0EsWUFDRyxTQTFCSixLQTJCWixNQTFCQSwyQ0ErQmtCLFdBaEJBLE1BaUJDLFdBaEJGLE1BaUJqQixVQWhCbUIsa0JBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0RnVsbC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcRG9jdW1lbnRvc1xcUHJveWVjdG9zXFxBZXJvbGFiXFxhcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpbmt9IGZyb20nLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9hZXJvbGFiLWxvZ28uc3ZnJ1xyXG5pbXBvcnQgY29pbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvY29pbi5zdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXRGdWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgdXNlciwgY29pbnMgfSA9IHRoaXMucHJvcHNcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+ICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+ICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPnt1c2VyfTwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvaW5zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj48ZGl2PjxzcGFuPntjb2luc308L3NwYW4+PGltZyBzcmM9e2NvaW59IGFsdD1cImNvaW5cIiAvPjwvZGl2PjwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7IGNoaWxkcmVuIH0gXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OjJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgICAgICAgIHotaW5kZXg6OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgcGFkZGluZzogMTZweCA0MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nb3sgIFxyXG4gICAgICAgICAgd2lkdGg6NDhweDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlcntcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgIGNvbG9yOiM2MTYxNjE7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC4xNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6NDhweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDoxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29pbnN7XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I2VkZWRlZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgICAgICAgICB3aWR0aDoxMDNweDtcclxuICAgICAgICAgIGhlaWdodDo0OHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2lucyBkaXZ7XHJcbiAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgIGNvbG9yOiM2MTYxNjE7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzotMC4xNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6NDhweDsgICBcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvaW5zIGltZ3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogY2FsYyg0OHB4IC8yKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86NDAwLDcwMCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nOjY3cHggMTMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNhYmxlZHtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgICAudXNlcntcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\layout\\LayoutFull.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1032374624",
        css: "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');body{margin:0;font-family:'Source Sans Pro',sans-serif;background:white;}.container{padding:67px 132px;}.disabled{display:none;}@media only screen and (max-width:600px){.container{padding:15px;}.user{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0RnVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnlCLEFBRXVGLEFBRW5FLEFBS1MsQUFHTixBQUlFLEFBR0EsU0FkNEIsSUFRNUMsQUFJRSxBQUdBLE1BVkYsK0JBSm1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXRcXExheW91dEZ1bGwuanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vIEFzc2V0c1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvYWVyb2xhYi1sb2dvLnN2ZydcclxuaW1wb3J0IGNvaW4gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2NvaW4uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0RnVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUsIHVzZXIsIGNvaW5zIH0gPSB0aGlzLnByb3BzXHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj57dXNlcn08L2Rpdj4gICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2luc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+PGRpdj48c3Bhbj57Y29pbnN9PC9zcGFuPjxpbWcgc3JjPXtjb2lufSBhbHQ9XCJjb2luXCIgLz48L2Rpdj48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgeyBjaGlsZHJlbiB9IFxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzoycHggMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHggNDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297ICBcclxuICAgICAgICAgIHdpZHRoOjQ4cHg7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXJ7XHJcbiAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICBjb2xvcjojNjE2MTYxO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OjQ4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvaW5ze1xyXG4gICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNlZGVkZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6MTAzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDhweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29pbnMgZGl2e1xyXG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICBjb2xvcjojNjE2MTYxO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OjQ4cHg7ICAgXHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2lucyBpbWd7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IGNhbGMoNDhweCAvMik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjQwMCw3MDAnKTtcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgcGFkZGluZzo2N3B4IDEzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzYWJsZWR7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgLnVzZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgIH0gICBcclxuICAgICAgICB9IFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\layout\\LayoutFull.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.16003000febeea2fb44b.hot-update.js.map