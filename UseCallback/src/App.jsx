import { useCallback, useState } from "react"
import List from "./List";

function App() {
  const [count,setCount]=useState(0);
  const [dark,setDark]=useState(false)
 const cnt=useCallback((val)=>{
  for(let i=0;i<100000000;i++){
    //
  }
  console.log("hello")
  return [count+val,count*val,count-val]
 },[count])
  const theme={
    backgroundColor:dark?"black":"white",
    color:dark?"white":"black"
  }
  return (
    <div style={theme}>
      <br />
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <br />
      <button onClick={()=>setDark((prev)=>!prev)}>{dark?"Light":"Dark"}</button>
      <br />
      <List cnt={cnt} />
    </div>
  )
}
export default App
