import React from 'react';
import { HiSearch } from 'react-icons/hi';
import front from '../Images/front.png';
import d2 from '../Images/Group 22.png';
import d3 from '../Images/Group 23.png';
import d4 from '../Images/Group 24.png';

const StoreProfile = () => {
  return (
    <>
      <div className="flex flex-col md:mx-4 mx-2 gap-5">
        <div className="bg-white rounded-3xl md:p-4 p-8">
          <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
            <div className="lg:w-[70%] md:w-[100%] 2xl:w-screen ">
              <div className="mt-4">
                <div className="relative overflow-hidden  md:text-md  text-lg">
                  <div className="bg-white md:rounded-l-full w-72 md:w-full  overflow-hidden  shadow-md">
                    <div className="md:flex md:justify-between  grid md:gap-0 gap-4 items-center ">
                      <div className="md:pl-4 ">overview</div>
                      <div className="flex items-center">
                        <label
                          for="countries"
                          class="block  text-sm font-medium text-gray-1 "
                        >
                          Show
                        </label>
                        <select id="countries" class="  text-black text-sm   ">
                          <option selected>this month</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div className=" ">
                        <form className="border-2 border-black  md:rounded-2xl md:px-10 py-1">
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

                  <div className="mt-10">
                    <img src={front} alt=""  className='w-full'/>
                  </div>

                  <div className="  py-10 md:flex  justify-between">
                    <div>
                      <div className="bg-white rounded-xl shadow-md p-2 w-full">
                        <div className="my-4">
                          <h1>Store information</h1>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Super Duper "
                            className=" bg-dark-gray rounded-xl border-4 w-full border-gray md:px-4 px-4  py-2"
                          />
                        </div>
                        <div className="mb-4 ">
                          {/* <label className="block mb-2 text-gray-700">Message</label> */}
                          <textarea
                            name="message"
                            className="bg-dark-gray w-full px-4 p-2 rounded-xl border-4 border-gray"
                            placeholder="Tell us about your store"
                            rows="6"
                            required
                          />
                        </div>

                        <div className="md:flex grid  md:gap-8 gap-4 my-4 ">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="owner’s first name* "
                              className="bg-dark-gray rounded-xl border-4 border-gray md:px-4 w-full px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="owner’s second name*"
                              className="bg-dark-gray w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>

                        <div className="md:flex grid md:gap-8 gap-4 my-4 ">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="email* "
                              className="bg-dark-gray w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="phone No*"
                              className="bg-dark-gray w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>
                        <div className="md:flex grid md:gap-8 gap-4 my-4 ">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="address line 1* "
                              className="bg-dark-gray w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="address line 2"
                              className="bg-dark-gray w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>
                        <div className="md:flex md:gap-8 grid gap-4 my-4 ">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="postcode/zipcode* "
                              className=" w-full bg-dark-gray rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="city*"
                              className="w-full bg-dark-gray rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>

                        <div className="my-4">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="website URL"
                            className=" bg-dark-gray rounded-xl border-4 border-gray md:px-4 px-4 w-full py-2"
                          />
                        </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md p-2 my-6  w-full">
                        <div className="my-4">
                          <h1>Store information</h1>
                        </div>

                        <div className="md:flex md:gap-8 gap-4 grid my-4 ">
                          <div>
                            <h1>Twitter</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="http://twitter.com/clare trumph "
                              className="bg-dark-gray  rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <h1>instagram</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="http://www.instagram.com/clare trumph"
                              className="bg-dark-gray  rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>

                        <div className="md:flex md:gap-8 gap-4 grid my-4 ">
                          <div>
                            <h1>facebook</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="http://www.facebook.com/clare trumph "
                              className="bg-dark-gray  rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>

                          <div>
                            <h1>linkedIn</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="http://www.linkedin.com/clare trumph"
                              className=" bg-dark-gray rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex md:justify-end justify-center py-6">
                        <button className="bg-blue px-10 text-white py-2  rounded-xl">
                          save details
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl w-full h-full shadow-2xl  ">
                      <div className=" grid gap-4">
                        <div className="flex justify-center items-center ">
                          <button className="bg-blue  w-64 text-white py-2   rounded-xl">
                            Profile details
                          </button>
                        </div>
                        <div className="flex justify-center items-center">
                          <button className="bg-gray-1 w-64 text-white py-2  rounded-xl">
                            save details
                          </button>
                        </div>
                      </div>

                      <div className="mt-20 ">
                        <h1 className="pl-6 text-xl">Most selling Products</h1>

                        <div>
                          <div className="border-gray  mt-6 h-32 z-10 ml-4  rounded-xl border-2">
                            <div className="flex  ">
                              <div className="w-28  mt-2 px-2   ">
                                <img
                                  src={d2}
                                  alt=""
                                  className="rounded-xl w-32"
                                />
                              </div>
                              <div className=" py-4">
                                <h1 className="text-xs font-bold">
                                  {' '}
                                  Chobani Complete Vanilla Greek Yogurt
                                </h1>

                                <div class="flex items-center space-x-1">
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>

                                  <div className="text-sm">5.0</div>
                                </div>

                                <div className="flex items-center gap-4 ">
                                  <div className="text-blue font-bold text-xl">
                                    $152.58
                                  </div>
                                  <div className="text-sm text-gray-1 line-through">
                                    $120.58
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-gray  mt-6 h-32 z-10 ml-4  rounded-xl border-2">
                            <div className="flex  ">
                              <div className="w-28  mt-2 px-2   ">
                                <img
                                  src={d3}
                                  alt=""
                                  className="rounded-xl w-32"
                                />
                              </div>
                              <div className=" py-4">
                                <h1 className="text-xs font-bold">
                                  {' '}
                                  Chobani Complete Vanilla Greek Yogurt
                                </h1>

                                <div class="flex items-center space-x-1">
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>

                                  <div className="text-sm">5.0</div>
                                </div>

                                <div className="flex items-center gap-4 ">
                                  <div className="text-blue font-bold text-xl">
                                    $152.58
                                  </div>
                                  <div className="text-sm text-gray-1 line-through">
                                    $120.58
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-gray  mt-6 h-32 z-10 ml-4  rounded-xl border-2">
                            <div className="flex  ">
                              <div className="w-28  mt-2 px-2   ">
                                <img
                                  src={d4}
                                  alt=""
                                  className="rounded-xl w-32"
                                />
                              </div>
                              <div className=" py-4">
                                <h1 className="text-xs font-bold">
                                  {' '}
                                  Chobani Complete Vanilla Greek Yogurt
                                </h1>

                                <div class="flex items-center space-x-1">
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>

                                  <div className="text-sm">5.0</div>
                                </div>

                                <div className="flex items-center gap-4 ">
                                  <div className="text-blue font-bold text-xl">
                                    $152.58
                                  </div>
                                  <div className="text-sm text-gray-1 line-through">
                                    $120.58
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-gray  mt-6 h-32 z-10 ml-4  rounded-xl border-2">
                            <div className="flex  ">
                              <div className="w-28  mt-2 px-2   ">
                                <img
                                  src={d2}
                                  alt=""
                                  className="rounded-xl w-32"
                                />
                              </div>
                              <div className=" py-4">
                                <h1 className="text-xs font-bold">
                                  {' '}
                                  Chobani Complete Vanilla Greek Yogurt
                                </h1>

                                <div class="flex items-center space-x-1">
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>

                                  <div className="text-sm">5.0</div>
                                </div>

                                <div className="flex items-center gap-4 ">
                                  <div className="text-blue font-bold text-xl">
                                    $152.58
                                  </div>
                                  <div className="text-sm text-gray-1 line-through">
                                    $120.58
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-gray  mt-6 h-32 z-10 ml-4  rounded-xl border-2">
                            <div className="flex  ">
                              <div className="w-28  mt-2 px-2   ">
                                <img
                                  src={d3}
                                  alt=""
                                  className="rounded-xl w-32"
                                />
                              </div>
                              <div className=" py-4">
                                <h1 className="text-xs font-bold">
                                  {' '}
                                  Chobani Complete Vanilla Greek Yogurt
                                </h1>

                                <div class="flex items-center space-x-1">
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-3 h-3 text-light-yellow "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>

                                  <div className="text-sm">5.0</div>
                                </div>

                                <div className="flex items-center gap-4 ">
                                  <div className="text-blue font-bold text-xl">
                                    $152.58
                                  </div>
                                  <div className="text-sm text-gray-1 line-through">
                                    $120.58
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreProfile;
