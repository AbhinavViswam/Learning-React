import { act, useReducer } from "react"
const initialState = {count:0}

function reducer(state,action){
  switch (action.actiontype) {
    case "add":return{count:state.count+1}
    case "sub":return{count :state.count-1}
     
    case "clr":return initialState
  
  
    default:
      break;
  }
}

function App() {

 const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({actiontype:"add"})}>+</button>
    <button onClick={()=>dispatch({actiontype:"sub"})}>-</button>
    <button onClick={()=>dispatch({actiontype:"clr"})}>Clear</button>
    
    </>
  )
}

export default App
