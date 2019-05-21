import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Block from './containers/Block/Block';
import Button from './components/UI/Button/Button';
import TransferPanel from './components/TransferPanel/TransferPanel';
import Axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      cachedData: null,
      leftBlockCurrency: 'APN',
      rightBlockCurrency: '',
    }
  }

  getData = () => {
    Axios.get('https://api.exchangeratesapi.io/latest')
      .then(result => {
        let tempOptions = [];
        for (var country in result.data.rates) {
          tempOptions.push(country);
        }
        this.setState({ options: tempOptions, cachedData: result.data });
        console.log(result.data);
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        //always execute
      });
  }

  componentWillMount() {
    this.getData();
  }

  onSelectChanged = (id) => {
    console.log(id);
    let callback;
    if (id === 1) {
      callback = event => this.setState({ leftBlockCurrency: event.target.value });
    } else {
      callback = event => this.setState({ rightBlockCurrency: event.target.value });
    }
    console.log(callback);
    return callback;
    // let value = event.target.value;
    // let rate = this.state.cachedData.rates[value];
    // console.log(rate);
  }

  leftSelect = (event) => {
    this.setState({ leftBlockCurrency: event.target.value });
  }

  rightSelect = (event) => {
    this.setState({ rightBlockCurrency: event.target.value });
  }

  render() {

    let currencies = null;
    if (this.state.cachedData) {
      currencies = (
        <React.Fragment>
          <Block
            currencies={this.state.cachedData.rates}
            options={this.state.options}
            currencyChanged={this.leftSelect/*(event) => this.onSelectChanged(1)(event)*/}
          />
          <label>{this.state.leftBlockCurrency}</label>
          <TransferPanel />
          <Block
            currencies={this.state.cachedData.rates}
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
