"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const logger = require("redux-logger");
const reducers_1 = require("./reducers");
const Layout_1 = require("./container/Layout");
const store = redux_1.createStore(reducers_1.default, {}, redux_1.applyMiddleware(logger()));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Layout_1.default, null)), document.getElementById('container'));
//# sourceMappingURL=index.js.map