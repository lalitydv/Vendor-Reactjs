import React from "react";
import { HiSearch } from "react-icons/hi";
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import card4 from "../Images/card4.png"
import pay1 from "../Images/pay1.png"
import pay2 from "../Images/pay2.png"
import {BsPencilFill} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"
export const Payout = () => {
  return (
    <>
    <div className="flex flex-col md:mx-4 mx-2 gap-5">
      <div className="bg-white rounded-3xl md:p-4 p-8">
        <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
          <div className="lg:w-[70%] md:w-[100%] ">
            <div className="mt-4">
              <div className="relative overflow-hidden  md:text-md  text-lg">
                <div className="bg-white md:rounded-l-full w-72 md:w-full  overflow-hidden  shadow-md">
                  <div className="md:flex md:justify-between  grid md:gap-0 gap-4 items-center ">
                    <div className="md:pl-4 ">overview</div>
                    <div className="flex items-center">

<label for="countries" class="block  text-sm font-medium text-gray-1 ">Show</label>
<select id="countries" class="  text-black text-sm   ">
  <option selected>this month</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>
                    <div className=" ">
                      <form className="border-2 border-black  md:rounded-2xl px-2  md:my-2 md:px-20 md:py-2">
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
{/* cart start  */}
                 <div className="flex justify-between items-center md:flex-row flex-col">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                 </div>
                 
                </div>


                <div className="rounded-lg grow    md:flex gap-5 mt-8">
  {/* card 1 */}
  <div className="shadow-md shadow-gray-1  rounded-lg flex-grow p-2 md:w-[20%] w-[100%] h-24 flex mt-2">
    <div className="flex gap-16 items-center ">
      <div className="w-[40%]">
        <img src={card1} alt="img" className="w-[80px]" />
      </div>
      <div className="w-[60%]">
        <p className="text-blue font-bold text-[12px]">total earning</p>
        <p className="text-blue font-bold text-[12px]">$16,789</p>
      </div>
    </div>
  </div>
  {/* card 2 */}
  <div className="shadow-md shadow-gray-1  rounded-lg grow p-2 md:w-[20%] w-[100%] h-24 flex mt-2">
    <div className="flex gap-16 items-center">
      <div className="w-[40%]">
        <img src={card2} alt="img" className="w-[80px]" />
      </div>
      <div className="w-[60%]">
        <p className="text-blue font-bold text-[12px]">Pending Clearance</p>
        <p className="text-blue font-bold text-[12px]">$16,789</p>
      </div>
    </div>
  </div>
  {/* card 3 */}
  <div className="shadow-md shadow-gray-1  rounded-lg grow p-2 md:w-[20%] w-[100%] h-24 flex mt-2">
    <div className="flex gap-16 items-center">
      <div className="w-[40%]">
      <img src={card3} alt="img" className='w-[80px]' />
      </div>
      <div className="w-[60%]">
        <p className="text-blue font-bold text-[12px]">
          Available for Withdrawal
        </p>
        <p className="text-blue font-bold text-[12px]">$16,789</p>
      </div>
    </div>
  </div>
  {/* card4 */}
  <div className="shadow-md shadow-gray-1  rounded-lg grow p-2 md:w-[20%] w-[100%] h-24 flex mt-2">
    <div className="flex gap-16 items-center">
      <div className="w-[40%]">
        <img src={card4} alt="img" className="w-[80px]" />
      </div>
      <div className="w-[60%]">
        <p className="text-blue font-bold text-[12px]">Withdrawn</p>
        <p className="text-blue font-bold text-[12px]">$16,789</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-white mt-8 rounded-2xl shadow-2xl">
  <div className="md:flex flex-wrap justify-around items-center p-12">
    <div className="md:w-[40%] w-[100%] mt-2">
      <p className="text-blue-1 text-md font-semibold">
        Bank Account details
      </p>
      <div className="shadow-2xl shadow-gray-1 border-2 border-gray rounded-md py-6 px-4 mt-6">
        <div className="flex justify-between  font-semibold items-center">
          <div className="text-blue-1">
            <p>name</p>
          </div>
          <div className="flex text-gray-1">
            <span className="mr-3">:</span>
            <p>Pratigya jain</p>
          </div>
        </div>
        <div className="flex justify-between  font-semibold items-center mt-2">
          <div className="text-blue-1">
            <p>Acc NO</p>
          </div>
          <div className="flex text-gray-1">
            <span className="mr-3">:</span>
            <p>Pratigya jain</p>
          </div>
        </div>
        <div className=" flex justify-between font-semibold items-center mt-2">
          <div className="text-blue-1">
            <p>Bank Name </p>
          </div>
          <div className="flex text-gray-1">
            <span className="mr-3">:</span>
            <p>Pratigya jain</p>
          </div>
        </div>
        <div className=" flex  font-semibold justify-between items-center mt-2">
          <div className="text-blue-1">
            <p>Branch Name</p>
          </div>
          <div className="flex text-gray-1">
            <span className="mr-3">:</span>
            <p>Pratigya jain</p>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-[40%] w-[100%] mt-2">
      <p className="text-blue-1 text-md font-semibold">
        Other withdrawel methods
      </p>
      <div className="shadow-2xl shadow-gray-1  border-2 border-gray rounded-md py-2 px-4 mt-6 w-[50%]">
        <div className="  font-semibold items-center">
          <img src={pay1} alt="img" className="mx-auto" />
          <p className="text-center">paypal</p>
        </div>
      </div>
      <div className="shadow-2xl shadow-gray-1 border-2 border-gray rounded-md py-2 px-4 mt-4 w-[50%]">
        <div className="font-semibold items-center">
          <img src={pay2} alt="img" className="mx-auto w-[40px]" />
          <p className="text-center">payoneer</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div>
    
</div>

<div className="mt-8">
  <div className=" bg-white rounded-xl  py-10   items-center w-full  p-4  shadow-md">
    <div className="relative overflow-x-auto">
      <p className="text-blue font-semibold">Coupon Table</p>
      <table className="w-full mt-4 text-sm text-left  text-gray-1 ">
        <thead className="     ">
          <tr className=" text-xs">
            <th scope="col" className="">
              withdrawn ID
            </th>
            <th scope="col" className="  ">
              withdrawn date
            </th>
            <th scope="col" className=" ">
              status
            </th>
            <th scope="col" className=" ">
              funds cleared date
            </th>
            <th scope="col" className="">
              funds cleared method
            </th>
            <th scope="col" className=" ">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  border-b-4  border-gray ">
            <td className="py-5 text-clifford"> #3210</td>
            <td className="py-5 ">May,03,2022</td>
            <td className="py-5 text-center">
              <button className="text-blue bg-skylight font-semibold px-3 py-1 rounded-md ">
                transfered
              </button>
            </td>
            <td className="py-5 text-center">May,03,2022</td>
            <td className="py-5 ">bank account</td>
            <td className="py-5 flex gap-2">
              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            </td>
          </tr>
          <tr className="bg-white  border-b-4  border-gray ">
            <td className="py-5 text-clifford"> #3210</td>
            <td className="py-5 ">May,03,2022</td>
            <td className="py-5 text-center">
              <button className="text-blue bg-skylight font-semibold px-3 py-1 rounded-md ">
                transfered
              </button>
            </td>
            <td className="py-5 text-center">May,03,2022</td>
            <td className="py-5 ">bank account</td>
            <td className="py-5 flex gap-2">
              
            
              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            </td>
          </tr>
          <tr className="bg-white  border-b-4  border-gray ">
            <td className="py-5 text-clifford"> #3210</td>
            <td className="py-5 ">May,03,2022</td>
            <td className="py-5 text-center">
              <button className="text-green bg-lightgreen font-semibold px-3 py-1 rounded-md ">
                panding
              </button>
            </td>
            <td className="py-5 text-center">May,03,2022</td>
            <td className="py-5 ">bank account</td>
            <td className="py-5 flex gap-2">
              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            </td>
          </tr>
          <tr className="bg-white  border-b-4  border-gray ">
            <td className="py-5 text-clifford"> #3210</td>
            <td className="py-5 ">May,03,2022</td>
            <td className="py-5 text-center">
              <button className="text-blue bg-skylight font-semibold px-3 py-1 rounded-md ">
                transfered
              </button>
            </td>
            <td className="py-5 text-center">May,03,2022</td>
            <td className="py-5 ">bank account</td>
            <td className="py-5 flex gap-2">
              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
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
    </>
  );
};
