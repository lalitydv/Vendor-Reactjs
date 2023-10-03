import logo from "../Images/Shinecoderlogo.png";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import '../index.scss';

const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="">
      <div class="flex items-center min-h-screen p-4   justify-center">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-md 
          shadow-lg max md:flex-row md:flex-1 md:max-w-screen-sm border-4 border-t-10 border-Primary "
        >
          <div class="p-5 bg-white md:flex-1">
            <h3 class="my-4  flex justify-center items-center ">
              <img src={logo} alt="" className="object-contain w-52  " />
            </h3>
            <h3 class="my-2 text-2xl text-center  text-black font-bold">
              Login
            </h3>
            <h3 class="  text-center  text-sm font-semibold text-Textgray">
              (Admin or Employee Login)
            </h3>
            <form action="#" class="flex flex-col space-y-5 my-10">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-Textgray">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-Textgray rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="text-sm font-semibold text-Textgray"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  class="px-4 py-2 transition duration-300 border border-Textgray rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex justify-between items-center space-x-2">
                <div className="flex justify-center gap-5">
                  <input
                    type="checkbox"
                    id="remember"
                    class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                  />
                  <label
                    for="remember"
                    class="text-sm font-semibold text-Textgray"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to="/forgotpassword"
                    class="text-sm text-Primary hover:underline focus:Primary"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <ReCAPTCHA sitekey="v2_site_key" onChange={onChange} />

              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-Primary rounded-md shadow hover:Primary focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
