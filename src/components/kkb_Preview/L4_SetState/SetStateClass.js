import React, { Component } from 'react';
class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0
         }
    }
    // componentDidMount(){
    //     this.changValue(2)
    // }
    changValue = v=>{
        //setSatae在合成事件中是异步的，
        this.setState({
            counter:this.state.counter + v
        })
        console.log('counter',this.state.counter)
    }
    setCounter = ()=>{
        // this.changValue(1)
        setTimeout(() => {
            this.changValue(1) 
        }, 0);
    }
    render() { 
        const {counter} = this.state
        return ( <button onClick={this.setCounter}>{counter}</button> );
    }
}
 
export default SetState;