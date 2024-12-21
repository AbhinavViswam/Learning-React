
import movie from "./movie"

// Create a parent component that passes a list of favorite movies as props to a child component, which renders them as a list.

function App() {
  
  return(
    <>
    <movie fav=['abc','def']/>
    </>
  )
}

export default App
