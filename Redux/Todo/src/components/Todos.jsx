import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>dlt</button>
            </li>
        ))}
    </div>
  )
}

export default Todos