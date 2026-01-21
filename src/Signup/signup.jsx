import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Left */}
        <div className="signup-left">
          <h2>Create Account</h2>
          <p>Join SweetCrust Bakery and enjoy fresh delights</p>

          <form className="signup-form">

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>

            <button className="signup-btn">Sign Up</button>

            <p className="login-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>

          </form>
        </div>

        {/* Right */}
        <div className="signup-right">
          <h1>SweetCrust</h1>
          <p>Where every bite feels special 🥐</p>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
