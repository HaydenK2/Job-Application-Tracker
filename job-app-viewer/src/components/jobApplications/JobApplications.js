import {useEffect, useRef} from 'react';
import './JobApplications.css';
import api from '../../api/axiosConfig';
import {json, useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import JobAppForm from '../jobAppForm/JobAppForm';
import {Button} from 'react-bootstrap';
import JobAppPopUp from '../jobAppPopUp/JobAppPopUp';
// rafce
import React from 'react'
import {useState} from 'react';

const JobApplications = ({getJobAppData, jobApps, setJobApps}) => {
    const companyName = useRef();
    const companyInfo = useRef();
    const jobTitle = useRef();
    const jobLink = useRef();
    const appStatus = useRef();

    
    let params = useParams();
    // const jobId = params.jobId;
    const [buttonPopup, setButtonPopup] = useState(false);
    useEffect(() =>{
        // getJobAppData();
    })

    const addJobApp= async (e) => {
        e.preventDefault();
        const compName = companyName.current;
        const compInfo = companyInfo.current;
        const jobT = jobTitle.current;
        const jobL = jobLink.current;
        const appStat = appStatus.current;
        
        try {
            if (compName.value == "" || compInfo.value == "" || jobT.value=="" || jobL.value=="" || appStat.value=="") {
                console.log("One of the Inputs is Empty!");
                return;
            }
            // console.log(compName.value);
            const response = await api.post("api/v1/jobs/addNewJobApp", {companyName:compName.value, companyInfo: compInfo.value, jobTitle: jobT.value, jobLink: jobL.value, appStatus: appStat.value})
            const updatedJobApps = [...jobApps, {companyName:compName.value, companyInfo: compInfo.value, jobTitle: jobT.value, jobLink: jobL.value, appStatus: appStat.value}];
    
            compName.value="";
            compInfo.value="";
            jobT.value="";
            jobL.value="";
            appStat.value="";
    
            setJobApps(updatedJobApps);
            setButtonPopup(false);

        }   catch(err) {
            console.log(err);
        }

    }
  return (
    <Container>
        <br/>
        <Row>
            <Col> <h2> My Job Applications</h2></Col>
        </Row>
        <div className="popup-container">
            {/* <Popup trigger=
                {<Button> Add New Job Application!</Button>}
                modal nested>
                {
                    close => (
                        <div className="popup-container">
                             <button onClick=
                            {() => close()}>
                                Close modal
                            </button>
                            <JobAppForm handleSubmit={addJobApp} revText={revText} labelText="write job app"/>
                        </div>
                        
                   
                    )
                }
            </Popup> */}
            <button className="job-app-button" onClick={()=>setButtonPopup(true)}> Add New Job Application</button>
            <JobAppPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <JobAppForm handleSubmit={addJobApp} companyName={companyName} companyInfo={companyInfo} jobTitle={jobTitle} jobLink={jobLink} appStatus={appStatus} labelText="Add a New Job Application!"/>
            </JobAppPopUp>
        </div>
        <Row>
            {/* <Col>
                <JobAppForm handleSubmit={addJobApp} revText={revText} labelText="write job app"/>
            </Col> */}
            
        </Row>
        <Row className="mt-2">
            
            <Col>
            
                {
                    <>
                        
                        
                        <Row>
                            <Col>
                                <hr/>
                                <div className="job-app-label-container">
                                    <div className="job-app-data-label-container">
                                        Company
                                    </div>
                                    <div className="job-app-data-label-container">
                                        Company Info
                                    </div>
                                    <div className="job-app-data-label-container">
                                        Job Position
                                    </div>
                                    <div className="job-app-data-label-container">
                                        Job Link
                                    </div>
                                    <div className="job-app-data-label-container">
                                        Application Status
                                    </div>
                                </div>
                                <hr/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    jobApps?.map((ja) => {
                        return (
                            <div className="job-app-container">
                                <div className="job-app-data-container">
                                    <p> {ja.companyName}</p>
                                </div>
                                <div className="job-app-data-container">
                                    <a href={ja.companyInfo}> {ja.companyName} Info</a> 
                                </div>

                                <div className="job-app-data-container">
                                 {ja.jobTitle}
                                </div>
                                <div className="job-app-data-container">
                                <a href={ja.jobLink}> Job Application Link</a> 
                                </div>
                                
                                <div className="job-app-data-container">
                                    {ja.appStatus}
                                </div>
                            </div>
                            

                            
                            // <>
                            //     <Row>
                            //         <Col>{ja.companyName}</Col>
                            //         <Col> <a href={ja.companyInfo}> {ja.companyName} Info</a> </Col>
                            //         <Col>{ja.jobTitle}</Col>
                            //         <Col> <a href={ja.jobLink}> Job Application Link</a> </Col>
                            //         <Col>{ja.appStatus}</Col>
                            //     </Row>
                            // </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr/>
            </Col>
        </Row>
    </Container>
  )
}

export default JobApplications