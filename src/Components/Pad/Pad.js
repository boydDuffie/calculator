import './Pad.css';
import React from 'react';
import {Button} from '../Button/Button';

export const Pad = (props) => {
    return (
        <div className="pad-container">
            <div className="button-row #AcCe/">
                <Button label="#"/>
                <Button label="AC"/>
                <Button label="CE"/>
                <Button label="/"/>
            </div>
            <div className="button-row 789x">
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="x"/>
            </div>
            <div className="button-row 456-">
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-"/>
                </div>
            <div className="button-row 123+">
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
            </div>
            <div className="button-row 0.=">
                <Button label="0" style={{minWidth: '45%'}}/>
                <Button label="."/>
                <Button label="="/>
            </div>
        </div>
    )
}