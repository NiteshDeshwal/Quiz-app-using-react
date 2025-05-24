// Option.js

import React from 'react';

const Options = ({ options, selectedOption, onOptionChange }) => {
    return (
        <div className='options'>
            {options.map(option => (
                <div key={option} className="form-check">
                    <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={onOptionChange}
                        className="form-check-input"
                        id={`option-${option}`}
                    />
                    <label className="form-check-label" htmlFor={`option-${option}`}>
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Options;
