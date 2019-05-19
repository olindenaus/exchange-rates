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
      cachedData: null
    }

  }

  getData = () => {
    Axios.get('https://api.exchangeratesapi.io/latest')
      .then(result => {
        this.setState({ cachedData: result.data })
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

  render() {

    let currencies = null;
    if (this.state.cachedData) {
      currencies = (
        <React.Fragment>
          <Block currencies={this.state.cachedData.rates} />
          <TransferPanel />
          <Block currencies={this.state.cachedData.rates} />
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
