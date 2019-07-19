import *  as actionTypes from '../Actions/actionTypes';

export const addOptions = (options) => {
    return {
        type: actionTypes.ADD_OPTIONS,
        options: options
    }
}

export const setRightBlockCurrency = (option) => {
    console.log('set right');
    return {
        type: actionTypes.SET_RIGHT_BLOCK_CURRENCY,
        value: option
    }
}

export const setLeftBlockCurrency = (option) => {
    console.log('set left');
    return {
        type: actionTypes.SET_LEFT_BLOCK_CURRENCY,
        value: option
    }
}