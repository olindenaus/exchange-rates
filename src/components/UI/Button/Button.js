import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = (props) => {

    return (
            <button className={"Button"} onClick={props.clicked}>
                {props.text}
                {'  '}
                <FontAwesomeIcon icon={props.icon} />
            </button>
    )
};
export default button;