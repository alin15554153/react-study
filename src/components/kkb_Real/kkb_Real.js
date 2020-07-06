import React, { Component } from 'react'
import { HashRouter as Router,  NavLink, Route } from 'react-router-dom';
import L1_Component from './L1_Component/L1_Component'
// import L4_React_Router from './L4_React_Router/L4_React_Router'
export default class KKB正课 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component">React组件化</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L4_React_Router">React_Router</NavLink>
                    <hr />
                    <Route path="/kkb_Real/L1_Component" component={L1_Component}></Route>
                    {/* <Route path="/kkb_Real/L4_React_Router" component={L4_React_Router}></Route> */}
                </div>
            </Router>
        )
    }
}
