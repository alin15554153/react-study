import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default class Layout extends Component {
    componentDidMount() {
        const { title = "商城" } = this.props
        document.title = title
    }
    render() {
        const { children, showTopBar, showBottomBar } = this.props
        console.log('children', children, showTopBar, showBottomBar)
        return (
            <div>
                {showTopBar && <TopBar />}
                {children.content}
                {children.txt}
                <button onClick={children.btnClick}>button</button>
                {showBottomBar && <BottomBar />}
            </div>
        )
    }
}
