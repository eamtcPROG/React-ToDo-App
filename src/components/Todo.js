import React  from 'react';


function Todo({todo, handleToggle}) {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.id}. {todo.task}
        </div>
    );
  }
  
  export default Todo;