import React,{useState}from "react";
import './App.css';
import "./ToDoList";
import ToDoList from "./ToDoList";

const App =()=>{

  const[inputList,setInputList]= useState("");
  const[Items,setItems]= useState([]);



  const itemEvent=(event)=>{
    setInputList(event.target.value)

  }

  const listOfItems=()=>{
    setItems((oldItems)=>{   //calling the old value of set item array,
      return[...oldItems,inputList] //the old items that is stored at old item and newly assigned items on the inputList.
    })

      setInputList("");
  }

  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{   
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      })
    })

  }

  return ( <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type ="text" placeholder="Add An Item" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems} className="add">+</button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((itemval,index)=>{
            return( <ToDoList id={index} key={index} text={itemval} onSelect={deleteItems}/>)
          })}
        </ol>

      </div>
    </div>
    )
  
   

  
  }




export default App ;