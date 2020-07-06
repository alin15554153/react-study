import React, { PureComponent, useState ,useCallback } from 'react'

export default function HA_UseCallback(props) {
    //定义state
    const [count, setCount] = useState(0)


    const addClick = useCallback(
        () => {
            console.log("compute")
            let sum = 0
            for (let i = 0; i < count; i++) {
                sum += 1
            }
            return sum
        },
        [count],
    )
    const [value, setValue] = useState("")
    return (
        <div>
            <h3>HA_UseCallback</h3>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <input value={value} onChange={event => setValue(event.target.value)}></input>
            <Child addClick={addClick}> </Child>
        </div>
    )
}

class Child extends PureComponent {

    render() {
        console.log("child render")
        const { addClick } = this.props
        return (<div>
            <h3>Child</h3>
            <button onClick={() => console.log(addClick())}>add</button>
        </div>
        );
    }
}