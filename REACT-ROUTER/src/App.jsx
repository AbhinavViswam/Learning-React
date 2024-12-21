import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Navigate from './components/Navigate'
import Course from './components/Course'

const router=createBrowserRouter(
  [
    {
      path:"/",        //base url
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"course",     //here we should not give slash at the front Also we need to use outlet to the parent route to load the children route
          element:
          <div>
             <Course/>
          </div>
        }
      ]
    },
    {
      path:"/user/:id", //params
      element:
      <div>
        <Navbar/>
        <Params/>
      </div>
    },
    {
      path:"/navigate",
      element:
      <div>
        <Navbar/>
        <Navigate/>
      </div>
    }
  ]
)

function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
