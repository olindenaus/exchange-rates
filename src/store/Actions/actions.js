import {ADD_OPTIONS} from '../Actions/actionTypes';

export const addOptions = (options) =>{
    console.log('to z akcji', options);
    return {
        type: ADD_OPTIONS,
        options: options
    }
}

