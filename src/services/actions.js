import  { 
    CURRENT_VALUE, 
    COMBINE_INPUTS, 
    CALCULATED_VALUE, 
    CLEAR_COMBINED_INPUTS,
    UPDATE_PREVIOUS_VALUE, 
    CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
    FIRST_NON_ZERO_VALIDATION_TRUE,
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
        payload: value,
        firstNonZeroValidationFalsePayload: false,
        //payload: value,
    };
}

export const firstNonZeroValidationTrue = () => {
    return {
        type: FIRST_NON_ZERO_VALIDATION_TRUE,
        firstNonZeroValidationTruePayload: true,
    }
}



export const logInputs = (value) => {
    return (dispatch, getState ) => {
        console.log(store.getState().combinedInputs[0]);
        console.log(`this is the ${value} in logInputs`)
        if(store.getState().firstNonZeroValidation === true ) 
     {
        dispatch(updateCurrentValue(value));
        dispatch(combineInputs(value));
     }
     if(store.getState().combinedInputs[0] === 0 && value !== 0 && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
        dispatch(updateCurrentValue(value));
        dispatch(changeFirstValueToNonZeroNumber(value));
        dispatch(firstNonZeroValidationTrue());
      }
      if(store.getState().combinedInputs.length >= 2 ) {
        dispatch(updatePreviousValue(value));
      }
      
    }
}
