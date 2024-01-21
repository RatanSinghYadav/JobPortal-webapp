import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Assets/Styles/UserProfile.css";
import { url } from '../Utils/Constant.js';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  // console.log(profile)

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${url}/api/v1/user/getUserDetails`, {
        method: 'GET',
        headers: {
          'token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });
      const getResponse = await response.json();
      console.log(getResponse);
      setProfile(getResponse.user);
      // console.log(response);
    }
    catch (e) {
      console.log('error in verifying token:', e);
    }
  };

  const [userImage, setUserImage] = useState(null);

  const handleChange = (e) => {
    setUserImage(e.target.files[0])
  }

  // console.log(userImage)

  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append('avatar', userImage);

    const res = await fetch(`http://localhost:8000/api/v1/user/userImageUpload`, {
      method: "POST",
      headers: {
        token: localStorage.getItem('token'),
        // "Content-Type": "multipart/form-data",

      },
      body: formData
    })

    const getResponse = await res.json();
    console.log(getResponse);
  }

  useEffect(() => {

    fetchProfile();
  }, []);

  return (
    <div className="profile-top-details">
      <div className="profile-details-image">

        <div className="profile-details">

          {profile && profile.avatar === null ? (
            <div className="person-image">
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "140px" }}

              ></i>
              <label htmlFor="upload-button">
                <button onClick={uploadPhoto}>upload</button>
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ cursor: 'pointer', }}
                // display: 'none'
                onChange={handleChange}
                alt='image'
              />
            </div>
          ) : (
            <div className="person-image">
              {profile && profile.avatar && typeof profile.avatar === 'string' ? (
                <img
                  src={`http://localhost:8000/uploads/${profile.avatar}`}
                  className='profileImg'
                  alt="profile image"
                />
              ) : (
                <span>No valid profile image</span>
              )}
            </div>

          )}

          <div className="person-info">
            <h2>{profile ? `${profile.fname} ${profile.lname === null ? "" : profile.lname}` : ""} </h2>
            <p className="person-info-desc">
              {profile ? `${profile.email}` : ''}
            </p>
            <p className="person-info-desc">
              {profile ? `${profile.number}` : ''}
            </p>
            <p className="person-info-desc">
              <i className="bi bi-geo-alt-fill"></i>
              {profile ? `${profile.currentLocation === null ? "Current Loaction" : profile.currentLocation}` : ""}
            </p>
          </div>



        </div>

        <Link to="editProfile">
          <button className="edit-details-button">Edit Details</button>
        </Link>
      </div>
      <div className="card-containing-details">
        {/* Education details section */}
        <div className="education-details  detailscard">
          <h3>Education Details</h3>
          <p>ABC Institute of Technology:  </p>
          <p className="input-taken">
            Bachelor of Computer Science
          </p>
          <p className="input-taken">
            Specialization:
          </p>
          <p className="input-taken">
            2020 - 2024
          </p>
          <p>End Date:</p>
          <p className="input-taken">
            Achievement
          </p>
          <p className="input-taken">
            CGPA or Percentage
          </p>
          <div className="education-add1">
            <p>ABC Institute of Technology:  </p>
            <p className="input-taken">
              Bachelor of Computer Science
            </p>
            <p className="input-taken">
              Specialization:
            </p>
            <p className="input-taken">
              2020 - 2024
            </p>
            <p>End Date:</p>
            <p className="input-taken">
              Achievement
            </p>
            <p className="input-taken">
              CGPA or Percentage
            </p>
          </div>
        </div>

        {/* Work details section */}
        <div className="work-details detailscard">
          <h3>Work Details</h3>
          <p>ABC Company:   </p>
          <p className="input-taken">
            Job Designation:
          </p>
          <p className="input-taken">Role:   </p>
          <p className="input-taken">
            2020-2022
          </p>
          <p>Work Duration End: </p>
          <p className="input-taken">Rs 600000   </p>
          <p>Work Achievement Details: </p>
          <p className="input-taken">
            Tools:
          </p>
          <p className="input-taken">
            Skills:
          </p>
          <div className="education-add1">
            <p>ABC Company:   </p>
            <p className="input-taken">
              Job Designation:
            </p>
            <p className="input-taken">Role:   </p>
            <p className="input-taken">
              2020-2022
            </p>
            <p>Work Duration End: </p>
            <p className="input-taken">Rs 600000  </p>
            <p>Work Achievement Details: </p>
            <p className="input-taken">
              Tools:
            </p>
            <p className="input-taken">
              Skills:
            </p>
          </div>
        </div>

        <div className="certificate-details detailscard">
          <h3>Certificate Details</h3>
          <p>Name of the Certification  </p>
          <p className="input-taken">
            Nov 28,2020
          </p>
          <p>Certify Duration End: </p>
          <div className="education-add1">
            <p>Name of the Certification  </p>
            <p className="input-taken">
              Nov 28,2020
            </p>
          </div>
        </div>

        {/* Other details section */}
        <div className="other-details detailscard">
          <h3>Other Details</h3>
          <p>Current Location:   </p>
          <p>
            Willing to Relocate: Yes/No
          </p>
          <p>Own Vehicle: Yes/No   </p>
          <p>Own Laptop: Yes/No   </p>
          <p>LinkedIn Profile: url  </p>
          <p>GitHub Profile: url   </p>
          <p>
            Other Information: url
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;