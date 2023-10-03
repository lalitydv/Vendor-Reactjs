import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../User/Profile';
import AddEmploye from '../User/AddEmploye';
import EmployeList from '../User/EmployeList';
import Role from '../User/Role';
import RoleList from '../User/RoleList';

const Routings = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route exact path="/addemployee" element={<AddEmploye />} />
          <Route exact path="/employeelist" element={<EmployeList />} />
          <Route exact path="/role" element={<Role />} />
          <Route exact path="/rolelist" element={<RoleList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routings;
