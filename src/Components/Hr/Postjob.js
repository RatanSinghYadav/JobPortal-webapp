import React, { useState } from 'react';

const JobPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    workExp: '',
    uploadJD: '',
    ctcRange: '',
    roleCategory: '',
    department: '',
    techSkill: '', // Include HR user ID in the component state
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { title, company, location, description, requirements, workExp,
      uploadJD, ctcRange, roleCategory, department, techSkill
    } = formData;
    try {
      const response = await fetch('http://localhost:8000/hr/jobpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          title, company, location, description, requirements, workExp,
          uploadJD, ctcRange, roleCategory, department, techSkill
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
    <div>
      <h2>Create Job Post</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Company:
          <input type="text" name="company" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Requirements:
          <textarea name="requirements" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Work Experience:
          <input type="text" name="workExp" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          JD File (Upload):
          <input type="file" name="uploadJD" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          CTC Range:
          <input type="text" name="ctcRange" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Role Category:
          <input type="text" name="roleCategory" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" name="department" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Tech Skills:
          <input type="text" name="techSkill" onChange={handleInputChange} />
        </label>
        <br />
        {/* <label>
          HR User ID:
          <input type="text" name="postedBy" onChange={handleInputChange} required />
        </label> */}
        <br />
        <button type="submit">Create Job Post</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Job post created successfully!</p>}
    </div>
  );
};

export default JobPost;
