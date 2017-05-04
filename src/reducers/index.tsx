import { combineReducers } from "redux";
import mathReducer from "./reducer-operations";

const allReducers = combineReducers({
    value: mathReducer
});

export default allReducers;

