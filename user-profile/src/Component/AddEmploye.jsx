import { useState } from "react";
import men from "../Images/Group 338405.png";
import infinity from "../Images/image 60.png";


import { IoIosEye } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
export const AddEmploye = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
    
    <div className="flex flex-col md:mx-4 mx-2 gap-3">
        <div className="bg-white rounded-3xl p-10 md:p-4">
          <div className="flex lg:flex-nowrap gap-2 flex-wrap box-border">
            <div className="lg:w-[70%] w-[100%] ">
              
              <div className="mt-4">
              <div className="relative overflow-hidden  text-md
 ">
          <div className="bg-white md:rounded-l-full w-72 md:w-full  overflow-hidden  shadow-md">
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
                <form className="border-2 border-black  md:rounded-2xl px-2  md:my-2 md:px-20 md:py-2">
                  {/* <HiSearch  className="absolute  text-green  w-6 h-14" /> */}

                  <input
                    type="text"
                    placeholder="Search "
                    className=" text-black focus:outline-none"
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
            <div className="md:flex grid  md:gap-3 gap-4 items-center ">
              <div className="border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
                My Profile
              </div>
              <div className="  bg-blue px-2 py-3 rounded-xl text-white  text-sm ">
                Add New Employee
              </div>
              <div className=" border-gray border-2 px-10 py-3 rounded-xl text-sm text-black ">
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
  
          <div className="flex items-center md:w-full w-72 py-4 gap-2 bg-[#F1F1F1]">
            <img src={infinity} alt="" />
            Add new employee. Enter following details to create new employee.{" "}
            <span className="text-blue"> Select user rights first .</span>
          </div>

          <div className="bg-white rounded-xl gap-x-40 py-10 md:flex  items-center md:w-full  w-72 p-4 overflow-hidden  shadow-md">
            <div className="">
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

              <div className="flex gap-8 py-4  ">
                <div className="">
                  <button className="text-white bg-green px-6 rounded-lg py-2">
                    Submit
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


              <button className="bg-blue px-10 py-2 text-white rounded-xl">
                Generate Password
              </button>
            </div>
          </div>
</div>
              </div>
             
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
