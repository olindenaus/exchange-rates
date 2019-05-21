import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Block from './containers/Block/Block';
import Button from './components/UI/Button/Button';
import TransferPanel from './components/TransferPanel/TransferPanel';
import axios from './config/Axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      cachedData: null,
      leftBlockCurrency: 'EUR',
      rightBlockCurrency: '',
      rightBlockValues: [],
      result: 0,
    }
  }

  getData = () => {
    axios.get(`/latest`)
      .then(result => {
        let tempOptions = [];
        tempOptions = this.pareseObjectToArray(result.data);
        tempOptions.push('EUR');
        this.getSpecific('EUR');
        this.setState({ options: tempOptions, cachedData: result.data.rates });
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        //always execute
      });
  }

  pareseObjectToArray = (data) => {
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
        let tempOptions = this.pareseObjectToArray(result.data)        
        this.setState({ rightBlockValues: tempOptions, cachedData: result.data.rates});
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
    let leftCurrency = this.state.leftBlockCurrency;
    let rightCurrency = this.state.rightBlockCurrency;
    let rates = this.state.cachedData;
    let rate = rates[rightCurrency];
    let result = 1000*rate;
    this.setState({result});
  }

  render() {

    let currencies = null;
    if (this.state.cachedData) {
      currencies = (
        <React.Fragment>
          <Block
            currencies={this.state.cachedData.rates}
            options={this.state.options}
            currencyChanged={this.leftSelect}
          />
          <label>{this.state.result}</label>
          <TransferPanel 
            leftToRight = {this.calculateLeftToRight}
          />
          <Block
            currencies={this.state.rightBlockValues}
            options={this.state.options}
            currencyChanged={this.rightSelect}
          />
        </React.Fragment>
      );
    }
    return (
      <div className="App">
        <Layout>
          {currencies}
        </Layout>
      </div>
    );
  }
}

export default App;
