import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HrLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

    const { email, password } = formData;

    try {
      const response = await fetch('http://localhost:8000/api/v1/hr/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password
        }),
      });

      const data = await response.json();
      // console.log(data.token)

      localStorage.setItem("userId", data.userlogin._id)
      localStorage.setItem("token", data.token)

      // const userId = localStorage.getItem("userId");
      // const token = localStorage.getItem("token");
      // console.log(userId)
      // console.log(token)


      if (response.ok) {
        setSuccess(true);
        setError(null);
        navigate("/");
        // Handle success, e.g., redirect or show a success message
      } else {
        setSuccess(false);
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setSuccess(false);
      setError('Registration failed');
    }
  };




  // console.log('Token in localStorage:', localStorage.getItem('token'));

  useEffect(() => {

    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  

  return (
    <div>
      <h2>HR Login</h2>
      <form onSubmit={handleFormSubmit}>

        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} required />
        </label>

        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Login successful!</p>}
    </div>
  );
};

export default HrLogin;
