"use strict";
const React = require("react");
exports.Screen = (props) => {
    return (React.createElement("div", { className: "top" },
        React.createElement("span", { className: "clear", onMouseDown: () => props.onMousedown("c") }, "C"),
        React.createElement("div", { className: "screen" }, props.value)));
};
//# sourceMappingURL=Screen.js.map