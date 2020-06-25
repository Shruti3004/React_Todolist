import React from 'react'
import Add from './Add'

function Calculator() {
    const number1 =40
    return (
        <div>
            <h1>Sum of two Numbers is:<Add number1={number1} number2={3}/> </h1>
            <h1>Sub of two Numbers is: </h1>
            <h1>Mul of two Numbers is: </h1>
            <h1>Div of two Numbers is: </h1>
        </div>
    )
}

export default Calculator
