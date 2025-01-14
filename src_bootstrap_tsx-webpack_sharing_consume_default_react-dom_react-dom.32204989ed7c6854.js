"use strict";
(self['webpackChunkhost'] = self['webpackChunkhost'] || []).push([["src_bootstrap_tsx-webpack_sharing_consume_default_react-dom_react-dom"], {
"./src/styles.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


}),
"./src/app/Dashboard.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var Dashboard = function() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1 p-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "text-4xl font-bold text-white mb-6",
                children: "Welcome to our Module Federation Games!"
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Dashboard.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, {}, void 0, false, {
                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Dashboard.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Dashboard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Dashboard.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, _this);
};
_c = Dashboard;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);
var _c;
$RefreshReg$(_c, "Dashboard");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/app/Header.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var Header = function() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container mx-auto px-4 py-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    to: "/",
                    className: "text-2xl font-bold text-white",
                    children: "ModuleFed Dashboard"
                }, void 0, false, {
                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        className: "flex space-x-4 text-white",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    to: "/remote1",
                                    className: "hover:text-purple-200 transition-colors",
                                    children: "Remote 1"
                                }, void 0, false, {
                                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                                    lineNumber: 14,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    to: "/remote2",
                                    className: "hover:text-purple-200 transition-colors",
                                    children: "Remote 2"
                                }, void 0, false, {
                                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\Header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, _this);
};
_c = Header;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
var _c;
$RefreshReg$(_c, "Header");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/app/app.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: function() { return App; },
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/Header.tsx");
/* ESM import */var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/Dashboard.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





var Remote1 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.lazy(_c = function() {
    return __webpack_require__.e(/* import() */ "webpack_container_remote_remote1_Module").then(__webpack_require__.t.bind(__webpack_require__, "webpack/container/remote/remote1/Module", 23));
});
_c1 = Remote1;
var Remote2 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.lazy(_c2 = function() {
    return __webpack_require__.e(/* import() */ "webpack_container_remote_remote2_Module").then(__webpack_require__.t.bind(__webpack_require__, "webpack/container/remote/remote2/Module", 23));
});
_c3 = Remote2;
function App() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                        path: "/",
                        element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                            fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                            lineNumber: 16,
                            columnNumber: 36
                        }, void 0),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                                index: true,
                                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Remote1, {}, void 0, false, {
                                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                    lineNumber: 17,
                                    columnNumber: 35
                                }, void 0)
                            }, void 0, false, {
                                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                                path: "remote1",
                                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Remote1, {}, void 0, false, {
                                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                    lineNumber: 18,
                                    columnNumber: 44
                                }, void 0)
                            }, void 0, false, {
                                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                                path: "remote2",
                                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Remote2, {}, void 0, false, {
                                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                    lineNumber: 19,
                                    columnNumber: 44
                                }, void 0)
                            }, void 0, false, {
                                fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\app\\app.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c4 = App;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "Remote1$React.lazy");
$RefreshReg$(_c1, "Remote1");
$RefreshReg$(_c2, "Remote2$React.lazy");
$RefreshReg$(_c3, "Remote2");
$RefreshReg$(_c4, "App");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/bootstrap.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-dom/client.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/app.tsx");
/* ESM import */var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/styles.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");






var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\bootstrap.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\bootstrap.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "D:\\projects\\remix-module-federation\\apps\\host\\src\\bootstrap.tsx",
    lineNumber: 11,
    columnNumber: 3
}, undefined));

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=src_bootstrap_tsx-webpack_sharing_consume_default_react-dom_react-dom.32204989ed7c6854.js.map