import React from 'react';
import './buttons.css';
import { store } from '../index.js';
//import { CHANGE_DISPLAY_UPPER } from '../services/constants.js';
//import { updateCurrentValue } from '../services/actions';
const Buttons = ({changeDisplayUpper, updateCurrentValue, combineInputs, logInputs, logPlus, allClear,
logEquals,
}) => {
    return (
        <div
            className="container ba bw1"
        >
            <div 
                id="clear"
                className="w-100 h-100 flex column1-3 justify-center items-center bg-light-red ba pointer dim"
                onClick={() => allClear(0)}
            >
            ac
            </div>
            <div 
                id="divide"
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInputs(`/`)}
            >
            /
            </div>
            <div 
                id="multiply"
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInputs(`*`)}
            >
            x
            </div>
            <div 
                id="seven"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim" 
                onClick={() => logInputs(7)}
            >
            7
            </div>
            <div 
                id="eight"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(8)}
            >
            8
            </div>
            <div 
                id="nine"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(9)}
            >
            9
            </div>
            <div 
                id="subtract"
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInputs(`-`)}
            >
            -
            </div>
            <div 
                id="four"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(4)}
            >
            4
            </div>
            <div 
                id="five"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(5)}
            >
            5
            </div>
            <div 
                id="six"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(6)}
            >
            6
            </div>
            <div 
                id="add"
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => logInputs("+")}
            >
            +
            </div>
            <div 
                id="one"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(1)}
            >
            1
            </div>
            <div 
                id="two"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(2)}
            >
            2
            </div>
            <div 
                id="three"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(3)}
            >   
            3
            </div>
            <div 
                id="zero"
                className="column1-3 w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(0)}
            >
            0
            </div>
            <div 
                id="decimal"
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => logInputs(`.`)}
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