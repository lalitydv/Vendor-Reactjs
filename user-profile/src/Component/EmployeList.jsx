import React, {  useState } from 'react';
import Popup from '../Component/Popup'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import men from "../Images/Rectangle 4217.png"
import { IoIosEye } from "react-icons/io";
import { IoCloseSharp } from 'react-icons/io5';
import { HiSearch } from "react-icons/hi";
export const EmployeList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);


 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
    
  return (
    <>
    
    <div className="flex flex-col ">
        <div className=" md:p-1 p-10">
          {/* <div className="flex lg:flex-nowrap flex-wrap box-border"> */}
            <div className="lg:w-[70%] w-[100%] mt-4">
              
             
           
          <div className="bg-white md:rounded-l-full w-72 md:w-full   shadow-md">
          <div className="md:flex md:justify-between  grid md:gap-0 gap-4 items-center">
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
                <form className="border-2 border-black  md:rounded-2xl md:px-4  md:my-2 md:md:px-40 md:py-2">
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
        
<div className="bg-white md:rounded-2xl text-center  md:py-10 w-72 md:w-full mt-10 p-4   shadow-md">
            <div className="md:flex grid  md:gap-3 gap-4 items-center ">
              <div className="border-gray border-2 py-3 px-10 rounded-xl text-sm text-black ">
                My Profile
              </div>
              <div className=" border-gray border-2 py-3 md:px-4 rounded-xl text-sm text-black  ">
                Add New Employee
              </div>
              <div className=" bg-blue px-10 py-3 rounded-xl text-white  text-sm ">
                Employee List
              </div>
              <div className=" border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
                Add Role
              </div>
              <div className=" border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
                Role List
              </div>
            </div>
          </div>
  
      

      <div className="bg-white rounded-xl  my-10   items-center   p-2   shadow-md"> 
      
<div className="relative overflow-x-auto ">
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs    uppercase ">
            <tr className='border-b-4  border-gray'>
                <th scope="col" className="   md:py-3">
                Sr no
                </th>
                <th scope="col" className="  border-x-4 py-3 md:px-4 ">
                Emp. id
                </th>
                <th scope="col" className=" py-3 md:px-4">
                Name
                </th>
                <th scope="col" className=" py-3 md:px-4">
                Email
                </th>
                <th scope="col" className="py-3 md:px-4">
                Contact
                </th>
                <th scope="col" className="py-3 md:px-4">
                City
                </th>
                <th scope="col" className="py-3 md:px-4">
                District
                </th>
                <th scope="col" className="py-3 md:px-4">
                Pan no.
                </th>
                <th scope="col" className="py-3 md:px-4">
                Balance
                </th>
                <th scope="col" className="py-3 md:px-4">
                Roles
                </th>
                <th scope="col" className="py-3 md:px-4">
                Status
                </th>

            </tr>
        </thead>
        <tbody>
          
            <tr className="bg-white  border-b-4  border-gray  "    onClick={() => setShowModal(true)}>
                <td  className="py-5 px-5">
                1
                </td>
                <td className="py-5 px-5">
                1234567
                </td>
                <td className="py-5 px-5">
                Employee Name
                </td>
                <td className="py-5 px-5">
                demo@gmail.com
                </td>
                <td className="py-5 px-5">
                +1234567890
                </td>
                <td className="py-5 px-5">
                city
                </td>
                <td className="py-5 px-5">
                District
                </td>
                
                <td className="py-5 px-5">
                Pan no.
                </td>

                <td className="py-5 px-5">
                Balance
                </td>
                <td className="py-5 px-5 text-orange">
                Show
                </td>
                <td className="py-5 px-5 ">
                <div className='md:px-4 rounded-md bg-lightgreen text-center text-green py-2' >
                    Status
                    </div>
                </td>

            </tr>
         


            {showModal ? (
        <>
         <div className='fixed w-full h-screen left-0 top-0 bg-black bg-opacity-90 z-50 '>
          <div className="flex   overflow-x-hidden overflow-y-auto fixed inset-0  ">
            <div className="relative w-full  my-6 mx-auto max-w-3xl ">
             
              <div className="border-1  rounded-lg  relative   bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray rounded-md ">
                  <h3 className="text-3xl font-bold">Employee Details</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className='flex items-center'>
                
                <div className="relative p-6 flex-auto">
                <h1>
                  User Rights
                  </h1>
                <div className="my-4">
                 
                <div className="md:flex gap-10 grid   items-center ">
                  <div className="bg-yellow px-2 py-2 rounded-md text-white  text-sm  ">
                    Super Admin
                  </div>
                  <div className="  border-gray border-2 px-4 py-2 rounded-md text-sm text-black ">
                    Default-Emp
                  </div>
                  <div className=" border-gray border-2 px-4 py-2 rounded-md text-sm text-black ">
                    Super Emp
                  </div>
                  <div className=" border-gray border-2 px-4 py-2 rounded-md text-sm text-black ">
                    12345678
                  </div>
                </div>
              </div>

              <div className="my-4">
                <h1>
                  Employee Name <sup className="text-red">*</sup>
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="+1234567890"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>

              <div className="my-4">
                <h1>
                  Gender <sup className="text-red">*</sup>
                </h1>

                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      defaultValue
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      defaultChecked
                      id="default-radio-2"
                      type="radio"
                      defaultValue
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 "
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h1>
                Email ID <sup className="text-red">*</sup>
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="demo@gmail.com"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>
              <div className="my-4">
                <h1>
                  First Mobile No. <sup className="text-red">*</sup>
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>
              <div className="my-4">
                <h1>Second Mobile No</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>

              <div className="md:flex gap-8 my-4 ">
                <div>
                  <h1>
                    Country <sup className="text-red">*</sup>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="123456"
                    className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-44  py-2"
                  />
                </div>

                <div>
                  <h1>
                    Province <sup className="text-red">*</sup>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="123456"
                    className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-44  py-2"
                  />
                </div>
              </div>

              <div className="md:flex gap-8 my-4 ">
                <div>
                  <h1>
                    City <sup className="text-red">*</sup>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="INDIA"
                    className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-44  py-2"
                  />
                </div>

                <div>
                  <h1>
                    Zip code <sup className="text-red">*</sup>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="(GMT+11:00)"
                    className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-44  py-2"
                  />
                </div>
              </div>

              <div className="my-4">
                <h1>
                  Address <sup className="text-red">*</sup>
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>
              <div className="my-4">
                <h1>Pan Card No.</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>
                
              <div className="my-4">
                <h1>
                Nominee
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className=" rounded-xl border-4 border-gray md:px-10 px-6 md:w-96 py-2"
                />
              </div>


              <div className="flex gap-8 py-4  ">
                <div className="">
                  <button className="text-white bg-blue px-6 rounded-lg py-2">
                  Deactive
                  </button>
                </div>
                <div className="">
                  <button className="text-white bg-blue px-6 rounded-lg py-2">
                  Update
                  </button>
                </div>
                <div className="">
                  <button className="text-white bg-red px-6 rounded-lg py-2">
                    Cancel
                  </button>
                </div>
              </div>

                </div>
             
                <div>
              <div className="bg-white rounded-xl  py-6  text-center   px-10 overflow-hidden  shadow-xl">
                <h1 className="font-bold">Upload Employee Image</h1>
                <p className="text-xs">No File Choosen</p>
                <div className="border-2 text-center px-4 py-6 mt-2 rounded-xl border-dotted">
                  <img src={men} alt="" />
                </div>
              </div>

              <div className="mt-4">
                <h1>
                  Password <sup className="text-red">*</sup>
                </h1>
                
              </div>
              <div className="relative  container mx-auto ">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter password "
        className="w-full
        md:rounded-xl px-2   my-4 md:px-4 md:py-2
        text-base
        border-2 border-gray
       
        outline-none
        focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
             
            </div>
            </div>
              </div>
              </div>
            </div>
           
          </div>
         
        </>
      ) : null}




            <tr className="bg-white border-b-4  border-gray  ">
                <td  className="py-5 px-5">
                1
                </td>
                <td className="py-5 px-5">
                1234567
                </td>
                <td className="py-5 px-5">
                Employee Name
                </td>
                <td className="py-5 px-5">
                demo@gmail.com
                </td>
                <td className="py-5 px-5">
                +1234567890
                </td>
                <td className="py-5 px-5">
                city
                </td>
                <td className="py-5 px-5">
                District
                </td>
                
                <td className="py-5 px-5">
                Pan no.
                </td>

                <td className="py-5 px-5">
                Balance
                </td>
                <td className="py-5 px-5 text-yellow">
                Show
                </td>
                <td className="py-5 px-5 ">
                    <div className=' md:px-4 rounded-md bg-lightyellow text-center text-yellow py-2' >
                    Status
                    </div>
                
                </td>

            </tr>
            <tr className="bg-white border-b ">
                <td  className="py-5 px-5">
                1
                </td>
                <td className="py-5 px-5">
                1234567
                </td>
                <td className="py-5 px-5">
                Employee Name
                </td>
                <td className="py-5 px-5">
                demo@gmail.com
                </td>
                <td className="py-5 px-5">
                +1234567890
                </td>
                <td className="py-5 px-5">
                city
                </td>
                <td className="py-5 px-5">
                District
                </td>
                
                <td className="py-5 px-5">
                Pan no.
                </td>

                <td className="py-5 px-5">
                Balance
                </td>
                <td className="py-5 px-5 text-yellow">
                Show
                </td>
                <td className="py-5 px-5 ">
                <div className=' md:px-4 rounded-md  bg-lightpink text-center text-pink py-2' >
                    Status
                    </div>
                </td>

            </tr>
            
        </tbody>
    </table>
</div>
 







</div>

            </div>
            













          </div>
      
      </div>



     


    </>
  )
}
