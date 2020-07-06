import React, { Component } from 'react'
import { connect } from "react-redux"
const dispatchObj = {
    add: () => ({ type: 'ADD' })
    // add:function(){
    //     return {
    //         type:'ADD'
    //     }
    // }
}
export default connect(
    //mapStageToProps 把state映射到props
    state =>({num:state}),// state => { return { num: state } },
    //mapDispatchToProps 把dispatch映射到props
    dispatchObj
)(class ReactReduxChild extends Component {
    render() {
        const { num, add } = this.props
        console.log("props", this.props)
        return (
            <div>
                <h3>ReactReduxChild</h3>
                <p>{num}</p>
                {/* <button onClick={() => dispatch({ type: "ADD" })}>Add</button> */}
                <button onClick={add}>Add</button>
            </div>
        )
    }
})
