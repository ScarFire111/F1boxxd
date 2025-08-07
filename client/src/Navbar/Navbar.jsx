import React, { useContext, useState } from 'react';
import './Navbar.css';

import cart_icon from '../assets/cart-logo.png';
import logo from '../assets/nav-logo.png';
import cart_logo from '../Navbar/f1.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, all_product } = useContext(ShopContext);
  const [searchText, setSearchText] = useState("");

  // Filter products based on searchText
  const filteredProducts = all_product.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
          <img src={logo} alt='F1boxxd logo' className='Nav-logoo' />
          <div id="logo">
            <span id="F1"><img src={cart_logo} alt="WebsiteLogo" /></span>
          </div>
        </div>
      </Link>

      <ul className='nav-menu'>
        <li><Link to='/clothes'>Clothes<hr /></Link></li>
        <li><Link to='/car_Models'>Car Models<hr /></Link></li>
        <li><Link to='/engine_Models'>Engine Models<hr /></Link></li>
        <li><Link to='/posters'>Posters<hr /></Link></li>
      </ul>

      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <div className="search-wrapper" style={{ position: 'relative', width: '250px' }}>
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="Search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: '100%' }}
          />
          <button type="button" className="mic-button" onClick={handleVoiceSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#D4AF37">
              <path d="M12 14q-.825 0-1.412-.588Q10 12.825 10 12V6q0-.825.588-1.412Q11.175 4 12 4q.825 0 1.413.588Q14 5.175 14 6v6q0 .825-.587 1.412Q12.825 14 12 14Zm-1 7v-3.075q-2.075-.35-3.538-1.988Q6 14.3 6 12h2q0 1.45 1.025 2.475Q10.05 15.5 12 15.5q1.95 0 2.975-1.025Q16 13.45 16 12h2q0 2.3-1.462 3.937Q15.075 17.575 13 17.925V21Z" />
            </svg>
          </button>

          {searchText && (
            <ul className="search-results">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product.id}>
                    <Link to={`/product/${product.id}`} onClick={() => setSearchText('')}>
                      {product.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li>No products found</li>
              )}
            </ul>
          )}
        </div>
      </form>

      <div className="nav-login-cart">
<div className="nav-login-cart">
  {localStorage.getItem('auth-token')
    ? (
      <button onClick={() => {
        localStorage.removeItem('auth-token');
        window.location.replace("/");
      }}>
        LogOut
      </button>
    )
    : (
      <Link to='./loginsignup'><button>Login</button></Link>
    )}
  <Link to='./cart'><img src={cart_icon} alt="cart_icon" /></Link>
  <div className='nav-cart-count'>{getTotalCartItems()}</div>
</div>
      </div>
      <p></p>
    </div>
  );
}

export default Navbar;



