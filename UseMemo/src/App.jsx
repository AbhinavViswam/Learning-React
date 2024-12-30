import { useMemo, useState } from "react"

function App() {
  const [todo,setTodo]=useState([])
  const [count,setCount]=useState(0)
   
  const expCalc=useMemo(()=>calc(count),[count])
  const addTodo=()=>{
    setTodo((prev)=>[...prev,"newTodo"])
  }
  return (
    <div>
      <button onClick={addTodo}>ADD</button>
      <button onClick={()=>{setCount(count+1)}}>ADD</button>
      <ul>
      {todo.map((todos,index)=>(
        <li key={index}>{todos}</li>
      ))}
      </ul>
      <div>
        expensive:{expCalc}
      </div>
    </div>
  )
}
const calc=(num)=>{
  for(let i=0;i<1000000;i++){
    num+=i
  }
  return num
}
export default App