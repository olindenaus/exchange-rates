import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import './Block.css';

const block = (props) => {
        return (
            <div className="Block">
                <Input
                    label="Wybierz walutę:"
                    elementType="select"
                    options={props.options}
                    changed={props.currencyChanged}
                    value={props.currencyCode}>
                </Input>
                <Input 
                    label="Wartość" 
                    elementType="input"
                    changed={props.currencyValueChanged}
                    value={props.ammount}>
                </Input>
            </div>
        );
    }

export default block;