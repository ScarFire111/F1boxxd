import React,{useState} from 'react';
import './CSS/SignUp.css';
import { Link } from 'react-router-dom';
import Homepage from './Homepage'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
 
  const [formData,setFormData]=useState({
      email:"",
      username:"",
      password:""
    })
    const changeHandler=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }
   const signup=async(e)=>{
  e.preventDefault();
  let responseData;
   await fetch('http://localhost:4000/signup',{
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
    console.log("signup",formData);
  }
  return (
    <div className="signup-page">
      <div className="signup-container">
        <form onSubmit={signup} className="signup-form">
          <h2>Create Account</h2>

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" name='username' value={formData.username} onChange={changeHandler} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input name='email' type="email" placeholder="Enter your email" value={formData.email} onChange={changeHandler}required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input name='password' type="password" placeholder="Create a password" value={formData.password} onChange={changeHandler} required />
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
