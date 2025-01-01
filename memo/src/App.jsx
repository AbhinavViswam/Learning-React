import { useState } from "react"
import Component from "./Component"
import Component1 from "./Component1"

function App() {
  const [add,setAdd]=useState(0)
  return (
    <div>
      <Component/>
      {add}
      <button onClick={()=>setAdd(add+10)}>!_</button>
      <Component1/>
    </div>
  )
}

export default App