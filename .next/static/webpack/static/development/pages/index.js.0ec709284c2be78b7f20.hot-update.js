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
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }
    }, "Not Error");
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
    className: "jsx-3039508413" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3039508413",
    __self: _this
  }, "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');*.jsx-3039508413{font-family:'Comic Neue',sans-serif;}.container.jsx-3039508413{width:820px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFFbUcsQUFFekMsQUFHekIsWUFDRSxjQUNsQixVQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCc7XHJcbmltcG9ydCBjb2x1bW5zIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YVRhYmxlQ29sdW1ucyc7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG4vL2ltcG9ydCBGbGlwcGluZ0NhcmQgZnJvbSAncmVhY3QtdWktY2FyZHMnO1xyXG5pbXBvcnQgRGF0YUNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YUNoYXJ0JztcclxuaW1wb3J0IFRpbWVTZXJpZXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVTZXJpZXNDaGFydCc7XHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkuY292aWQxOWFwaS5jb20vc3VtbWFyeVwiO1xyXG5jb25zdCB0aW1lc2VyaWVzVXJsID0gXCJodHRwczovL3BvbWJlci5naXRodWIuaW8vY292aWQxOS90aW1lc2VyaWVzLmpzb25cIjtcclxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbi8vY29uc3QgZmV0Y2hlciA9IHVybCA9PiBheGlvcy5nZXQodXJsKTtcclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGFwaVVybCwgZmV0Y2hlcik7IC8vIHN1Y2Nlc3MgPT4gZGF0YSBlcnJvciA9PiBlcnJvclxyXG4gICAgY29uc3QgeyBkYXRhOiB0aW1lc2VyaWVzIH0gPSB1c2VTV1IodGltZXNlcmllc1VybCwgZmV0Y2hlcik7IC8vIHN1Y2Nlc3MgPT5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiA8cD5Ob3QgRXJyb3I8L3A+XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkVycm9yLi4uLi48L3A+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RpbWVzZXJpZXMnLCB0aW1lc2VyaWVzLkFtZXJpY2EpXHJcbiAgICBjb25zb2xlLmxvZygndGltZXNlcmllcycsIHRpbWVzZXJpZXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWljK05ldWU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICAqe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMj5DT1ZJRC0xOTwvaDI+XHJcbiAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ09WSUQtMTkgIFN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEuQ291bnRyaWVzfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxwPntKU09OLnN0cmluZ2lmeShkYXRhKX08L3A+ICovfVxyXG4gICAgICAgICAgICA8VGltZVNlcmllc0NoYXJ0IGRhdGE9e3RpbWVzZXJpZXMuVGhhaWxhbmR9IHRpdGxlPVwiVGhhaWxhbmRcIiAvPlxyXG4gICAgICAgICAgICA8VGltZVNlcmllc0NoYXJ0IGRhdGE9e3RpbWVzZXJpZXMuVVN9IHRpdGxlPVwiVVNcIiAvPlxyXG4gICAgICAgICAgICA8RGF0YUNoYXJ0IGRhdGE9e2RhdGEuQ291bnRyaWVzfSB0aXRsZT1cIkluIHRoZSB3b3JsZFwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxGbGlwcGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxpcHBpbmdDYXJkQmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGJhY2sgb2YgdGhlIGNhcmRcclxuICAgICAgICAgICAgICAgIDwvRmxpcHBpbmdDYXJkQmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGlwcGluZ0NhcmRGcm9udD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGZyb250IG9mIHRoZSBjYXJkXHJcbiAgICAgICAgICAgICAgICA8L0ZsaXBwaW5nQ2FyZEZyb250PlxyXG4gICAgICAgICAgICA8L0ZsaXBwaW5nQ2FyZD5cclxuKi8gfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MasterOfnodejs\\\\Desktop\\\\nextjs\\\\pages\\\\index.js */"), __jsx("h2", {
    className: "jsx-3039508413",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "COVID-19"), __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "COVID-19  Summary",
    columns: _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_4__["default"],
    data: data.Countries,
    pagination: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.Thailand,
    title: "Thailand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.US,
    title: "US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.Countries,
    title: "In the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.0ec709284c2be78b7f20.hot-update.js.map