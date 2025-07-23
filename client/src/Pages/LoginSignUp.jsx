import React from 'react';
import './CSS/LoginSignUp.css';
import { Link } from 'react-router-dom';


const LoginSignUp = () => {
  return (
    <div className="loginSignUp" id="LoginSignUp">
      <div className="form-container-login">
        <form>
          <h1>Login</h1>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-button">Login</button>

          <p className="login-footer-text">
           Don't have an account? <Link to="/createaccount">Sign up</Link>
          </p>
          <p></p>
          <div className="social-icons">
            <span>Or login with</span>
            <a href="#" className="icon">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
