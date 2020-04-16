module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DataChart.js":
/*!*********************************!*\
  !*** ./components/DataChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\components\\DataChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, title), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 500,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    width: 800,
    height: 500,
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "Country",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
    stroke: "#eee",
    strokeDasharray: "5 5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "TotalConfirmed",
    stroke: "#3445dd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "TotalDeaths",
    stroke: "#ff3405",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "TotalRecovered",
    stroke: "#23dd34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }))));
});

/***/ }),

/***/ "./components/DataTableColumns.js":
/*!****************************************!*\
  !*** ./components/DataTableColumns.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'Country',
  selector: 'Country',
  sortable: true
}, {
  name: 'TotalConfirmed',
  selector: 'TotalConfirmed',
  sortable: true
}, {
  name: 'TotalRecovered',
  selector: 'TotalRecovered',
  sortable: true
}, {
  name: 'Total Deaths',
  selector: 'TotalDeaths',
  sortable: true
}]);

/***/ }),

/***/ "./components/TimeSeriesChart.js":
/*!***************************************!*\
  !*** ./components/TimeSeriesChart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\components\\TimeSeriesChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, title), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 500,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    width: 800,
    height: 500,
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
    stroke: "#eee",
    strokeDasharray: "5 5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "confirmed",
    stroke: "#3445dd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "deaths",
    stroke: "#ff3405",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "recovered",
    stroke: "#23dd34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }))));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch */ "unfetch");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DataTableColumns */ "./components/DataTableColumns.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-data-table-component */ "react-data-table-component");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DataChart */ "./components/DataChart.js");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TimeSeriesChart */ "./components/TimeSeriesChart.js");
var _jsxFileName = "C:\\Users\\MasterOfnodejs\\Desktop\\nextjs\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 //import FlippingCard from 'react-ui-cards';



const apiUrl = "https://api.covid19api.com/summary";
const timeseriesUrl = "https://pomber.github.io/covid19/timeseries.json";

const fetcher = url => unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(r => r.json()); //const fetcher = url => axios.get(url);


const IndexPage = () => {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(apiUrl, fetcher); // success => data error => error

  const {
    data: timeseries
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(timeseriesUrl, fetcher); // success =>

  if (!data) {
    return __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }
    }, "Not Error");
  }

  if (error) {
    return __jsx("p", {
      __self: undefined,
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
    className: "jsx-3253480325" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3253480325",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');*.jsx-3253480325{font-family:'Comic Neue',sans-serif;}.container.jsx-3253480325{width:820px;margin:0 auto;}.title.jsx-3253480325{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFzdGVyT2Zub2RlanNcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFFbUcsQUFFekMsQUFHekIsQUFJTSxZQUhKLE1BSWxCLFFBSEEsVUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1hc3Rlck9mbm9kZWpzXFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnO1xyXG5pbXBvcnQgY29sdW1ucyBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFUYWJsZUNvbHVtbnMnO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuLy9pbXBvcnQgRmxpcHBpbmdDYXJkIGZyb20gJ3JlYWN0LXVpLWNhcmRzJztcclxuaW1wb3J0IERhdGFDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFDaGFydCc7XHJcbmltcG9ydCBUaW1lU2VyaWVzQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lU2VyaWVzQ2hhcnQnO1xyXG5jb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLmNvdmlkMTlhcGkuY29tL3N1bW1hcnlcIjtcclxuY29uc3QgdGltZXNlcmllc1VybCA9IFwiaHR0cHM6Ly9wb21iZXIuZ2l0aHViLmlvL2NvdmlkMTkvdGltZXNlcmllcy5qc29uXCI7XHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG4vL2NvbnN0IGZldGNoZXIgPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCk7XHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhcGlVcmwsIGZldGNoZXIpOyAvLyBzdWNjZXNzID0+IGRhdGEgZXJyb3IgPT4gZXJyb3JcclxuICAgIGNvbnN0IHsgZGF0YTogdGltZXNlcmllcyB9ID0gdXNlU1dSKHRpbWVzZXJpZXNVcmwsIGZldGNoZXIpOyAvLyBzdWNjZXNzID0+XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gPHA+Tm90IEVycm9yPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8cD5FcnJvci4uLi4uPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aW1lc2VyaWVzJywgdGltZXNlcmllcy5BbWVyaWNhKVxyXG4gICAgY29uc29sZS5sb2coJ3RpbWVzZXJpZXMnLCB0aW1lc2VyaWVzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q09WSUQtMTkgUmVhbHRpbWU8L2gyPlxyXG4gICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNPVklELTE5ICBTdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhLkNvdW50cmllc31cclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8cD57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9wPiAqL31cclxuICAgICAgICAgICAgPFRpbWVTZXJpZXNDaGFydCBkYXRhPXt0aW1lc2VyaWVzLlRoYWlsYW5kfSB0aXRsZT1cIlRoYWlsYW5kXCIgLz5cclxuICAgICAgICAgICAgPFRpbWVTZXJpZXNDaGFydCBkYXRhPXt0aW1lc2VyaWVzLlVTfSB0aXRsZT1cIlVTXCIgLz5cclxuICAgICAgICAgICAgPERhdGFDaGFydCBkYXRhPXtkYXRhLkNvdW50cmllc30gdGl0bGU9XCJJbiB0aGUgd29ybGRcIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8RmxpcHBpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsaXBwaW5nQ2FyZEJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBiYWNrIG9mIHRoZSBjYXJkXHJcbiAgICAgICAgICAgICAgICA8L0ZsaXBwaW5nQ2FyZEJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxpcHBpbmdDYXJkRnJvbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBmcm9udCBvZiB0aGUgY2FyZFxyXG4gICAgICAgICAgICAgICAgPC9GbGlwcGluZ0NhcmRGcm9udD5cclxuICAgICAgICAgICAgPC9GbGlwcGluZ0NhcmQ+XHJcbiovIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MasterOfnodejs\\\\Desktop\\\\nextjs\\\\pages\\\\index.js */"), __jsx("h2", {
    className: "jsx-3253480325" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "COVID-19 Realtime"), __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "COVID-19  Summary",
    columns: _components_DataTableColumns__WEBPACK_IMPORTED_MODULE_4__["default"],
    data: data.Countries,
    pagination: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.Thailand,
    title: "Thailand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: timeseries.US,
    title: "US",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.Countries,
    title: "In the world",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MasterOfnodejs\Desktop\nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-data-table-component":
/*!*********************************************!*\
  !*** external "react-data-table-component" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-data-table-component");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "unfetch":
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map