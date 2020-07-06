import React, { useState, useEffect } from 'react'

export default function Hook(props) {
    //定义state
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    //和didMount didUpdate类似
    // useEffect(() => {
    //     console.log("useEffect")
    //     document.title = `点击了${count}次`
    //     const timer = setInterval(() => {
    //         setDate(new Date())
    //     }, 1000);
    // })
    useEffect(() => {
        console.log("count useEffect")
        document.title = `点击了${count}次`
    },[count])
    useEffect(() => {
        console.log("Date useEffect")
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        //清除定时器，willUnmount
        return ()=> clearInterval(timer)
    },[])
    return (
        <div>
            <h3>Hook</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}
