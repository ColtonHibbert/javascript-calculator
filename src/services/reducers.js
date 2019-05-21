import {
     CHANGE_DISPLAY_UPPER, CURRENT_VALUE, COMBINE_INPUTS, CALCULATED_VALUE, CLEAR_COMBINED_INPUTS
} from "./constants.js";

const initialState = {
    //displayUpper: null,
    displayLower: null,
    currentValue: null,
    //previousValue: null,
    currentOperator: null,
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
    if(action.type === CLEAR_COMBINED_INPUTS ) {
        return{...state,
            combinedInputs: action.combinedInputsPayload,
            currentOperator: action.currentOperatorPayload,
            displayLower: action.payload,
            calculatedValue: action.payload,
        }
    }
    if(action.type === CALCULATED_VALUE ) {
        return {...state, calculatedValue: function calculateValue() {
            const allValues = state.combinedInputs.slice();
            const string = allValues.join("");
            const calculate = eval(string);
            return calculate;
            }()
        }
    }
    else {
        return state;
    }
}