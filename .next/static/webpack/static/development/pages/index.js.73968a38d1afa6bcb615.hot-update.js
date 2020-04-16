webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react-ui-cards/bundle.js":
false,

/***/ "./node_modules/react-ui-cards/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataTableColumns */ "./components/DataTableColumns.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DataChart */ "./components/DataChart.js");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeSeriesChart */ "./components/TimeSeriesChart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import FlippingCard from 'react-ui-cards';



var apiUrl = "https://api.covid19api.com/summary";
var timeseriesUrl = "https://pomber.github.io/covid19/timeseries.json";

var fetcher = function fetcher(url) {
  return unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (r) {
    return r.json();
  });
}; //const fetcher = url => axios.get(url);


var IndexPage = function IndexPage() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])(apiUrl, fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // success => data error => error


  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])(timeseriesUrl, fetcher),
      timeseries = _useSWR2.data; // success =>


  if (!data) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }
    }, "Not Error");
  }

  if (error) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    }, "Error.....");
  }

  console.log('timeseries', timeseries.America);
  console.log('timeseries', timeseries);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "COVID-19"), __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
    title: "COVID-19  Summary",
    columns: _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_3__["default"],
    data: data.Countries,
    pagination: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: timeseries.Thailand,
    title: "Thailand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: timeseries.US,
    title: "US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.Countries,
    title: "In the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.73968a38d1afa6bcb615.hot-update.js.map