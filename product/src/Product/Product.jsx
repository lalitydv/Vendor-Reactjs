import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  AiOutlineDownload,
  AiOutlinePlusCircle,
  AiOutlinePlus,
} from 'react-icons/ai';
import dress from '../Images/dress.png';
import qr from '../Images/qr.png';
import eye from '../Images/eye.png';
import ediit from '../Images/eddit.png';
import delet from '../Images/delet.png';

import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = ' transform translate-x-5';

  const navigate = useNavigate();

  function handleClick() {
    console.log('hhhhhhhhhhi');
    navigate('/add-product');
  }

  function Clicklimitedhandle() {
    console.log('hellllo');
    navigate('/limited-stock');
  }

  return (
    <div>
      <div className="flex flex-col md:mx-4 mx-2 gap-5">
        <div className=" rounded-3xl md:p-4 p-8">
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

                  {/* PRODUCTS start  */}
                  <div className="bg-white rounded-3xl   w-full">
                    <div>PRODUCTS</div>
                    <div className="bg-white rounded-md shadow-md ">
                      <div className="flex justify-between items-center md:flex-row flex-col my-2 p-2">
                        <div className="flex border-2  h-12 items-center rounded-md pl-2  ">
                          <BiSearchAlt2 className="text-lg text-#888383" />
                          <input
                            type="text"
                            placeholder="Search by Product Name"
                            className=" text-sm border-0 focus:border-opacity-0 focus:outline-none"
                          />
                          <button className="bg-blue text-white h-12 px-2">
                            Search
                          </button>
                        </div>

                        <div className="flex border-2 items-center border-blue text-blue font-bold px-3 rounded-md">
                          <AiOutlineDownload className="font-semibold " />{' '}
                          Export
                        </div>
                        <div
                          onClick={Clicklimitedhandle}
                          className="flex border-2 items-center border-blue text-blue font-bold px-3 rounded-md"
                        >
                          <AiOutlinePlusCircle className="font-semibold " />{' '}
                          Limited Stocks
                        </div>
                        <div
                          onClick={handleClick}
                          className="flex border-2 items-center border-blue text-blue font-bold px-3 rounded-md"
                        >
                          <AiOutlinePlus className="font-semibold " /> Add new
                          products
                        </div>
                      </div>
                    </div>

                    {/* tabls start  */}

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-gray">
                          <tr>
                            <th scope="col" class="p-4">
                              sl
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Purchase Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Selling Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Verify Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Active Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4 ">
                              {' '}
                              <span className="bg-lightgreen text-green font-bold p-2  rounded-sm">
                                Status
                              </span>
                            </td>
                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4">Status</td>
                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4">Status</td>
                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4 ">
                              {' '}
                              <span className="bg-lightgreen text-green font-bold p-2  rounded-sm">
                                Status
                              </span>
                            </td>

                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4">Status</td>
                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                          <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">1.</div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                            >
                              <img src={dress} alt="" className="w-10 h-10" />{' '}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4">Status</td>
                            <td class="px-6 py-4 ">
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
                            <td class="px-6 py-4 flex items-center gap-2">
                              <img src={qr} alt="" className="w-5 h-5  " />
                              <img src={eye} alt="" className="w-5 h-5 " />
                              <img src={ediit} alt="" className="w-5 h-5 " />
                              <img src={delet} alt="" className="w-5 h-5 " />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* tabls End  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
