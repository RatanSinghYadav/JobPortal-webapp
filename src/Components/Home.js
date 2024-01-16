import React from 'react'
import HomeNav from './HomeNav'
import './Assets/Styles/Home.css'

function Home() {
    return (
        <div>
            <HomeNav/>
            <div className="home-main">
                <div className="para1 para">Unlock Your Career</div>
                <div className="para2 para">Potential With</div>
                <div className="para3 para">Hilfee</div>
                <button className='home-btn'>Browse Jobs</button>
            </div>
            <div className="home-category">
                <div>Software Engineer</div>
                <div>Marketing Specialist</div>
                <div>registered Nurse</div>
                <div>Financial Analyst</div>
                <div>Software Engineer</div>
                <div>Marketing Specialist</div>
                <div>registered Nurse</div>
                <div>Financial Analyst</div>
            </div>
        </div>
    )
}

export default Home