import  { 
    CURRENT_VALUE, 
    COMBINE_INPUTS, 
    CALCULATED_VALUE, 
    CLEAR_COMBINED_INPUTS,
    UPDATE_PREVIOUS_VALUE, 
    CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
} from './constants.js';
import {store} from '../index.js';
import 'redux';


export const updateCurrentValue = (value) => {
    console.log(value);
    return {
        type: CURRENT_VALUE,
        payload: value,
    };
}

export const updatePreviousValue = () => {
    return {
    type: UPDATE_PREVIOUS_VALUE,
    payload: store.getState().combinedInputs[store.getState().combinedInputs.length - 1 ],
    };
}

export const changeFirstValueToNonZeroNumber = (value) => {
    return {
        type: CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
        changeFirstValueToNonZeroNumberPayload: [value],
        currentValuePayload: value,
    };
}

export const combineInputs = (value) => {
    console.log(value);
   return ({type: COMBINE_INPUTS, payload: value });
}

export const calculatedValue = (value) => {
    return {
        type: CALCULATED_VALUE, 
        payload: value,
    };
}

export const clearCombinedInputs = (value) => {
    return {
        type: CLEAR_COMBINED_INPUTS, 
        combinedInputsPayload: [0],
        currentOperatorPayload: null,
        //payload: value,
    };
}




// export const logInputs = (value) => {
//     return (value, dispatch, getState ) => {
//         console.log(store.getState());
//      if(store.getState().combinedInputs.length === 1 && value !== 0 || value !== "+" || value !== "-" ||  value !== "*" ||  value !== "/") {
//         dispatch({type: CALCULATED_VALUE, payload: value});
//         dispatch({
//             type: CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
//             changeFirstValueToNonZeroNumberPayload: [value],
//             currentValuePayload: value, });
//       }
//       if(getState().combinedInputs.length >= 2 ) {
//         dispatch({ 
//             type: UPDATE_PREVIOUS_VALUE,
//             payload: getState().combinedInputs[getState().combinedInputs.length - 1 ],});
//       }
//       else {
//        dispatch({ 
//             type: CURRENT_VALUE,
//             payload: value,});
//        dispatch({type: COMBINE_INPUTS, payload: value});
//       }
//     }
// }


// export const logInput7 = (value, dispatch) => {
//     dispatch(updateCurrentValue(value));
//     dispatch(combineInputs(value));
//     console.log(store.getState());
//     console.log('hello');
//     return {
//         type: LOG_INPUT_7
//     }
