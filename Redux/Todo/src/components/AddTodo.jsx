import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo,removeTodo } from '../features/todoSlice'

function AddTodo() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input}  placeholder='Enter' onChange={(e)=>setInput(e.target.value)} />
            <button onClick={AddTodo}>submit</button>
        </form>
    </div>
  )
}

export default AddTodo