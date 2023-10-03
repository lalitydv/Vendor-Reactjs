import React from 'react';
import yourImageSource from '../Images/Setnew.png';
import logo from '../Images/Shinecoderlogo.png';
import { Link } from 'react-router-dom';
import '../index.scss';

const Setnewpasword = () => {
  return (
    <div>
      <div className=" ">
        {/* logo Start  */}
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between  mx-32 items-center  py-5  ">
            <div className="">
              <img src={logo} alt="" className="object-contain w-52" />
            </div>
            <div></div>
          </div>
          {/* logo end  */}
          {/* Forgot Start  */}

          <div className="container mx-auto flex flex-col lg:flex-row  lg:gap-60 gap-2  justify-center items-center mr-52">
            {/* Image Part */}
            <div className="lg:w-1/3 lg:flex-shrink-0 lg:h-auto lg:block hidden lg:bg-cover lg:bg-Forgotpass lg:rounded-l-lg">
              <img
                src={yourImageSource}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>

            {/* Form Part */}
            <div className="w-full lg:w-1/3">
              <h3 className="pt-4 mb-2 py-5 text-3xl text-heading text-Primary text-center">
                Set a New Password
              </h3>
              <div className="bg-white  lg:mx-2 mx-4 rounded-md border-4 border-t-10 border-Primary">
                <div className="px-4 lg:px-8 mb-4 text-center">
                  <p className=" text-sm text-Textgray py-10 ">
                    Please create a new password that you don’t use on any other
                    site.
                  </p>
                </div>
                <form className="px-4 lg:px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-Textgray"
                      htmlFor="email"
                    >
                      new password
                    </label>
                    <input
                      className="w-full px-3 py-2 my-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter your password..."
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-bold text-Textgray"
                      htmlFor="email"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 my-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter your password..."
                    />
                  </div>
                  <div className="my-10 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-Primary rounded-md hover:bg-Primary focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <Link to="/signupemail">Reset</Link>
                      {/* <Link to="/signupemail">Reset</Link> */}
                    </button>
                  </div>
                </form>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setnewpasword;
