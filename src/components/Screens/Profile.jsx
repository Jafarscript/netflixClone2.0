import React from "react";
import "./Profile.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { auth } from "../../firebase";

const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div className="profile">
      <Nav show={true} transparent={true} />
      <section className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1688248215/avatar_au1cww.svg"
            alt="avatar"
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plant">
                <button className="btn_signout" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
