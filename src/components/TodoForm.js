import React,{ useState }  from 'react';

function TodoForm({ addTask,handleFilter }) {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
       <div>
            <form onSubmit={handleSubmit}>            
            <input value={userInput} type="text" onChange={handleChange} placeholder="To do..."/>
                <button>Add Todo</button>
                <button  onClick={handleFilter}>Clear Completed</button>
            </form>
            
        </div>
    );
  }
  
  export default TodoForm;