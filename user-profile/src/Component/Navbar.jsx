import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Tabs, Tab } from '../Component/Tabs';
import logo from "../Images/logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { PiDotsNineBold } from "react-icons/pi";

import flag from "../Images/flag.png";
import person from "../Images/person.png";
import { FaRegBell } from "react-icons/fa";
import { IoScanOutline, IoSettingsOutline ,} from "react-icons/io5";
import {BsThreeDots,BsSearch,BsPencilFill} from "react-icons/bs"
import { MdAddCircle } from "react-icons/md";
import {} from "react-icons/bs"
import {AiFillDelete ,AiFillHome} from "react-icons/ai"
export const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModala, setShowModala] = useState(false);
  return (
    <>
      {/* navbar start */}

      <div className="flex justify-between items-center bg-white shadow-2xl fixed w-full  h-20 z-20   ">
        <div className="flex justify-center items-center gap-4">
          <img src={logo} alt="fgd" />
          <div>
            <div className="flex  justify-evenly  py-3 md:py-5 md:block">
              <div className=" text-red-600">
                <button
                  className="p-2 text-blue  "
                  onClick={() => setNavbar(!navbar)}
                ><CgMenuLeft className="text-3xl " />
                 
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-evenly pb-3 mt-8 md:block md:pb-0 md:mt-0   ${
                navbar ? "block" : "hidden"
              }`}
            >
              {/* <div className="pt-2 ">
                <div className="fixed w-full h-screen left-0 top-0 bg-black md:bg-transparent bg-opacity-80 ">
                  <div className="sidebar fixed top-0 bottom-0 lg:left-0  w-[300px] rounded-r-3xl overflow-y-auto  bg-white md:hidden block z-10">
                    <div onClick={() => setNavbar(!navbar)}>
                      <RxCross2 className="text-3xl text-blue " />
                    </div>
                    <div className="text-black text-xl">
                      <div className="p-2.5 mt-1 flex items-center text-blue font-bold text-3xl">
                        Store name
                      </div>
                    </div>

                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4  text-black">
                      <AiFillHome className="text-blue text-2xl" />
                      <span className="text-[15px] ml-4 text-gray-700 font-bold">
                        Dashboard
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex justify-center items-center gap-4 ">
            <div className="bg-gray px-4 py-4 rounded-full">
              <img src={flag} alt="" />
            </div>
            <div className="bg-gray rounded-full px-4 py-4 text-xl" onClick={() => setShowModala(true)}>
              <PiDotsNineBold />
            </div>


            {showModala ? (
        <>
          <div className="flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg w-80   mt-14  absolute  left-80    bg-black bg-opacity-90 z-50">
                {/* <div> */}
                <div className="flex p-5 bg-lightgray border-solid border-gray  ">
                 
               
                    <span className="text-black h-6 w-6 text-xl absolute left-72   items-end p-0 "  onClick={() => setShowModala(false)}>
                      x
                    </span>
                 
                </div>
                <div className="relative  flex-auto">
                <div>
      <Tabs>
      <Tab label="Notes">
      <div className="p-2 flex justify-between bg-white">
         <div className="bg-blue w-10 h-10 rounded ml-6">
<BsThreeDots className="mt-1 text-white w-10 h-8"/>
         </div>
   
   <div>
    <h1 className="text-xl">
    Notes
    </h1>
    <span className="text-xs text-center flex  justify-center">Add New Notes</span>
   </div>
   <div className="bg-blue w-10 h-10 rounded">
<BsSearch className="mt-1 text-white w-10 h-8"/>
         </div>
   <div>
    </div>   
          </div>

          <div >
<div className="bg-white  flex justify-between items-center  px-4 py-2  border-t-2 border-black">
<div className="  ">



<h1 className="font-semibold text-md">
New order placed..
</h1>
<p className="text-xs">10 Aug 2021</p></div>
<div className="py-5 flex gap-2">

              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            
</div>



</div>
<div className="bg-white  flex justify-between items-center  px-4 py-2  border-t-2 border-black">
<div className="  ">



<h1 className="font-semibold text-md">
Youtube, a video-sharing website..
</h1>
<p className="text-xs">10 Aug 2021</p></div>
<div className="py-5 flex gap-2">

              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            
</div>



</div>
<div className="bg-white  flex justify-between items-center  px-4 py-2  border-t-2 border-black">
<div className="  ">



<h1 className="font-semibold text-md">
john just buy your product..
</h1>
<p className="text-xs">10 Aug 2021</p></div>
<div className="py-5 flex gap-2">

              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            
</div>



</div>
<div className="bg-white  flex justify-between items-center  px-4 py-2  border-t-2 border-black">
<div className="  ">



<h1 className="font-semibold text-md">
Athan Jacoby
</h1>
<p className="text-xs">10 Aug 2021</p></div>
<div className="py-5 flex gap-2">

              <BsPencilFill  className="text-blue border-2  w-6 h-6 rounded-md" />
              <AiFillDelete className='text-red border-2  w-6 h-6 rounded-md' />
            
</div>



</div>

</div>
          
        </Tab>
        <Tab label="Alerts" >
          <div className="p-2 flex justify-between bg-white">
         <div className="bg-blue w-10 h-10 rounded ml-6">
<BsThreeDots className="mt-1 text-white w-10 h-8"/>
         </div>
   
   <div>
    <h1 className="text-xl">
    NOTIFICATIONS
    </h1>
    <span className="text-xs text-center flex  justify-center">SHOW ALL</span>
   </div>
   <div className="bg-blue w-10 h-10 rounded">
<BsSearch className="mt-1 text-white w-10 h-8"/>
         </div>
   <div>
    </div>   
          </div>

<div className="p-4 text-white font-bold text-2xl">
SEVER STATUS
</div>

<div >
<div className="bg-white   px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Today</p></div>
</div>


</div>

</div>
<div className="p-4 text-white font-bold text-2xl">
SOCIAL
</div>

<div >


<div className="bg-white   px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Perfection Simplified
</h1>
<p>Jame Smith commented...</p></div>
</div>


</div>

<div className="bg-white  px-4 py-2   ">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>


</div>
</div>
<div className="p-4 text-white font-bold text-2xl">
SAVER STATUS
</div>

<div >

<div className="bg-white   px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
AharlieKane
</h1>
<p>Sami is online</p></div>
</div>


</div>


</div>


        </Tab>
        


        <Tab label="Chat" >
          <div className="p-2 flex justify-between bg-white">
         <div className="bg-blue w-10 h-10 rounded ml-6">
<MdAddCircle className="mt-1 text-white w-10 h-8"/>
         </div>
   
   <div>
    <h1 className="text-xl">
    CHAT LIST
    </h1>
    <span className="text-xs text-center flex  justify-center">SHOW ALL</span>
   </div>
   <div className="bg-blue w-10 h-10 rounded">
<BsThreeDots className="mt-1 text-white w-10 h-8"/>
         </div>
   <div>
    </div>   
          </div>

<div className="p-4 text-white font-bold text-2xl">
  A
</div>

<div >
<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>
<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>

<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>

<div className="bg-white flex justify-between items-center  px-4 py-2   ">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>
</div>
<div className="p-4 text-white font-bold text-2xl">
 B
</div>

<div >


<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>

<div className="bg-white flex justify-between items-center  px-4 py-2   ">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>
</div>
<div className="p-4 text-white font-bold text-2xl">
 c
</div>

<div >

<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>

<div className="bg-white flex justify-between items-center  px-4 py-2  border-b-2 border-black">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>

<div className="bg-white flex justify-between items-center  px-4 py-2   ">
<div className=" flex gap-6 ">
<img src={person} alt="" className="w-14" />

<div>
<h1 className="font-bold text-xl">
Archie Parker
</h1>
<p>Kalid is online</p></div>
</div>

<div className="bg-lightblack text-white  rounded-full px-2">
  2
</div>
</div>
</div>


        </Tab>
      </Tabs>
    </div>
               
               
                {/* </div> */}
               
               



                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

            <div className="bg-gray rounded-full px-4 py-4 text-xl">
              <IoScanOutline />
            </div>
            <div className="bg-gray rounded-full px-4 py-4 text-xl">
              <FaRegBell />
            </div>
            <div className="bg-gray rounded-full px-1 py-1 text-xl">
              <img src={person} alt="" className="w-16" />
            </div>
            <div className="bg-gray rounded-full px-4 py-4 text-xl "  onClick={() => setShowModal(true)}>
              <IoSettingsOutline />
            </div>
       



      {showModal ? (
        <>
          <div className="flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg w-80   mt-14  absolute  left-80 z-0 bg-blue ">
                {/* <div> */}
                <div className="flex p-5  border-solid border-gray  ">
                 
               
                    <span className="text-white h-6 w-6 text-xl    items-end py-0 "  onClick={() => setShowModal(false)}>
                      x
                    </span>
                 
                </div>
                <div className="relative  flex-auto">
                  <form className="px-8 pt-6  w-full">
                    <label for="countries" className="block text-white text-sm font-bold mb-1">
                    Background
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Dark</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Layout
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Vertical</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Sidebar
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Full</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Sidebar Position
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Static</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Header Position
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Static</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Container
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Wide</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Direction
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>LTR</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
<label for="countries" className="block text-white text-sm font-bold mb-1 mt-4">
Body Font
                    </label>
                    
<select id="countries" class="  text-gray-1 text-md w-full h-10 border rounded focus:outline-none   ">
  <option selected>Roboto </option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

                  </form>
               
               
                {/* </div> */}
                <div className="px-8  pb-8 w-full">
                  <h1 className="block text-white text-sm font-bold mb-1 mt-4">
                  Navigation Header
                  </h1>


<div className="flex  gap-4 ">

                  <div className="w-6 h-6 bg-red rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-green rounded">

                  </div>

                  <div className="w-6 h-6 bg-white rounded">

                  </div>
                  <div className="w-6 h-6 bg-pink rounded">

                  </div>
                  <div className="w-6 h-6 bg-yellow rounded">

                  </div>
                  <div className="w-6 h-6 bg-black rounded">

                  </div>




                  <div className="w-6 h-6 bg-gray rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

                  <div className="w-6 h-6 bg-blue-1 rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-lightgreen rounded">

                  </div>

                  <div className="w-6 h-6 bg-darkblak rounded">

                  </div>
                  <div className="w-6 h-6 bg-gray-1 rounded">

                  </div>
                  <div className="w-6 h-6 bg-greylight rounded">

                  </div>
                  <div className="w-6 h-6 bg-lightyellow rounded">

                  </div>




                  <div className="w-6 h-6 bg-lightpink rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

<div className="w-6 h-6 bg-red rounded">

</div>










<div className="w-6 h-6 bg-green rounded">

</div>

<div className="w-6 h-6 bg-white rounded">

</div>
<div className="w-6 h-6 bg-pink rounded">

</div>
<div className="w-6 h-6 bg-yellow rounded">

</div>
<div className="w-6 h-6 bg-black rounded">

</div>




<div className="w-6 h-6 bg-gray rounded">

</div>


</div>
                </div>
                <div className="px-8  pb-8 w-full">
                  <h1 className="block text-white text-sm font-bold mb-1 mt-4">
                  Header
                  </h1>


<div className="flex  gap-4 ">

                  <div className="w-6 h-6 bg-red rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-green rounded">

                  </div>

                  <div className="w-6 h-6 bg-white rounded">

                  </div>
                  <div className="w-6 h-6 bg-pink rounded">

                  </div>
                  <div className="w-6 h-6 bg-yellow rounded">

                  </div>
                  <div className="w-6 h-6 bg-black rounded">

                  </div>




                  <div className="w-6 h-6 bg-gray rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

                  <div className="w-6 h-6 bg-blue-1 rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-lightgreen rounded">

                  </div>

                  <div className="w-6 h-6 bg-darkblak rounded">

                  </div>
                  <div className="w-6 h-6 bg-gray-1 rounded">

                  </div>
                  <div className="w-6 h-6 bg-greylight rounded">

                  </div>
                  <div className="w-6 h-6 bg-lightyellow rounded">

                  </div>




                  <div className="w-6 h-6 bg-lightpink rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

<div className="w-6 h-6 bg-red rounded">

</div>










<div className="w-6 h-6 bg-green rounded">

</div>

<div className="w-6 h-6 bg-white rounded">

</div>
<div className="w-6 h-6 bg-pink rounded">

</div>
<div className="w-6 h-6 bg-yellow rounded">

</div>
<div className="w-6 h-6 bg-black rounded">

</div>




<div className="w-6 h-6 bg-gray rounded">

</div>


</div>
                </div>

                <div className="px-8  pb-8 w-full">
                  <h1 className="block text-white text-sm font-bold mb-1 mt-4">
                  Sidebar
                  </h1>


<div className="flex  gap-4 ">

                  <div className="w-6 h-6 bg-red rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-green rounded">

                  </div>

                  <div className="w-6 h-6 bg-white rounded">

                  </div>
                  <div className="w-6 h-6 bg-pink rounded">

                  </div>
                  <div className="w-6 h-6 bg-yellow rounded">

                  </div>
                  <div className="w-6 h-6 bg-black rounded">

                  </div>




                  <div className="w-6 h-6 bg-gray rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

                  <div className="w-6 h-6 bg-blue-1 rounded">

                  </div>
                


 
                 
                  




                  <div className="w-6 h-6 bg-lightgreen rounded">

                  </div>

                  <div className="w-6 h-6 bg-darkblak rounded">

                  </div>
                  <div className="w-6 h-6 bg-gray-1 rounded">

                  </div>
                  <div className="w-6 h-6 bg-greylight rounded">

                  </div>
                  <div className="w-6 h-6 bg-lightyellow rounded">

                  </div>




                  <div className="w-6 h-6 bg-lightpink rounded">

                  </div>


                  </div>
                  <div className="flex  gap-4 mt-2">

<div className="w-6 h-6 bg-red rounded">

</div>










<div className="w-6 h-6 bg-green rounded">

</div>

<div className="w-6 h-6 bg-white rounded">

</div>
<div className="w-6 h-6 bg-pink rounded">

</div>
<div className="w-6 h-6 bg-yellow rounded">

</div>
<div className="w-6 h-6 bg-black rounded">

</div>




<div className="w-6 h-6 bg-gray rounded">

</div>


</div>
                </div>


<div className="px-8  pb-8 w-full">
  <p className="text-white">
  <sup className="text-red">*</sup><span className="text-red">Note :</span>
  This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check documentation.</p>
</div>


                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}


</div>
        </div>
      </div>

      {/* navbar end  */}

      {/* <Navbar/> */}
    </>
  );
};
