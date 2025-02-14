import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

function Home() {
    const {user} = useContext(userContext)
  return (
       <div>
         {user}
       </div>
  )
}

export default Home