import React from 'react';
import './Result.css';

export const Result = (props) => {
    return (
        <div className="result">
            <p className="res-value">{props.value}</p>
        </div>
    );
}