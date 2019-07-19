import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Home.css';

import { addOptions } from '../../store/Actions/actions'

import axios from '../../config/Axios';
import Block from '../Block/Block';
import TransferPanel from '../../components/TransferPanel/TransferPanel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cachedData: null,
            leftBlockCurrency: 'EUR',
            rightBlockCurrency: 'PLN',
            rightBlockOptions: [],
            rightBlockAmmount: 0,
            leftBlockAmmount: 0
        }
    }

    getData = () => {
        axios.get(`/latest`)
            .then(result => {
                let tempOptions = [];
                tempOptions = this.parseObjectToArray(result.data);
                tempOptions.push('EUR');
                this.getSpecific('EUR');

                this.props.OnCurenciesOptionsFetch(tempOptions);

                this.setState({cachedData: result.data.rates });
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                //always execute
            });
    }

    parseObjectToArray = (data) => {
        let tempOptions = [];
        for (var country in data.rates) {
            tempOptions.push(country);
        }
        return tempOptions;
    }

    componentWillMount() {
        console.log('Will Mount');
        this.getData();
    }

    getSpecific = (currency) => {
        axios.get(`/latest?base=${currency}`)
            .then(result => {
                console.log('For specific', currency, result.data.rates);
                let tempOptions = this.parseObjectToArray(result.data)
                this.setState({ rightBlockOptions: tempOptions, cachedData: result.data.rates });
            })
    }

    leftSelect = (event) => {
        let value = event.target.value;
        this.setState({ leftBlockCurrency: value });
        this.getSpecific(value);
    }

    rightSelect = (event) => {
        this.setState({ rightBlockCurrency: event.target.value });
    }

    calculateLeftToRight = () => {
        let rightCurrency = this.state.rightBlockCurrency;
        let rates = this.state.cachedData;
        let rate = rates[rightCurrency];
        let result = this.state.leftBlockAmmount * rate;
        result = result.toFixed(2);
        this.setState({ rightBlockAmmount: result });
    }

    calculateRightToLeft = () => {
        let rightCurrency = this.state.rightBlockCurrency;
        let rates = this.state.cachedData;
        let rate = 1 / rates[rightCurrency];
        let result = this.state.rightBlockAmmount * rate;
        result = result.toFixed(2);
        this.setState({ leftBlockAmmount: result });
    }

    leftBlockCurrencyValueUpdate = (event) => {
        let { value } = event.target;
        this.setState({ leftBlockAmmount: value })
    }

    rightBlockCurrencyValueUpdate = (event) => {
        let { value } = event.target;
        this.setState({ rightBlockAmmount: value })
    }

    render() {

        let currencies = null;
        if (this.state.cachedData) {
            currencies = (
                <React.Fragment>
                    <div className={"Home"}>
                        <Block
                            currencies={this.state.cachedData.rates}
                            options={this.props.opt}
                            currencyChanged={this.leftSelect}
                            currencyValueChanged={this.leftBlockCurrencyValueUpdate}
                            ammount={this.state.leftBlockAmmount}
                            currencyCode={this.state.leftBlockCurrency}
                        />
                        <TransferPanel
                            leftToRight={this.calculateLeftToRight}
                            rightToLeft={this.calculateRightToLeft}
                        />
                        <Block
                            currencies={this.state.rightBlockOptions}
                            options={this.props.opt}
                            currencyChanged={this.rightSelect}
                            currencyValueChanged={this.rightBlockCurrencyValueUpdate}
                            ammount={this.state.rightBlockAmmount}
                            currencyCode={this.state.rightBlockCurrency}
                        />
                    </div>
                </React.Fragment>
            );
        }
        return currencies;
    }
}


const mapStateToProps = state => {
    return {
        opt: state.options,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnCurenciesOptionsFetch: (options) => dispatch(addOptions(options)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);