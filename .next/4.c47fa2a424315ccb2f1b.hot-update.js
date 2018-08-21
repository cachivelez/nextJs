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
        className: "jsx-45301460"
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
        className: "jsx-45301460"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-45301460"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-45301460"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-45301460" + " " + "content"
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
        className: "jsx-45301460"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__assets_aerolab_logo_svg___default.a,
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-45301460" + " " + "logo"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-45301460" + " " + "user-info"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-45301460" + " " + "user"
      }, user), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-45301460" + " " + "coins"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-45301460"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-45301460"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-45301460"
      }, coins), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_5__assets_icons_coin_svg___default.a,
        alt: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-45301460"
      }))))))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3892161213",
        css: "header.jsx-45301460{background:#fff;position:fixed;width:100%;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);z-index:99;}.content.jsx-45301460{padding:16px 42px;}.logo.jsx-45301460{width:48px;}.user-info.jsx-45301460{float:right;}.user.jsx-45301460{float:left;font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;text-align:left;margin-right:18px;}.coins.jsx-45301460{float:right;background:#ededed;border-radius:100px;width:103px;height:48px;margin:0 auto;}.coins.jsx-45301460 div.jsx-45301460{font-size:24px;color:#616161;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;line-height:48px;margin-left:0px;text-align:right;}.coins.jsx-45301460 img.jsx-45301460{position:absolute;top:calc(48px /2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0RnVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBRzJCLEFBT0UsQUFHUixBQUdDLEFBR0QsQUFTQyxBQVFHLEFBUUksV0E5QnBCLEFBTWdCLENBSGhCLEFBWW9CLEdBUUwsQ0FqQ0MsRUFPaEIsQUFrQ29CLFFBeEJMLEdBaUJTLEVBakNaLEFBeUJTLEtBZ0JyQixJQXhCd0IsRUFoQm1CLFNBeUI5QixZQUNBLFlBQ0csU0ExQkosS0EyQlosTUExQkEsMkNBK0JrQixXQWhCQSxNQWlCQSxXQWhCRCxLQWlCQyxXQWhCQyxNQWlCbkIsWUFoQkEiLCJmaWxlIjoiY29tcG9uZW50c1xcbGF5b3V0XFxMYXlvdXRGdWxsLmpzIiwic291cmNlUm9vdCI6IkU6XFxEb2N1bWVudG9zXFxQcm95ZWN0b3NcXEFlcm9sYWJcXGFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlua30gZnJvbScuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2Flcm9sYWItbG9nby5zdmcnXHJcbmltcG9ydCBjb2luIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jb2luLnN2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dEZ1bGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCB1c2VyLCBjb2lucyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj4gICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+e3VzZXJ9PC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29pbnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PjxkaXY+PHNwYW4+e2NvaW5zfTwvc3Bhbj48aW1nIHNyYz17Y29pbn0gYWx0PVwiY29pblwiIC8+PC9kaXY+PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsgY2hpbGRyZW4gfSBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6MnB4IDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTApO1xyXG4gICAgICAgICAgei1pbmRleDo5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dveyAgXHJcbiAgICAgICAgICB3aWR0aDo0OHB4OyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgY29sb3I6IzYxNjE2MTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOi0wLjE1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDo0OHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2luc3tcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojZWRlZGVkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDBweDtcclxuICAgICAgICAgIHdpZHRoOjEwM3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQ4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvaW5zIGRpdntcclxuICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgY29sb3I6IzYxNjE2MTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOi0wLjE1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDo0OHB4OyAgIFxyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29pbnMgaW1ne1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDQ4cHggLzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybzo0MDAsNzAwJyk7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIHBhZGRpbmc6NjdweCAxMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc2FibGVke1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components\\layout\\LayoutFull.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1032374624",
        css: "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');body{margin:0;font-family:'Source Sans Pro',sans-serif;background:white;}.container{padding:67px 132px;}.disabled{display:none;}@media only screen and (max-width:600px){.container{padding:15px;}.user{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0RnVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnlCLEFBRXVGLEFBRW5FLEFBS1MsQUFHTixBQUlFLEFBR0EsU0FkNEIsSUFRNUMsQUFJRSxBQUdBLE1BVkYsK0JBSm1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXRcXExheW91dEZ1bGwuanMiLCJzb3VyY2VSb290IjoiRTpcXERvY3VtZW50b3NcXFByb3llY3Rvc1xcQWVyb2xhYlxcYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vIEFzc2V0c1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvYWVyb2xhYi1sb2dvLnN2ZydcclxuaW1wb3J0IGNvaW4gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2NvaW4uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0RnVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUsIHVzZXIsIGNvaW5zIH0gPSB0aGlzLnByb3BzXHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj57dXNlcn08L2Rpdj4gICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2luc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+PGRpdj48c3Bhbj57Y29pbnN9PC9zcGFuPjxpbWcgc3JjPXtjb2lufSBhbHQ9XCJjb2luXCIgLz48L2Rpdj48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgeyBjaGlsZHJlbiB9IFxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzoycHggMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgICAgICAgICB6LWluZGV4Ojk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHggNDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297ICBcclxuICAgICAgICAgIHdpZHRoOjQ4cHg7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXJ7XHJcbiAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICBjb2xvcjojNjE2MTYxO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OjQ4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvaW5ze1xyXG4gICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNlZGVkZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6MTAzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDhweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29pbnMgZGl2e1xyXG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICBjb2xvcjojNjE2MTYxO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6LTAuMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OjQ4cHg7ICAgXHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2lucyBpbWd7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IGNhbGMoNDhweCAvMik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjQwMCw3MDAnKTtcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgcGFkZGluZzo2N3B4IDEzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzYWJsZWR7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgLnVzZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgIH0gICBcclxuICAgICAgICB9IFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\layout\\LayoutFull.js */"
      }));
    }
  }]);

  return LayoutFull;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.c47fa2a424315ccb2f1b.hot-update.js.map