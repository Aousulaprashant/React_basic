import React from "react";
import logo from "../images/Vector.png";
const Header = () => {
  return (
    <div className="Header-main">
      <div className="navs">
        <ul>
          <span>
            <li>Home</li>
          </span>
          <li>Product</li>
          <li>Pricing</li>
          <li> Contact Us</li>
        </ul>
      </div>
      <div className="logo">
        <img src={logo}></img>
      </div>

      <div className="login-bnts">
        <button className="login bnt">Login</button>
        <button className="try bnt">Try for free</button>
      </div>
    </div>
  );
};

export default Header;
