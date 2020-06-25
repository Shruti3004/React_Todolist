import React,{useState} from 'react'
import ToDoList from './ToDoList';

function Main() {
    const [input, setinput] = useState("")
    const [items, setItems] = useState([])
    const itemInput = (e) => {
      setinput(e.target.value)
    }
    const listOfItems = () => {
      setItems(oldItems => {
        return [...oldItems, input];
      });
      setinput("")
    }
    const deleteItems = (id) => {
        console.log('deleted');
        setItems(oldItems => {
            return oldItems.filter((arrEle ,index) => {
                return index !== id 
            })
        })
    }
    return (
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" placeholder="Add a Items" value={input} onChange={itemInput}/>
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((item, index)=> {
              return (
                <ToDoList 
                    key={index} 
                    id={index} 
                    text={item} 
                    onSelect={deleteItems}
                />
                );
            })}
          </ol>
        </div>
        
      </div>
    );
  }

export default Main
