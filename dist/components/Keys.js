"use strict";
const React = require("react");
exports.Keys = (props) => {
    return (React.createElement("div", { className: "keys" },
        React.createElement("span", { onMouseDown: () => props.onMouseDown("7") }, "7"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("8") }, "8"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("9") }, "9"),
        React.createElement("span", { className: "operator", onMouseDown: () => props.onMouseDown("+") }, "+"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("4") }, "4"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("5") }, "5"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("6") }, "6"),
        React.createElement("span", { className: "operator", onMouseDown: () => props.onMouseDown("-") }, "-"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("1") }, "1"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("2") }, "2"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("3") }, "3"),
        React.createElement("span", { className: "operator", onMouseDown: () => props.onMouseDown("÷") }, "\u00F7"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown("0") }, "0"),
        React.createElement("span", { onMouseDown: () => props.onMouseDown(".") }, "."),
        React.createElement("span", { className: "eval", onMouseDown: () => props.onMouseDown("=") }, "="),
        React.createElement("span", { className: "operator", onMouseDown: () => props.onMouseDown("x") }, "x")));
};
//# sourceMappingURL=Keys.js.map