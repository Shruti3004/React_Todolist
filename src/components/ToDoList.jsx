import React from 'react'

function ToDoList({text, onSelect, id}) {
    return( 
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria="true" onClick ={() => onSelect(id)}/>
                <li>{text}</li>
            </div>
        </>
    )
}

export default ToDoList
