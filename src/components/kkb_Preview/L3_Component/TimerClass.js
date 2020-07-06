import React, { Component } from 'react';
class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const { date } = this.state
        return (<span>class:{date.toLocaleTimeString()}</span>);
    }
}

export default TimerClass;