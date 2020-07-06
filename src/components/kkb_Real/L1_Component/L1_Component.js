import React, { Component } from 'react'
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import ContextPage from "./Context/ContextPage";
import ContextTypePage from "./Context/ContextTypePage";
import UseContextPage from "./Context/UseContextPage";
import HocPage from "./HocPage";
import AntdFormPage from "./AntdForm";
import MyRCFieldForm from "./MyRCFieldForm";
import "./Context/index.css";
export default class React组件化 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/ContextPage">ContextPage</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/ContextTypePage">ContextTypePage</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/UseContextPage">UseContextPage</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/HocPage">HocPage</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/AntdFormPage">AntdFormPage</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Real/L1_Component/MyRCFieldForm">MyRCFieldForm</NavLink>
                    <hr />
                    <Route path="/kkb_Real/L1_Component/ContextPage" component={ContextPage}></Route>
                    <Route path="/kkb_Real/L1_Component/ContextTypePage" component={ContextTypePage}></Route>
                    <Route path="/kkb_Real/L1_Component/UseContextPage" component={UseContextPage}></Route>
                    <Route path="/kkb_Real/L1_Component/HocPage" component={HocPage}></Route>
                    <Route path="/kkb_Real/L1_Component/AntdFormPage" component={AntdFormPage}></Route>
                    <Route path="/kkb_Real/L1_Component/MyRCFieldForm" component={MyRCFieldForm}></Route>
                </div>
            </Router>
        )
    }
}
