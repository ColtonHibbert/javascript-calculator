import React from 'react';

const Display = ({changeDisplayUpper}) => {
    return (
        <div className="pointer" onClick={changeDisplayUpper}>
            click me to log 7
        </div>
    );
}

export default Display;