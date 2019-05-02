import  {CHANGE_DISPLAY_UPPER } from './constants.js';


export const changeDisplayUpper = (value) => {
    console.log(value);
    return { 
        type: CHANGE_DISPLAY_UPPER,
        payload: value,
    }
}