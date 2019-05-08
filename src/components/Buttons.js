import React from 'react';
import './buttons.css';
import { store } from '../index.js';
//import { CHANGE_DISPLAY_UPPER } from '../services/constants.js';
//import { updateCurrentValue } from '../services/actions';

const Buttons = ({changeDisplayUpper, updateCurrentValue}) => {
    return (
        <div
            className="container ba bw1"
        >
            <div 
                className="w-100 h-100 flex column1-3 justify-center items-center bg-light-red ba pointer dim"
                onClick={() => console.log("clear")}
            >
            ac
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-green ba">
            /
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-green ba">
            x
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba"
             /* onClick={() => store.dispatch({type: CHANGE_DISPLAY_UPPER, payload: 7})*/ 
                onClick={changeDisplayUpper}
            >
            7
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba"
                onClick={() => updateCurrentValue(8)}
            >
            8
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            9
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-green ba">
            -
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            4
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            5
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            6
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-green ba">
            +
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            1
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            2
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            3
            </div>
            <div className="column1-3 w-100 h-100 flex justify-center items-center bg-blue ba">
            0
            </div>
            <div className="w-100 h-100 flex justify-center items-center bg-blue ba">
            .
            </div>
            <div className="equals w-100 h-100 flex justify-center items-center bg-light-blue ba">
            =
            </div>
        </div>
    );
}

export default Buttons;