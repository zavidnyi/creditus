import React from 'react';

const Tracker = ({name, currentValue, maxValue}) => {
    return (
        <div className="tracker">
            <h1>{name}</h1>
            <div className="counter">
                {currentValue}/{maxValue}
            </div>
        </div>
    );
}

export default Tracker;