import './Button.css';
import React from 'react';

// Each button will be a component which is clickable and when clicked, sends an event up the chain
export const Button = (props) => {
    return (
        <div className="button" style={props.style} onClick={props.onClick} data-value={props.value}>
            {props.label}
        </div>
    )
}