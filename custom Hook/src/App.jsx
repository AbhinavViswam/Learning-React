import useCounter from "./Counter/Counter"

function App() {
  const {count, increment, decrement} = useCounter()
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>increment()}>+</button>
    <button onClick={()=>decrement()}>-</button>
    </>
  )
}

export default App