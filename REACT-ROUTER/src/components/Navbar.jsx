// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "../App.css"
function Navbar() {
  return (
    // using Link
    // <div>
    //     <ul>
    //         <Link to="/"><li>Home</li></Link> 
    //         <Link to="/about"><li>About</li></Link> 
    //         <Link to="/dashboard"><li>Dashboard</li></Link>   
    //     </ul>
    // </div>
    //using Navlink, it contains isActive attribute which can  be used for styling
    <div>
        <ul className='ulist'>
            <li><NavLink to="/" className={({isActive})=>isActive? "active-link" :""}>Home</NavLink> </li>
            <li><NavLink to="/about" className={({isActive})=>isActive? "active-link" :""}>About</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive})=>isActive? "active-link" :""}>Dashboard</NavLink></li>
        </ul>
    </div>
)
}

export default Navbar