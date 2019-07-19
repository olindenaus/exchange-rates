import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    options: [],
    leftBlockCurrency: 'EUR',
    rightBlockCurrency: 'PLN',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_OPTIONS:
            return {
                ...state,
                options: action.options
            }
        case actionTypes.SET_LEFT_BLOCK_CURRENCY:
            console.log("Left", action);
            return {
                ...state,
                leftBlockCurrency: action.value
            }
        case actionTypes.SET_RIGHT_BLOCK_CURRENCY:
            console.log("Right", action);
            return {
                ...state,
                rightBlockCurrency: action.value
            }
        default:
            return state;
    }
}

export default reducer;