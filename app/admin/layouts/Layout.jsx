import React from 'react'
import Topbar from './topbar/topbar'
import Sidebar from './sidebar/sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="page-wrapper" id="app" data-v-app="">
            <Topbar></Topbar>
            <div className="page-body-wrapper">
                <Sidebar></Sidebar>
                <div className="page-body">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
  )
}

export default Layout
