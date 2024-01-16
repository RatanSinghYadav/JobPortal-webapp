import React from 'react'
import './Assets/Styles/MyApplication.css'

const Jobs = () => {
  return (
    <div className='jobs-main'>
        <div className='job-box'>
            <div className='job-title'>Industry</div>
            <div className='job-name'>Industry Name</div>
        </div>
        <div className='job-box'>
            <div className='job-title'>Department</div>
            <div className='job-name'>Department Name</div>
        </div>
        <div className='job-box'>
            <div className='job-title'>Role</div>
            <div className='job-name'>Role Name</div>
        </div>
        <button className='ligth-btn'>Preview or Record Pitch</button>
        <button className='dark-btn'>Get Feedback</button>
    </div>
  )
}

export default Jobs
