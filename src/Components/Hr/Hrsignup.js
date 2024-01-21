import React, { useState } from 'react';

const HrSignup = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        companyName: '',
        designation: '',
        number: '',
        password: '',
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

        const { fname, lname, email, companyName, designation, number, password } = formData;

        try {
            const response = await fetch('http://localhost:8000/api/v1/hr/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname, lname, email, companyName, designation, number, password
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
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setSuccess(false);
            setError('Registration failed');
        }
    };

    return (
        <div>
            <h2>HR Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    First Name:
                    <input type="text" name="fname" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lname" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Company Name:
                    <input type="text" name="companyName" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Designation:
                    <input type="text" name="designation" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="number" onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleInputChange} required />
                </label>
                <br />
                <button type="submit">Signup</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Signup successful!</p>}
        </div>
    );
};

export default HrSignup;
