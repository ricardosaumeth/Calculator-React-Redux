import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as logger from "redux-logger";

import allReducers from "./reducers";
import Layout from "./container/Layout";


const store = createStore(allReducers, {}, applyMiddleware(logger()));

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('container'));