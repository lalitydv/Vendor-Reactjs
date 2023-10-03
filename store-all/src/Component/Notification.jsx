import React from 'react';
import { HiSearch } from 'react-icons/hi';
import front from '../Images/front.png';
import { BsThreeDots } from 'react-icons/bs';
import {
  AiFillFileText,
  AiFillSmile,
  AiOutlinePaperClip,
  AiOutlineSend,
} from 'react-icons/ai';
import img from '../Images/Group.png';
import mask from '../Images/Mask group (3).png';

const Notification = () => {
  return (
    <>
      <div className="flex flex-col md:mx-4 mx-2 gap-5">
        <div className="bg-white rounded-3xl md:p-4 p-8">
          <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
            <div className="lg:w-[70%] md:w-[100%] 2xl:w-screen ">
              <div className="mt-4">
                <div className="relative overflow-hidden  md:text-md  text-lg ">
                <div className="bg-white md:rounded-l-full w-72 md:w-full lg:w-max  2xl:w-full overflow-hidden  shadow-md">
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

                  <div className="mt-10">
                    <img src={front} alt=""  className='w-full'/>
                  </div>

                  <div className="py-10 md:flex flex-grow gap-1 w-full   rounded-xl  shadow-md p-2">
                    {/* left div start */}
                    <div className="grow bg-white p-4 rounded-lg">
                      <div className="flex gap-5 ">
                        <button className="border-2 text-blue border-gray rounded-md  px-14">
                          chat
                        </button>
                        <button className="border-2 border-gray rounded-md text-gray-1  px-4">
                          customer list
                        </button>
                      </div>
                      <div className=" ">
                        <form className="border-2 border-blue  md:rounded-2xl px-2  md:my-2 md:px-5 md:py-2">
                          <input
                            type="text"
                            placeholder="Search "
                            className=" text-black focus:outline-none"
                          />
                          <hisearch className=" inline-block     text-gray"></hisearch>
                        </form>
                      </div>
                      {/* chat start */}
                      <div className="flex  justify-between rounded-lg items-center border-2 border-green p-2">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
                            <p className="text-3xl font-bold text-white">A</p>
                          </div>
                          <div className="ml-2">
                            <p className="text-md text-darkblak font-bold">
                              neha sign
                            </p>
                            <div className="flex justify-center items-center">
                              <img src={img} alt="photo" className="mr-2" />
                              <span className="text-sm text-darkblak">
                                {' '}
                                photo
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col items-end">
                          <div>
                            <div className=" focus:outline-none">
                              <BsThreeDots className="text-darkblak" />{' '}
                            </div>
                            <div className="absolute w-[130px] h-fit z-[9999]  bg-white p-3 text-center text-darkblak text-sm">
                              <p className="p-2">profile</p>
                              <hr />
                              <p className="p-2">view chat</p>
                              <hr />
                              <p className="p-2">Mark as Read</p>
                              <hr />
                              <p className="p-2 text-clifford">delete</p>
                            </div>
                          </div>
                          <p>01:30 PM</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between rounded-lg items-center border-[1px] border-gray p-2">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
                            <p className="text-3xl font-bold text-white">A</p>
                          </div>
                          <div className="ml-2">
                            <p className="text-md text-darkblak font-bold">
                              neha sign
                            </p>
                            <div className="flex justify-center items-center">
                              <img src={img} alt="photo" className="mr-2" />
                              <span className="text-sm text-darkblak">
                                {' '}
                                photo
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col items-end">
                          <div>
                            <div className=" focus:outline-none">
                              {' '}
                              <BsThreeDots className="text-darkblak" />{' '}
                            </div>
                            <div className="absolute w-[130px] h-fit z-[9999] hidden  bg-white p-3 text-center text-darkblak text-sm">
                              <p className="p-2">profile</p>
                              <hr />
                              <p className="p-2">view chat</p>
                              <hr />
                              <p className="p-2">Mark as Read</p>
                              <hr />
                              <p className="p-2 text-clifford">delete</p>
                            </div>
                          </div>
                          <p>01:30 PM</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between rounded-lg items-center border-[1px] border-gray p-2">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
                            <p className="text-3xl font-bold text-white">A</p>
                          </div>
                          <div className="ml-2">
                            <p className="text-md text-darkblak font-bold">
                              neha sign
                            </p>
                            <div className="flex justify-center items-center">
                              <div>
                                <div className="focus:outline-none">
                                  {' '}
                                  <BsThreeDots className="text-darkblak" />{' '}
                                </div>
                                <div className="absolute w-[130px] h-fit z-[9999] hidden  bg-white p-3 text-center text-darkblak text-sm">
                                  <p className="p-2">profile</p>
                                  <hr />
                                  <p className="p-2">view chat</p>
                                  <hr />
                                  <p className="p-2">Mark as Read</p>
                                  <hr />
                                  <p className="p-2 text-clifford">delete</p>
                                </div>
                              </div>
                              <span className="text-darkblak text-sm">
                                {' '}
                                vedio
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col items-end">
                          <div>
                            <div className=" focus:outline-none">
                              {' '}
                              <BsThreeDots className="text-darkblak" />{' '}
                            </div>
                            <div className="absolute w-[130px] h-fit z-[9999] hidden  bg-white p-3 text-center text-darkblak text-sm">
                              <p className="p-2">profile</p>
                              <hr />
                              <p className="p-2">view chat</p>
                              <hr />
                              <p className="p-2">Mark as Read</p>
                              <hr />
                              <p className="p-2 text-clifford">delete</p>
                            </div>
                          </div>
                          <p>09:30 PM</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between rounded-lg items-center border-[1px] border-gray p-2">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
                            <p className="text-3xl font-bold text-white">A</p>
                          </div>
                          <div className="ml-2">
                            <p className="text-md text-darkblak font-bold">
                              neha sign
                            </p>
                            <div className="flex justify-center items-center">
                              <img src={img} alt="photo" className="mr-2" />
                              <span className="text-darkblak text-sm">
                                {' '}
                                photo
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col items-end">
                          <div>
                            <div className=" focus:outline-none">
                              {' '}
                              <BsThreeDots className="text-darkblak" />{' '}
                            </div>
                            <div className="absolute w-[130px] h-fit z-[9999] hidden  bg-white p-3 text-center text-darkblak text-sm">
                              <p className="p-2">profile</p>
                              <hr />
                              <p className="p-2">view chat</p>
                              <hr />
                              <p className="p-2">Mark as Read</p>
                              <hr />
                              <p className="p-2 text-clifford">delete</p>
                            </div>
                          </div>
                          <p>12:05 PM</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between rounded-lg items-center border-[1px] border-gray p-2">
                        <div className="flex justify-center items-center">
                          <div className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
                            <p className="text-3xl font-bold text-white">A</p>
                          </div>
                          <div className="ml-2">
                            <p className="text-md text-darkblak font-bold">
                              neha sign
                            </p>
                            <div className="flex justify-center items-center">
                              <img src={img} alt="photo" className="mr-2" />
                              <span className="text-darkblak text-sm">
                                {' '}
                                photo
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col items-end">
                          <div>
                            <div className=" focus:outline-none">
                              {' '}
                              <BsThreeDots className="text-darkblak" />{' '}
                            </div>
                            <div className="absolute w-[130px] h-fit z-[9999] hidden  bg-white p-3 text-center text-darkblak text-sm">
                              <p className="p-2">profile</p>
                              <hr />
                              <p className="p-2">view chat</p>
                              <hr />
                              <p className="p-2">Mark as Read</p>
                              <hr />
                              <p className="p-2 text-clifford">delete</p>
                            </div>
                          </div>
                          <p>yesterday</p>
                        </div>
                      </div>
                      {/* chat end */}
                    </div>
                    {/* left div end */}
                    {/* right div start */}
                    <div className="flex-grow">
                      <div className="flex h-screen flex-col bg-gray">
                        <div className="flex-grow overflow-y-auto">
                          <div className="flex flex-col space-y-2 p-4">
                            {/* Individual chat message */}
                            <div className="flex items-center self-end rounded-xl rounded-tr bg-lightgreen py-2 px-3 ">
                              <p>This is a sender message</p>
                            </div>
                            <div className="flex items-center self-start rounded-xl rounded-tl bg-white text-black py-3 px-4">
                              <div>
                                <div className="flex items-center">
                                  <div>
                                    <AiFillFileText />
                                  </div>
                                  <div className="ml-2 flex-col">
                                    <p className="text-[14px] m-0 p-0">
                                      filename
                                    </p>
                                    <p className="text-[12px] m-0 p-0">
                                      (546kb)
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-12 justify-between">
                                  <a
                                    href="/images/myw3schoolsimage.jpg"
                                    className="text-blue text-sm"
                                    download
                                  >
                                    download
                                  </a>
                                  <a href="#" className="text-blue text-sm">
                                    view
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center self-end rounded-xl rounded-tr  py-2  ">
                              <img src={mask} alt="img" />
                              {/* <p>This is a sender message</p> */}
                            </div>
                            <div className="flex items-center           self-start rounded-xl rounded-tl bg-white text-black py-3 px-4">
                              <p>This is a sender message</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative flex items-center p-4">
                          <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full rounded-3xl border  pl-16 py-2"
                          />
                          <div className="absolute flex gap-2 text-graylight left-8">
                            <AiFillSmile />
                            <AiOutlinePaperClip />
                          </div>
                          <div className="absolute flex items-center rounded-3xl mx-auto right-8 bg-gray-1 w-16 h-7">
                            <AiOutlineSend className="text-blue mx-auto" />
                          </div>
                          {/* <button class="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white">Send</button> */}
                        </div>
                      </div>
                    </div>
                    {/* right div end */}
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

export default Notification;
