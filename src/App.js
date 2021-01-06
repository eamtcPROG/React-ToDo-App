import React, { useState } from 'react';
import './App.css';
import data from "./data.json";
import ToDoList from "./components/TodoList.js";
import ToDoForm from './components/TodoForm.js';
function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  return (
    <div className="App">
      <h1>To Do List:</h1>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
