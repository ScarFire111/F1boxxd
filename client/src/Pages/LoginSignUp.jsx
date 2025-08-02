
import React,{useState} from 'react';
import './CSS/LoginSignUp.css';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {

  const [formData,setFormData]=useState({
    email:"",
    username:"",
    password:""
  })

  const changeHandler=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login=async(e)=>{

   e.preventDefault();
   let responseData;
   await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
       body:JSON.stringify(formData),
   }).then((response)=>response.json()).then((data)=>responseData=data)
      if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
   }
   else{
    alert(responseData.errors);
   }
    console.log("Login executed",formData);
  }
  return (
    <div className="loginSignUp" id="LoginSignUp">
      <div className="form-container-login">
        <form onSubmit={login}>
          <h1>Login</h1>

          <div className="input-group">
            <label>Email</label>
            <input name='email' type="email" placeholder="Enter your email" value={formData.email} onChange={changeHandler} required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input name='password' type="password" placeholder="Enter your password" value={formData.password} onChange={changeHandler} required />
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

export default LoginSignUp;
