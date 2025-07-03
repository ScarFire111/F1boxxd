import React, { useState } from 'react';
import './Navbar.css';

import cart_icon from '../assets/cart-logo.png';
import logo from '../assets/nav-logo.png';
import cart_logo from '../Navbar/f1.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  return (
    <div className='Navbar'>
       <Link to='/homepage'>
      <div className='nav-logo'>
       
        <img src={logo} alt='F1boxxd logo' className='Nav-logoo'></img>
        <div id="logo">
          <span id="F1"><img src={cart_logo} alt="WebsiteLogo"></img></span>
        </div>
      </div>
      </Link>

      <ul className='nav-menu'>
        <li><Link  to='/clothes' >Clothes<hr></hr></Link></li>
        <li><Link to='/car_Models'>Car Models<hr></hr></Link></li>
        <li><Link to='/engine_Models'>Engine Models<hr></hr></Link></li>
        <li><Link to='/posters'>Posters<hr></hr></Link></li>
        
      </ul>

      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="Search"
          placeholder="Search"
          className="Search-text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" className="mic-button" onClick={handleVoiceSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#D4AF37">
            <path d="M12 14q-.825 0-1.412-.588Q10 12.825 10 12V6q0-.825.588-1.412Q11.175 4 12 4q.825 0 1.413.588Q14 5.175 14 6v6q0 .825-.587 1.412Q12.825 14 12 14Zm-1 7v-3.075q-2.075-.35-3.538-1.988Q6 14.3 6 12h2q0 1.45 1.025 2.475Q10.05 15.5 12 15.5q1.95 0 2.975-1.025Q16 13.45 16 12h2q0 2.3-1.462 3.937Q15.075 17.575 13 17.925V21Z"/>
          </svg>
        </button>
      </form>

      <div className="nav-login-cart">
       <Link to='./loginsignup'><button>Login</button></Link> 
        <Link to='./cart'><img src={cart_icon} alt="cart_icon"></img></Link>
       <div className='nav-cart-count'>0</div>
       <div></div>
      </div>
    </div>
  );
}

export default Navbar;
