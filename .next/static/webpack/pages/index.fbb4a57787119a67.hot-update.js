"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DraggableBubble.js":
/*!*******************************************!*\
  !*** ./src/components/DraggableBubble.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n// DraggableBubble.js\n\nvar _s = $RefreshSig$();\n\n\nconst DraggableBubble = (props)=>{\n    _s();\n    const { radius , fillColor  } = props;\n    const [nodes, setNodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            x: 100,\n            y: 100,\n            id: 0\n        }\n    ]);\n    const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const spawnBubble = (parent)=>{\n        const angle = Math.random() * 2 * Math.PI;\n        const distance = radius * 2 + 2;\n        const newNode = {\n            x: parent.x + Math.cos(angle) * distance,\n            y: parent.y + Math.sin(angle) * distance,\n            id: nodes.length\n        };\n        setNodes([\n            ...nodes,\n            newNode\n        ]);\n        setLinks([\n            ...links,\n            {\n                source: parent.id,\n                target: newNode.id\n            }\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const svg = d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current);\n        const simulation = d3__WEBPACK_IMPORTED_MODULE_2__.forceSimulation(nodes).force(\"charge\", d3__WEBPACK_IMPORTED_MODULE_2__.forceManyBody().strength(-100)).force(\"collision\", d3__WEBPACK_IMPORTED_MODULE_2__.forceCollide(radius))//.force('center', d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))\n        .force(\"link\", d3__WEBPACK_IMPORTED_MODULE_2__.forceLink(links).distance(radius * 2 + 2).id((d)=>d.id)).alphaTarget(0.3).on(\"tick\", ()=>{\n            svg.selectAll(\"circle\").attr(\"cx\", (d)=>d.x).attr(\"cy\", (d)=>d.y);\n            svg.selectAll(\"line\").attr(\"x1\", (d)=>d.source.x).attr(\"y1\", (d)=>d.source.y).attr(\"x2\", (d)=>d.target.x).attr(\"y2\", (d)=>d.target.y);\n        });\n        const drag = d3__WEBPACK_IMPORTED_MODULE_2__.drag().on(\"start\", dragstarted).on(\"drag\", dragged).on(\"end\", dragended);\n        function dragstarted(event, d) {\n            if (!event.active) simulation.alphaTarget(0.3).restart();\n            d.fx = d.x;\n            d.fy = d.y;\n            d3__WEBPACK_IMPORTED_MODULE_2__.select(this).raise().attr(\"fill\", \"lightsteelblue\");\n        }\n        function dragged(event, d) {\n            d.fx = event.x;\n            d.fy = event.y;\n        }\n        function dragended(event, d) {\n            if (!event.active) simulation.alphaTarget(0);\n            d.fx = null;\n            d.fy = null;\n            d3__WEBPACK_IMPORTED_MODULE_2__.select(this).attr(\"fill\", fillColor);\n        }\n        svg.selectAll(\"circle\").data(nodes).join(\"circle\").attr(\"r\", radius).attr(\"fill\", fillColor).attr(\"cx\", (d)=>d.x).attr(\"cy\", (d)=>d.y).call(drag).on(\"click\", (event, d)=>{\n            event.stopPropagation();\n            spawnBubble(d);\n        });\n        svg.selectAll(\"line\").data(links).join(\"line\").attr(\"stroke\", \"gray\").attr(\"stroke-width\", 1);\n        return ()=>{\n            simulation.stop();\n        };\n    }, [\n        nodes,\n        links,\n        fillColor,\n        radius\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ref: svgRef,\n        style: {\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            width: \"100%\",\n            height: \"100%\",\n            pointerEvents: \"none\"\n        },\n        onClick: (event)=>{\n            event.stopPropagation();\n        },\n        children: [\n            nodes.map((node)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                    r: radius,\n                    fill: fillColor,\n                    style: {\n                        pointerEvents: \"all\"\n                    }\n                }, node.id, false, {\n                    fileName: \"/Users/kylar/projects/buildaprompt/src/components/DraggableBubble.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)),\n            links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                    stroke: \"gray\",\n                    strokeWidth: 1\n                }, index, false, {\n                    fileName: \"/Users/kylar/projects/buildaprompt/src/components/DraggableBubble.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylar/projects/buildaprompt/src/components/DraggableBubble.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableBubble, \"npupca8AIoO+mnb6L+viJhbC8xI=\");\n_c = DraggableBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraggableBubble);\nvar _c;\n$RefreshReg$(_c, \"DraggableBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO1lBQ2xCQSxNQUFNUyxlQUFlO1FBQ3ZCOztZQUVDakQsTUFBTTRELEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7b0JBRUNDLEdBQUdqRTtvQkFDSGtFLE1BQU1qRTtvQkFDTnFELE9BQU87d0JBQUVNLGVBQWU7b0JBQU07bUJBSHpCRyxLQUFLekQsRUFBRTs7Ozs7WUFNZkMsTUFBTXVELEdBQUcsQ0FBQyxDQUFDSyxNQUFNQyxzQkFDaEIsOERBQUNDO29CQUFpQkMsUUFBTztvQkFBT0MsYUFBYTttQkFBbENIOzs7Ozs7Ozs7OztBQUluQjtHQS9HTXRFO0tBQUFBO0FBaUhOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUJ1YmJsZS5qcz8zNDY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIERyYWdnYWJsZUJ1YmJsZS5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuXG5jb25zdCBEcmFnZ2FibGVCdWJibGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByYWRpdXMsIGZpbGxDb2xvciB9ID0gcHJvcHM7XG4gIGNvbnN0IFtub2Rlcywgc2V0Tm9kZXNdID0gdXNlU3RhdGUoW3sgeDogMTAwLCB5OiAxMDAsIGlkOiAwIH1dKTtcbiAgY29uc3QgW2xpbmtzLCBzZXRMaW5rc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNwYXduQnViYmxlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogMiArIDI7XG4gICAgY29uc3QgbmV3Tm9kZSA9IHtcbiAgICAgIHg6IHBhcmVudC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBwYXJlbnQueSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3RhbmNlLFxuICAgICAgaWQ6IG5vZGVzLmxlbmd0aCxcbiAgICB9O1xuICAgIHNldE5vZGVzKFsuLi5ub2RlcywgbmV3Tm9kZV0pO1xuICAgIHNldExpbmtzKFsuLi5saW5rcywgeyBzb3VyY2U6IHBhcmVudC5pZCwgdGFyZ2V0OiBuZXdOb2RlLmlkIH1dKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCk7XG4gICAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzXG4gICAgICAuZm9yY2VTaW11bGF0aW9uKG5vZGVzKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTEwMCkpXG4gICAgICAuZm9yY2UoJ2NvbGxpc2lvbicsIGQzLmZvcmNlQ29sbGlkZShyYWRpdXMpKVxuICAgICAgLy8uZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMikpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsobGlua3MpLmRpc3RhbmNlKHJhZGl1cyAqIDIgKyAyKS5pZCgoZCkgPT4gZC5pZCkpXG4gICAgICAuYWxwaGFUYXJnZXQoMC4zKVxuICAgICAgLm9uKCd0aWNrJywgKCkgPT4ge1xuICAgICAgICBzdmcuc2VsZWN0QWxsKCdjaXJjbGUnKS5hdHRyKCdjeCcsIChkKSA9PiBkLngpLmF0dHIoJ2N5JywgKGQpID0+IGQueSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2xpbmUnKS5hdHRyKCd4MScsIChkKSA9PiBkLnNvdXJjZS54KS5hdHRyKCd5MScsIChkKSA9PiBkLnNvdXJjZS55KS5hdHRyKCd4MicsIChkKSA9PiBkLnRhcmdldC54KS5hdHRyKCd5MicsIChkKSA9PiBkLnRhcmdldC55KTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZHJhZyA9IGQzXG4gICAgICAuZHJhZygpXG4gICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpO1xuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZXZlbnQsIGQpIHtcbiAgICAgIGlmICghZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgICBkMy5zZWxlY3QodGhpcykucmFpc2UoKS5hdHRyKCdmaWxsJywgJ2xpZ2h0c3RlZWxibHVlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChldmVudCwgZCkge1xuICAgICAgZC5meCA9IGV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZXZlbnQsIGQpIHtcbiAgICAgIGlmICghZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdmaWxsJywgZmlsbENvbG9yKTtcbiAgICB9XG5cbiAgICBzdmdcbiAgICAgIC5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAuZGF0YShub2RlcylcbiAgICAgIC5qb2luKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ3InLCByYWRpdXMpXG4gICAgICAuYXR0cignZmlsbCcsIGZpbGxDb2xvcilcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxuICAgICAgLmNhbGwoZHJhZylcbiAgICAgIC5vbignY2xpY2snLCAoZXZlbnQsIGQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNwYXduQnViYmxlKGQpO1xuICAgICAgfSk7XG5cbiAgICBzdmdcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEobGlua3MpXG4gICAgICAuam9pbignbGluZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2dyYXknKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNpbXVsYXRpb24uc3RvcCgpO1xuICAgIH07XG4gIH0sIFtub2RlcywgbGlua3MsIGZpbGxDb2xvciwgcmFkaXVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICByZWY9e3N2Z1JlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB9fVxuICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7bm9kZXMubWFwKChub2RlKSA9PiAoXG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBrZXk9e25vZGUuaWR9XG4gICAgICAgICAgcj17cmFkaXVzfVxuICAgICAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cbiAgICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnYWxsJyB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGluZSBrZXk9e2luZGV4fSBzdHJva2U9XCJncmF5XCIgc3Ryb2tlV2lkdGg9ezF9IC8+XG4gICAgICApKX1cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUJ1YmJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiZDMiLCJEcmFnZ2FibGVCdWJibGUiLCJwcm9wcyIsInJhZGl1cyIsImZpbGxDb2xvciIsIm5vZGVzIiwic2V0Tm9kZXMiLCJ4IiwieSIsImlkIiwibGlua3MiLCJzZXRMaW5rcyIsInN2Z1JlZiIsInNwYXduQnViYmxlIiwicGFyZW50IiwiYW5nbGUiLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJkaXN0YW5jZSIsIm5ld05vZGUiLCJjb3MiLCJzaW4iLCJsZW5ndGgiLCJzb3VyY2UiLCJ0YXJnZXQiLCJzdmciLCJzZWxlY3QiLCJjdXJyZW50Iiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VDb2xsaWRlIiwiZm9yY2VMaW5rIiwiZCIsImFscGhhVGFyZ2V0Iiwib24iLCJzZWxlY3RBbGwiLCJhdHRyIiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImV2ZW50IiwiYWN0aXZlIiwicmVzdGFydCIsImZ4IiwiZnkiLCJyYWlzZSIsImRhdGEiLCJqb2luIiwiY2FsbCIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3AiLCJyZWYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsIm9uQ2xpY2siLCJtYXAiLCJub2RlIiwiY2lyY2xlIiwiciIsImZpbGwiLCJsaW5rIiwiaW5kZXgiLCJsaW5lIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DraggableBubble.js\n"));

/***/ })

});