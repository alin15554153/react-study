import React, {  PureComponent } from 'react'

export default class PureCom extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            obj: {
                num: 0
            }
        };
    }
    setCount = () => {
        this.setState({
            count: 100
            , obj: { num: 1000 }
        }
        )
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     return nextState.count !== this.state.count
    // }
    render() {
        const { count } = this.state
        console.log("render")
        return (

            <div>
                <h3>PureCom</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
