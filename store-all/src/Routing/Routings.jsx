import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StoreProfile from '../Component/StoreProfile';
import Notification from '../Component/Notification';
import Coupan from '../Component/Coupan';
import Payout from '../Component/Payout';
import '../index.scss';

const Routings = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/store-profile" element={<StoreProfile />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/coupan" element={<Coupan />} />
          <Route exact path="/payout" element={<Payout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routings;
