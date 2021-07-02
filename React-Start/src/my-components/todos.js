import React from 'react'
import './style.css';
import {Todoitem} from "./todoitem"

export default function todos(props) {
    return (
        <>
        <div className="container bg-danger">
            
        <h4 className="py-4 text-center">Todos List here</h4>    
        <div className =  'todos_heading '>
            {/* Hi Akky welcome here */}  
            {props.todos.length===0? "No Todos to display":
            props.todos.map((todos, index)=>{
              return <Todoitem  todo = {todos} key={index} ondelete={props.ondelete}/>
           })   
        }
        </div>
        </div>
        </>
    )
}

