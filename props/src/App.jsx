import './App.css'
import UserData from './components/userData'
import Userhobby from './components/userhobby'

function App() {

  return (
 <>
<UserData username="abhi" fullname="Abhinav"/>
<Userhobby myhobby="music" interest="football"/>
<UserData username="abhi1" fullname="Abhinav1"/>
<Userhobby myhobby="music1" interest="football1"/>
 </>
  )
}

export default App
