import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Home.css';

import * as actions from '../../store/Actions/actions'

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

                this.props.onCurenciesOptionsFetch(tempOptions);

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
        console.log(window.innerHeight, window.innerWidth);
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
        // this.setState({ leftBlockCurrency: value });
        this.props.onLeftCurrencyChanged(value);
        this.getSpecific(value);
    }

    rightSelect = (event) => {
        // this.setState({ rightBlockCurrency: event.target.value });
        this.props.onRightCurrencyChanged(event.target.value);
    }

    calculateLeftToRight = () => {
        let rightCurrency = this.props.rightCurrency;
        let rates = this.state.cachedData;
        let rate = rates[rightCurrency];
        let result = this.state.leftBlockAmmount * rate;
        result = result.toFixed(2);
        this.setState({ rightBlockAmmount: result });
    }

    calculateRightToLeft = () => {
        let rightCurrency = this.props.rightCurrency;
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
                            currencyCode={this.props.leftCurrency}
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
                            currencyCode={this.props.rightCurrency}
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
        rightCurrency: state.rightBlockCurrency,
        leftCurrency: state.leftBlockCurrency,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCurenciesOptionsFetch: (options) => dispatch(actions.addOptions(options)),
        onLeftCurrencyChanged: (optionValue) => dispatch(actions.setLeftBlockCurrency(optionValue)),
        onRightCurrencyChanged: (optionValue) => dispatch(actions.setRightBlockCurrency(optionValue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);