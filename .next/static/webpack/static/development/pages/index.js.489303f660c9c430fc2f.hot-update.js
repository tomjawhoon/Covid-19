webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DataTableColumns */ "./components/DataTableColumns.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DataChart */ "./components/DataChart.js");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TimeSeriesChart */ "./components/TimeSeriesChart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\pages\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 //import FlippingCard from 'react-ui-cards';



var apiUrl = "https://api.covid19api.com/summary";
var timeseriesUrl = "https://pomber.github.io/covid19/timeseries.json";

var fetcher = function fetcher(url) {
  return unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (r) {
    return r.json();
  });
}; //const fetcher = url => axios.get(url);


var IndexPage = function IndexPage() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(apiUrl, fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // success => data error => error


  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(timeseriesUrl, fetcher),
      timeseries = _useSWR2.data; // success =>


  if (!data) {
    return __jsx("div", {
      className: "lds-ring",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 42
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 53
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 64
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 75
      }
    }));
  }

  if (error) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    }, "Error.....");
  }

  console.log('timeseries', timeseries.America);
  console.log('timeseries', timeseries);
  return __jsx("div", {
    className: "jsx-1305881829" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1305881829",
    __self: _this
  }, "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');*.jsx-1305881829{font-family:'Comic Neue',sans-serif;}.container.jsx-1305881829{width:820px;margin:0 auto;}.title.jsx-1305881829{text-align:center;}.lds-ring.jsx-1305881829{display:inline-block;position:relative;width:80px;height:80px;}.lds-ring.jsx-1305881829 div.jsx-1305881829{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #fff;border-radius:50%;-webkit-animation:lds-ring-jsx-1305881829 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-1305881829 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#f36 transparent transparent transparent;}.lds-ring.jsx-1305881829 div.jsx-1305881829:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}.lds-ring.jsx-1305881829 div.jsx-1305881829:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}.lds-ring.jsx-1305881829 div.jsx-1305881829:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}@-webkit-keyframes lds-ring-jsx-1305881829{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes lds-ring-jsx-1305881829{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFFbUcsQUFFekMsQUFHekIsQUFJTSxBQUlHLEFBTUMsQUFZQyxBQUdELEFBR0MsQUFJRSxBQUdFLFlBdENiLE1BSWxCLEdBSXNCLENBTUosSUFibEIsVUFKQSxBQWtCc0IsR0FOUCxXQUNDLEVBbUJkLEVBYmEsQUFVYixBQU1BLFFBckJBLEdBTWMsWUFDRCxJQWtCWCxNQUdBLENBcEJzQixzQkFDSixrQkFDNEMsNEpBQ1Isc0RBQ3hEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCc7XHJcbmltcG9ydCBjb2x1bW5zIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YVRhYmxlQ29sdW1ucyc7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG4vL2ltcG9ydCBGbGlwcGluZ0NhcmQgZnJvbSAncmVhY3QtdWktY2FyZHMnO1xyXG5pbXBvcnQgRGF0YUNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YUNoYXJ0JztcclxuaW1wb3J0IFRpbWVTZXJpZXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVTZXJpZXNDaGFydCc7XHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkuY292aWQxOWFwaS5jb20vc3VtbWFyeVwiO1xyXG5jb25zdCB0aW1lc2VyaWVzVXJsID0gXCJodHRwczovL3BvbWJlci5naXRodWIuaW8vY292aWQxOS90aW1lc2VyaWVzLmpzb25cIjtcclxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbi8vY29uc3QgZmV0Y2hlciA9IHVybCA9PiBheGlvcy5nZXQodXJsKTtcclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGFwaVVybCwgZmV0Y2hlcik7IC8vIHN1Y2Nlc3MgPT4gZGF0YSBlcnJvciA9PiBlcnJvclxyXG4gICAgY29uc3QgeyBkYXRhOiB0aW1lc2VyaWVzIH0gPSB1c2VTV1IodGltZXNlcmllc1VybCwgZmV0Y2hlcik7IC8vIHN1Y2Nlc3MgPT5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPHA+RXJyb3IuLi4uLjwvcD5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygndGltZXNlcmllcycsIHRpbWVzZXJpZXMuQW1lcmljYSlcclxuICAgIGNvbnNvbGUubG9nKCd0aW1lc2VyaWVzJywgdGltZXNlcmllcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb21pYyBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxkcy1yaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAubGRzLXJpbmcgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjM2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNPVklELTE5IFJlYWx0aW1lPC9oMj5cclxuICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDT1ZJRC0xOSAgU3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5Db3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPHA+e0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvcD4gKi99XHJcbiAgICAgICAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgZGF0YT17dGltZXNlcmllcy5UaGFpbGFuZH0gdGl0bGU9XCJUaGFpbGFuZFwiIC8+XHJcbiAgICAgICAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgZGF0YT17dGltZXNlcmllcy5VU30gdGl0bGU9XCJVU1wiIC8+XHJcbiAgICAgICAgICAgIDxEYXRhQ2hhcnQgZGF0YT17ZGF0YS5Db3VudHJpZXN9IHRpdGxlPVwiSW4gdGhlIHdvcmxkXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPEZsaXBwaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGlwcGluZ0NhcmRCYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgYmFjayBvZiB0aGUgY2FyZFxyXG4gICAgICAgICAgICAgICAgPC9GbGlwcGluZ0NhcmRCYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsaXBwaW5nQ2FyZEZyb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgZnJvbnQgb2YgdGhlIGNhcmRcclxuICAgICAgICAgICAgICAgIDwvRmxpcHBpbmdDYXJkRnJvbnQ+XHJcbiAgICAgICAgICAgIDwvRmxpcHBpbmdDYXJkPlxyXG4qLyB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MasterOfnodejs\\\\Desktop\\\\nextjs\\\\pages\\\\index.js */"), __jsx("h2", {
    className: "jsx-1305881829" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "COVID-19 Realtime"), __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "COVID-19  Summary",
    columns: _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_4__["default"],
    data: data.Countries,
    pagination: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.Thailand,
    title: "Thailand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.US,
    title: "US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.Countries,
    title: "In the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.489303f660c9c430fc2f.hot-update.js.map