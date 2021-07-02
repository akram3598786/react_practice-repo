import React from 'react';
import './style.css';

export const Todoitem = ({todo,ondelete,}) => {
    return (
        <div>
            <div className="todo">
             <h6>Task : {todo.task}</h6>    
             <p>Task_name : {todo.task_name}</p>    
             <p>members:{todo.members}</p>
             <button type="button" className="btn btn-info "   onClick = {()=>{ondelete(todo)}}>Delete</button>
             <br />
             </div>
        </div>
    )
}
