import {Form, Button} from 'react-bootstrap';


const JobAppForm = ({handleSubmit, companyName, companyInfo, jobTitle, jobLink, appStatus, labelText, defaultValue}) => {
  return (
    
    <Form>
    
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={companyName} type="companyName" placeholder="Enter Company Name" />
            <br/>
            <Form.Control ref={companyInfo} type="companyInfo" placeholder="Enter Company Info Link" />
            <br/>
            <Form.Control ref={jobTitle} type="jobTitle" placeholder="Enter Job Title" />
            <br/>
            <Form.Control ref={jobLink} type="jobLink" placeholder="Enter Job Link" />
            <br/> 
            <Form.Select ref={appStatus}> 
              <option value="Not Applied"> Not Applied </option>
              <option value="Submitted"> Submitted </option>
              <option value="In Progress"> In Progress </option>
              <option value="Rejected"> Rejected </option>
              <option value="Accepted"> Accepted </option>
            
            </Form.Select>       
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default JobAppForm