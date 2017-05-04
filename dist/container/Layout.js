"use strict";
const React = require("react");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const Screen_1 = require("../components/Screen");
const Keys_1 = require("../components/Keys");
const actions_1 = require("../actions");
class Layout extends React.Component {
    render() {
        return (React.createElement("div", { id: "calculator" },
            React.createElement(Screen_1.Screen, { value: this.props.value.result === 0 ? "" : this.props.value.result, onMousedown: (clear) => this.props.IdentifyDigit(clear) }),
            React.createElement(Keys_1.Keys, { onMouseDown: (digit) => this.props.IdentifyDigit(digit) })));
    }
}
function mapStateToProps(state) {
    return {
        value: state.value
    };
}
function mapDispathToProps(dispath) {
    return redux_1.bindActionCreators({
        IdentifyDigit: actions_1.IdentifyDigit
    }, dispath);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispathToProps)(Layout);
//# sourceMappingURL=Layout.js.map