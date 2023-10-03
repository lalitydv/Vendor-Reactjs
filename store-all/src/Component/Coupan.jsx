import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const Coupan = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = ' transform translate-x-5';
  return (
    <>
     <div className="flex flex-col md:mx-4 mx-2 gap-5">
        <div className=" rounded-3xl md:p-4 p-8">
          <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
            <div className="lg:w-[70%] md:w-[100%] 2xl:w-screen ">
              <div className="mt-4">
                <div className="relative overflow-hidden  md:text-md  text-lg">
                <div className="bg-white md:rounded-l-full w-72 md:w-full lg:w-max  2xl:w-full overflow-x-hidden  shadow-md">
                    <div className="md:flex md:justify-between  grid md:gap-4 gap-4 items-center ">
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

                  <>
                    <div className="py-5 mt-4 bg-white  w-full  rounded-xl  shadow-2xl p-14 m-10">
                      <p className="text-blue font-bold">Add New Coupon</p>
                      <div className="bg-white rounded-xl shadow-md p-2 w-full">
                        <div className="md:flex grid  md:gap-10 gap-4 my-4 ">
                          <div className=" w-full">
                            <label className="text-blue font-semibold">
                              Type
                            </label>
                            <select
                              name="cars"
                              id="cars"
                              style={{ width: '100%' }}
                              className="w-[100%]  bg-greylight focus:outline-none rounded-xl border-4 border-gray md:px-4 w-full px-4 md:w-80 py-2"
                            >
                              <option value="volvo">
                                Discount on Purchase{' '}
                              </option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                          <div className="w-full">
                            <label className="text-blue font-semibold">
                              title
                            </label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="title"
                              className="w-[100%]  bg-greylight focus:outline-none w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                        <div className="md:flex grid  md:gap-8 gap-4 my-4">
                          <div className="grow   w-full">
                            <label className="text-blue font-semibold">
                              Code
                            </label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Discount on Purchase "
                              className="w-[100%]  bg-greylight focus:outline-none w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div className="grow w-full">
                            <label className="text-blue font-semibold">
                              Discount Type
                            </label>
                            <select
                              name="cars"
                              id="cars"
                              style={{ width: '100%' }}
                              className="w-[100%]  bg-greylight focus:outline-none rounded-xl border-4 border-gray md:px-4 w-full px-4 md:w-80 py-2"
                            >
                              <option value="volvo">Amount </option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className="md:flex grid  md:gap-8 gap-4 my-4 ">
                          <div className="grow  w-full">
                            <label className="text-blue font-semibold">
                              Start Date
                            </label>
                            <input
                              type="date"
                              name=""
                              id=""
                              placeholder="address line 1* "
                              style={{ width: '100%' }}
                              className="w-full  bg-greylight focus:outline-none  rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                            />
                          </div>
                          <div className="grow  w-full">
                            <label className="text-blue font-semibold">
                              Expire date
                            </label>
                            <input
                              type="date"
                              name=""
                              id=""
                              placeholder="address line 2"
                              className="w-[100%]  bg-greylight focus:outline-none w-full rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                        <div className="md:flex grid  md:gap-8 gap-4 my-4 ">
                          <div className="grow  md:w-[50%] w-[100%]">
                            <label className="text-blue font-semibold">
                              limit for same user
                            </label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="postcode/zipcode* "
                              className="w-[100%]  bg-greylight focus:outline-none rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div className="grow  md:w-[50%] w-[100%]">
                            <label className="text-blue font-semibold">
                              minimum purchse
                            </label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="city*"
                              className="w-[100%]   bg-greylight focus:outline-none rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                        <div className="flex  items-end justify-between gap-4 my-4  ">
                          <div className="grow  md:w-[50%] w-[100%]">
                            <label className="text-blue font-semibold">
                              discount
                            </label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="postcode/zipcode* "
                              className="w-[100%]  bg-greylight focus:outline-none rounded-xl border-4 border-gray md:px-4 px-4 md:w-80 py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div className="grow  md:w-[50%] w-[100%]">
                            <input
                              type="button"
                              defaultValue="save details"
                              name=""
                              id=""
                              placeholder="city*"
                              className="w-[100%] text-white   bg-blue focus:outline-none rounded-xl border-4 border-gray md:px-4 px-4 md:w-80  py-2"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>

                  <div></div>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-[90%] bg-white rounded-xl  py-10  items-center md:w-full  p-10 m-4  shadow-xl">
                  <div className="relative overflow-x-auto">
                    <p className="text-blue font-semibold">Coupon Table</p>
                    <table className="w-full mt-4 text-sm text-left  text-gray-1 ">
                      <thead className="     ">
                        <tr className=" text-xs">
                          <th scope="col" className="">
                            COUPON TYPE
                          </th>
                          <th scope="col" className="  ">
                            TITLE
                          </th>
                          <th scope="col" className=" ">
                            USER LIMIT
                          </th>
                          <th scope="col" className=" ">
                            MINIMUM PURCHASE
                          </th>
                          <th scope="col" className="">
                            DISCOUNT
                          </th>
                          <th scope="col" className=" ">
                            EXPIRE DATE
                          </th>
                          <th scope="col" className="">
                            status
                          </th>
                          <th scope="col" className="">
                            action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white  border-b-4  border-gray ">
                          <td className="py-5 text-red">
                            Discount On Purchase
                          </td>
                          <td className="py-5 ">christmas</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 ">10%</td>
                          <td className="py-5 ">May,03,2022</td>
                          <td className="py-5 ">
                            <div
                              className="md:w-12 md:h-7 w-10 h-6 flex items-center border-2 border-gray bg-gray rounded-full p-1 cursor-pointer"
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              {/* Switch */}
                              <div
                                className={
                                  'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
                                  (toggle ? null : toggleClass)
                                }
                              ></div>
                            </div>
                          </td>
                          <td className="py-5 flex gap-2">
                            <BsPencilFill className="text-blue border-2  w-6 h-6 rounded-md" />
                            <AiFillDelete className="text-red border-2  w-6 h-6 rounded-md" />
                          </td>
                        </tr>
                        <tr className="bg-white  border-b-4  border-gray ">
                          <td className="py-5 text-red">
                            Discount On Purchase
                          </td>
                          <td className="py-5 ">christmas</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 ">10%</td>
                          <td className="py-5 ">May,03,2022</td>
                          <td className="py-5 ">
                            <div
                              className="md:w-12 md:h-7 w-10 h-6 flex items-center border-2 border-gray bg-gray rounded-full p-1 cursor-pointer"
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              {/* Switch */}
                              <div
                                className={
                                  'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
                                  (toggle ? null : toggleClass)
                                }
                              ></div>
                            </div>
                          </td>
                          <td className="py-5 flex gap-2">
                            <BsPencilFill className="text-blue border-2  w-6 h-6 rounded-md" />
                            <AiFillDelete className="text-red border-2  w-6 h-6 rounded-md" />
                          </td>
                        </tr>
                        <tr className="bg-white  border-b-4  border-gray ">
                          <td className="py-5 text-red">
                            Discount On Purchase
                          </td>
                          <td className="py-5 ">christmas</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 ">10%</td>
                          <td className="py-5 ">May,03,2022</td>
                          <td className="py-5 ">
                            <div
                              className="md:w-12 md:h-7 w-10 h-6 flex items-center border-2 border-gray bg-gray rounded-full p-1 cursor-pointer"
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              {/* Switch */}
                              <div
                                className={
                                  'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
                                  (toggle ? null : toggleClass)
                                }
                              ></div>
                            </div>
                          </td>
                          <td className="py-5 flex gap-2">
                            <BsPencilFill className="text-blue border-2  w-6 h-6 rounded-md" />
                            <AiFillDelete className="text-red border-2  w-6 h-6 rounded-md" />
                          </td>
                        </tr>
                        <tr className="bg-white  border-b-4  border-gray ">
                          <td className="py-5 text-red">
                            Discount On Purchase
                          </td>
                          <td className="py-5 ">christmas</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 text-center">10</td>
                          <td className="py-5 ">10%</td>
                          <td className="py-5 ">May,03,2022</td>
                          <td className="py-5 ">
                            <div
                              className="md:w-12 md:h-7 w-10 h-6 flex items-center border-2 border-gray bg-gray rounded-full p-1 cursor-pointer"
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              {/* Switch */}
                              <div
                                className={
                                  'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
                                  (toggle ? null : toggleClass)
                                }
                              ></div>
                            </div>
                          </td>
                          <td className="py-5 flex gap-2">
                            <BsPencilFill className="text-blue border-2  w-6 h-6 rounded-md" />
                            <AiFillDelete className="text-red border-2  w-6 h-6 rounded-md" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Coupan;
