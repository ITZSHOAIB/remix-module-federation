"use strict";
(self['webpackChunkremote2'] = self['webpackChunkremote2'] || []).push([["src_bootstrap_tsx"], {
"../../node_modules/react-dom/client.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var m = __webpack_require__("webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


}),
"./src/bootstrap.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-dom/client.js");
/* ESM import */var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/app.tsx");
/* ESM import */var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/styles.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\bootstrap.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\bootstrap.tsx",
    lineNumber: 10,
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
//# sourceMappingURL=src_bootstrap_tsx.7b032f1b277ee9fe.js.map