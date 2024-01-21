import React, { useEffect, useState } from "react";
import { url } from '../Utils/Constant.js';
import { Link, useNavigate } from "react-router-dom";


const HrNavbar = () => {
  const navigate = useNavigate();


  const checkToken = async () => {
    try {
      const response = await fetch(`${url}/verifyhr/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
      });
      // console.log(response);
      // const data = await response.json();
      // console.log(data);
    }
    catch (e) {
      console.log('error in verifying token:', e);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/hr/login");
      } else {
        await checkToken();
      }
    };

    fetchData();
  }, [navigate]);



  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
          <div className='site-brand'>
            <div className='logo-shipmate'>
              <p style={{ display: "flex" }} >Hil<p style={{ color: '#6F57E9' }}>fee.</p></p>
            </div>
          </div>
        </div>

        <div className='nav-right'>
          <div className='right-menu'>
            <Link to={'/hr/postjob'}>
              <span className='btn nav-btn'>Home</span>
            </Link>
            <Link to={'/hr/login'}>
              <span className='btn nav-btn'>Login</span>
            </Link>
            <Link to={'/hr/signup'}>
              <span className='btn nav-btn'>Signup</span>
            </Link>
            <div >
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default HrNavbar;
