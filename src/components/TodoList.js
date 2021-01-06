import React  from 'react';
import ToDo from './Todo';

function TodoList({toDoList, handleToggle, handleFilter}) {

  return (
      <div> 
          {toDoList.map(todo => {
             return (
               <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
              )
            })}
            
    </div>
    );
  }
  
  export default TodoList;