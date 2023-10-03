import React, { useState } from "react";

import mlogo from "../Images/mlogo.png";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoLogOutOutline, IoBagOutline } from "react-icons/io5";
import { BiCategory, BiBell } from "react-icons/bi";
import { FaCubes } from "react-icons/fa";
import { TbBuildingStore } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import mask from "../Images/Mask group.png";


export const Sidebar = () => {
  const activeLink =
    "bg-blue text-white  font-bold flex  items-center h-11  rounded-lg";
  const [marketdrop, setMarketdrop] = useState(false);
  const [marketdrops, setMarketdrops] = useState(false);
  const [marketDrop, setMarketDrop] = useState(false);
  const data = [
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "My Profile",
      path: "/profile",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Add New Employee",
      path: "/addemploye",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Employee List",
      path: "/employelist",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Add Role",
      path: "/role",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Role List",
      path: "/rolelist",
    },
  ];


  const order = [
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Total",
      path: "/order",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Pending",
      path: "/pending",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Confirmed",
      path: "/confirmed",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Packaging",
      path: "/packaging",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Shipped",
      path: "/out-of-delivery",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Delivered",
      path: "/delivery",
    },

    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Returned",
      path: "/return",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Failed",
      path: "/failed",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Canceled",
      path: "/canceled",
    },
  ];
  const product = [
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Products",
      path: "/product",
    },
    {
      icon: <IoIosArrowDroprightCircle />,
      city: "Bulk Import",
      path: "/bulk-import",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <>
      <div className="lg:mt-[400px] lg:block hidden">
        <div className="border-white lg:mt-[380px] rounded-3xl flex flex-col top-10 left-0 w-14 hover:w-64 lg:w-80 h-screen bg-white shadow-2xl dark:bg-gray-900 text-blue transition-all duration-300 border-none z-10 sidebar ">
          <div className=" border-white rounded-r-3xl fixed flex flex-col top-20   left-0 w-14 hover:w-64 lg:w-80 h-screen bg-white shadow-2xl dark:bg-gray-900 text-blue transition-all duration-300 border-none z-10 sidebar">
            <div
              className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow text-lg
"
            >
              <ul className="flex flex-col py-10 px-14  space-y-1">
                <li>
                  <div className=" relative item-center justify-center  flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <img src={mlogo} alt="img" className="w-20 h-20" />
                    <div className="text-black">Store Name</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="relative  flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiFillHome
                          className=" text-lg
"
                        />
                      </span>
                      <span className="ml-2  tracking-wide truncate">
                        Dashboard
                      </span>
                    </div>
                  </div>
                </li>


                <li>
                  <NavLink
                    to="/order"
                    onClick={() => setMarketdrops((prev) => !prev)}
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex  justify-center items-center ml-4">
                    <IoBagOutline
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                    Orders
                    </span>
                  </NavLink>
                  {marketdrops && (
                    <div className="flex flex-col items-center">
                      <div className="bg-TextGreen w-full text-black  rounded-lg">
                        {order.map((item, inds) => {
                          return (
                            <Link to={item.path}>
                              <div
                                className="hover:bg-blue hover:text-white flex py-2 items-center"
                                key={inds}
                              >
                                <h3>{item.icon}</h3>

                                <h3 className=" cursor-pointer  ">
                                  {item.city}
                                </h3>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>





                
                <li>
                  <div className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <BiCategory
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                      Category
                    </span>
                  </div>
                </li>



                <li>
                  <NavLink
                    to="/product"
                    onClick={() => setMarketDrop((prev) => !prev)}
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex  justify-center items-center ml-4">
                    <FaCubes
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                    Product
                    </span>
                  </NavLink>
                  {marketDrop && (
                    <div className="flex flex-col items-center">
                      <div className="bg-TextGreen w-full text-black  rounded-lg">
                        {product.map((items, ind) => {
                          return (
                            <Link to={items.path}>
                              <div
                                className="hover:bg-blue hover:text-white flex py-2 items-center"
                                key={ind}
                              >
                                <h3>{items.icon}</h3>

                                <h3 className=" cursor-pointer  ">
                                  {items.city}
                                </h3>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>









                <li>
                  <NavLink
                    to="/store-profile"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <TbBuildingStore
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                      Store Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/notification"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <BiBell
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                      Notifications
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coupan"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <RiCoupon3Line
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">Coupon</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/payout"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <MdPayment
                        className=" text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">Payout</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/"
                    onClick={() => setMarketdrop((prev) => !prev)}
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    <span className="inline-flex  justify-center items-center ml-4">
                      <img src={mask} alt="" />
                    </span>
                    <span className="ml-2  tracking-wide truncate">
                      User Manager
                    </span>
                  </NavLink>
                  {marketdrop && (
                    <div className="flex flex-col items-center">
                      <div className="bg-TextGreen w-full text-black  rounded-lg">
                        {data.map((items, ind) => {
                          return (
                            <Link to={items.path}>
                              <div
                                className="hover:bg-blue hover:text-white flex py-2 items-center"
                                key={ind}
                              >
                                <h3>{items.icon}</h3>

                                <h3 className=" cursor-pointer  ">
                                  {items.city}
                                </h3>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 bg-blue rounded-lg">
                    <span className="inline-flex justify-center items-center  ml-4">
                      <IoLogOutOutline
                        className="bg-white  text-blue text-lg
"
                      />
                    </span>
                    <span className="ml-2  tracking-wide truncate">Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
