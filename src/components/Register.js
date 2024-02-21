import React, { useState } from 'react';
import './Common.css'; 

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <div className="checkbox-container">
          <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-text">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
