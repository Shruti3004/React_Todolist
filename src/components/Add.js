import React from 'react'

function Add({number1,number2}) {
    let division
    division =  (number1/number2).toFixed(2);
    return division            
}

export default Add
