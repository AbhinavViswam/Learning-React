import { useNavigate } from "react-router-dom"

function Home() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/navigate")
  }
  return (
    <div>
      HOMEPAGE
      <button onClick={handleClick}>Navigate</button>
    </div>
  )
}

export default Home