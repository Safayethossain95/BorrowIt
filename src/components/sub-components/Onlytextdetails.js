import React from 'react'

const Onlytextdetails = (props) => {
  return (
    <div className="privacy_policy">
    <div className="details">
    <h2>{props.maintitle}</h2>
    <div className="text">
        <h3> {props.title} </h3>
        <p>{props.details} </p>
    </div>
    </div>
</div>
  )
}

export default Onlytextdetails