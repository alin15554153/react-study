import React, { Component } from 'react'
import { HashRouter as Router,  NavLink, Route } from 'react-router-dom';
import TimerFn from './L3_Component/TimerFn'
import SetState from './L4_SetState/SetStateClass'
import LifeCycle from './L5_LifeCycle/LifeCycle'
import Layout from './L6_ComSlot/HomePage';
import Redux from './L7_redux/Redux'
import ReactRedux from './L8_react-redux/ReactReduxParent'
import PureCom from './L10_PureCom/PureCom'
import Hook from './L11_Hook/Hook'
import UseHook from './L12_CustomHook/UseHook'
import HookAPI from './L13HookAPI/HA_UseCallback'
export default class kkb_Preview extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/SetState">SetState</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/LifeCycle">LifeCycle</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/Layout">Layout</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/Redux">Redux</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/ReactRedux">ReactRedux</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/PureCom">PureCom</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/Hook">Hook</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/UseHook">UseHook</NavLink>
                    <NavLink className="linkRouter" activeClassName="activeLinkRouter" to="/kkb_Preview/HookAPI">HookAPI</NavLink>
                    <TimerFn name ="foo"/>
                    <hr />
                    <Route path="/kkb_Preview/SetState" component={SetState}></Route>
                    <Route path="/kkb_Preview/LifeCycle" component={LifeCycle}></Route>
                    <Route path="/kkb_Preview/Layout" component={Layout}></Route>
                    <Route path="/kkb_Preview/Redux" component={Redux}></Route>
                    <Route path="/kkb_Preview/ReactRedux" component={ReactRedux}></Route>
                    <Route path="/kkb_Preview/PureCom" component={PureCom}></Route>
                    <Route path="/kkb_Preview/Hook" component={Hook}></Route>
                    <Route path="/kkb_Preview/UseHook" component={UseHook}></Route>
                    <Route path="/kkb_Preview/HookAPI" component={HookAPI}></Route>
                </div>
            </Router>
        )
    }
}
