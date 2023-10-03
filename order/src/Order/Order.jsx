import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { IoEyeSharp } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';
import logo from '../Images/Group338550.png';
import p1 from '../Images/Group 338751.png';
import p2 from '../Images/Group 338752.png';
import p3 from '../Images/Group 338753.png';
import p4 from '../Images/Group 338754.png';
import p5 from '../Images/Group 338757.png';
import p6 from '../Images/Group 338758.png';
import p7 from '../Images/Group 338759.png';
import p8 from '../Images/Group 338760.png';

const Order = () => {
  return (
    <>
      <div className="flex flex-col md:mx-4 mx-2 gap-5 ">
        <div className="bg-white rounded-3xl md:p-4 p-10">
          <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
            <div className="lg:w-[70%] md:w-[100%] 2xl:w-screen">
              <div className="mt-4">
                <div className="relative overflow-hidden  md:text-md  text-lg">
                  <div className="bg-white md:rounded-l-full w-full md:w-full  overflow-hidden  shadow-md">
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
                  <div className="">
                    <div className="flex items-center gap-4 mt-10">
                      <img src={logo} alt="" />
                      All Orders
                    </div>

                    <div className="bg-white  mb-10 rounded-2xl  py-10   items-center w-full md:w-full  p-4 overflow-hidden  shadow-2xl">
                      <p className="text-black text-xl font-bold">
                        Select date range
                      </p>
                      <h1 className="mt-6">All</h1>

                      <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded-md  md:px-10  px-8 py-4 md:w-full border"
                      />

                      <div className="md:flex grid  md:gap-8 gap-4 my-4 ">
                        <div className="grow  w-full">
                          <label className="">Start Date</label>
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
                          <label className="">Expire date</label>
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

                      <button className="bg-blue px-8 md:px-16  rounded-md text-white py-2">
                        Show Data
                      </button>
                    </div>

                    <div className="bg-white  mb-10 rounded-2xl  py-10   items-center w-full md:w-full  p-4 overflow-hidden  shadow-2xl">
                      <div className="rounded-lg grow    md:flex gap-6 mt-8">
                        {/* card 1 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8  items-center ">
                            <img src={p1} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Pending
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card 2 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex  gap-8 items-center ">
                            <img src={p2} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Pending
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card 3 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8 items-center ">
                            <img src={p1} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Pending
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card4 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8 items-center ">
                            <img src={p1} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Pending
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg grow    md:flex gap-5 mt-8">
                        {/* card 1 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8  items-center ">
                            <img src={p5} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Delivered
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card 2 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex  gap-8 items-center ">
                            <img src={p6} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Canceled
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card 3 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8 items-center ">
                            <img src={p7} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Returned
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card4 */}
                        <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-52 w-[100%] h-24 flex mt-2">
                          <div className="flex gap-8 items-center ">
                            <img src={p8} alt="img" className="w-20" />

                            <div className="w-[60%]">
                              <p className="text-blue font-bold text-[12px]">
                                Failed
                              </p>
                              <p className="text-blue font-bold text-[12px] flex justify-end">
                                20
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-10">
                        <div className="flex border border-blue rounded">
                          <input
                            type="text"
                            className="block w-full px-10 py-2 text-blue bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search by Product Name"
                          />
                          <button className="px-10 text-white bg-blue border-l rounded ">
                            Search
                          </button>
                        </div>

                        <div className="bg-blue flex items-center rounded-md">
                          <AiOutlineDownload className="text-white text-xl" />

                          <select
                            id="countries"
                            className=" px-8 bg-blue border-none focus:outline-none rounded-md text-white py-4"
                          >
                            <option> Export</option>
                            <option value="US">png</option>
                            <option value="CA">jpg</option>
                            <option value="FR">svg</option>
                            <option value="DE">pdf</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="w-[90%] bg-white rounded-xl  py-10  items-center md:w-full  p-10 m-4  shadow-xl">
                          <div className="relative overflow-x-auto">
                            <p className="text-blue font-semibold">
                              Coupon Table
                            </p>
                            <table className="w-full mt-4 text-sm text-left  text-gray-1 ">
                              <thead className="     ">
                                <tr className=" text-xs">
                                  <th scope="col" className=" ">
                                    SL
                                  </th>
                                  <th scope="col" className=" ">
                                    Order ID
                                  </th>
                                  <th scope="col" className=" ">
                                    Order Date
                                  </th>
                                  <th scope="col" className=" ">
                                    Customer Info
                                  </th>
                                  <th scope="col" className=" ">
                                    Total Amount
                                  </th>
                                  <th scope="col" className=" ">
                                    Order Status
                                  </th>
                                  <th scope="col" className="">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white  border-b-4  border-gray ">
                                  <td className="py-5">1</td>
                                  <td className="py-5 ">10001</td>
                                  <td className="py-5 ">
                                    12 Oct 2022 / 07:01 AM
                                  </td>
                                  <td className="py-5 ">
                                    Name <br />
                                    1234567890
                                  </td>
                                  <td className="py-5 ">$5,400.00</td>
                                  <td>
                                    <p className="bg-lightgreen text-green py-2 px-2 w-20 rounded-md">
                                      Packaging
                                    </p>
                                  </td>

                                  <td className="py-5 flex gap-2">
                                    <IoEyeSharp className="text-blue border-2  w-6 h-6 rounded-md" />
                                    <AiOutlineDownload className="text-green border-2  w-6 h-6 rounded-md" />
                                  </td>
                                </tr>

                                <tr className="bg-white  border-b-4  border-gray ">
                                  <td className="py-5">2</td>
                                  <td className="py-5 ">10002</td>
                                  <td className="py-5 ">
                                    12 Oct 2022 / 07:01 AM
                                  </td>
                                  <td className="py-5 ">
                                    Name <br />
                                    1234567890
                                  </td>
                                  <td className="py-5 ">$5,400.00</td>
                                  <td className="  ">
                                    <p className="bg-lightyellow text-yellow py-2 px-2 w-20 rounded-md">
                                      Packaging
                                    </p>
                                  </td>

                                  <td className="py-5 flex gap-2">
                                    <IoEyeSharp className="text-blue border-2  w-6 h-6 rounded-md" />
                                    <AiOutlineDownload className="text-green border-2  w-6 h-6 rounded-md" />
                                  </td>
                                </tr>
                                <tr className="bg-white  border-b-4  border-gray ">
                                  <td className="py-5">3</td>
                                  <td className="py-5 ">10003</td>
                                  <td className="py-5 ">
                                    12 Oct 2022 / 07:01 AM
                                  </td>
                                  <td className="py-5 ">
                                    Name <br />
                                    1234567890
                                  </td>
                                  <td className="py-5 ">$5,400.00</td>
                                  <td className="  ">
                                    <p className="bg-lightpink text-pink py-2 px-2 w-20 rounded-md">
                                      Packaging
                                    </p>
                                  </td>

                                  <td className="py-5 flex gap-2">
                                    <IoEyeSharp className="text-blue border-2  w-6 h-6 rounded-md" />
                                    <AiOutlineDownload className="text-green border-2  w-6 h-6 rounded-md" />
                                  </td>
                                </tr>
                                <tr className="bg-white  border-b-4  border-gray ">
                                  <td className="py-5">1</td>
                                  <td className="py-5 ">10001</td>
                                  <td className="py-5 ">
                                    12 Oct 2022 / 07:01 AM
                                  </td>
                                  <td className="py-5 ">
                                    Name <br />
                                    1234567890
                                  </td>
                                  <td className="py-5 ">$5,400.00</td>
                                  <td className="  ">
                                    <p className="bg-greylight text-gray-1 py-2 px-2 w-20 rounded-md">
                                      Packaging
                                    </p>
                                  </td>

                                  <td className="py-5 flex gap-2">
                                    <IoEyeSharp className="text-blue border-2  w-6 h-6 rounded-md" />
                                    <AiOutlineDownload className="text-green border-2  w-6 h-6 rounded-md" />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
