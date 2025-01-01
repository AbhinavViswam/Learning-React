import { useMemo, useState } from "react"

function App2() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    const calculation=useMemo(()=>{
        return calc(count)
    },[count])
  return (
    <>
    Count:{calculation}
    Count1:{count1}
    <button onClick={()=>setCount(count+1)}>Count</button>
    <button onClick={()=>setCount1(count1+1)}>Count1</button>
    </>
  )
}

function calc(num){
    console.log("fn running")
    for(let i=0;i<1000000;i++){
        //
    }
    return num*2
}

export default App2