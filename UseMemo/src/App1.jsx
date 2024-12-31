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
        
        {calculation}
        <input type="text" />
        <button onClick={()=>{setNum()}}>click</button>
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

//here when we add a new todo the whole page rerenders , if we dont use useMemo then the expensive calculation is recalculated. When we wrap it in useMemo, the state rerenders but since the result is same it is taken from the memo, and hence no recalculation required....