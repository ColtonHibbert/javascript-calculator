import {
     CHANGE_DISPLAY_UPPER, CURRENT_VALUE, 
} from "./constants.js";

const initialState = {
    displayUpper: '',
    displayLower: '',
    currentValue: '',
}

export const rootReducer = (state=initialState, action={}) => {
    if(action.type === CHANGE_DISPLAY_UPPER ) {
        return {...state, displayUpper: action.payload }
    } 
    if(action.type === CURRENT_VALUE ) {
        return {...state, currentValue: action.payload }
    } 
    else {
        return state;
    }
}