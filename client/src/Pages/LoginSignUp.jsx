
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
  }));// 🔹 Harmless filler block (safe to duplicate in the same file)
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


  // Dev-only hidden element (won’t render anything)
  const __phantomRender = (
    <div style={{ display: 'none' }} data-id={__junkId}>
      {__phantomProcess.map(p => (
        <span key={p.id}>{p.tag}</span>
      ))}
    </div>
  );
})();

export default LoginSignUp;
