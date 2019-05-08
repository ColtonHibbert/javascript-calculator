import  {CHANGE_DISPLAY_UPPER, CURRENT_VALUE } from './constants.js';


export const changeDisplayUpper = (value) => {
    console.log(value);
    return { 
        type: CHANGE_DISPLAY_UPPER,
        payload: value,
    }
}

export const updateCurrentValue = (value) => {
    console.log(value);
    return {
        type: CURRENT_VALUE,
        payload: value,
    }
}