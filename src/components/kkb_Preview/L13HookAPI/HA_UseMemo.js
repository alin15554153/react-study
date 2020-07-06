import React, { useState, useMemo } from 'react'

export default function HA_UseMemo(props) {
    //定义state
    const [count, setCount] = useState(0)

    const expensive = useMemo(() => {
        console.log("compute")
        let sum  = 0 
        for(let i = 0 ; i < count ; i++){
            sum += 1
        }
        return sum
    }, [count]) 

    const [value, setValue] = useState("")
    return (
        <div>
            <h3>HA_UseMemo</h3>
            <p>count:{count}</p>
            <p>expensive:{expensive}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <input value={value} onChange={event => setValue(event.target.value)}></input>
            
        </div>
    )
}


