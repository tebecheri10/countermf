"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../index.css");
const Counter = () => {
    const [counter, setCounter] = (0, react_1.useState)(1);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: counter }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => { setCounter((prev) => prev + 1); } }, { children: "Increase" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => { setCounter((prev) => prev - 1); } }, { children: "Decrease" }))] })] })));
};
exports.default = Counter;
