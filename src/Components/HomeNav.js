import React from 'react'
import './Assets/Styles/HomeNav.css'
import logo from './Assets/Media/Images/Rectangle 2.png'
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="https://fonts.google.com/specimen/Lato?query=lato" />

const Nav = () => {
  const navigate = useNavigate();
  const candidateLogin = ()=>{
   navigate('/signup')
  }
  return (
    <div className="nav-container">
        <div className="nav-main">
       <img className='logo' src={logo}alt="logo" />
       <div className='nav-navigation'>
          <div className="nav-home">Home</div>
          <div className="nav-About">About</div>
          <div onClick={candidateLogin} className="nav-candidate dark-btn">Candidate</div>
          <div className="nav-recruiter ligth-btn">Recruiter</div>
       </div>
    </div>
    </div>
  )
}

export default Nav
