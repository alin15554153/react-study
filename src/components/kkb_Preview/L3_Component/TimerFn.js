import React, { useState, useEffect } from 'react'

export default function TimerFn(props) {
    const [date, setDate] = useState(new Date())
    // console.log(props)
    useEffect(() => {
        console.log('useEffect')
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <span>fn: {date.toLocaleTimeString()}</span>
    )
}
