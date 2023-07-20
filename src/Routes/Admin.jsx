import React from 'react'
import NavTopAdmin from '../smallRoutes/NavTopAdmin'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../smallRoutes/SideBarAdmin'

function Home() {
  return (
    <div>
      <NavTopAdmin/>
      <div className='container-fluid p-0 d-flex'>
        <div className="">
        <SidebarAdmin/>
        </div>
        <div className="container p-5">
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home