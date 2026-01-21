import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left */}
        <div className="login-left">
          <h2>Welcome Back</h2>
          <p>Login to continue enjoying SweetCrust Bakery</p>

          <form className="login-form">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="login-btn">Login</button>

            <p className="forgot">Forgot password?</p>

            <p className="signup-text">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>

        {/* Right */}
        <div className="login-right">
          <h1>SweetCrust</h1>
          <p>Freshly baked happiness every day 🍰</p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
