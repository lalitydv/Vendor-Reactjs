import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Images/Shinecoderlogo.png';
import { BiSolidCategory, BiSolidBook } from 'react-icons/bi';
import { ImMobile } from 'react-icons/Im';
import { HiOutlineMail } from 'react-icons/hi';
import '../index.scss';
import multyg from '../Images/multyg.png';
const Steppercontroler = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: '',
    display: '',
    pincode: '',
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.varsity &&
      state.session &&
      state.address &&
      state.district
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error('Please fillup all input field');
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.thana && state.post && state.display && state.pincode) {
      toast.success('form submit success');
    } else {
      toast.error('Please fillup all input field');
    }
  };
  return (
    // <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
    <div className="flex justify-center items-center z-1 p-5">
      <ToastContainer />
      <div className="max-w-3xl p-10 w-full rounded-md border-l-4  border-Primary  border-r-2 border-Primary border-t-8  border-Primary border-b-8  border-Primary ">
        <h3 className="my-4  flex justify-center items-center ">
          <img src={logo} alt="" className="object-contain w-52  " />
        </h3>

        <div className="flex justify-center items-center md:gap-24 gap-14">
          {formArray.map((v, i) => (
            <React.Fragment key={i}>
              <div
                className={`w-10 my-3  rounded-full  ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? 'bg-Primary text-white '
                    : 'bg-Textgray text-black'
                } h-10 flex justify-center items-center `}
              >
                {v}
              </div>

              {i !== formArray.length - 1 && (
                <div
                  key={`divider-${i}`}
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? 'bg-blue-500'
                      : 'bg-Textgray text-black'
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-2 mt-6">
              <label className="text-sm  ">
                Enter Mobile Number
                <span
                  className="text-darkred font-bold"
                  style={{ marginLeft: '5px' }}
                >
                  *
                </span>
              </label>

              <div className="relative">
                <input
                  value={state.name}
                  onChange={inputHandle}
                  type="number"
                  id="name"
                  name="name"
                  className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-2  border-Primary"
                />
                <button className="absolute top-3 text-sm bottom-1 right-1 bg-Primary text-white px-3 py-1 rounded focus:outline-none">
                  SENT OTP
                </button>
              </div>
            </div>
            <div className="flex flex-col mb-2 mt-4">
              <label className="text-sm ">
                Email id
                <span
                  className="text-darkred font-bold "
                  style={{ marginLeft: '5px' }}
                >
                  *
                </span>
              </label>

              <input
                value={state.dept}
                onChange={inputHandle}
                className="p-2 border-2 border-Primary mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="dept"
                id="dept"
              />
            </div>
            <div className="mt-6">
              <p className="text-lighgrey text-md font-[700]">
                What are you looking to sell on Super Duper?
              </p>
              <div className="mt-4 flex items-center">
                <button className="bg-Primary text-white p-3 rounded text-[14px]  ms-2 focus:outline-none">
                  <BiSolidCategory
                    className="inline text-2xl"
                    style={{ marginRight: '5px' }}
                  />
                  All Categories
                </button>
                <button
                  style={{ marginLeft: '10px' }}
                  className="bg-white text-blue focus:outline-none  rounded text-[14px] border-2  border-Primary "
                >
                  <div className="flex items-center">
                    <div>
                      {' '}
                      <BiSolidBook
                        className="text-2xl"
                        style={{ marginRight: '5px' }}
                      />
                    </div>

                    <div>
                      <small className="text-[14px] font-bold">
                        only books
                      </small>
                      <p className="text-sm m-0 p-0">(pan is manadatory)</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col mb-2 mt-6">
              <label className="text-sm">Enter Gsint</label>
              <input
                value={state.batch}
                onChange={inputHandle}
                name="batch"
                type="text"
                id="batch"
                className="w-full mt-2 px-4 py-1 rounded-md text-gray-700 font-medium border-solid border-2 border-Primary focus:outline-none"
              />
            </div>
            <div className="mt-6">
              <p className="text-md text-">
                GSTIN is required to sell products on Super Duper. You can also
                share it in the final step.
              </p>
              <p className="text-sm text-Textgray mt-4">
                By continuing, I agree to Super Duper’s
                <span className="">Terms of Use</span> &{' '}
                <span>Privacy Policy</span>
              </p>
            </div>

            <div className="mt-4 flex items-center">
              <button
                onClick={next}
                className="px-16 py-2 text-lg rounded-md  text-white bg-Primary"
              >
                Next
              </button>
            </div>
          </div>
          // <!-- step one --> */}

          // step one end
        )}

        {formNo === 2 && (
          <div className="mt-6">
            <div>
              <p className="mt-2">
                We’ve sent a verification link to your email
              </p>
              <p className="text-darkblack text-md font-semibold mt-3">
                Almost there...
              </p>
              <p className="mt-3">
                We need these details to set up your account. You can also
                choose to fill them in the next step.
              </p>
            </div>
            <div style={{ width: '70%' }}>
              <div className="flex flex-col mb-6 mt-6">
                <label className="text-sm" htmlFor="varsity">
                  Create Password
                  <span
                    className="text-darkred font-bold"
                    style={{ marginLeft: '5px' }}
                  >
                    *
                  </span>
                </label>

                <input
                  value={state.varsity}
                  onChange={inputHandle}
                  className="p-2 border border-Primary focus:outline-none mt-1 outline-none text-slate-500  rounded-md"
                  type="text"
                  name="varsity"
                  placeholder="Enter password"
                  id="varsity"
                />
              </div>
              <div className="flex flex-col mb-6 mt-4">
                <label className="text-sm" htmlFor="session">
                  Confirm Password
                  <span className="text-darkred font-bold ml-2">*</span>
                </label>
                <input
                  value={state.session}
                  onChange={inputHandle}
                  className="p-2 border border-Primary focus:outline-none mt-1 outline-0 text-slate-500  rounded-md"
                  type="text"
                  name="session"
                  placeholder="Enter confirm password"
                  id="session"
                />
              </div>
              <p className="font-semibold text-Primary text-lg">
                Suggest Password
              </p>
              <div className="flex flex-col mb-6 mt-6">
                <label className="text-sm" htmlFor="address">
                  Enter Your Full Name
                </label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 border border-Primary mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  type="text"
                  name="address"
                  placeholder=""
                  id="address"
                ></input>
              </div>
              <div className="flex flex-col mb-2 ">
                <label className="text-sm" htmlFor="session">
                  Enter Display Name
                </label>
                <input
                  value={state.district}
                  onChange={inputHandle}
                  className="p-2 border border-Primary mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  type="text"
                  name="district"
                  placeholder=""
                  id="district"
                />
              </div>
              <div className="mt-4 gap-3 flex  items-center">
                {/* <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
              >
                Enter Display Name
              </button> */}
                <button
                  onClick={next}
                  className="px-16 py-2 text-lg rounded-md  text-white bg-Primary"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          /* <!-- step two --> */
        )}

        {formNo === 3 && (
          <div>
            <div className="step mt-5">
              <p className="text-black text-xl font-bold mt-3">Hello .....</p>
              <p className="text-sm font-bold leading-tight mt-2 mb-5">
                Mobile & Email Verification
              </p>
              <div className="flex flex-col justify-between mb-4">
                <div className="flex justify-between items-center md:flex-nowrap flex-wrap">
                  <p className="font-medium text-sm mt-1">
                    <ImMobile className="inline mr-2" />
                    +*********
                  </p>
                  <button className="bg-green text-[12px] rounded p-1 px-5 mt-1 text-white">
                    verified
                  </button>
                </div>
                <div className="flex justify-between items-end  md:flex-nowrap flex-wrap">
                  <p className="font-medium text-sm mt-1">
                    {/* <IoMailSharp /> */}
                    <HiOutlineMail className="inline mr-2" />
                    *****gmail.com
                  </p>
                  <button className="text-Primary font-bold text-sm mt-1">
                    Reset email
                  </button>
                </div>
              </div>
              <hr />
              <div
                className="md:w-[70%] w-[100%] mb-4"
                style={{ width: '70%' }}
              >
                <p className="text-black text-[15px] font-semibold mt-3">
                  ID & Signature Verification
                </p>
                <div className="">
                  <p className="text-sm font-bold  mt-3">
                    What are you looking to sell on Super Duper?
                  </p>
                  <div className="mt-4 flex items-center">
                    <button className="bg-Primary text-white p-3 rounded text-[14px]  ms-2 focus:outline-none">
                      <BiSolidCategory className="inline text-2xl mr-2" />
                      All Categories
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      className="bg-white text-blue focus:outline-none  rounded text-[14px] border-2  border-Primary "
                    >
                      <div className="flex items-center">
                        <div>
                          {' '}
                          <BiSolidBook className="text-2xl mr-2" />
                        </div>

                        <div className="text-Primary">
                          <small className="text-[14px] font-bold">
                            only books
                          </small>
                          <p className="text-sm m-0 p-0">(pan is manadatory)</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="mb-8 mt-4">
                  <label className="text-sm">Enter Gsint</label>
                  <br></br>
                  <input
                    value={state.thana}
                    onChange={inputHandle}
                    id="thana"
                    type="text"
                    name="thana"
                    className="p-2 text-sm w-full border border-Primary mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  />
                  <p className="text-sm text-lighgrey  mt-3">
                    GSTIN is required to sell products on Flipkart.
                  </p>
                  <p className="text-black text-[15px] font-semibold mt-5">
                    Add Your e-Signature
                  </p>
                </div>
              </div>
              <hr />
              <div className="mb-8 mt-4" style={{ width: '70%' }}>
                <p className="text-black text-md font-semibold mt-3">
                  Store & Pickup Details
                </p>
                <div className="mb-3 mt-4">
                  <label className="text-sm ">Enter Your Full Name</label>
                  <br></br>
                  <input
                    value={state.post}
                    onChange={inputHandle}
                    type="name"
                    id="post"
                    name="post"
                    placeholder="Enter your fullname"
                    className="p-2 border text-sm border-Primary w-full mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  />
                </div>
                <div className="mb-3">
                  <label className="text-sm ">Enter Display Name</label>
                  <br></br>
                  <input
                    value={state.display}
                    onChange={inputHandle}
                    id="display"
                    name="display"
                    placeholder="Enter Display Name"
                    type="name"
                    className="p-2 text-sm border border-Primary w-full mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  />
                  <div className="h-full w-full flex place-items-center mt-3">
                    <input
                      type="checkbox"
                      name="themeToggler"
                      id="themeToggler"
                      className="peer text-sm accent-color-[#50D71E] text-[12px]"
                    />
                    <label
                      for="themeToggler"
                      className="peer-checked:text-green text-sm text-bold ml-2"
                    >
                      Your display name is available
                    </label>
                  </div>
                </div>
                <div className="mb-3 mt-4">
                  <label className="text-sm ">Enter Store Description</label>
                  <br></br>
                  <textarea
                    className="p-2 w-full text-sm border border-Primary w-full mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
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
                  <label className="text-sm ">Enter Pickup Pincode *</label>
                  <br></br>
                  <input
                    value={state.pincode}
                    onChange={inputHandle}
                    name="pincode"
                    id="pincode"
                    type="text"
                    placeholder="Display Name"
                    // name="email"
                    className="p-2 text-sm border w-full border-Primary mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  />
                </div>
              </div>
              <hr className="my-3" />
              {/* <!-- listing stock start --> */}
              <div className="mt-5">
                <p className="text-black text-[15px] font-semibold mt-4">
                  Listing & Stock Availability
                </p>
                <div className="flex gap-4 mt-4 md:flex-nowrap flex-wrap">
                  <p className="text-sm  ">
                    List products which are already available on Flipkart
                  </p>
                  <input
                    type="search"
                    placeholder="search by brand and fsn"
                    className="p-2 border text-sm border-Primary w-full mt-1 focus:outline-none outline-0 text-slate-500  rounded-md"
                  />
                </div>
                <p className="mt-3 text-sm">or</p>
                <p className="mt-3 text-sm">Have a new product?</p>
                <p className="mt-3 text-sm">or</p>
                <p className="mt-3 text-sm">
                  Add products with high demand at Flipkart.
                </p>
                <div className="mt-4">
                  <img src={multyg} alt="multiimg" />
                </div>
              </div>
              {/* <!-- listing stock end --> */}
            </div>
            <div className="mt-4 gap-3 flex  items-center">
              {/* <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
              >
                Previous
              </button> */}
              <button
                onClick={finalSubmit}
                className="px-16 text-lg rounded-md py-3 text-white bg-Primary"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Steppercontroler;
