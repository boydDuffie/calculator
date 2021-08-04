import './Pad.css';
import React from 'react';


export const Pad = (props) => {
    return (
        <div className="pad-container">
            {props.children}
        </div>
    )
}