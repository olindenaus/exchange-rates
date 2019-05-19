import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import './Block.css';

class Block extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        let {currencies} = this.props;
        if(currencies){
            for(var rate in currencies){
                console.log(rate, ':',currencies[rate]);
            }
        }
        /* TODO: 
            -sktóty walut umieścić w selektach
            -on change selektów obsłóżyć
            -doczyszenie kodu z Aoo odnośnie warunku podawania propsów do bloków
        */ 
    }

    render() {
        return (
            <div className="Block">
                <Input label="Wybierz walutę:" elementType="select">
                </Input>
                <Input label="Wartość" elementType="input">
                </Input>
            </div>
        );
    }
}

export default Block;