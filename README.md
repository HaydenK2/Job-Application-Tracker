# Job-Application-Viewer


## Project Description
Welcome to My Job App Viewer! This is a web application that allows the user to do the following to their job applications:

1) Add jobs they applied to
2) Update a job application
3) Remove a job application

Note: update and removing a job application will come in at a later git push

A Job application will include the company name, company info, job title, job link, and job application status

Users will be able to access the job application itself by inputting the application link when adding new job applications

## Project Installations 

You will need the following installations in VS Code:

*Make sure you have Node.js. This is required to run these installations

~To make https requests with react

```
npm install axios
```

```
npm install bootstrap
npm i react-bootstrap
npm i @fortawesome/react-fontawesome
npm i @fortawesome/free-solid-svg-icons
```

~For video display
```
npm i react-player
```

~For declaring paths for components that maps roots to components
```
npm i react-router-dom
```

~For the Carousel
```
npm install @mui/material @emotion/react @emotion/styled
npm install react-material-ui-carousel
```

##  Running the Project

1) Add your mongodb database to the "jobs" backend. There should be .env template you can use to store your personal mongodb database info

2) Make sure you turn on the "jobs" backend application. This will let us run the mongodb database.

3) Once the backend is running, transfer it to a globally distributed reverse proxy (ex. I used ngrok to do this step).
You will have to add the baseURL of your proxy to the axiosConfig.js to connect your backend to the frontend

4) After setting up your proxy, call the following command to run the application:
```
npm start
```
