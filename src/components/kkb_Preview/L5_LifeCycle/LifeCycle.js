import React, { Component } from 'react';
// import PropTypes from 'prop-types'
class LifeCycle extends Component {
    static defaultProps = {
        // msg: "omg"
    }
    static propTypes = {
        // msg: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        console.log("constructor")
    }

    //gdsfp
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        const {count} = state
        return count > 5 ? {count:0} : null
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    // UNSAFE_componentWillMount() {
    //     console.log("componentWillMount")
    // }
    componentDidMount() {
        console.log("componentDidMount")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate",prevProps, prevState)
        return {msg:"我是getSnapshotBeforeUpdate"}
    }
    //gsbu
    shouldComponentUpdate(nextProps, nextState) {
        const { count } = nextState
        console.log("shouldComponentUpdate", nextState)
        return count !== 3
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate")
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate",prevProps, prevState, snapshot)
    }
    setCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        console.log("render", this.props)
        const { count } = this.state
        return (
            <div>
                <h3>LifeCycle</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变count</button>
                {/* {count % 2 && <Child count={count}></Child>} */}
                <Child count={count}></Child>
            </div>
        );
    }
}

export default LifeCycle;


class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps")
    // }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render() {
        console.log("Child render")
        return (
            <div>
                <h3>Child</h3>
            </div>
        );
    }
}

