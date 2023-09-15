import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";


function Nav({ show, transparent }) {

  const history = useNavigate()
  

  const navStyle = {
    background: transparent ? "transparent" : "black",
    opacity: show ? 1 : 0,
  };

  console.log(show)
  


  return (
    <div className="nav" style={navStyle}>
      <div className="navContent">
        <img
          src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688247966/3HCWZMP7PFGY3OJJPFHIX5O2VI_xzmxgm.png"
          alt="logo"
          className="nav_logo"
          onClick={() => (history('/'))}
        />
        <img
          src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688248215/avatar_au1cww.svg"
          alt="avatar"
          className="nav_avatar"
          onClick={() => (history('/profile'))}
        />
      </div>
    </div>
  );
}

export default Nav;
