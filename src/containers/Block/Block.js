import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import './Block.css';

class Block extends Component {
     render () {
         return (
            <div className="Block">
                <Input label="CośtamLABEL" elementType="input">
                </Input>
                <Input label="Wybierz walutę:" elementType="select">
                </Input>
            </div>
        );
    }
}

export default Block;