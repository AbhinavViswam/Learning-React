import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/dashboard/course">Courses</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard