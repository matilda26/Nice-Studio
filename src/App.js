import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './Header'
import HomePage from './HomePage'
import CutOut from './CutOut'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/cutout' component={CutOut} />
        </div>
      </Router>
    );
  }
}

export default App;
