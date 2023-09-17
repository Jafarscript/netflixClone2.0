import React from 'react'

const PlanButton = ({ planName, price, subscribed, onClick }) => {
  return (
    <div className="eachPlan">
    <div className="planName">
      <h5>{planName}</h5>
      <h6>${price}</h6>
    </div>
    <button className={subscribed ? "subscribed" : "subscribe"} onClick={onClick}>
      {subscribed ? 'Current Package' : 'Subscribe'}
    </button>
  </div>
  )
}

export default PlanButton