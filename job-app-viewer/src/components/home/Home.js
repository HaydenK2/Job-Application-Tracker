import React from 'react'
import Company from '../company/Company';
import AppInfo from '../appInfo/AppInfo';


const Home = ({companies}) => {
  return (
    <div>
      <Company companies = {companies} />
      <AppInfo /> 
    </div>

  )
}

export default Home