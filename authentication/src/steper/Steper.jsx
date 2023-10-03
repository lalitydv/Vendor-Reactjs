import React, { useState } from 'react';
import logo from '../Images/Shinecoderlogo.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab
function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByclassNameNameName("step");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
}
function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByclassNameName("step");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("signUpForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}
function validateForm() {
    // This function deals with validation of the form fields
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByclassNameName("step");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" className to the field:
            y[i].classNameName += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByclassNameName("stepIndicator")[
            currentTab
        ].classNameName += " finish";
    }
    return valid; // return the valid status
}
function fixStepIndicator(n) {
    // This function removes the "active" className of all steps...
    var i,
        x = document.getElementsByclassNameName("stepIndicator");
    for (i = 0; i < x.length; i++) {
        x[i].classNameName = x[i].classNameName.replace(" active", "");
    }
    //... and adds the "active" className on the current step:
    x[n].classNameName += " active";
}
const Stepper = () => {
    return (
        <>

            <div>
                <div className="flex justify-center items-center z-1 p-5">
                    <div
                        className="max-w-3xl p-4 w-full rounded-md border-l-4 border-blue border-r-2 border-Primary border-t-8 border-blue border-b-8 border-blue">
                        {/* <!-- className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8" --> */}
                        <img src={logo} alt="img" className="object-contain w-52  mx-auto" />
                        <div className="px-8 py-7">
                            <form id="signUpForm" action="#!">
                                {/* <!-- start step indicators --> */}
                                <div className="form-header flex gap-3 mb-4 text-xs text-center">
                                    <span className="stepIndicator flex-1 pb-8 relative">
                                        EMAIL ID & GST
                                    </span>
                                    <span className="stepIndicator flex-1 pb-8 relative">
                                        PASSWORD CREATION
                                    </span>
                                    <span className="stepIndicator flex-1 pb-8 relative">
                                        ONBOARDING DASHBOARD
                                    </span>
                                </div>


                                {/* <!-- end step indicators -->
                                     <!-- step one --> */}
                                <div className="step md:w-[70%] w-[100%]">
                                    <div className="mb-6">
                                        <label className="text-[13px]  font-semibold"
                                        >Enter Mobile Number
                                        </label>
                                        <span className=" text-[12px] font-bold">*</span>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                            <button
                                                className="absolute top-[8px] text-[10px] bottom-[2px] right-[2px] bg-blue text-white px-3 rounded focus:outline-none"
                                            >
                                                SENT OPT
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="text-[13px] text-lighgrey font-semibold"
                                        >Email id</label >
                                        <span className="text-clifford text-[12px] font-bold">*</span>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-lighgrey text-[15px] font-semibold">
                                            What are you looking to sell on Super Duper?
                                        </p>
                                        <div className="mt-3">
                                            <button
                                                className="bg-blue text-white p-3 rounded text-[14px] mt-2 focus:outline-none"
                                            >
                                                <i className="fa-solid fa-book me-2 text-xl"></i>All Categories
                                            </button>
                                            <button
                                                className="bg-white text-blue focus:outline-none p-2 rounded text-[14px] border-[1px] border-blue me-2 mt-2"
                                            >
                                                <div className="flex items-center">
                                                    <i className="fa-solid fa-book me-2 text-xl"></i>
                                                    <div>
                                                        <small className="text-[14px] font-bold">only books</small>
                                                        <p className="text-[10px] m-0 p-0">(pan is manadatory)</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-6 mt-3">
                                        <label className="text-[13px] text-lighgrey font-semibold"
                                        >Enter Gsint</label>
                                        <input
                                            type="text"
                                            className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                        />
                                        <div className="mt-4">
                                            <p className="text-lighgrey text-[13px] font-bold">
                                                GSTIN is required to sell products on Super Duper. You can
                                                also share it in the final step.
                                            </p>
                                            <p className="text-lighgrey text-[13px] mt-4">
                                                By continuing, I agree to Super Duper’s
                                                <span className="text-blue font-bold">Terms of Use </span>&
                                                <span className="text-blue font-bold">Privacy</span>
                                                Policy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- step two --> */}
                                <div className="step mt-3 md:w-[70%] w-[100%]">
                                    <p className="text-lighgrey text-[13px] font-bold">
                                        We’ve sent a verification link to your email
                                    </p>
                                    <p className="text-black text-[15px] font-bold mt-3">
                                        Almost there...
                                    </p>
                                    <p className="text-lighgrey text-[14px] font-bold mt-3">
                                        We need these details to set up your account. You can also
                                        choose to fill them in the next step.
                                    </p>
                                    <div className="mb-3 mt-4">
                                        <div className="py-2" x-data="{ show: true }">
                                            <label className="text-[13px] text-lighgrey font-semibold"
                                            >Create Password
                                            </label>
                                            <span className="text-clifford text-[12px] font-bold">*</span>

                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <div className="py-2" x-data="{ show: true }">
                                            <label className="text-[13px] text-lighgrey font-semibold"
                                            >
                                                Confirm Password
                                            </label>
                                            <span className="text-clifford text-[12px] font-bold">*</span>

                                        </div>
                                    </div>
                                    <p className="text-blue font-semibold">Suggest Password</p>
                                    <div className="mb-6 mt-3">
                                        <label className="text-[13px] text-lighgrey font-semibold"
                                        >
                                            Enter Your Fullname
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="text-[13px] text-lighgrey font-semibold"
                                        >Enter Display Name</label>
                                        <input
                                            type="text"
                                            name="dname"
                                            className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                        />
                                    </div>
                                </div>


                                {/* <!-- step three --> */}
                                <div className="step">
                                    <p className="text-black text-md font-bold mt-3">Hello .....</p>
                                    <p className="text-[13px] font-bold leading-tight mt-2 mb-5">
                                        Mobile & Email Verification
                                    </p>
                                    <div className="flex flex-col justify-between mb-4">
                                        <div className="flex justify-between md:flex-nowrap flex-wrap">
                                            <p className="font-bold mt-1">
                                                <i className="fa-solid fa-mobile-screen-button me-2"></i>
                                                *********
                                            </p>
                                            <button
                                                className="bg-green text-[12px] rounded p-1 mt-1 text-white"
                                            >
                                                verified
                                            </button>
                                        </div>
                                        <div className="flex justify-between md:flex-nowrap flex-wrap">
                                            <p className="font-bold mt-1">
                                                <i className="fa-solid fa-envelope me-2"></i>***********
                                            </p>
                                            <button className="text-blue font-bold text-[13px] mt-1">
                                                Reset email
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="md:w-[70%] w-[100%]">
                                        <p className="text-black text-[15px] font-semibold mt-3">
                                            ID & Signature Verification
                                        </p>
                                        <div className="">
                                            <p className="text-[13px] font-semibold mt-3">
                                                What are you looking to sell on Super Duper?
                                            </p>
                                            <div className="mt-3">
                                                <button
                                                    className="bg-blue text-white p-3 rounded text-[14px] mt-2 focus:outline-none"
                                                >
                                                    <i className="fa-solid fa-book me-2 text-xl"></i>All
                                                    Categories
                                                </button>
                                                <button
                                                    className="bg-white text-blue focus:outline-none p-2 rounded text-[14px] border-[1px] border-blue me-2 mt-2"
                                                >
                                                    <div className="flex items-center">
                                                        <i className="fa-solid fa-book me-2 text-xl"></i>
                                                        <div>
                                                            <small className="text-[14px] font-bold"
                                                            >only books</small>
                                                            <p className="text-[10px] m-0 p-0">(pan is manadatory)</p>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mb-8 mt-4">
                                            <label className="text-[13px] text-lighgrey font-semibold"
                                            >Enter Gsint
                                            </label>
                                            <input
                                                type="text"
                                                name="text"
                                                className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                            <p className="text-[12px] text-lighgrey font-semibold mt-3">
                                                GSTIN is required to sell products on Flipkart.
                                            </p>
                                            <p className="text-black text-[15px] font-semibold mt-3">
                                                Add Your e-Signature
                                            </p>
                                        </div>
                                        <hr />
                                        <p className="text-black text-[15px] font-semibold mt-3">
                                            Store & Pickup Details
                                        </p>
                                        <div className="mb-3 mt-4">
                                            <label className="text-[13px] text-lighgrey font-semibold"
                                            >Enter Your Full Name
                                            </label>
                                            <input
                                                type="name"
                                                placeholder="Enter your fullname"
                                                className="w-full text-[12px] mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-[13px] text-lighgrey font-semibold">Enter Display Name
                                            </label>
                                            <input
                                                placeholder="Enter Display Name"
                                                type="name"
                                                className="w-full text-[12px] mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                            <div className="h-full w-full flex place-items-center mt-3">
                                                <input
                                                    type="checkbox"
                                                    name="themeToggler"
                                                    id="themeToggler"
                                                    className="peer accent-[#50D71E] text-[12px]"
                                                />
                                                <label
                                                    for="themeToggler"
                                                    className="peer-checked:text-green text-[12px] text-bold ms-2">
                                                    Your display name is available
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label className="text-[13px] text-lighgrey font-semibold">
                                                Enter Store Description
                                            </label>
                                            <textarea
                                                className="w-full mt-2 text-[12px] px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                                id="w3review"
                                                name="w3review"
                                                rows="4"
                                                cols="50"
                                            ></textarea>
                                        </div>
                                        <p className="text-black text-[15px] font-semibold mt-4">
                                            Pickup Pincode
                                        </p>
                                        <div className="mb-3 mt-4">
                                            <label className="text-[13px] text-lighgrey font-semibold"
                                            >Enter Pickup Pincode *
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Display Name"
                                                name="email"
                                                className="w-full text-[12px] mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    {/* <!-- listing stock start --> */}
                                    <div className="mt-3">
                                        <p className="text-black text-[15px] font-semibold mt-4">
                                            Listing & Stock Availability
                                        </p>
                                        <div className="flex gap-4 mt-4 md:flex-nowrap flex-wrap">
                                            <p className="text-[13px] text-lighgrey font-semibold">
                                                List products which are already available on Flipkart
                                            </p>
                                            <input
                                                type="search"
                                                placeholder="search by brand and fsn"
                                                className="w-full text-[12px] mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-[1px] border-blue focus:outline-none"
                                            />
                                        </div>
                                        <p className="mt-3 text-[13px] text-lighgrey font-semibold">or</p>
                                        <p className="mt-3 text-[13px] text-lighgrey font-semibold">
                                            Have a new product?
                                        </p>
                                        <p className="mt-3 text-[13px] text-lighgrey font-semibold">or</p>
                                        <p className="mt-3 text-[13px] text-lighgrey font-semibold">
                                            Add products with high demand at Flipkart.
                                        </p>
                                        <div className="mt-4">
                                            <img src="images\multiim.png" alt="multiimg" />
                                        </div>
                                    </div>
                                    {/* <!-- listing stock end --> */}
                                </div>
                                {/* <!-- start previous / next buttons --> */}
                                <div className="form-footer gap-3">
                                    <button
                                        type="button"
                                        id="nextBtn"
                                        className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-blue text-lg w-[50%]"
                                        onclick="nextPrev(1)"
                                    >
                                        continue
                                    </button>
                                </div>
                                {/* <!-- end previous / next buttons --> */}
                            </form>
                        </div>
                    </div>




                </div >
            </div >


        </>
    )
};

export default Stepper;