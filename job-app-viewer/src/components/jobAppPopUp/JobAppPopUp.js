import React from 'react'
import "./JobAppPopup.css"
const JobAppPopUp = (props) => {
  return (props.trigger) ? (
    <div className="job-app-popup"> 
        <div className="job-app-inner-popup">
            <button className="close-btn" onClick={() => props.setTrigger(false)}> close</button>
            {props.children}
        </div>
    </div>
  )  : "";
}

export default JobAppPopUp