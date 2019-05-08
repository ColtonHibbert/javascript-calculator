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
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => updateCurrentValue(`/`)}
            >
            /
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => updateCurrentValue(`*`)}
            >
            x
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
             /* onClick={() => store.dispatch({type: CHANGE_DISPLAY_UPPER, payload: 7})*/ 
             onClick={() => updateCurrentValue(7)}
            >
            7
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(8)}
            >
            8
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(9)}
            >
            9
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => updateCurrentValue(`-`)}
            >
            -
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(4)}
            >
            4
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(5)}
            >
            5
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(6)}
            >
            6
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-green ba pointer dim"
                onClick={() => updateCurrentValue(`+`)}
            >
            +
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(1)}
            >
            1
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(2)}
            >
            2
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(3)}
            >   
            3
            </div>
            <div 
                className="column1-3 w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(0)}
            >
            0
            </div>
            <div 
                className="w-100 h-100 flex justify-center items-center bg-blue ba pointer dim"
                onClick={() => updateCurrentValue(`.`)}
            >
            .
            </div>
            <div 
                className="equals w-100 h-100 flex justify-center items-center bg-light-blue ba pointer dim"
                onClick={() => updateCurrentValue(`=`)}
            >
            =
            </div>
        </div>
    );
}

export default Buttons;