import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router";
import { BiSearchAlt2 } from "react-icons/bi";
import dress from "../../Images/dress.png";
import qr from '../../Images/qr.png'
import eye from '../../Images/eye.png'
import ediit from '../../Images/eddit.png'
import delet from '../../Images/delet.png'
import { AiOutlinePlusCircle } from "react-icons/ai";
const LimitedStock = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/add-product");
  }
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  return (
    <div className="flex flex-col md:mx-4 mx-2 gap-5">
      <div className=" rounded-3xl md:p-4 p-8">
        <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
          <div className="lg:w-[70%] md:w-[100%] ">
            <div className="mt-4">
              <div className="relative overflow-hidden  md:text-md  text-lg">
                <div className="bg-white md:rounded-full w-72 md:w-full  overflow-hidden  shadow-md my-2 px-5">
                  <div className="md:flex md:justify-between  grid md:gap-10 gap-4 items-center ">
                    <div className="md:pl-4 ">overview</div>
                    <div className="flex items-center">

<label for="countries" class="block  text-sm font-medium text-gray-1 ">Show</label>
<select id="countries" class="  text-blue text-sm font-bold  mx-2  ">
  <option selected>this month</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div> 
                    <div className=" ">
                      <form className="border-2 border-black  md:rounded-2xl px-2  md:my-2 md:px-20 md:py-2">
                        {/* <HiSearch  className="absolute  text-green  w-6 h-14" /> */}

                        <input
                          type="text"
                          placeholder="Search "
                          className=" text-black focus:outline-none"
                        />
                        <HiSearch className=" inline-block     text-gray" />
                      </form>
                    </div>
                    <button
                      className="bg-blue text-white md:px-6 rounded-xl py-2"
                      onClick={handleClick}
                    >
                      add New Product
                    </button>
                  </div>
                </div>

                {/* Stock Limit Products List start */}

                <div className="my-5">
                  <div className="text-xl font-bold">
                    Stock Limit Products List
                  </div>
                  <div>
                    <small>
                      The products are shown in this list which quantity is
                      below 10
                    </small>
                  </div>
                </div>
                {/* Stock Limit Products List End */}

                {/* search   */}

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

                    <div className=""></div>
                    <div className=""></div>

                    <div className=" flex ">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none  py-2 px-3 border-2 items-center border-blue text-blue font-bold  rounded-md"
                      >
                        <option value=" Default sort"> Default sort</option>
                        <option value=" Default sort"> Default sort</option>
                        <option value=" Default sort"> Default sort</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* search   */}


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
                            Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Orders
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
                              <img src={dress} alt="" className="w-10 h-10" />{" "}
                              Apple MacBook
                            </th>
                            <td class="px-6 py-4">Digital</td>
                            <td class="px-6 py-4">$450.00</td>
                            <td class="px-6 py-4">$500.00</td>
                            <td class="px-6 py-4 "> <span className="bg-lightgreen text-green font-bold p-2  rounded-sm">Approved</span></td>
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
                                    "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                    (toggle ? null : toggleClass)
                                  }
                                ></div>
                              </div>
                            </td>
                            <td class="px-6 py-2  ">
                                

                            <span className="flex  items-center gap-4"> 5 <AiOutlinePlusCircle className="text-blue font-bold"/></span>
                            </td>
                            <td className="px-6 py-4  ">
                                0
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
  );
};

export default LimitedStock;
