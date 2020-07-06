import React, { useState, useEffect } from 'react'

export default function UseHook(props) {
    //定义state
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("count useEffect")
        document.title = `点击了${count}次`
    },[count])
    return (
        <div>
            <h3>UseHook</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>{useClock().toLocaleTimeString()}</p>
        </div>
    )
}

//
function useClock(){
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log("Date useEffect")
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        //清除定时器，willUnmount
        return ()=> clearInterval(timer)
    },[])
    return date
}