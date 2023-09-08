import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [signin, setSignin] = useState(false);
  return (
    <div className="login">
      {/* <div className="login_header"> */}
      <img
        src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688247966/3HCWZMP7PFGY3OJJPFHIX5O2VI_xzmxgm.png"
        alt="logo"
        className="loginLogo"
      />
      <button className="signup_button" onClick={() => setSignin(true)}>
        Sign In
      </button>
      {/* </div> */}
      {signin ? (
        <div className="sigin_body">
         <form>
            <h2>Sign In</h2>
            <input type="text" placeholder="Email address" class="input-field" />
            <input type="password" placeholder="Password" class="input-field" />
            <button type="submit" class="btn">Sign In</button>
            <h4><span className="grey">New to Netflix? </span> 
            <span className="signup_link">Sign Up now.</span>
            </h4>
         </form>
        </div>
      ) : (
        <div className="login_body">
          <h1>Unlimited films, TV programme and more.</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <p>
            Ready to watch? Enter your emial to create or restart your
            membership
          </p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button onClick={() => setSignin(true)}>{`Get Started >`}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
