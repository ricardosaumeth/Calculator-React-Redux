"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const initialState = {
    result: 0,
    lastValue: [0]
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case 'OPERATOR':
            state = __assign({}, state, { result: action.payload, lastValue: [...state.lastValue, action.payload] });
            break;
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=reducer-operations.js.map