import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import JobApplications from './components/jobApplications/JobApplications';
import AppInfo from './components/appInfo/AppInfo';
function App() {
  const [jobApplications, setJobApps] = useState();
  const [jobApp, setJobApp] = useState();
  const [companies, setCompanies] = useState();


  const getJobApps = async () =>{
    

    try {
      const response = await api.get("/api/v1/jobs");
      const companyResponse = await api.get("/api/v1/companies");

      // console.log(response.data);
      // console.log(typeof(response.data));


      setJobApps(response.data);
      setCompanies(companyResponse.data);
      // setJobApps(result);

      console.log("the jobs are ");
      console.log(jobApplications);
      console.log(typeof(jobApplications));

    } catch(err) {
      console.log(err);
    }    
  }

  //  executes when app first loads
  useEffect(() => {
    getJobApps();
  }, [])

  const getJobAppData = async (companyId) => {
    try {
      const response = await api.get(`api/v1/jobs/${companyName}`);
      const singleJobApp = response.data;
      setJobApp(singleJobApp);
    
    } catch (err) {
      console.log(err);
    }
  }

  if (jobApplications == null || companies == null) {
    return (<div> </div>);
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="/" element={<Home companies={companies} />} ></Route>

          <Route path="/myJobApps" element={<JobApplications getJobApps={getJobAppData} jobApps={jobApplications} setJobApps={setJobApps} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
