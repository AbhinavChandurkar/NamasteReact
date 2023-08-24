import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

  let [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="foodImage"></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
             btnNameReact === "Login"
             ? setBtnName("Logout")
             : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
