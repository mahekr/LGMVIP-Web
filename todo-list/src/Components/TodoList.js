import React from 'react'
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'

export default function ToDoList() {
  
 // array that contains all the todo
  const [todo , setTodo] = useState([]); 
  
  
  // add todo to list
 const addTask = task  => {
    if(!task.text){
        return
    }

   const newTodo= [task,...todo];
   setTodo(newTodo);
  }

   // remove to do from list
   const removeTask = id => {
    let updatedTasks=[...todo].filter(task => task.id !== id )
    setTodo(updatedTasks)
   } 
    
  //task is completed
 
  const completedTask= id => {
    let updatedTasks=todo.map( todo => {
      if(todo.id ===id){
        todo.isComplete=true;
      }
      return todo;
    } )
setTodo(updatedTasks)

  }

    return (
    <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todo={todo} completedTask={completedTask} removeTask={removeTask}></Todo>
    </div>
  )
}
