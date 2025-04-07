import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Import the CSS file

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    role: "User"
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmpassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7080/user/register", user);
      alert(response.data); // Success message
    } catch (error) {
      alert(error.response?.data || "Registration failed. Please try again."); // Error message
      console.log("Error:", error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Registration Page</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={user.confirmpassword}
          onChange={handleChange}
          required
        />
        <select name="role" value={user.role} onChange={handleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Registration;