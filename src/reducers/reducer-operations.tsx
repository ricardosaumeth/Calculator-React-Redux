const initialState = {
    result: 0,
    lastValue: [0]
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case 'OPERATOR':
            state = {
                ...state,
                result: action.payload,
                lastValue: [...state.lastValue, action.payload]
            };
            break;
    }
    return state;
}
