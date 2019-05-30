import {
    CURRENT_VALUE, COMBINE_INPUTS, 
    CALCULATED_VALUE,
    CLEAR_COMBINED_INPUTS,
    UPDATE_PREVIOUS_VALUE_2_LENGTH,
    UPDATE_PREVIOUS_VALUE_GREATER_THAN_2_LENGTH,
    CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER,
    FIRST_NON_ZERO_VALIDATION_TRUE,
    POP_VALUE_COMBINED_INPUTS,
    DECIMAL_EXISTS_FALSE,
    DECIMAL_EXISTS_TRUE,
    UPDATE_COMBINED_INPUTS_TO_LOG_EQUALS,
} from "./constants.js";
import { updateCombinedInputsToLogEquals } from "./actions.js";


const initialState = {
    //displayUpper: null,
    displayLower: null,
    currentValue: 0,
    previousValue: null,
    currentOperator: null,
    combinedInputs: [0],
    calculatedValue: null,
    firstNonZeroValidation: false,
    decimalExists: false,
}

export const rootReducer = (state=initialState, action={}) => {
    if(action.type === CURRENT_VALUE ) {
        return {...state, currentValue: action.payload }
    } 
    if(action.type === UPDATE_PREVIOUS_VALUE_2_LENGTH) {
        return{...state, previousValue: action.payload }
    }
    if(action.type === UPDATE_PREVIOUS_VALUE_GREATER_THAN_2_LENGTH) {
        return{...state, previousValue: action.payload }
    }
    if(action.type === CHANGE_FIRST_VALUE_TO_NON_ZERO_NUMBER) {
        return {
            ...state,
            combinedInputs: action.changeFirstValueToNonZeroNumberPayload,
            currentValue: action.currentValuePayload,
        };
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
            calculatedValue: action.calculatedValuePayload,
            currentValue: action.payload,
            firstNonZeroValidation: action.firstNonZeroValidationFalsePayload,
            previousValue: action.previousValuePayload,
            decimalExists: action.decimalExistsFalsePayload,
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
    if(action.type === FIRST_NON_ZERO_VALIDATION_TRUE) {
        return{...state, firstNonZeroValidation: action.firstNonZeroValidationTruePayload }
    }
    if(action.type === POP_VALUE_COMBINED_INPUTS) {
        return{...state, combinedInputs: function popValue() {
            const allValues = state.combinedInputs.slice();
            const newValues = allValues.slice();
            newValues.pop();
            return newValues;
            }()
        }
    }
    if(action.type === DECIMAL_EXISTS_FALSE ) {
        return {...state, decimalExists: action.decimalExistsFalsePayload }
    }
    if(action.type === DECIMAL_EXISTS_TRUE ) {
        return {...state, decimalExists: action.decimalExistsTruePayload }
    }
    if(action.type === UPDATE_COMBINED_INPUTS_TO_LOG_EQUALS) {
        return {...state, 
            combinedInputs: action.updateCombinedInputsToLogEqualsPayload,
            previousValue: action.previousValuePayload,
        
        }
    }
        return state;
}