import React, {useState} from "react";
import "./Profile.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { auth } from "../../firebase";
import PlanButton from "./PlanButton";

const Profile = () => {
    const user = useSelector(selectUser)
    const [current, setCurrent] = useState('None')
    const [plans, setPlans] = useState([
      { id: 1, planName: 'Netflix Standard', price: 120, subscribed: false, type: 'standard' },
      { id: 2, planName: 'Netflix Basic', price: 320, subscribed: false, type: 'basic' },
      { id: 3, planName: 'Netflix Premium', price: 680, subscribed: false, type: 'premium' },
    ]);
  
    const handleButtonClick = (buttonId) => {
      const updatedPlans = plans.map((plan) => {
        if (plan.id === buttonId) {
          setCurrent(plan.type)
          return { ...plan, subscribed: true };
        } else {
          return { ...plan, subscribed: false };
        }
      });
  
      setPlans(updatedPlans);
    };
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
            <div className="profile_plan">
              <h3>Plan (Current Plan: {current})</h3>
              <h4 className="renew">Renewal Date (04/04/3045)</h4>
              <div className="plans">
              {plans.map((plan) => (
                <PlanButton
                  key={plan.id}
                  planName={plan.planName}
                  price={plan.price}
                  subscribed={plan.subscribed}
                  onClick={() => handleButtonClick(plan.id)}
                />
              ))}
              </div>
                <button className="btn_signout" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
