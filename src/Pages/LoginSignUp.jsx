import React from 'react'
import '../CSS/LoginSignUp.css'
import Popular from '../Popular/Popular'

const LoginSignUp = () => {
  return (
    <div>
        <div className="loginSignUp" id="LoginSignUp">
          <div className="form-container-sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" class="icon">
                  <i className="fa-brands fa-google"></i>
                </a>
            
              </div>
            </form>
          </div>

        </div>
    </div>
  )
}
export default LoginSignUp;