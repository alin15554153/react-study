import React, { Component } from 'react';
import { HashRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Index/index' 

const Home_C1 = () => (
  <div>
    <h2>Home_C1</h2>
  </div>
)
const Home_C2 = () => (
  <div>
    <h2>Home_C2</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/home">Home</NavLink>
          <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/About">About</NavLink>
          <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/Product">Product</NavLink>
          <hr/>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
        </div>
      </Router>
    );
  }
}

export default App;