import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Valid email is required';
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Here, you can add logic to update the profile information or make API calls
    console.log('Profile Details:', { name, email, phone });

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setFormErrors({});
  };

  return (
    <div className="profile-page">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <p className="form-error">{formErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <p className="form-error">{formErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {formErrors.phone && <p className="form-error">{formErrors.phone}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;