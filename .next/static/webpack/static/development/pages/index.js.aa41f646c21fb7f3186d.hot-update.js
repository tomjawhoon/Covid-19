webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\components\\Loading.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "lds-ring",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
});

/***/ }),

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
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DataChart */ "./components/DataChart.js");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TimeSeriesChart */ "./components/TimeSeriesChart.js");
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
    return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    });
  }

  if (error) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, "Error.....");
  }

  console.log('timeseries', timeseries.America);
  console.log('timeseries', timeseries);
  return __jsx("div", {
    className: "jsx-1796117416" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1796117416",
    __self: _this
  }, "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');*.jsx-1796117416{font-family:'Comic Neue',sans-serif;}.container.jsx-1796117416{width:820px;margin:0 auto;}.title.jsx-1796117416{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFFbUcsQUFFekMsQUFHekIsQUFJTSxZQUhKLE1BSWxCLFFBSEEsVUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1hc3Rlck9mbm9kZWpzXFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnO1xyXG5pbXBvcnQgY29sdW1ucyBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFUYWJsZUNvbHVtbnMnO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuLy9pbXBvcnQgRmxpcHBpbmdDYXJkIGZyb20gJ3JlYWN0LXVpLWNhcmRzJztcclxuaW1wb3J0IERhdGFDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFDaGFydCc7XHJcbmltcG9ydCBUaW1lU2VyaWVzQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lU2VyaWVzQ2hhcnQnO1xyXG5jb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLmNvdmlkMTlhcGkuY29tL3N1bW1hcnlcIjtcclxuY29uc3QgdGltZXNlcmllc1VybCA9IFwiaHR0cHM6Ly9wb21iZXIuZ2l0aHViLmlvL2NvdmlkMTkvdGltZXNlcmllcy5qc29uXCI7XHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG4vL2NvbnN0IGZldGNoZXIgPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCk7XHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhcGlVcmwsIGZldGNoZXIpOyAvLyBzdWNjZXNzID0+IGRhdGEgZXJyb3IgPT4gZXJyb3JcclxuICAgIGNvbnN0IHsgZGF0YTogdGltZXNlcmllcyB9ID0gdXNlU1dSKHRpbWVzZXJpZXNVcmwsIGZldGNoZXIpOyAvLyBzdWNjZXNzID0+XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gIDxMb2FkaW5nIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8cD5FcnJvci4uLi4uPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aW1lc2VyaWVzJywgdGltZXNlcmllcy5BbWVyaWNhKVxyXG4gICAgY29uc29sZS5sb2coJ3RpbWVzZXJpZXMnLCB0aW1lc2VyaWVzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNPVklELTE5IFJlYWx0aW1lPC9oMj5cclxuICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDT1ZJRC0xOSAgU3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5Db3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPHA+e0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvcD4gKi99XHJcbiAgICAgICAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgZGF0YT17dGltZXNlcmllcy5UaGFpbGFuZH0gdGl0bGU9XCJUaGFpbGFuZFwiIC8+XHJcbiAgICAgICAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgZGF0YT17dGltZXNlcmllcy5VU30gdGl0bGU9XCJVU1wiIC8+XHJcbiAgICAgICAgICAgIDxEYXRhQ2hhcnQgZGF0YT17ZGF0YS5Db3VudHJpZXN9IHRpdGxlPVwiSW4gdGhlIHdvcmxkXCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPEZsaXBwaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGlwcGluZ0NhcmRCYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgYmFjayBvZiB0aGUgY2FyZFxyXG4gICAgICAgICAgICAgICAgPC9GbGlwcGluZ0NhcmRCYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsaXBwaW5nQ2FyZEZyb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgZnJvbnQgb2YgdGhlIGNhcmRcclxuICAgICAgICAgICAgICAgIDwvRmxpcHBpbmdDYXJkRnJvbnQ+XHJcbiAgICAgICAgICAgIDwvRmxpcHBpbmdDYXJkPlxyXG4qLyB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MasterOfnodejs\\\\Desktop\\\\nextjs\\\\pages\\\\index.js */"), __jsx("h2", {
    className: "jsx-1796117416" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: timeseries.Thailand,
    title: "Thailand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: timeseries.US,
    title: "US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.Countries,
    title: "In the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.aa41f646c21fb7f3186d.hot-update.js.map