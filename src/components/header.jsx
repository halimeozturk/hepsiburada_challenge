import React from "react";
import logo from "../styles/img/logo.png"

function Header(props){
  return(
    <div className="header">
      <div className="flex justify-between items-center	">
        <a href="https://www.hepsiburada.com/">
          <img className="w-1/4" src={logo} alt="logo" title="logo"/>
        </a>
        <div className="font-medium	ml-auto pr-10">LinkVOTE Challange</div>

      </div>
      <hr className="full-screen"/>
    </div>
  )
}

export default Header;
