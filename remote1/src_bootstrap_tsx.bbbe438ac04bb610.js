"use strict";
(self['webpackChunkremote1'] = self['webpackChunkremote1'] || []).push([["src_bootstrap_tsx"], {
"./src/styles.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


}),
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
"./src/app/Remote1.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/framer-motion/framer-motion");
/* ESM import */var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = undefined;

var _s = $RefreshSig$();


var Remote1 = function() {
    _s();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), targetNumber = _useState[0], setTargetNumber = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), guess = _useState1[0], setGuess = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), message = _useState2[0], setMessage = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), attempts = _useState3[0], setAttempts = _useState3[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        generateNewNumber();
    }, []);
    var generateNewNumber = function() {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setMessage('');
        setAttempts(0);
    };
    var handleGuess = function() {
        var guessNumber = Number.parseInt(guess);
        setAttempts(attempts + 1);
        if (Number.isNaN(guessNumber)) {
            setMessage('Please enter a valid number.');
        } else if (guessNumber === targetNumber) {
            setMessage("Congratulations! You guessed the number in ".concat(attempts + 1, " attempts."));
        } else if (guessNumber < targetNumber) {
            setMessage('Too low! Try a higher number.');
        } else {
            setMessage('Too high! Try a lower number.');
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        className: "space-y-6 text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "text-3xl font-bold mb-4",
                children: "Guess the Number"
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-lg",
                children: "Try to guess the number between 1 and 100!"
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-col items-center space-y-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "number",
                        value: guess,
                        onChange: function(e) {
                            return setGuess(e.target.value);
                        },
                        className: "w-full max-w-xs px-4 py-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-white placeholder-opacity-70",
                        placeholder: "Enter your guess"
                    }, void 0, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: handleGuess,
                        className: "bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300",
                        children: "Submit Guess"
                    }, void 0, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: generateNewNumber,
                        className: "bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300",
                        children: "New Game"
                    }, void 0, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, _this),
                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-xl font-semibold mt-4",
                        children: message
                    }, void 0, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-sm mt-4",
                        children: [
                            "Attempts: ",
                            attempts
                        ]
                    }, void 0, true, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\Remote1.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, _this);
};
_s(Remote1, "JyDqeDAyFf0B762q4qx3M/WHKRc=");
_c = Remote1;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Remote1);
var _c;
$RefreshReg$(_c, "Remote1");

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
/* ESM import */var _Remote1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/Remote1.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function App() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center py-16",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Remote1__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\app.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\app\\app.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = App;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

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
/* ESM import */var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/app.tsx");
/* ESM import */var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/styles.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\bootstrap.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "D:\\projects\\remix-module-federation\\apps\\remote1\\src\\bootstrap.tsx",
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
//# sourceMappingURL=src_bootstrap_tsx.bbbe438ac04bb610.js.map