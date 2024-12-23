import { useState } from 'react'
import Navbar from "./components/Navbar"
import CountContext from "./context/countContent.js"

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <CountContext.Provider value={{count,setCount}}>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Navbar/>
      </div>
     </CountContext.Provider>
    </>
    
  )
}

export default App
