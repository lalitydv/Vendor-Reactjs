import React from 'react';
import yourImageSource from '../Images/forgotpas.png';
import logo from '../Images/Shinecoderlogo.png';
import { Link } from 'react-router-dom';
import '../index.scss';
const Forgotpas = () => {
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

          <div className="container mx-auto flex flex-col lg:flex-row  lg:gap-60 gap-2  justify-center  items-center mr-52">
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
                Forgot Password ?
              </h3>
              <div className=" bg-white  lg:mx-2 mx-4 rounded-md border-4 border-t-10 border-Primary">
                <div className="px-4 lg:px-8 mb-4 text-center">
                  <p className="mb-4 text-sm text-Textgray py-10 ">
                    enter the email address associated with your account. we’ll
                    send you instructions to reset your password.
                  </p>
                </div>
                <form className="px-4 lg:px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-Textgray"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 my-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="my-10 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-Primary rounded-md hover:bg-Primary focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <Link to="/setnewpasword">Continue</Link>
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <div className="inline-block text-sm">
                      don’t have an account?{' '}
                      <Link to="/login" className="text-blue-500">
                        Signup
                      </Link>
                    </div>
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

export default Forgotpas;
