import React, { useState } from "react";
import "./Assets/Styles/JobApplication.css";
import Sidebar from "./Layout/Sidebar";
import Nav from "./Layout/Nav";
import filters from './Utils/JobFilters.js'

const JobApplication = () => {
   
  const [industry,setIndustry]=useState('')
  const [department,setDepartment]=useState('')
  const [role,setRole]=useState('')

  const [industryArr,setIndustryArr]=useState(filters.industries)
  const [departmentArr,setDepartmentArr]=useState([])
  const [roleArr,setRoleArr]=useState([])

  const handleIndustrySelect=(e)=>{
    setIndustry(e.target.value)
    const ind=industryArr.filter((i)=>{
      return i.name==e.target.value
    })
    const departments=Object.keys(ind[0].departments);
    setDepartmentArr(departments)

  }

  const handleDepartmentSelect=(e)=>{
    setDepartment(e.target.value)
    const ind=industryArr.filter((i)=>{
      return i.name==industry
    })

    setRoleArr(ind[0].departments[e.target.value])
  }

  const handleRoleSelect=(e)=>{
    setRole(e.target.value)
  }

  const handleSubmit=()=>{
    console.log(industry,department,role);
  }
  
  return (
    <div className="job-main">
      <div className="job-container">
        <div className="job-filter">
          <div>
            <div>Industry</div>
            <select className="job-dropdown" onChange={handleIndustrySelect}>
              <option value="" disabled selected>
                Select Industry
              </option>
              {industryArr.map((j,i)=>{
               return <option value={j.name}>{j.name}</option>
              })}
            </select>
          </div>
          <div>
            <div htmlFor="">Department</div>
            <select name="" className="job-dropdown" onChange={handleDepartmentSelect}>
              <option value="" disabled selected>
                Select Department
              </option>             
              {departmentArr.map((j,i)=>{
               return <option value={j}>{j}</option>
              })}
            </select>
          </div>
          <div>
            <div htmlFor="">Role</div>
            <select name="" className="job-dropdown" onChange={handleRoleSelect}>
              <option value="" disabled selected>
                Select Role
              </option>
              {roleArr.map((j,i)=>{
               return <option value={j}>{j}</option>
              })}
            </select>
          </div>
          <button className="record-pitch">
            <div>Record a pitch</div>
            <div className="pitch-inst">
              (Please note that you can only Re-record your pitch after 15 days
              of submission.)
            </div>
          </button>
          <button className="job-btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;