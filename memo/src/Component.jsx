import { memo, useState } from "react"

function Component() {
    const [count1,setCount1]=useState(0);
    const val=cnt(count1)
  return (
    <div>
        {val}
        <button onClick={()=>setCount1(count1+1)}>ADD</button>
    </div>
  )
}
const cnt=(c)=>{
    console.log("calculating...")
    return c*2
}

export default memo(Component)