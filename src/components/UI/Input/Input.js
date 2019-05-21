import React from 'react';
import './Input.css';
const input = (props) => {
    let inputElement = null;
    let {options} = props;
    
    switch (props.elementType) {
        case ('input'):
            inputElement = <input>
            </input>
            break;
        case ('select'):
            inputElement = (<select
                // className={}
                onChange={props.changed}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))
                }
            </select>);
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