import {ADD_OPTIONS} from '../Actions/actionTypes';

const initialState = {
    options: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_OPTIONS:
            return {...state,
                    options: action.options}
        default:
            return state;
    }
}

export default reducer;