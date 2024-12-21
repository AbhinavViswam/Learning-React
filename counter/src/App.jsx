import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  return (
    <>
    <h1>{count}</h1>
  <button onClick={(e)=>e.target(setCount(count+1))}>UP</button>
  <button onClick={(e)=>e.target(setCount(count-1))}>DOWN</button>
    </>
  )
}

export default App