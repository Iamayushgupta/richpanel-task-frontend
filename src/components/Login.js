import React, { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="form-container">
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>

      <div className="login-text">
          <p>New to MyApp? <a href="/register">Sign Up</a></p>
        </div>
    </div>
  );
}

export default Login;
