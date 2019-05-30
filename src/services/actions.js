import  { 
    CURRENT_VALUE, 
    COMBINE_INPUTS, 
    CALCULATED_VALUE, 
    CLEAR_COMBINED_INPUTS,
    UPDATE_PREVIOUS_VALUE_2_LENGTH,
    UPDATE_PREVIOUS_VALUE_GREATER_THAN_2_LENGTH, 
    CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
    FIRST_NON_ZERO_VALIDATION_TRUE,
    POP_VALUE_COMBINED_INPUTS,
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

export const updatePreviousValue2Length = () => {
    return {
    type: UPDATE_PREVIOUS_VALUE_2_LENGTH,
    payload: store.getState().combinedInputs[store.getState().combinedInputs.length -  1 ],
    };
}

export const updatePreviousValueGreaterThan2Length = () => {
    return {
    type: UPDATE_PREVIOUS_VALUE_GREATER_THAN_2_LENGTH,
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
        calculatedValuePayload: null,
        previousValuePayload: null,
    };
}

export const firstNonZeroValidationTrue = () => {
    return {
        type: FIRST_NON_ZERO_VALIDATION_TRUE,
        firstNonZeroValidationTruePayload: true,
    }
}

export const popValueCombinedInputs = () => {
    return {
        type: POP_VALUE_COMBINED_INPUTS,
    }
}


export const logInputs = (value) => {
    return (dispatch, getState ) => {
        console.log(store.getState().combinedInputs[0]);
        console.log(`this is the ${value} in logInputs`);
        if(store.getState().combinedInputs.length == 2 ) {
            console.log("if statement for previous value")
            dispatch(updatePreviousValue2Length(value));
           }
        if(store.getState().combinedInputs.length > 2 ) {
            dispatch(updatePreviousValueGreaterThan2Length(value));
        }
        if(store.getState().combinedInputs[0] === 0 && value !== 0 && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
            console.log("zero checker and nonzero validation and changeFVTNZ");
            dispatch(updateCurrentValue(value));
            dispatch(changeFirstValueToNonZeroNumber(value));
            dispatch(firstNonZeroValidationTrue());
        }
        else if(store.getState().firstNonZeroValidation === true) {
            if(store.getState().previousValue === `.` && value === `.`) {
                console.log("should do nothing for double decimal")
            } else {
                if(
                    store.getState().previousValue === `+` && value === `+` || 
                    store.getState().previousValue === `+` && value === `-` ||
                    store.getState().previousValue === `+` && value === `*` ||
                    store.getState().previousValue === `+` && value === `/` ||
                    store.getState().previousValue === `-` && value === `+` || 
                    store.getState().previousValue === `-` && value === `-` ||
                    store.getState().previousValue === `-` && value === `*` ||
                    store.getState().previousValue === `-` && value === `/` ||
                    store.getState().previousValue === `*` && value === `+` || 
                    store.getState().previousValue === `*` && value === `-` ||
                    store.getState().previousValue === `*` && value === `*` ||
                    store.getState().previousValue === `*` && value === `/` ||
                    store.getState().previousValue === `/` && value === `+` || 
                    store.getState().previousValue === `/` && value === `-` ||
                    store.getState().previousValue === `/` && value === `*` ||
                    store.getState().previousValue === `/` && value === `/` 
                ) {
                    console.log("pop for operators")
                    dispatch(popValueCombinedInputs());
                    //dispatch update current and combine inputs
                    console.log("update and combine inputs for operators")
                    dispatch(updateCurrentValue(value));
                    dispatch(combineInputs(value));
                }   else {
                        console.log("here should update and combine inputs normal")
                        dispatch(updateCurrentValue(value));
                        dispatch(combineInputs(value));
                    }
            }
        }
    }
}
