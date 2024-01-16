import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Assets/Styles/UserProfile.css";

const Profile = () => {
  // State to store person, education, work, certificate, and other details
  const [profile, setProfile] = useState({
    person: {},
    education: {},
    work: {},
    certificate: {},
    otherDetails: {},
  });

  // Effect to fetch profile details from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();

        setProfile({
          person: data.person || {},
          education: data.education || {},
          work: data.work || {},
          certificate: data.certificate || {},
          otherDetails: data.otherDetails || {},
        });
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    // Call the function to fetch profile details
    fetchProfile();
  }, []);

  return (
    <div className="profile-top-details">
      <div className="profile-details-image">
        <div className="profile-details">
          {profile.person.image ? (
            <img src={profile.person.image} alt="Person" />
          ) : (
            <div className="person-image">
              {profile.person.profilephoto}
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "140px" }}
              ></i>
            </div>
          )}
          <div className="person-info">
            <h2>Username{profile.person.firstname}</h2>
            <p className="person-info-desc">
              user@gmail.com{profile.person.email}
            </p>
            <p className="person-info-desc">
              +91 227788224{profile.person.phonenumber}
            </p>
            <p className="person-info-desc">
              <i class="bi bi-geo-alt-fill"></i> Location
              {profile.person.currentlocation}
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
          <p>ABC Institute of Technology:{profile.education.institute}</p>
          <p className="input-taken">
            Bachelor of Computer Science{profile.education.degree}
          </p>
          <p className="input-taken">
            Specialization: {profile.education.specialization}
          </p>
          <p className="input-taken">
            2020 - 2024 {profile.education.startDate}
          </p>
          {/* <p>End Date: {profile.education.endDate}</p> */}
          <p className="input-taken">
            Achievement {profile.education.achievementDetails}
          </p>
          <p className="input-taken">
            CGPA or Percentage {profile.education.cgpaOrPercentage}
          </p>
          <div className="education-add1">
            <p>ABC Institute of Technology:{profile.education.institute}</p>
            <p className="input-taken">
              Bachelor of Computer Science{profile.education.degree}
            </p>
            <p className="input-taken">
              Specialization: {profile.education.specialization}
            </p>
            <p className="input-taken">
              2020 - 2024 {profile.education.startDate}
            </p>
            {/* <p>End Date: {profile.education.endDate}</p> */}
            <p className="input-taken">
              Achievement {profile.education.achievementDetails}
            </p>
            <p className="input-taken">
              CGPA or Percentage {profile.education.cgpaOrPercentage}
            </p>
          </div>
        </div>

        {/* Work details section */}
        <div className="work-details detailscard">
          <h3>Work Details</h3>
          <p>ABC Company: {profile.work.company}</p>
          <p className="input-taken">
            Job Designation: {profile.work.designation}
          </p>
          <p className="input-taken">Role: {profile.work.role}</p>
          <p className="input-taken">
            2020-2022 {profile.work.workDurationStart}
          </p>
          {/* <p>Work Duration End: {profile.work.workDurationEnd}</p> */}
          <p className="input-taken">Rs 600000 {profile.work.currentCTC}</p>
          {/* <p>Work Achievement Details: {profile.work.workAchievementDetails}</p> */}
          <p className="input-taken">
            Tools: {profile.work.tools && profile.work.tools.join(", ")}
          </p>
          <p className="input-taken">
            Skills: {profile.work.skills && profile.work.skills.join(", ")}
          </p>
          <div className="education-add1">
            <p>ABC Company: {profile.work.company}</p>
            <p className="input-taken">
              Job Designation: {profile.work.designation}
            </p>
            <p className="input-taken">Role: {profile.work.role}</p>
            <p className="input-taken">
              2020-2022 {profile.work.workDurationStart}
            </p>
            {/* <p>Work Duration End: {profile.work.workDurationEnd}</p> */}
            <p className="input-taken">Rs 600000 {profile.work.currentCTC}</p>
            {/* <p>Work Achievement Details: {profile.work.workAchievementDetails}</p> */}
            <p className="input-taken">
              Tools: {profile.work.tools && profile.work.tools.join(", ")}
            </p>
            <p className="input-taken">
              Skills: {profile.work.skills && profile.work.skills.join(", ")}
            </p>
          </div>
        </div>

        <div className="certificate-details detailscard">
          <h3>Certificate Details</h3>
          <p>Name of the Certification{profile.certificate.certification}</p>
          <p className="input-taken">
            Nov 28,2020{profile.certificate.certifyDurationStart}
          </p>
          {/* <p>Certify Duration End: {profile.certificate.certifyDurationEnd}</p> */}
          <div className="education-add1">
            <p>Name of the Certification{profile.certificate.certification}</p>
            <p className="input-taken">
              Nov 28,2020{profile.certificate.certifyDurationStart}
            </p>
          </div>
        </div>

        {/* Other details section */}
        <div className="other-details detailscard">
          <h3>Other Details</h3>
          <p>Current Location: {profile.otherDetails.currentLocation}</p>
          <p>
            Willing to Relocate: Yes/No {profile.otherDetails.willingToRelocate}
          </p>
          <p>Own Vehicle: Yes/No {profile.otherDetails.ownVehicle}</p>
          <p>Own Laptop: Yes/No {profile.otherDetails.ownLaptop}</p>
          <p>LinkedIn Profile: url {profile.otherDetails.linkedInProfile}</p>
          <p>GitHub Profile: url {profile.otherDetails.githubProfile}</p>
          <p>
            Other Information: url {profile.otherDetails.additionalInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;