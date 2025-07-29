import React from 'react';
import './CSS/SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <form className="signup-form">
          <h2>Create Account</h2>

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="signup-footer">
            Already have an account? <Link to="/loginsignup">Log in</Link>
          </p>

          <div className="social-login">
            <span>Or sign up with</span>
            <div className="icons">
              <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
