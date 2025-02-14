import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/userContext'

function Chnage() {
    const {setUser} = useContext(userContext)
    useEffect(() => {
        setTimeout(() => {
            setUser("Abhinav viswam")
        }, 3000);
    }, [])
    
  return (
    <div>Hello</div>
  )
}

export default Chnage