import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/User/Auth/Login.js';
import Signup from './Components/User/Auth/Signup.js';
import ProfileEdit from './Components/User/ProfileEdit.js';
import Layout from "./Components/Layout/layout.js";
import Home from "./Components/Home.js";
import React from 'react'
import JobApplication from './Components/JobApplication';
import MyApplication from './Components/MyApplication';
import Profile from "./Components/User/Profile.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact index element={<Home />} />

          {/* User Auth Routes   */}
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>

          <Route path="user/profile/editProfile" element={<Layout />}>
            <Route index exact element={<ProfileEdit />}></Route>
          </Route>

          <Route path="/user/profile" element={<Layout />}>
            <Route index exact element={<Profile />}></Route>
          </Route>

          <Route path="/job" element={<Layout />}>
            <Route exact index element={<JobApplication />} />
          </Route>

          <Route path="/myApplication" element={<Layout />}>
            <Route exact index element={<MyApplication />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
