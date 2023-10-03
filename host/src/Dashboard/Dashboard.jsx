import React from "react";
import { HiSearch } from "react-icons/hi";
import card1 from "../Images/pandding.png";
import card2 from "../Images/cnf.png";
import card3 from "../Images/Packaging.png";
import card4 from "../Images/Shiping.png";
import pay1 from "../Images/Chobani.png";
import pay2 from "../Images/Chobani2.png";
import un1 from "../Images/United States.png";
import un2 from "../Images/vs.png";
import neworder from "../Images/neworder.png";
import Delevory from "../Images/delivered.png";
import Retun from "../Images/Return.png";
import mobail from "../Images/mobail.png";
import jbl from "../Images/jbl.png";
import bag from "../Images/bag.png";
import dress from "../Images/dress.png";
import { BsPencilFill } from "react-icons/bs";
import {
  AiFillDelete,
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Chart } from "react-google-charts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  defs,
  linearGradient,
} from "recharts";
const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      name2: "10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const chartStyles = {
    backgroundColor: "white",
    borderWidth: "5px",
    borderColor: "white",
    boxShadow: "10px 10px 20px rgba(253, 253, 253, 1)", // Box shadow
    borderRadius: "10px", // Rounded border
  };

  const data2 = [
    ["Task", "Hours per Day"],
    ["32%", 32],
    ["43%", 43],
    ["21%", 21],
    ["4%", 4],
  ];

  const options = {
    // title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
    pieSliceText: "label",
    legend: "none",
    pieSliceTextStyle: {
      color: "black",
    },
    colors: ["#FFE144", "#906ED1", "#073B74", "#3BB77E", "#4fe015"],
    // Specify custom colors in the "colors" array
  };
  return (
    <div className="flex flex-col md:mx-4 mx-2 gap-5">
      <div className="bg-white rounded-3xl md:p-4 p-10">
        <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
          <div className="lg:w-[70%] md:w-[100%] ">
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
                    <div className=" flex ">
                      <form className="border-2 border-black  md:rounded-2xl md:px-1 py-1 flex-1    ">
                        {/* <HiSearch  className="absolute  text-green  w-6 h-14" /> */}
                        <input
                          type="text"
                          placeholder="Search "
                          className=" text-black focus:outline-none px-5"
                        />
                        <HiSearch className=" inline-block     text-gray" />
                      </form>
                    </div>
                    <button className="bg-blue text-white md:px-6 rounded-xl py-2">
                      add New Product
                    </button>
                  </div>
                </div>
                {/* card section  start */}
                <div className="flex justify-between lg:flex-row flex-wrap items-center gap-10 my-5 ">
                  <div className=" flex justify-around items-center  bg-gray shadow-2xl rounded-xl px-2 py-2 mx-2 my-2">
                    <div>
                      <img
                        src={card1}
                        alt=""
                        className="object-contain max-w-80 w-20 h-20"
                      />
                    </div>
                    <div className="text-right text-blue font-bold text-[12px]">
                      <div className="">Pending</div>
                      <div className="">20</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center  bg-gray shadow-2xl rounded-xl px-2 py-2 mx-2 my-2">
                    <div>
                      <img
                        src={card2}
                        alt=""
                        className="object-contain max-w-80 w-20 h-20"
                      />
                    </div>
                    <div className="text-right text-blue font-bold text-[12px]">
                      <div className="">Confirmed</div>
                      <div className="">20</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center  bg-gray shadow-2xl rounded-xl px-2 py-2 mx-2 my-2">
                    <div>
                      <img
                        src={card3}
                        alt=""
                        className="object-contain max-w-80 w-20 h-20"
                      />
                    </div>
                    <div className="text-right text-blue font-bold text-[12px]">
                      <div className="">Packaging</div>
                      <div className="">20</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center  bg-gray shadow-2xl rounded-xl px-2 py-2 mx-2 my-2">
                    <div>
                      <img
                        src={card4}
                        alt=""
                        className="object-contain max-w-80 w-20 h-20"
                      />
                    </div>
                    <div className="text-right text-blue font-bold text-[12px]">
                      <div className="">Shipped</div>
                      <div className="">20</div>
                    </div>
                  </div>
                </div>
                {/* card section  End */}

                <div className="rounded-lg grow    md:flex gap-5 mt-8"></div>

                {/* ------- <!-- graph section start -->---------- */}
                <div className=" flex justify-between lg:flex-row flex-col gap-2 mx-5 ">
                  <div className="shadow-2xl mx-5 my-5 rounded-2xl  ">
                    <div style={chartStyles} className="">
                      <div className=" flex justify-between text-lg font-bold my-10">
                        <div>Revenue Stats</div>
                        <span>
                          <small className="text-green"> 8.30% </small>$6,789.00
                        </span>
                      </div>
                      <AreaChart
                        width={530}
                        height={250}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="pink"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="pink"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="blue"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="blue"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid
                          strokeDasharray="3 3"
                          horizontal={true}
                        />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="pink"
                          fillOpacity={1}
                          fill="url(#colorUv)"
                        />
                        <Area
                          type="monotone"
                          dataKey="pv"
                          stroke="blue"
                          fillOpacity={1}
                          fill="url(#colorPv)"
                        />
                      </AreaChart>
                    </div>
                  </div>
                  <div className="shadow-2xl mx-5 my-5 rounded-2xl  ">
                    <div
                      style={chartStyles}
                      className="flex justify-center items-center flex-col "
                    >
                      <div className=" flex justify-between text-lg font-bold my-5">
                        <div className="text-left">Sales by Category</div>
                      </div>
                      <Chart
                        chartType="PieChart"
                        width="350px"
                        height="300px"
                        data={data2}
                        options={options}
                      />
                      <div className="flex text-sm">
                        <div>
                          <input
                            type="radio"
                            className="accent-pink-500"
                            checked
                          />{" "}
                          Electronic 43%
                        </div>
                        <div>Headsets 4%</div>
                      </div>
                      <div className="flex text-sm">
                        <div>Mobile phones 32%</div>
                        <div>Other 21%</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------- <!-- graph section end -->---------- */}

                {/* <!--  rating section start --> */}
                <div class="flex prespons lg:flex-row flex-col lg:justify-between justify-center mx-5  gap-2 items-center mt-4 ">
                  {/* <!-- first customer rating --> */}
                  <div class="bg-white rounded-md shadow-2xl p-4  w-[100%]">
                    <div>
                      <h4 class="font-semibold text-textcoo">
                        customer rating
                      </h4>
                      <div class=" mt-4 text-center    rounded-md bg-blue p-4 mx-auto">
                        <h2 class="text-white font-bold text-md">4.7</h2>
                        <p>
                          <div className="flex gap-5">
                            <div class="flex items-center space-x-1">
                              <svg
                                class="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                class="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                class="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                class="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                class="w-4 h-4 text-gray-300 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            </div>
                            <span className="text-white ">2486</span>
                          </div>{" "}
                        </p>
                      </div>
                      <div class="flex justify-between gap-3 items-center mt-5">
                        <div>
                          <p class="text-lightwh text-[15px]">communication</p>
                        </div>
                        <div>
                          <div class="flex items-center space-x-1">
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-gray-300 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-between gap-3 items-center">
                        <div>
                          <p class="text-lightwh text-[15px]">
                            product quality
                          </p>
                        </div>
                        <div>
                          <div class="flex items-center space-x-1">
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              class="w-4 h-4 text-gray-300 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-between gap-3 items-center">
                        <div>
                          <p class="text-lightwh text-[15px]">delivery</p>
                        </div>
                        <div class="flex items-center space-x-1">
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- selling product start --> */}
                  <div class="bg-lightpink shadow-2xl  rounded-md p-2  ">
                    <div>
                      <h4 class="font-semibold text-textcoo text-lg">
                        best selling products
                      </h4>
                      <div class="mt-3">
                        <div class="flex gap-3 items-center bg-white rounded-md p-1">
                          <div class="bg-lightw p-2 rounded-md">
                            <img
                              src={pay1}
                              alt="dashimg"
                              className="w-20 h-20"
                            />
                          </div>
                          <div class="leading-normal">
                            <p class="font-semibold text-blackligh text-sm">
                              Chobani Complete Vanilla Greek Yogurt
                            </p>
                            <div class="flex justify-between items-center">
                              <div>
                                <p class="p-0 m-0">
                                  <div>
                                    <div class="flex items-center space-x-1">
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    </div>
                                  </div>

                                  <span class="text-lightwh inline ml-2 text-[12px]">
                                    5.0
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p class="text-blue text-[12px]">
                                  $152.58
                                  <span class="ml-2 text-[12px] text-lightwh">
                                    <del>$120.58</del>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <p class="font-semibold text-blackligh text-[7px]">
                              164
                              <span class="text-lightwh font-normal text-sm">
                                itmes sold
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-3 mt-2 items-center bg-white rounded-md p-1">
                          <div class="bg-lightw p-2 rounded-md">
                            <img
                              src={pay2}
                              alt="dashimg"
                              className="w-20 h-20"
                            />
                          </div>
                          <div class="leading-normal">
                            <p class="font-semibold text-blackligh text-sm">
                              Chobani Complete Vanilla Greek Yogurt
                            </p>
                            <div class="flex justify-between items-center">
                              <div>
                                <p>
                                  <div>
                                    <div class="flex items-center space-x-1">
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                      <svg
                                        class="w-4 h-4 text-gray-300 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    </div>
                                  </div>

                                  <span class="text-lightwh inline ml-2 text-[12px]">
                                    4.0
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p class="text-blue text-[12px]">
                                  $152.58
                                  <span class="ml-2 text-[12px] text-lightwh">
                                    <del>$120.58</del>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <p class="font-semibold text-blackligh text-[7px]">
                              164
                              <span class="text-lightwh font-normal text-sm">
                                itmes sold
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- selling product end --> */}
                  {/* <!-- geo section start --> */}
                  <div class="bg-white shadow-2xl rounded-md p-4 w-[100%]">
                    <div class="flex justify-between items-center">
                      <h4 class="font-semibold text-textcoo whitespace-nowrap text-sm">
                        geogrophical analysis
                      </h4>
                      <button class="border-none text-blue whitespace-nowrap text-sm">
                        see all
                      </button>
                    </div>
                    <div class="flex justify-between gap-3 items-center mt-5">
                      <div>
                        <img src={un1} alt="img" className="w-15 h-15" />
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px] whitespace-nowrap">
                          United States
                        </p>
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px] whitespace-nowrap">
                          $1,671.10
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-between gap-3 items-center mt-5">
                      <div>
                        <img src={un2} alt="img" className="w-15 h-15" />
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px] whitespace-nowrap">
                          United States
                        </p>
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px]">
                          $1,671.10
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-between gap-3 items-center mt-5">
                      <div>
                        <img src={un1} alt="img" className="w-15 h-15" />
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px] whitespace-nowrap">
                          United States
                        </p>
                      </div>
                      <div>
                        <p class="text-lightwh font-normal text-[15px]">
                          $1,671.10
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ego section end --> */}
                </div>
                {/* <!--  rating section end --> */}

                {/* <!-- last new added section start --> */}
                <div>
                  <div class="flex gap-4 mt-8 box-border">
                    <div class="flex-col">
                      <div class="col-span-2">
                        <div class="bg-white rounded-2xl p-3">
                          <div class="flex justify-between gap-3 items-center">
                            <div class="w-[30%]">
                              <img src={neworder} alt="img" />
                            </div>
                            <div class="w-[70%]">
                              <p class="font-semibold text-textcoo">
                                new oredrs
                              </p>
                              <hr class="mt-2 h-[2px]" />
                              <div class="leading-none">
                                <input
                                  type="range"
                                  id="vol"
                                  name="vol"
                                  min="0"
                                  max="50"
                                  class="accent-green mt-2 w-[100%]"
                                />
                                <p class="text-lightwh font-normal text-[12px]">
                                  60 items delivered
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-2 mt-3">
                        <div class="bg-white rounded-2xl p-3">
                          <div class="flex justify-between gap-3 items-center">
                            <div class="w-[30%]">
                              <img src={Delevory} alt="img" />
                            </div>
                            <div class="w-[70%]">
                              <p class="font-semibold text-textcoo">
                                delivered
                              </p>
                              <hr class="mt-2 h-[2px]" />
                              <div class="leading-none">
                                <input
                                  type="range"
                                  id="vol"
                                  name="vol"
                                  min="0"
                                  max="50"
                                  class="accent-pinkd mt-2 w-[100%]"
                                />
                                <p class="text-lightwh font-normal text-[12px]">
                                  60 items delivered
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-2 mt-3">
                        <div class="bg-white rounded-2xl p-3">
                          <div class="flex justify-between gap-3 items-center">
                            <div class="w-[30%]">
                              <img
                                src={Retun}
                                alt="img"
                                className="w-12 h-12"
                              />
                            </div>
                            <div class="w-[70%]">
                              <p class="font-semibold text-textcoo">returned</p>
                              <hr class="mt-2 h-[2px]" />
                              <div class="leading-none">
                                <input
                                  type="range"
                                  id="vol"
                                  name="vol"
                                  min="0"
                                  max="50"
                                  class="accent-purpel mt-2 w-[100%]"
                                />
                                <p class="text-lightwh font-normal text-[12px]">
                                  60 items delivered
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grow">
                      <p class="font-semibold text-textcoo">
                        newely added products
                      </p>
                      <div class="flex lg:row flex-wrap divresop gap-4 w-full box-border">
                        {/* <!-- add product first section --> */}
                        <div class="w-[25%] md:w-[50%] pt-5">
                          <div class="bg-white rounded-2xl shadow-2xl w-full p-4 relative">
                            <div>
                              <img
                                src={mobail}
                                alt="img"
                                class="mx-auto md:w-80 md:h-80 object-contain w-40 h-40"
                              />
                            </div>
                            <div class="leading-tight mt-2">
                              <p class="font-semibold text-textcoo text-[14px]">
                                Iphone 11 pro max-256GB 5000mhz
                              </p>
                              <div class="flex items-center  space-x-1">
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <div>5.0</div>
                              </div>
                              <p class="text-[15px]">
                                by<span class="text-blue">Davinci</span>
                              </p>
                            </div>
                            <p class="text-blue font-semibold text-[14px] mt-2">
                              $152.58
                              <span class="ml-2 text-[12px] text-lightwh">
                                <del>$120.58</del>
                              </span>
                            </p>
                            <button class="bg-blue text-white text-[14px]  flex justify-center items-center gap-5 mx-auto rounded-md px-5 py-1 mt-2">
                              <span>
                                {" "}
                                <AiOutlineShoppingCart />
                              </span>
                              <span> Add to Card</span>
                            </button>

                            <div class="absolute left-0 top-0">
                              <button class="bg-green rounded-br-lg rounded-tl-lg text-white px-3 text-[13px]">
                                new
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- add product first section -->
                                  <!-- add product second section --> */}
                        <div class="w-[25%] md:w-[50%] pt-5">
                          <div class="bg-white rounded-2xl shadow-2xl w-full p-4 relative">
                            <div>
                              <img
                                src={jbl}
                                alt="img"
                                class="mx-auto md:w-80 md:h-80 object-contain w-40 h-40"
                              />
                            </div>
                            <div class="leading-tight mt-2">
                              <p class="font-semibold text-textcoo text-[14px]">
                                JBL Extreme 5 (Water Proof)
                              </p>
                              <div class="flex items-center  space-x-1">
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <div>5.0</div>
                              </div>
                              <p class="text-[15px]">
                                by<span class="text-blue">Davinci</span>
                              </p>
                            </div>
                            <p class="text-blue font-semibold text-[14px] mt-2">
                              $152.58
                              <span class="ml-2 text-[12px] text-lightwh">
                                <del>$120.58</del>
                              </span>
                            </p>
                            <button class="bg-blue text-white text-[14px]  flex justify-center items-center gap-5 mx-auto rounded-md px-5 py-1 mt-2">
                              <span>
                                {" "}
                                <AiOutlineShoppingCart />
                              </span>
                              <span> Add to Card</span>
                            </button>

                            <div class="absolute left-0 top-0">
                              <button class="bg-green rounded-br-lg rounded-tl-lg text-white px-3 text-[13px]">
                                new
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- add product second section -->
                                  <!-- add product third section --> */}
                        <div class="w-[25%] md:w-[50%] pt-5">
                          <div class="bg-white rounded-2xl shadow-2xl w-full p-4 relative">
                            <div>
                              <img
                                src={bag}
                                alt="img"
                                class="mx-auto md:w-80 object-contain md:h-80 w-40 h-40"
                              />
                            </div>
                            <div class="leading-tight mt-2">
                              <p class="font-semibold text-textcoo text-[14px]">
                                Anti theift back pack - black color
                              </p>
                              <div class="flex items-center  space-x-1">
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <div>5.0</div>
                              </div>
                              <p class="text-[15px]">
                                by<span class="text-blue">Davinci</span>
                              </p>
                            </div>
                            <p class="text-blue font-semibold text-[14px] mt-2">
                              $152.58
                              <span class="ml-2 text-[12px] text-lightwh">
                                <del>$120.58</del>
                              </span>
                            </p>
                            <button class="bg-blue text-white text-[14px]  flex justify-center items-center gap-5 mx-auto rounded-md px-5 py-1 mt-2">
                              <span>
                                {" "}
                                <AiOutlineShoppingCart />
                              </span>
                              <span> Add to Card</span>
                            </button>

                            <div class="absolute left-0 top-0">
                              <button class="bg-green rounded-br-lg rounded-tl-lg text-white px-3 text-[13px]">
                                new
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- add product third section --> */}
                        {/* <!-- add product four section --> */}
                        <div class="w-[25%] md:w-[50%] pt-5">
                          <div class="bg-white rounded-2xl shadow-2xl w-full p-4 relative">
                            <div>
                              <img
                                src={dress}
                                alt="img"
                                class="mx-auto md:w-80 object-contain md:h-80 w-40 h-40"
                              />
                            </div>
                            <div class="leading-tight mt-2">
                              <p class="font-semibold text-textcoo text-[14px]">
                                prty forck- sleeve free
                              </p>
                              <div class="flex items-center  space-x-1">
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  class="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <div>5.0</div>
                              </div>
                              <p class="text-[15px]">
                                by<span class="text-blue">Davinci</span>
                              </p>
                            </div>
                            <p class="text-blue font-semibold text-[14px] mt-2">
                              $152.58
                              <span class="ml-2 text-[12px] text-lightwh">
                                <del>$120.58</del>
                              </span>
                            </p>
                            <button class="bg-blue text-white text-[14px]  flex justify-center items-center gap-5 mx-auto rounded-md px-5 py-1 mt-2">
                              <span>
                                {" "}
                                <AiOutlineShoppingCart />
                              </span>
                              <span> Add to Card</span>
                            </button>

                            <div class="absolute left-0 top-0">
                              <button class="bg-green rounded-br-lg rounded-tl-lg text-white px-3 text-[13px]">
                                new
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- add product four section --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- last new added section end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
