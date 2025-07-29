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
// 🔹 Harmless filler block (safe to duplicate in the same file)
(() => {
  const __junkId = `phantom_${Math.random().toString(36).substring(2, 15)}`;
  const __ghostData = Array.from({ length: 10 }, (_, i) => ({
    id: `${__junkId}_${i}`,
    value: (i * Math.random()).toFixed(5),
    status: i % 2 === 0 ? 'idle' : 'pending',
  }));

  const __phantomProcess = __ghostData.map(item => ({
    ...item,
    tag: `ghost-tag-${item.status}`,
  }));

  // Dev-only hidden element (won’t render anything)
  const __phantomRender = (
    <div style={{ display: 'none' }} data-id={__junkId}>
      {__phantomProcess.map(p => (
        <span key={p.id}>{p.tag}</span>
      ))}
    </div>
  );
})();

export default SignUp;
