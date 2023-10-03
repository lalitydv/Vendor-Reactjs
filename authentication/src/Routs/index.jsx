import React from 'react';
// import Login from '../Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Forgotpas from '../Forgotpas';
import Setnewpasword from '../Setnewpasword';
import Notfound from '../Notfound';
import Signupemail from '../Signupemail';
import Login from '../Login/index';
import '../index.scss';
const Routs = () => {
  return (
    <div className="flex justify-center bg-BodyColor ">
      <div className=" max-w-max w-full   ">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgotpassword" element={<Forgotpas />} />
            <Route exact path="/setnewpasword" element={<Setnewpasword />} />
            <Route exact path="/signupemail" element={<Signupemail />} />
            <Route exact path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routs;
