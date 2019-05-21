import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import './Block.css';

class Block extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        /* TODO: 
            -on change selektów obsłóżyć
            -doczyszenie kodu z Aoo odnośnie warunku podawania propsów do bloków
        */
    }

    render() {
        let { currencies } = this.props;
        return (
            <div className="Block">
                <Input
                    label="Wybierz walutę:"
                    elementType="select"
                    options={this.props.options}
                    changed={this.props.currencyChanged}>
                </Input>
                <Input label="Wartość" elementType="input">
                </Input>
            </div>
        );
    }
}

export default Block;