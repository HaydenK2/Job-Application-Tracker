import './Company.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
// import TwitchLogo from "../../assets/images/Twitch-logo.png";

const Company = ({companies}) => {
  return (
    <div className = "company-carousel-container">
    <Carousel>
      {
        companies.map(company => {
          return (
            <Paper>
              <div className="company-logo-container">
                <div className="company-card-container">
                  <div className="company-card">
                    <div className="company-details"> 
                      <div className="company-logo">
                          <img src= {`/images/${company.companyName}-logo.png`} alt="Company Logo"/>
                      </div>
                      <div className=".company-title-info-container">

                      </div>
                      <Row >
                        <div className="company-title">
                            {company.companyName}
                        </div>
                        <div className="company-info-button-container">
                          <Button variant="outline-secondary" href={company.companyInfo} size="sm">
                            Click Here To Learn More
                          </Button>
                        </div>
                      </Row>

                      
                    </div>
                  
                  </div>
                </div>
              </div>
            </Paper>
          )
        })
      }

      
    </Carousel>
    </div>
  
  )
}

export default Company