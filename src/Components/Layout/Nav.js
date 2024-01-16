import React, { useEffect, useState } from 'react'
import logo from "../Assets/Media/Images/Rectangle 4163.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';
import { url } from '../Utils/Constant.js';


const Nav = () => {
  const navigate = useNavigate();

  const[user, setUser] = useState();

  const checkToken = async () => {
    try {
      const response = await fetch(`${url}/verifyuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
      });
      const data = await response.json();
      console.log(data);
      setUser(data.data.fname);
      // console.log(response);
    }
    catch (e) {
      console.log('error in verifying token:', e);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      } else {
        await checkToken();
      }
    };

    fetchData();
  }, [navigate]);

  const userLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      navigate('/login');
    }
  }

  return (
    <div className="jobapp-nav">
      <img className="jobapp-logo" src={logo} alt="logo" />
      <div className="nav-right">
        <AccountCircleIcon style={{ fontSize: "3em" }} />
        <div className="job-candidate">
          <div style={{ fontWeight: "500" }}>{user}</div>
          <button onClick={userLogout} className="job-btn">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
