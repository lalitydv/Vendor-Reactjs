import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { Sidebar } from "../Component/Sidebar";
import { AddNew, Profile } from "../Component/Profile";
import { AddEmploye } from "../Component/AddEmploye";
import { EmployeList } from "../Component/EmployeList";
import RoleList from "../Component/RoleList";
import Role from "../Component/Role";
import { StoreProfile } from "../Component/StoreProfile";
import { Notification } from "../Component/Notification";
import { Coupan } from "../Component/Coupan";
import { Payout } from "../Component/Payout";
import Product from "../Component/Product/Product";
import BulkImport from "../Component/Product/BulkImport";
import AddProduct from "../Component/Product/AddProduct";
import { Order } from "../Component/Order/Order";
import { Pending } from "../Component/Order/Pending";
import { Confirmed } from "../Component/Order/Confirmed";
import { Packing } from "../Component/Order/Packing";
import { Delivery } from "../Component/Order/Delivery";
import { DeliveryOut } from "../Component/Order/DeliveryOut";
import { Return } from "../Component/Order/Return";
import { DeliveryFailed } from "../Component/Order/DeliveryFailed";
import { OrderCancled } from "../Component/Order/OrderCancled";
import LimitedStock from "../Component/Product/LimitedStock";


const Routings = () => {
  return (
    <>
     
     <BrowserRouter>  
       <Navbar/>
          <div className="flex w-[100%] overflow-auto ">
           <Sidebar/>
            <div className="my-20 w-[100%] overflow-auto">
             <Routes>

              <Route exact path="/" element={<Profile/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/addemploye" element={<AddEmploye/>}/>
              <Route exact path="/employelist" element={<EmployeList/>}/>
              <Route exact path="/rolelist" element={<RoleList/>}/>
              <Route exact path="/role" element={<Role/>}/>
              <Route exact path="/store-profile" element={<StoreProfile/>}/>
              <Route exact path="/notification" element={<Notification/>}/>
              <Route exact path="/coupan" element={<Coupan/>}/>
              <Route exact path="/payout" element={<Payout/>}/>
              <Route exact path="/product" element={<Product/>}/>
              <Route exact path="/add-product" element={<AddProduct/>}/>
              <Route exact path="/limited-stock" element={<LimitedStock/>}/>
              <Route exact path="/bulk-import" element={<BulkImport/>}/>
             
              <Route exact path="/order" element={<Order/>}/>
              <Route exact path="/pending" element={<Pending/>}/>
              <Route exact path="/confirmed" element={<Confirmed/>}/>
              <Route exact path="/packaging" element={<Packing/>}/>
              <Route exact path="/delivery" element={<Delivery/>}/>
              <Route exact path="/out-of-delivery" element={<DeliveryOut/>}/>
              <Route exact path="/return" element={<Return/>}/>
              <Route exact path="/failed" element={<DeliveryFailed/>}/>
              <Route exact path="/canceled" element={<OrderCancled/>}/>


              
             </Routes>

            </div>
          </div>
    
    
       </BrowserRouter>
     
    </>
    
  );
};

export default Routings;
