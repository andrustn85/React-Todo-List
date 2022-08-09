import './App.css';

import React, { useState} from "react";


function App() {

const [task, setNewTask] = useState("");

const [items, newItems] = useState([]);

function handleTask(event) {
  const newTask = event.target.value;
  setNewTask(newTask)
}

function addNewTask() {
newItems(prevItems => {
  return [...prevItems, task];
})
setNewTask("");
}


  return (
    <div className="container">
      <div className="heading">
        <h1> To-Do List </h1>
      </div>
      <div className="form">
        <input
         type="text"
         placeholder="Write your task here"
         onChange={handleTask}
         value={task}
          />
        <button onClick={addNewTask}>
          <span> Add </span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(todoItem => {
          return <li> {todoItem} </li>;
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
