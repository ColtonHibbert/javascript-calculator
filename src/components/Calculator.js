import React from 'react';

const Calculator = (props) => {
    return (
        <div
            className="
            w-90 h-auto flex flex-column bg-gray
            w-50-m
            w-50-l 
            "
        >
            {props.children}
        </div>
    );
}

export default Calculator;