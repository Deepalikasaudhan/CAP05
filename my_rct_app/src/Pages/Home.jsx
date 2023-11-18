import React from "react";
import Navbar from "../Components/Navbar";
import './home.css'
import { Link } from 'react-router-dom';
import SecondPage from "./SecondPage";

function Home(){


  return(
    <>
    
   <Navbar/>
   <div className="home-page-container">
     <div className="home-page-container-content">

     <p>Get the right skills to reach new opportunities</p>
      <div className="home-dot"></div> <div className="home-big-text">
        <h2>Hello, what can we help you with?</h2>

     </div>
        <div className="home-two-button">
          <div className="home-button-left"><p>my business</p></div>
          <div className="home-button-right"><p>my career</p></div>
        </div>
      </div>

         
       <div className="home-image-slider">
        <div className="home-image-left">
       <img src="https://lh3.googleusercontent.com/SHJD_aKf4NBrvxwu-YhKu9HrrLGcWrQpIBPimV3mT7YWnUj1gQUm9d1G84adc-IFHXfnlybB3ZJmmjw1-qlbnKR3Pg0yzgtxraxLnh_xknANPxADFg=w800" alt="Server Error" />
        </div>

        <div className="home-image-right">
          <p style={{margin:"40px", fontSize:"20px"}}>Featured</p>
          <h4 style={{marginLeft:"40px", marginRight:"60px", fontSize:"55px"}}>Cybersecurity Essentials Course</h4>
          <p style={{marginRight:"80px", marginLeft:"40px", marginTop:"1px", fontSize:"22px"}}>For business leaders and  professionals looking for an introducation to  Cybersecurity coscepts. Learners can enroll in the new 10-hours Cybersecurity Essentials course by the Google Cybersecuriyt Action Team to again a baseline understanding of the field and the pontntial theats impact to business</p>
        </div>      
        </div>
        <div>
        <h1>Home Page</h1>
      <Link to="/second-page">
        <img src="https://lh3.googleusercontent.com/880olnQb1in3OdFcOsT5RIKPhwPjImxbS_iIEuTnUkPkeal5vVf9_tONhirTBroD-DOF1SHxn98Dz0fkn0_9BvRTamcnYGlafUwfjNo=w800"alt="Click me"/>
      </Link>

    </div>
        </div>
         


    </>
  )
}
export default Home;