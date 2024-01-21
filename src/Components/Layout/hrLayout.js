import React from 'react'
import { Outlet } from 'react-router-dom'
import HrNavbar from '../Hr/hrNavbar'


function HrLayout() {
  return (
    <>
      <HrNavbar />
      <Outlet />
    </>
  )
}

export default HrLayout