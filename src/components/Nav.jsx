import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  const toogleNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    } else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toogleNavbar);
    return () => {window.removeEventListener("scroll", toogleNavbar)
    console.log(show)
  };  
  }, [show])
  return (
    <div className={` nav  ${show && "nav_black"}`}>
      <div className="navContent">
        <img
          src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688247966/3HCWZMP7PFGY3OJJPFHIX5O2VI_xzmxgm.png"
          alt="logo"
          className="nav_logo"
        />
        <img
          src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688248215/avatar_au1cww.svg"
          alt="avatar"
          className="nav_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
