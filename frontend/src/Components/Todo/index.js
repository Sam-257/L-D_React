import React, {useState} from 'react';
import './index.css';
import TodoList from './TodoList';

const Todo = () => {

  const [formInput, setFormInput] = useState('');
  const [todosList,setTodosList] = useState([]);

  const handleFormInputChange = e =>{
    setFormInput(e.target.value);
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(formInput !== ''){
      setTodosList([...todosList,formInput]);
    }
    setFormInput('');
  }

  const handleTodoComplete = (indexValue) => {
    //console.log('Completed');
    const newTodos = todosList.filter((todo,index) => index !== indexValue);
    setTodosList(newTodos);
  }


  return ( 
    <div className='container-fluid'>
      <div className='row justify-content-center'>
      <div className='col-5 text-center' >
        <div className='card mt-5'>
          <div className='card-header bg-dark text-white'>
            <h1>Todo List</h1>
          </div>
          <div className='card-body'>
            <form  onSubmit={handleFormSubmit}>
              <label className="inp">
                <input type="text" id="inp" placeholder="&nbsp;" value={formInput} onChange={ handleFormInputChange }/>
                <span className="label">Todo</span>
                <span className="focus-bg"></span>
                <button className='btn'>Add</button>
              </label>
            </form>
          </div>
          <TodoList todos={todosList} handleTodoComplete = {handleTodoComplete}/>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Todo