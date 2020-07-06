import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ReactReduxChild from './ReactReduxChild'

export default class ReactReduxParent extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>ReactReduxParent</h3>
                    <ReactReduxChild></ReactReduxChild>
                </div>
            </Provider>
        )
    }
}

