import { useContext } from "react"
import CountContext from "../context/countContent"

function Component() {
    const {count,setCount}=useContext(CountContext)
  return (
    <div>
      <button onClick={()=>setCount((prev)=>prev+1)}>Add</button>
        {count}
    </div>
  )
}

export default Component