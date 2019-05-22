import React from 'react';
import './buttons.css';
import { store } from '../index.js';
//import { CHANGE_DISPLAY_UPPER } from '../services/constants.js';
//import { updateCurrentValue } from '../services/actions';
const Buttons = ({changeDisplayUpper, updateCurrentValue, combineInputs, logInput, logPlus, allClear,
logEquals,
}) => {
    return (
        <div
            className="container ba bw1"
        >
            <div 
                className="w-100 h-100 flex column1-3 justify-center items-center bg-light-red ba pointer dim"
                onClick={() => allClear(0)}
            >
            ac
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInput(`/`)}
            >
            /
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInput(`*`)}
            >
            x
            </div>
            <div 
                id="seven"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim" 
                onClick={() => logInput(7)}
            >
            7
            </div>
            <div 
                id="eight"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(8)}
            >
            8
            </div>
            <div 
                id="nine"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(9)}
            >
            9
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInput(`-`)}
            >
            -
            </div>
            <div 
                id="four"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(4)}
            >
            4
            </div>
            <div 
                id="five"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(5)}
            >
            5
            </div>
            <div 
                id="six"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(6)}
            >
            6
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInput("+")}
            >
            +
            </div>
            <div 
                id="one"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(1)}
            >
            1
            </div>
            <div 
                id="two"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(2)}
            >
            2
            </div>
            <div 
                id="three"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(3)}
            >   
            3
            </div>
            <div 
                id="zero"
                className="column1-3 w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(0)}
            >
            0
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInput(`.`)}
            >
            .
            </div>
            <div 
                id="equals"
                className="equals w-100 h-100 flex justify-center items-center bg-light-blue ba pointer dim"
                onClick={() => logEquals(`=`)}
            >
            =
            </div>
        </div>
    );
}

export default Buttons;