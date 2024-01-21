import React, { useEffect, useState } from 'react'
import logo from "../Assets/Media/Images/Rectangle 4163.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';
import { url } from '../Utils/Constant.js';


const Nav = () => {
  const navigate = useNavigate();

  // const[user, setUser] = useState();

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
      // console.log(data.data.avatar.filename);
      // setUser(data);
      // console.log(response);
    }
    catch (e) {
      console.log('error in verifying token:', e);
    }
  }


  //  fetch user profile 

  const [profile, setProfile] = useState('');

  // console.log(profile)
  const fetchProfile = async () => {
    try {
      const response = await fetch(`${url}/api/v1/user/getUserData`, {
        method: 'GET',
        headers: {
          'token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });
      const getResponse = await response.json();
      // console.log(getResponse);
      setProfile(getResponse.user);
    }
    catch (e) {
      console.log('error in verifying token:', e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      } else {
        await checkToken();
      }
    };

    fetchProfile();
    fetchData();
  }, []);

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
        {profile.avatar === null ?
          <>
            <AccountCircleIcon style={{ fontSize: "4em" }} />
          </>
          :

          <img src={`http://localhost:8000/uploads/${profile.avatar === null ? "" : profile.avatar}`} className='userLogo' alt="Person" />


        }
        <div className="job-candidate">
          <div style={{ fontWeight: "500" }}> {profile ? `${profile.fname} ${profile.lname === null ? "" : profile.lname}` : ""}</div>
          <button onClick={userLogout} className="job-btn">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
