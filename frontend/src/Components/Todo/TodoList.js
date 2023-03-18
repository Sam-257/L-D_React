import React from 'react';
import {FcApproval} from 'react-icons/fc'
import './index.css';

const TodoList = ({todos,handleTodoComplete}) => {
  return (
      <div className='card'> 
        {todos.map((todo,index) => <div key={index}  className='card m-2 card-1'>
            <button className='cross' onClick={() => handleTodoComplete(index)}><FcApproval/> Completed ? </button> 
            <h5 className='p-2'>{todo}</h5>
        </div>)}
    </div>
  )
}

export default TodoList