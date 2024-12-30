import { useMemo, useState } from "react"

function App1() {
    const [num,setNum]=useState(0)
    const calculation=useMemo(()=>calc(num),[num])
    const [todo,setTodo]=useState([])
    const addTodo=()=>{
        setTodo((prev)=>[...prev,"newTodo"])
      }
  return (
    <div>
        {num}
        {calculation}
        <button onClick={()=>{setNum(num+1)}}>click</button>
        <button onClick={addTodo}>ADD</button>
        <ul>
      {todo.map((todos,index)=>(
        <li key={index}>{todos}</li>
      ))}
      </ul>
    </div>
  )
}
const calc=(num)=>{
    console.log("running,...")
    for(let i=0;i<10000000;i++){
        num+=i
    }
    return num
}

export default App1