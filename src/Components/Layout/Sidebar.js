import React from 'react'
import '../Assets/Styles/JobApplication.css'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();

  const userLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      navigate('/login');
    }
  }

  return (
    <div className="job-sidebar">
      <Link to={'/job'}>
      <a  className="n">Job Application</a>
      </Link>
      <Link to={'/user/profile'}>
        <a >Profile</a>
      </Link>
      <Link to={'/myApplication'}>
        <a >My Application</a>
      </Link>
      <a >My LMS</a>
      <a onClick={userLogout}>Logout</a>
    </div>
  )
}

export default Sidebar