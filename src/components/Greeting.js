import React from 'react'

const greet ={
    color: ''
}
const message ={
    background: 'pink',
    padding: '15px',
    borderRadius: '5px'
}
const middle ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
}

function Greeting() {
    
    let currDate = new Date(),
        currTime = currDate.getHours(),
        wish = '';
    if(currTime >= 1 && currTime <= 12){
        wish = 'Good Morning';
        greet.color = 'green'
    }else if(currTime >= 12 && currTime <= 19){
        wish = 'Good Afternoon';
        greet.color = 'orange'
    }else{
        wish = 'Good Night';
        greet.color = 'blue'
    }
    

    return (
        <div style={middle}>
            <h1 style={message}>Hello, <span style={greet}>{wish}</span></h1>
        </div>
    )
}

export default Greeting
