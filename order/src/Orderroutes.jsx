import React from 'react';
import './index.scss';
import Order from './Order/Order';
import Pending from './Order/Pending';
import Confirmed from './Order/Confirmed';
import Packing from './Order/Packing';
import Delivery from './Order/Delivery';
import DeliveryOut from './Order/DeliveryOut';
import Return from './Order/Return';
import DeliveryFailed from './Order/DeliveryFailed';
import OrderCancled from './Order/OrderCancled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Orderroutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/pending" element={<Pending />} />
          <Route exact path="/confirmed" element={<Confirmed />} />
          <Route exact path="/packaging" element={<Packing />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/out-of-delivery" element={<DeliveryOut />} />
          <Route exact path="/return" element={<Return />} />
          <Route exact path="/failed" element={<DeliveryFailed />} />
          <Route exact path="/canceled" element={<OrderCancled />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Orderroutes;
