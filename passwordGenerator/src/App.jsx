import { useState } from "react"

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setnumAllowed]=useState(false)
  return (
    <>
    {numAllowed}
    <input type="text"  />
    <input type="range" min={1} max={20} value={length} onChange={(e)=>setLength(e.target.value)} />Length({length})
    <input type="checkbox" onChange={()=>setnumAllowed((prev)=>!prev)}  />numAllowed
    </>
  )
}

export default App
