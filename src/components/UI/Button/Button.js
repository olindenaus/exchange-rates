import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = (props) => {

    return (
        <Button size="lg" onClick={props.clicked}>
            {props.text}
            {'  '}
            <FontAwesomeIcon icon={props.icon} />
        </Button>
    )
};
export default button;