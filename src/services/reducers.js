import { CHANGE_DISPLAY_UPPER } from "./constants";

const initialState = {
    displayUpper: '',
    displayLower: '',
}

export const rootReducer = (state=initialState, action={}) => {
    if(action.type === CHANGE_DISPLAY_UPPER ) {
        return {...state, displayUpper: action.payload }
    } else {
        return state;
    }
}