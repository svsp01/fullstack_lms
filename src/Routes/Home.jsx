import React from 'react'
import Navtop from '../smallRoutes/NavTop'
import SidebarUser from '../smallRoutes/SideBarUser'
import { Outlet } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

function Home() {
  return (
    <div>
      <Navtop/>
      <div className='container-fluid p-0 d-flex'>
        <div className="">
        <SidebarUser/>
        </div>
        <div className="container p-5">
        <Outlet/>
        </div>
      
      </div>
    </div>
  )
}

export default Home