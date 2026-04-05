import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, deleteTodo} from '../app/todoslice';

const TodoComponents = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos.todo)
  const [input, setInput] = useState("")

  return (
    <>
        <h1>ToDo-App{input}</h1>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your task here' />
        <button onClick={()=>{dispatch(addTodo(input)); setInput("");}}>Add Task</button>
        {todos&&todos.map((item, index)=>{
            return (
                <div><p>{item}</p><button onClick={()=>dispatch(deleteTodo(index))}>Delete</button></div>
            )
        })}
    </>
  )
}

export default TodoComponents