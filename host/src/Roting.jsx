import React from "react";
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "sidebar/Sidebar";
// import Navbar from "sidebar/Navbar"
// import Routs from 'authentication/Routs'
// import Forgotpas from 'authentication/Forgotpas'
import StoreProfile from 'store/StoreProfile'

export const Roting = () => {
  return (
    <>
 
 {/* <BrowserRouter>  
       <Navbar/>
          <div className="flex w-[100%] overflow-auto ">
           <Sidebar/>
            <div className="my-20 w-[100%] overflow-auto">
             <Routes>

              <Route exact path="/" element={<Routs/>}/>
              </Routes>
              </div>
              </div>
              </BrowserRouter> */}

<div className="my-10"> 
{/* <Sidebar/> */}
{/* <Routs/>\ */}
{/* <Forgotpas /> */}
 <StoreProfile/>
    </div>


 </> 
  )
}
