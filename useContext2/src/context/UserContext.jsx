import React, { createContext, useState } from 'react'

export const userContext = createContext()

function UserProvider({children}) {
    const [user,setUser] =useState('Abhinav')
  return (
    <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider