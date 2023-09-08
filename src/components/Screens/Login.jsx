import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      {/* <div className="login_header"> */}
        <img
          src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688247966/3HCWZMP7PFGY3OJJPFHIX5O2VI_xzmxgm.png"
          alt="logo"
          className="loginLogo"
        />
        <button className="signup_button">Sign In</button>
      {/* </div> */}
      <div className="login_body">
          <h1>Unlimited films, TV programme and more.</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <p>Ready to watch? Enter your emial to create or restart your membership</p>
      </div>
    </div>
  );
};

export default Login;
