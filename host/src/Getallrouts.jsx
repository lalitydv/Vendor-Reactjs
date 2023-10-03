import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'sidebar/Navbar';
import Sidebar from 'sidebar/Sidebar';
import Login from 'authentication/Login';
import Forgotpas from 'authentication/Forgotpas';
import Setnewpasword from 'authentication/Setnewpasword';
import Signupemail from 'authentication/Signupemail';
import Order from 'order/Order';
import Pending from 'order/Pending';
import Confirmed from 'order/Confirmed';
import Packing from 'order/Packing';
import Delivery from 'order/Delivery';
import DeliveryOut from 'order/DeliveryOut';
import Return from 'order/Return';
import DeliveryFailed from 'order/DeliveryFailed';
import OrderCancled from 'order/OrderCancled';
import Product from 'product/Product';
import AddProduct from 'product/AddProduct';
import LimitedStock from 'product/LimitedStock';
import BulkImport from 'product/BulkImport';
import Datainbulk from 'product/Datainbulk';
import Profile from 'customer/Profile';
import AddEmploye from 'customer/AddEmploye';
import EmployeList from 'customer/EmployeList';
import RoleList from 'customer/RoleList';
import Role from 'customer/Role';
import StoreProfile from 'store/StoreProfile';
import Notification from 'store/Notification';
import Coupan from 'store/Coupan';
import Payout from 'store/Payout';
import Dashboard from './Dashboard/Dashboard';
const Getallrouts = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       

      
        <div className="flex w-[100%] overflow-auto ">
          <Sidebar />
          <div className="my-20 w-[100%] overflow-auto">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/forgotpassword" element={<Forgotpas />} />
              <Route exact path="/setnewpasword" element={<Setnewpasword />} />
              <Route exact path="/signupemail" element={<Signupemail />} />
              <Route exact path="/order" element={<Order />} />
              <Route exact path="/pending" element={<Pending />} />
              <Route exact path="/confirmed" element={<Confirmed />} />
              <Route exact path="/packaging" element={<Packing />} />
              <Route exact path="/delivery" element={<Delivery />} />
              <Route exact path="/out-of-delivery" element={<DeliveryOut />} />
              <Route exact path="/return" element={<Return />} />
              <Route exact path="/failed" element={<DeliveryFailed />} />
              <Route exact path="/canceled" element={<OrderCancled />} />

              {/* --------------------------------- */}

              <Route exact path="/product" element={<Product />} />
              <Route exact path="/add-product" element={<AddProduct />} />
              <Route exact path="/limited-stock" element={<LimitedStock />} />
              <Route exact path="/bulkimport" element={<BulkImport />} />
              <Route exact path="/datainbulk" element={<Datainbulk />} />
              {/* --------------------------------- */}
              {/* --------------------------------- */}
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/addemploye" element={<AddEmploye />} />
              <Route exact path="/employelist" element={<EmployeList />} />
              <Route exact path="/rolelist" element={<RoleList />} />
              <Route exact path="/role" element={<Role />} />
              {/* --------------------------------- */}
              {/* --------------------------------- */}
              <Route exact path="/store-profile" element={<StoreProfile />} />
              <Route exact path="/notification" element={<Notification />} />
              <Route exact path="/coupan" element={<Coupan />} />
              <Route exact path="/payout" element={<Payout />} />
              {/* --------------------------------- */}
            </Routes>
          </div>
        </div>  
       
      </BrowserRouter>
    </div>
  );
};

export default Getallrouts;

