import React from 'react';

const Display = ({changeDisplayUpper}) => {
    return (
        <div className="pointer bg-black" onClick={changeDisplayUpper}>
            <div 
                className="
                h2 flex justify-end white
                h2-ns
                h3-m
                h3-l
                "
            >upper</div>
            <div 
                className="
                h2 flex justify-end white
                h2-ns
                h3-m
                h3-l
                "
            >lower</div>
        </div>
    );
}

export default Display;