import { useState } from 'react'

function App() {
  const name="Abhinav";
  const [visibility, setVisibility] = useState(false)
const showhidename=()=>{
  setVisibility(!visibility)
}
  return (
    <>
    {visibility?<h1>{name}</h1>:<h1></h1>}
    <button onClick={showhidename}>{visibility?"Hide":"Show"}</button>
    </>
  )
}

export default App
