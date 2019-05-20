import React from 'react';

const Display = ({ combinedInputs, calculatedValue, displayLower }) => {
    const stringValue = calculatedValue;
    stringValue.toString();

    return (
        <div className="pointer bg-blue">
            <div 
                className="
                h2 flex justify-end white
                h2-ns
                h3-m
                h3-l
                "
            >{combinedInputs}</div>
            <div 
                className="
                h2 flex justify-end white
                h2-ns
                h3-m
                h3-l
                "
            >{displayLower}</div>
        </div>
    );
}

export default Display;