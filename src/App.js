import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import History from './containers/History/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/history' component={History} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;