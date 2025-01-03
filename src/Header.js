import React from "react";
import './Header.css';
function Header() {
  return (
    <header>
      <div id="container">
        <div>
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo" width={150}
        />
        </div>
        
        <div id="nav">
          
            <li>Signup</li>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>
              <img
                src="https://w7.pngwing.com/pngs/929/428/png-transparent-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe-responsive-web-design-thumbnail.png"
                alt="Hamburger Menu Icon" width={25}
              />
            </li>
     
        </div>
      </div>
    </header>
  );
}

export default Header;
