import { useState } from "react"
import { memo } from "react"

function Component1() {
    const [count,setCount]=useState(0)
    const calc=cal(count)
  return (
    <div>
        {calc}
        <button onClick={()=>setCount(count+2)}>ADD2</button>

    </div>
  )
}

const cal=(cnt)=>{
    console.log("it is a big calculation")
    return cnt*5
}
export default memo(Component1)