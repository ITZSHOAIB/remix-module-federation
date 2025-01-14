"use strict";
(self['webpackChunkremote2'] = self['webpackChunkremote2'] || []).push([["src_app_app_tsx"], {
"./src/styles.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


}),
"./src/app/Remote2.tsx": (function (module, __webpack_exports__, __webpack_require__) {
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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


var emojis = [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼'
];
var Remote2 = function() {
    _s();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), cards = _useState[0], setCards = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), flippedCards = _useState1[0], setFlippedCards = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), moves = _useState2[0], setMoves = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), gameWon = _useState3[0], setGameWon = _useState3[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        initializeGame();
    }, []);
    var initializeGame = function() {
        var shuffledEmojis = _to_consumable_array(emojis).concat(_to_consumable_array(emojis)).sort(function() {
            return Math.random() - 0.5;
        });
        var newCards = shuffledEmojis.map(function(emoji, index) {
            return {
                id: index,
                emoji: emoji,
                isFlipped: false,
                isMatched: false
            };
        });
        setCards(newCards);
        setFlippedCards([]);
        setMoves(0);
        setGameWon(false);
    };
    var handleCardClick = function(id) {
        if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;
        var newCards = _to_consumable_array(cards);
        newCards[id].isFlipped = true;
        setCards(newCards);
        var newFlippedCards = _to_consumable_array(flippedCards).concat([
            id
        ]);
        setFlippedCards(newFlippedCards);
        if (newFlippedCards.length === 2) {
            setMoves(moves + 1);
            checkForMatch(newFlippedCards);
        }
    };
    var checkForMatch = function(flippedCardIds) {
        var _flippedCardIds = _sliced_to_array(flippedCardIds, 2), firstCardId = _flippedCardIds[0], secondCardId = _flippedCardIds[1];
        if (cards[firstCardId].emoji === cards[secondCardId].emoji) {
            var newCards = _to_consumable_array(cards);
            newCards[firstCardId].isMatched = true;
            newCards[secondCardId].isMatched = true;
            setCards(newCards);
            setFlippedCards([]);
            if (newCards.every(function(card) {
                return card.isMatched;
            })) {
                setGameWon(true);
            }
        } else {
            setTimeout(function() {
                var newCards = _to_consumable_array(cards);
                newCards[firstCardId].isFlipped = false;
                newCards[secondCardId].isFlipped = false;
                setCards(newCards);
                setFlippedCards([]);
            }, 1000);
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
                children: "Memory Card Game"
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-lg",
                children: "Match the pairs of emoji cards!"
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "grid grid-cols-4 gap-4 max-w-md mx-auto",
                variants: {
                    hidden: {
                        opacity: 1,
                        scale: 0.8
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2
                        }
                    }
                },
                initial: "hidden",
                animate: "visible",
                children: cards.map(function(card) {
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                        onClick: function() {
                            return handleCardClick(card.id);
                        },
                        className: "w-16 h-16 text-3xl flex items-center justify-center rounded-lg transition-all duration-300 ".concat(card.isFlipped || card.isMatched ? 'bg-pink-500 text-white' : 'bg-indigo-500 bg-opacity-50 hover:bg-opacity-70'),
                        disabled: card.isFlipped || card.isMatched,
                        variants: {
                            hidden: {
                                y: 20,
                                opacity: 0
                            },
                            visible: {
                                y: 0,
                                opacity: 1
                            }
                        },
                        children: card.isFlipped || card.isMatched ? card.emoji : ''
                    }, card.id, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-lg font-semibold",
                        children: [
                            "Moves: ",
                            moves
                        ]
                    }, void 0, true, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, _this),
                    gameWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "text-2xl font-bold text-pink-300 mt-4",
                        children: [
                            "Congratulations! You won in ",
                            moves,
                            " moves!"
                        ]
                    }, void 0, true, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: initializeGame,
                        className: "mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300",
                        children: "New Game"
                    }, void 0, false, {
                        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\Remote2.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, _this);
};
_s(Remote2, "JqSwtWR7Mvec0ZND6wnaS+iuoXY=");
_c = Remote2;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Remote2);
var _c;
$RefreshReg$(_c, "Remote2");

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
/* ESM import */var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/styles.css");
/* ESM import */var _Remote2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/Remote2.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



function App() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center py-16",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Remote2__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\app.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "D:\\projects\\remix-module-federation\\apps\\remote2\\src\\app\\app.tsx",
        lineNumber: 6,
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

}]);
//# sourceMappingURL=src_app_app_tsx.8b2058d992313fe8.js.map