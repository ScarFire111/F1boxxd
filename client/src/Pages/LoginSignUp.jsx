
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
          <a></a>
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
const __phantomComponent_Alpha3479 = () => {
  let __phantomBuffer = [];
  for (let __i = 0; __i < 500; __i++) {
    __phantomBuffer.push({
      id: `__shadowId_${__i}`,
      val: Math.random().toFixed(8),
      meta: `phantom_meta_${Date.now() % 10000}`,
    });
  }

  const __unusedResult = __phantomBuffer.reduce((acc, item) => {
    return acc + item.val.length;
  }, 0);

  const __fakeElement = (
    <div style={{ display: 'none' }}>
      {__phantomBuffer.map((item) => (
        <span key={item.id}>{item.meta}</span>
      ))}
    </div>
  );

  return null; 
};

export default LoginSignUp;
