
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import infinity from "../Images/image 60.png";
import { HiSearch } from "react-icons/hi";
import {MdModeEdit , MdDelete} from "react-icons/md"
const RoleList = () => {
  return (
    <div>
      <div className="flex flex-col md:mx-4 mx-2 gap-5">
        <div className="bg-white rounded-3xl md:p-2 p-8">
          {/* <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border"> */}
            <div className="lg:w-[70%] w-[100%] ">
              
              <div className="mt-4">
              <div className="relative overflow-hidden  text-md">
          <div className="bg-white md:rounded-l-full w-72 md:w-full  overflow-hidden  shadow-md">
          <div className="md:flex md:justify-between  grid md:gap-0 gap-4 items-center ">
              <div className="md:pl-4 ">overview</div>
              <div className="flex items-center">

<label for="countries" class="block  text-sm font-medium text-gray-1 ">Show</label>
<select id="countries" class="  text-black text-sm   ">
  <option selected>this month</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>
              <div className=" ">
                <form className="border-2 border-black  md:rounded-2xl py-1  md:my-2 md:px-20 md:py-2">
                  {/* <HiSearch  className="absolute  text-green  w-6 h-14" /> */}

                  <input
                    type="text"
                    placeholder="Search "
                    className=" text-black"
                  />

                  <HiSearch className=" inline-block     text-gray" />
                </form>
              </div>
              <button className="bg-blue text-white md:px-6 rounded-xl py-2">
                add New Product
              </button>
            </div>
</div>
        
<div className="bg-white md:rounded-2xl text-center  md:py-10 w-72 md:w-full mt-10 p-4 md:overflow-hidden  shadow-md">
            <div className="md:flex grid  md:gap-3 gap-4 items-center  ">
              <div className="border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
                My Profile
              </div>
              <div className=" border-gray border-2 px-2 py-3 rounded-xl text-sm text-black  ">
                Add New Employee
              </div>
              <div className=" border-gray border-2 px-10 py-3 rounded-xl text-sm text-black">
                Employee List
              </div>
              <div className=" border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
                Add Role
              </div>
              <div className=" bg-blue px-10 py-3 rounded-xl text-white  text-sm ">
                Role List
              </div>
            </div>
          </div>
  
          <div className="flex items-center py-4 gap-2 bg-[#F1F1F1]">
    <img src={infinity} alt="" />
    Here you can manage Employee/User roles.
   </div>

          <div className="bg-white rounded-xl  py-10   items-center md:w-full  p-4 overflow-hidden  shadow-md">
        
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left  border-gray  border-4 text-gray-500 ">
        <thead className="     ">
            <tr className='border-b-4  border-gray text-xs'>
                <th scope="col" className="px-4    py-3">
                Sr no
                </th>
                <th scope="col" className="  border-x-4 py-3 md:px-14 px-4">
                Role Name 
                </th>
                <th scope="col" className=" py-3 md:px-32 px-10">
                Description
                </th>
                <th scope="col" className=" py-3 md:px-20 px-6">
                Status
                </th>
                <th scope="col" className="py-3 md:px-20 px-6">
                Action
                </th>
              

            </tr>
        </thead>
        <tbody>
            <tr className="bg-white  border-b-4  border-gray ">
                <td  className="py-5 px-6">
                1
                </td>
                <td className="py-5 md:px-14 px-4">
                Super Admin
                </td>
                <td className="py-5 md:px-32 px-10">
                Super Admin
                </td>
                <td className="py-5 md:px-20 px-6">
                Active
                </td>
                <td className="py-5 md:px-20 px-6 flex gap-2">
                <MdModeEdit className='text-blue border-2  w-6 h-6 rounded-md ' />
                <MdDelete className='text-dark-red border-2  w-6 h-6 rounded-md' />
                </td>
               
               

            </tr>
            
            <tr className="bg-white  border-b-4  border-gray ">
                <td  className="py-5 px-6">
                1
                </td>
                <td className="py-5 md:px-14 px-4">
                Default-Emp
                </td>
                <td className="py-5 md:px-32 px-10">
                Employee Default Roles
                </td>
                <td className="py-5 md:px-20 px-6">
                Active
                </td>
                <td className="py-5 md:px-20 px-6 flex gap-2">
                <MdModeEdit className='text-blue border-2  w-6 h-6 rounded-md ' />
                <MdDelete className='text-dark-red border-2  w-6 h-6 rounded-md' />
                </td>
               
               

            </tr>
            <tr className="bg-white  border-b-4  border-gray ">
                <td  className="py-5 px-6">
                1
                </td>
                <td className="py-5 md:px-14 px-4">
                super Emp
                </td>
                <td className="py-5 md:px-32 px-10">
                super Emp
                </td>
                <td className="py-5 md:px-20 px-6">
                Active
                </td>
                <td className="py-5 md:px-20 px-6 flex gap-2">
                <MdModeEdit className='text-blue border-2  w-6 h-6 rounded-md ' />
                <MdDelete className='text-dark-red border-2  w-6 h-6 rounded-md' />
                </td>
               
               

            </tr>
            <tr className="bg-white  border-b-4  border-gray ">
                <td  className="py-5 px-6">
                1
                </td>
                <td className="py-5 md:px-14 px-4">
                600001
                </td>
                <td className="py-5 md:px-32 px-10">
                Super Admin
                </td>
                <td className="py-5 md:px-20 px-6">
                Active
                </td>
                <td className="py-5 md:px-20 px-6 flex gap-2">
                <MdModeEdit className='text-blue border-2  w-6 h-6 rounded-md ' />
                <MdDelete className='text-dark-red border-2  w-6 h-6 rounded-md' />
                </td>
               
               

            </tr>
            
        </tbody>
    </table>
</div>
 


          </div>
</div>
              </div>
             
            </div>
            
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default RoleList
