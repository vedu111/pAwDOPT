  import React from "react";
  import "./Header.css";
  import logoImage from '../../assets/logo.png'

  function Header() {
    return (
      <>
        <div className="header border">
          <div className="navbar bg-dgrn rounded">
            <div className="navbar-left">
            <img src={logoImage} alt="Logo" className="logo" />
              <span className="logo-text clr-lgrn text-lg">pAwDOPT</span>
            </div>
            <div className="navbar-center">
              <ul className="nav-links">
                <li>
                  <a className="font-medium text-md clr-lgrn nuni" href="#">Home</a>
                </li>
                <li>
                  <a className="font-medium text-md clr-lgrn nuni" href="#">About</a>
                </li>
                <li>
                  <a className="font-medium text-md clr-lgrn nuni" href="#">Support us</a>
                </li>
                <li>
                  <a className="font-medium text-md clr-lgrn nuni" href="#">Adopt</a>
                </li>
              </ul>
            </div>
            <div className="navbar-right">
              <button className="clr-lgrn mr-2.5 font-bold text-md w-28 nuni">Sign Up</button>
              <button className="px-3 py-1 rounded text-md w-28 bg-lgrn clr-dgrn font-bold nuni">Log In</button>
            </div>
          </div>
          <div className="main flex justify-around align-centre">
            <div className="">
              <h1 className=" clr-dgrn font-medium">Adopt,</h1>
              <h2 className="text-7xl clr-dgrn">Don't Shop.</h2>
              <button className="px-3 py-1 bg-black rounded-3xl text-md w-28 mt-8 bg-gray-800 clr-lgrn text-lg w-40 nuni" >Adopt now</button>
            </div>
            <div>
              <img src="" alt="dog" />
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Header;
