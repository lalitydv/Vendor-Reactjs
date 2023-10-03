import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stepper = () => {
  return (


    <div>

    </div>
  );
};

export default Stepper;

// import React, { useState } from 'react';

// const Stepper = () => {
//   const [currentTab, setCurrentTab] = useState(0);

//   const showTab = (n) => {
//     const x = document.getElementsByClassName('step');
//     if (n >= 0 && n < x.length) {
//       x[n].style.display = 'block';
//     }
//     if (n === 0) {
//       document.getElementById('prevBtn').style.display = 'none';
//     } else {
//       document.getElementById('prevBtn').style.display = 'inline';
//     }
//     if (n === x.length - 1) {
//       document.getElementById('nextBtn').innerHTML = 'Submit';
//     } else {
//       document.getElementById('nextBtn').innerHTML = 'Next';
//     }
//     fixStepIndicator(n);
//     setCurrentTab(n);
//   };

//   const nextPrev = (n) => {
//     const x = document.getElementsByClassName('step');
//     if (n === 1 && !validateForm()) return;
//     x[currentTab].style.display = 'none';
//     setCurrentTab(currentTab + n);
//     showTab(currentTab + n);
//   };

//   const validateForm = () => {
//     const x = document.getElementsByClassName('step');
//     const y = x[currentTab].getElementsByTagName('input');
//     let valid = true;

//     for (let i = 0; i < y.length; i++) {
//       if (y[i].value === '') {
//         y[i].classList.add('invalid');
//         valid = false;
//       }
//     }

//     if (valid) {
//       const stepIndicators = document.getElementsByClassName('stepIndicator');
//       stepIndicators[currentTab].classList.add('finish');
//     }

//     return valid;
//   };

//   const fixStepIndicator = (n) => {
//     const stepIndicators = document.getElementsByClassName('stepIndicator');
//     for (let i = 0; i < stepIndicators.length; i++) {
//       stepIndicators[i].classList.remove('active');
//     }
//     stepIndicators[n].classList.add('active');
//   };
//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">
//         Form Wizard - Multi Step Form
//       </h1>
//       <form
//         id="signUpForm"
//         className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
//         action="#!"
//       >
//         {/* Step Indicators */}
//         <div className="form-header flex gap-3 mb-4 text-xs text-center">
//           <span className="stepIndicator flex-1 pb-8 relative">
//             Account Setup
//           </span>
//           <span className="stepIndicator flex-1 pb-8 relative">
//             Social Profiles
//           </span>
//           <span className="stepIndicator flex-1 pb-8 relative">
//             Personal Details
//           </span>
//         </div>

//         {/* Form Steps */}
//         <div className="step">
//           <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
//             Create your account
//           </p>
//           <div className="mb-6">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="password"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//         </div>

//         <div className="step">
//           <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
//             Your presence on the social network
//           </p>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Linked In"
//               name="linkedin"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Twitter"
//               name="twitter"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Facebook"
//               name="facebook"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//         </div>

//         <div className="step">
//           <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
//             We will never sell it
//           </p>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Full name"
//               name="fullname"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Mobile"
//               name="mobile"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Address"
//               name="address"
//               className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
//               onChange={(e) => {}}
//             />
//           </div>
//         </div>

//         {/* Previous / Next Buttons */}
//         <div className="form-footer flex gap-3">
//           <button
//             type="button"
//             id="prevBtn"
//             className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
//             onClick={() => {}}
//           >
//             Previous
//           </button>
//           <button
//             type="button"
//             id="nextBtn"
//             className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
//             onClick={() => {}}
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Stepper;
