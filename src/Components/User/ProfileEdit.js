import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Assets/Styles/UserProfileEdit.css";

const ProfileEdit = () => {
  const [userDetail, setUserDetail] = useState({
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

    experienceType: "",
    company: "",
    jobDescription: "",
    designation: "",
    role: "",
    workExpStartDate: "",
    workExpEndDate: "",
    currentCTC: "",
    achievements: "",
    tools: "",
    skills: "",
    certificationName: "",
    certificationStartDate: "",
    certificationEndDate: "",
    currentLocation: "",
    linkedInId: "",
    gitHubId: "",
    otherInformation: "",
    ownVehicle: "",
    ownLaptop: "",
    willingToRelocate: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  //  for geting media files
  const [file, setFile] = useState({
    avatar: "",
    video: ""
  });

  // console.log(file.avatar, file.video)

  const handleMediaFile = (e) => {
    const { name } = e.target;
    const selectedFile = e.target.files[0];
    setFile({
      ...file,
      [name]: selectedFile,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fname, lname, email, phone,
      educationMode, institution, degree, specialization, eduStartDate,
      eduEndDate, eduAddMore, achievement, cgpaOrPercentage,
      experienceType, company, jobDescription, designation, role,
      workExpStartDate, workExpEndDate, currentCTC, achievements, tools, skills,
      certificationName, certificationStartDate, certificationEndDate,
      currentLocation, linkedInId, gitHubId, otherInformation,
      ownVehicle, ownLaptop, willingToRelocate
    } = userDetail;
  
    const formData = new FormData();
    formData.append('avatar', file.avatar);
    formData.append('video', file.video);
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('educationMode', educationMode);
    formData.append('institution', institution);
    formData.append('degree', degree);
    formData.append('specialization', specialization);
    formData.append('eduStartDate', eduStartDate);
    formData.append('eduEndDate', eduEndDate);
    formData.append('eduAddMore', eduAddMore);
    formData.append('achievement', achievement);
    formData.append('cgpaOrPercentage', cgpaOrPercentage);
  
    formData.append('experienceType', experienceType);
    formData.append('company', company);
    formData.append('jobDescription', jobDescription);
    formData.append('designation', designation);
    formData.append('role', role);
    formData.append('workExpStartDate', workExpStartDate);
    formData.append('workExpEndDate', workExpEndDate);
    formData.append('currentCTC', currentCTC);
    formData.append('achievements', achievements);
    formData.append('tools', tools);
    formData.append('skills', skills);
  
    formData.append('certificationName', certificationName);
    formData.append('certificationStartDate', certificationStartDate);
    formData.append('certificationEndDate', certificationEndDate);
  
    formData.append('currentLocation', currentLocation);
    formData.append('linkedInId', linkedInId);
    formData.append('gitHubId', gitHubId);
    formData.append('otherInformation', otherInformation);
  
    formData.append('ownVehicle', ownVehicle);
    formData.append('ownLaptop', ownLaptop);
    formData.append('willingToRelocate', willingToRelocate);


    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/profile`, {
        method: 'post',
        headers: {
          'token': localStorage.getItem('token'),
          // "Content-Type": "multipart/form-data",
        },
        body: formData
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
                  value={userDetail.fname}
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
                  value={userDetail.lname}
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
                  value={userDetail.email}
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
                  value={userDetail.phone}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ 3rd Row /} */}
          <Row>
            <Col>
              <Form.Group controlId="handleMediaFile">
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
                  value={userDetail.educationMode}
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
                  value={userDetail.institution}
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
                  value={userDetail.degree}
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
                  value={userDetail.specialization}
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
                  value={userDetail.eduStartDate}
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
                  value={userDetail.eduEndDate}
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
                  value={userDetail.cgpaOrPercentage}
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
                  value={userDetail.achievement}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Work Details</p>
          {/* {/ New Row - Work Details /} */}
          <Row>
            <Col>
              <Form.Group controlId="experienceType">
                <Form.Label>Work Type</Form.Label>
                <Form.Control
                  as="select"
                  name="experienceType"
                  value={userDetail.experienceType}
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
                  value={userDetail.company}
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
                  value={userDetail.jobDescription}
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
                  value={userDetail.designation}
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
                  value={userDetail.role}
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
              <Form.Group controlId="workExpStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="workExpStartDate"
                  value={userDetail.workExpStartDate}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="workExpEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="workExpEndDate"
                  value={userDetail.workExpEndDate}
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
                  value={userDetail.currentCTC}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="achievements">
                <Form.Label>Achievement Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="achievements"
                  value={userDetail.achievements}
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
                  value={userDetail.tools}
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
                  value={userDetail.skills}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
          </Row>

          <p className="form-heads">Certification</p>

          <Row>
            <Col>
              <Form.Group controlId="certificationName">
                <Form.Label>Certification</Form.Label>
                <Form.Control
                  as="select"
                  name="certificationName"
                  value={userDetail.certificationName}
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
              <Form.Group controlId="certificationStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="certificationStartDate"
                  value={userDetail.certificationStartDate}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="certificationEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="certificationEndDate"
                  value={userDetail.certificationEndDate}
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
                  value={userDetail.currentLocation}
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
                  value={userDetail.willingToRelocate}
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
                  value={userDetail.ownVehicle}
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
                  value={userDetail.ownLaptop}
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
              <Form.Group controlId="linkedInId">
                <Form.Label>LinkedIn Profile Link</Form.Label>
                <Form.Control
                  type="text"
                  name="linkedInId"
                  value={userDetail.linkedInId}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="gitHubId">
                <Form.Label>GitHub Profile Link</Form.Label>
                <Form.Control
                  type="text"
                  name="gitHubId"
                  value={userDetail.gitHubId}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* {/ New Row - Additional Information /} */}
          <Row>
            <Col>
              <Form.Group controlId="otherInformation">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="otherInformation"
                  value={userDetail.otherInformation}
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
                  name="video"
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