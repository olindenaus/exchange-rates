import React from 'react';

const button = (props) => {

    return (
        <button onClick={props.clicked}>
            {props.text}
        </button>
    )
};
export default button;