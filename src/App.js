import React, { Component } from 'react';
import { HashRouter as Router,  NavLink, Route } from 'react-router-dom';
import './App.css';
import kkb_Preview from './components/kkb_Preview/kkb_Preview.js'
import kkb_Real from './components/kkb_Real/kkb_Real.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview">kkb预习</NavLink>
          <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real">kkb正课</NavLink>
          <hr />
          <Route path="/kkb_Preview" component={kkb_Preview}/>
          <Route path="/kkb_Real" component={kkb_Real}/>
        </div>
      </Router>
    );
  }
}

export default App;