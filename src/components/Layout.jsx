import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div className='h-screen overflow-auto'>
      <Header/>
        <div className='w-full md-56 flex h-auto overflow-hidden rel'>
        <Sidebar/>
          <div className='ml-10 mt-12'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}


export default Layout