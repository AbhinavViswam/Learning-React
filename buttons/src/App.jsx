import './App.css'
import { Fragment } from 'react'

// function App() {
// const button1=()=>{
//   alert("Button with no parameter");
// }
// const button2=(message)=>{
//   alert(`${message}`);
// }
//   return (
//    <>
//    <button onClick={button1}>BUTTON 1</button>
//    <button onClick={()=>{button2("hello")}}>BUTTON 2</button>
//    </>
//   )
// }

function App(){
  return(
    <>
    <Fragment>
      <h1>Hello</h1>
      <h2>Hi</h2>
    </Fragment>
    <>
    </>
    </>
  )
}
export default App
