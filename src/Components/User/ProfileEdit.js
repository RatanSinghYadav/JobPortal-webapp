import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Assets/Styles/UserProfileEdit.css";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    avatar: "",
    educationMode: "",
    institution: "",
    degree: "",
    specialization: "",
    eduStartDate: "",
    eduEndDate: "",
    eduAddMore: "",
    achievement: "",
    cgpaOrPercentage: "",

    workType: "",
    company: "",
    jobDescription: "",
    designation: "",
    role: "",
    workDurationStart: "",
    workDurationEnd: "",
    currentCTC: "",
    workAchievementDetails: "",
    tools: [],
    skills: [],
    certification: "",
    certifyDurationStart: "",
    certifyDurationEnd: "",
    currentLocation: "",
    linkedInProfile: "",
    githubProfile: "",
    additionalInformation: "",
    ownVehicle: "",
    ownLaptop: "",
    willingToRelocate: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //  for geting media files
  const [file, setFile] = useState(null);

  const handleMediaFile = (e) => {
    setFile({
      ...file,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videoFile = new FormData();
    videoFile.append('video', file);

    const { fname, lname, email, phone, educationMode, institution, degree, specialization, eduStartDate,
      eduEndDate, achievement, cgpaOrPercentage, eduAddMore
    } = formData;
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/profile', {
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data",
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          fname, lname, email, phone, educationMode, institution, degree, specialization, eduStartDate,
          eduEndDate, achievement, cgpaOrPercentage, eduAddMore,
          videoFile
        }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setSuccess(true);
        setError(null);
        // Handle success, e.g., redirect or show a success message
      } else {
        setSuccess(false);
        setError(data.message || 'Job post creation failed');
      }
    } catch (error) {
      console.error('Error during job post creation:', error);
      setSuccess(false);
      setError('Job post creation failed');
    }
  };




  return (
    <div className="app-container">
    {/* <h1> Profile Edit</h1> */}
      <Container>
        <Form onSubmit={handleSubmit} className="profile-form">
          {/* {/ 1st Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="fname">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lname">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 2nd Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="phone">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 3rd Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="avatar">
                <Form.Label>Profile Photo Upload</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar"
                  onChange={handleMediaFile}
                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Education Details</p>

          <Row>
            <Col>
              <Form.Group controlId="educationMode">
                <Form.Label>Mode*</Form.Label>
                <Form.Control
                  as="select"
                  name="educationMode"
                  value={formData.educationMode}
                  onChange={handleChange}

                >
                  {/* {/ Add options for educationType /} */}
                  <option value="">Select Type</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="institution">
                <Form.Label>Institute*</Form.Label>
                <Form.Control
                  as="select"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}

                >
                  {/* {/ Add options for institute /} */}
                  <option value="">Select Institute</option>
                  <option value="ABC University">ABC University</option>
                  <option value="XYZ College">XYZ College</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 5th Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="degree">
                <Form.Label>Degree*</Form.Label>
                <Form.Control
                  as="select"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}

                >
                  {/* {/ Add options for degree /} */}
                  <option value="">Select Degree</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="specialization">
                <Form.Label>Specialization*</Form.Label>
                <Form.Control
                  as="select"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}

                >
                  {/* {/ Add options for specialization /} */}
                  <option value="">Select Specialization</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 6th Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="eduStartDate">
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  type="date"
                  name="eduStartDate"
                  value={formData.eduStartDate}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="eduEndDate">
                <Form.Label>End Date*</Form.Label>
                <Form.Control
                  type="date"
                  name="eduEndDate"
                  value={formData.eduEndDate}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cgpaOrPercentage">
                <Form.Label>CGPA or Percentage*</Form.Label>
                <Form.Control
                  type="text"
                  name="cgpaOrPercentage"
                  value={formData.cgpaOrPercentage}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 7th Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="achievement">
                <Form.Label>Achievement Details*</Form.Label>
                <Form.Control
                  as="textarea"
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Work Details</p>
          {/* {/ New Row - Work Details /} */}
          <Row>
            <Col>
              <Form.Group controlId="workType">
                <Form.Label>Work Type</Form.Label>
                <Form.Control
                  as="select"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}

                >
                  <option value="">Select Work Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  as="select"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}

                >
                  {/* {/ Add options for company /} */}
                  <option value="">Select Company</option>
                  <option value="ABC Corp">ABC Corp</option>
                  <option value="XYZ Ltd">XYZ Ltd</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Job Details /} */}
          <Row>
            <Col>
              <Form.Group controlId="jobDescription">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  type="text"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  as="select"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}

                >
                  {/* {/ Add options for designation /} */}
                  <option value="">Select Designation</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Project Manager">Project Manager</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Role and Duration /} */}
          <Row>
            <Col>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}

                >
                  {/* {/ Add options for role /} */}
                  <option value="">Select Role</option>
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="workDurationStart">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="workDurationStart"
                  value={formData.workDurationStart}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="workDurationEnd">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="workDurationEnd"
                  value={formData.workDurationEnd}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Current CTC and Achievement Details /} */}
          <Row>
            <Col>
              <Form.Group controlId="currentCTC">
                <Form.Label>Current CTC(In Thousands)</Form.Label>
                <Form.Control
                  type="text"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="workAchievementDetails">
                <Form.Label>Achievement Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="workAchievementDetails"
                  value={formData.workAchievementDetails}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Tools and Skills (Multiple Select) /} */}
          <Row>
            <Col>
              <Form.Group controlId="tools">
                <Form.Label>Tools</Form.Label>
                <Form.Control
                  type="text"
                  name="tools"
                  value={formData.tools}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Certification</p>

          <Row>
            <Col>
              <Form.Group controlId="certification">
                <Form.Label>Certification</Form.Label>
                <Form.Control
                  as="select"
                  name="certification"
                  value={formData.certification}
                  onChange={handleChange}

                >
                  {/* {/ Add options for role /} */}
                  <option value="">Name of Certification</option>
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="certifyDurationStart">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="certifyDurationStart"
                  value={formData.certifyDurationStart}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="certifyDurationEnd">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="certifyDurationEnd"
                  value={formData.certifyDurationEnd}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Others</p>
          {/* {/ New Row - Location and Relocation /} */}
          <Row>
            <Col>
              <Form.Group controlId="currentLocation">
                <Form.Label>Current Location*</Form.Label>
                <Form.Control
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="willingToRelocate">
                <Form.Label>Willing to Relocate*</Form.Label>
                <Form.Control
                  as="select"
                  name="willingToRelocate"
                  value={formData.willingToRelocate}
                  onChange={handleChange}

                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Ownership Details /} */}
          <Row>
            <Col>
              <Form.Group controlId="ownVehicle">
                <Form.Label>Own a Vehicle*</Form.Label>
                <Form.Control
                  as="select"
                  name="ownVehicle"
                  value={formData.ownVehicle}
                  onChange={handleChange}

                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="ownLaptop">
                <Form.Label>Own a Laptop*</Form.Label>
                <Form.Control
                  as="select"
                  name="ownLaptop"
                  value={formData.ownLaptop}
                  onChange={handleChange}

                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Social Profiles /} */}
          <Row>
            <Col>
              <Form.Group controlId="linkedInProfile">
                <Form.Label>LinkedIn Profile Link</Form.Label>
                <Form.Control
                  type="text"
                  name="linkedInProfile"
                  value={formData.linkedInProfile}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="githubProfile">
                <Form.Label>GitHub Profile Link</Form.Label>
                <Form.Control
                  type="text"
                  name="githubProfile"
                  value={formData.githubProfile}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Additional Information /} */}
          <Row>
            <Col>
              <Form.Group controlId="additionalInformation">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="additionalInformation"
                  value={formData.additionalInformation}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="handleMediaFile">
                <Form.Label>Upload Resume or CV*</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleMediaFile}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="buttons-in-profile">
            <Row>

              <Col>
                <Button type="submit" className="profile-link-button">
                  Record Your Vedio Resume
                  <p className="record-button-desc">
                    (Please note that you can only record your Vedio Resume after
                    15 days of submission )
                  </p>
                </Button>
              </Col>
            </Row>
          </div>
          <div className="div-update-btn">
            <Row>
              <Button type="submit" className="update-btn">
                Update
              </Button>
            </Row>
          </div>
        </Form>
      </Container>
    </div>

  );
};

export default ProfileEdit;