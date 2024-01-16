import React, { useState } from 'react'
import Nav from './Layout/Nav'
import Sidebar from './Layout/Sidebar'
import Jobs from './Jobs'
import './Assets/Styles/MyApplication.css'

const MyApplication = () => {

  const [allJobs,setAlljobs]=useState([1,1,1,1,1,1,1,1,1,1])
  
  return (
    <div className="app-main">
      <div className="app-container">
        <div className="my-application">
          {allJobs.map((j)=>{
            return <Jobs/>
          })}
        </div>
      </div>
    </div>
  )
}

export default MyApplication
