import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UseTools from "./Pages/UseTools";
import LearnSkills from "./Pages/LearnSkills";
import Certificates from"./Pages/Certificates";
import StartUp from "./Pages/StartUp";
import SecondPage from "./Pages/SecondPage";


function AllRoutes(){

  return (
    <>
    <Routes>
      
       <Route path="/" element={ <Home/> } />
       
       <Route path="/use" element={<UseTools/>}  />

       <Route path="/learn" element = { <LearnSkills/> } />

       <Route path="/certificates" element = { <Certificates/> } />

       <Route path="/startup" element={ <StartUp/>} />
       
        
         <Route path="/second-page" component={SecondPage} />
        
        
    </Routes>
   
    
    </>
  )
}
export default AllRoutes;