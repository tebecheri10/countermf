"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Counter_1 = __importDefault(require("./components/Counter"));
require("./index.css");
const App = () => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: (0, jsx_runtime_1.jsx)(Counter_1.default, {}) })));
react_dom_1.default.render((0, jsx_runtime_1.jsx)(App, {}), document.getElementById("app"));
