import React from 'react'

function Time({name}) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    return (
        <div>
            <h1>My name is {name}</h1>
            <p>Current Date {currDate}</p>
            <p>Current Time {currTime}</p>
        </div>
    )
}

export default Time
