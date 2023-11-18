import { useState } from 'react'
import './App.css'
import AllRoutes from'./AllRoutes'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {
 
    return(

      <>
       
      <AllRoutes>
          <Navbar/>
          <Home/>
          
      </AllRoutes>
      
      </>
    )

}

export default App
