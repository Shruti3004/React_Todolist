import React from 'react';
import './App.css';
import Main from './components/Main';


function App() {
  // const [input, setinput] = useState("")
  // const [items, setItems] = useState([])
  // const itemInput = (e) => {
  //   setinput(e.target.value)
  // }
  // const listOfItems = () => {
  //   setItems(oldItems => {
  //     return [...oldItems, input];
  //   });
  //   setinput("")
  // }
  // return (
  //   <div className="main_div">
  //     <div className="center_div">
  //       <br/>
  //       <h1>To Do List</h1>
  //       <br/>
  //       <input type="text" placeholder="Add a Items" value={input} onChange={itemInput}/>
  //       <button onClick={listOfItems}>+</button>
  //       <ol>
  //         {items.map((item)=> {
  //           <ToDoList text={item}/>
  //         })}
  //       </ol>
  //     </div>
      
  //   </div>
  // );
  return(
    <div className="App">
    <Main />
  </div>
  )

}

export default App;
