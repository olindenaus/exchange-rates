import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Block from './containers/Block/Block';
import Button from './components/UI/Button/Button';
import TransferPanel from './components/TransferPanel/TransferPanel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Block/>
          <TransferPanel/>
          <Block/>
        </Layout>
      </div>
    );
  }
}

export default App;
