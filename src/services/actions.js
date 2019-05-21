import  {CHANGE_DISPLAY_UPPER, CURRENT_VALUE, COMBINE_INPUTS, CALCULATED_VALUE, CLEAR_COMBINED_INPUTS } from './constants.js';
import {store} from '../index.js';
import 'redux';

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

export const combineInputs = (value) => {
    console.log(value);
   return ({type: COMBINE_INPUTS, payload: value });
}

export const calculatedValue = (value) => {
    return {
        type: CALCULATED_VALUE, 
        payload: value
    };
}

export const clearCombinedInputs = (value) => {
    return {
        type: CLEAR_COMBINED_INPUTS, 
        combinedInputsPayload: [],
        currentOperatorPayload: null,
        payload: value,
    }
}
// export const logInput7 = (value, dispatch) => {
//     dispatch(updateCurrentValue(value));
//     dispatch(combineInputs(value));
//     console.log(store.getState());
//     console.log('hello');
//     return {
//         type: LOG_INPUT_7
//     }
//   }