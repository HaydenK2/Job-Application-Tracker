import React from 'react'
import "./AppInfo.css";

const AppInfo = () => {
  return (
    <div className="app-about-container">
        <div className="app-about-details">  

            <div className="app-about-title">
                Welcome to My Job App Viewer!
            </div>
            <div className="app-about-header1">
                About This Application
            </div>
            <div className="app-about-description-container">
                "My Job App Viewer" is a Personal Project that will let the user
                store and view in all job applications they have applied to.
                The user can also add new job applications by inputting their 
                job title, company name, job link, company info, and job application status.
                The user should also be able to update their job applications such as the job status.

            </div>
            <br></br>
            <div className="app-about-header1">
                Project Motivation
            </div>
            <div className="app-about-description-container">
                The Main motivation for this project is so all job application info one needs is in one place.
                Not only will the user have a link to all the jobs they have applied to, but also 
                can look at the company info, their job application status as well!
                
            </div>
            <br></br>
            <div className="app-about-description-container">
                Essentially this is so job application search isn't too clutter,
                and I don't have to make a google sheet doc every time
            </div>
            <br>
            </br>
            <div className="app-about-description-container">
                Click on "My Job Applications" to see your findings! Enjoy!
            </div>
        </div>
    </div>
  )
}

export default AppInfo