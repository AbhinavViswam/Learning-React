
import { useParams } from 'react-router-dom'

function Params() {
    const {id}=useParams()
  return (
    <div>Params:{id}</div> // this id is taken from the path where we declared user/:id
  )
}

export default Params