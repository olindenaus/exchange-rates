import React from 'react';
import './Input.css';
const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input>
            </input>
            break;
        case ('select'):
            inputElement = <select
                // className={}
                onChange={props.changed}>
            </select>
            break;
        default:
            inputElement = <input
            //  className={}
            />;
    }

    return (
        <div className="Input">
            <label className="Label">
                {props.label}</label>
            {inputElement}
        </div>
    )
};
export default input;