import {
     CHANGE_DISPLAY_UPPER, CURRENT_VALUE, COMBINE_INPUTS, LOG_INPUT_7, CALCULATED_VALUE
} from "./constants.js";

const initialState = {
    displayUpper: null,
    displayLower: null,
    currentValue: null,
    //previousValue: null,
    currentOperand: null,
    combinedInputs: [],
    calculatedValue: null,
}

export const rootReducer = (state=initialState, action={}) => {
    if(action.type === CHANGE_DISPLAY_UPPER ) {
        return {...state, displayUpper: action.payload }
    } 
    if(action.type === CURRENT_VALUE ) {
        return {...state, currentValue: action.payload }
    } 
    if(action.type === COMBINE_INPUTS ) {
        return {...state, combinedInputs:  function newInputs() {
            const newArray = state.combinedInputs.slice();
            newArray.push(action.payload);
            return newArray;
            }()
        }
    } 
    if(action.type === LOG_INPUT_7 ) {
        return {...state, }
    } 
    if(action.type === CALCULATED_VALUE ) {
        return {...state, calculatedValue: function calulateValue() {
            const allValues = state.combinedInputs.slice();
            const string = allValues.join("");
            const calculate = Number(string);
            return calculate;
            }()
        }
    }
    else {
        return state;
    }
}