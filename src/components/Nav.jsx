import React from "react";
import "./Nav.css";
function Nav({ show, transparent }) {

  const navStyle = {
    background: transparent ? "transparent" : "black",
    opacity: show ? 1 : 0,
  };

  
  // const [show, handleShow] = useState(false);

  // const toggleNavbar = () => {
  //   if (window.scrollY < 100) {
  //     handleShow(true);
  //   } else {
  //     handleShow(false);
  //   }
  // };
  //  window.addEventListener("scroll", toggleNavbar); 


  return (
    <div className="nav" style={navStyle}>
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
