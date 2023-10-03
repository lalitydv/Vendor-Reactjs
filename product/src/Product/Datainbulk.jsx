import React, { useState } from 'react';

import { HiSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const Datainbulk = () => {
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate('/add-product');
  // }

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col md:mx-4 mx-2 gap-5">
      <div className=" rounded-3xl md:p-4 p-8">
        <div className="flex lg:flex-nowrap gap-4 flex-wrap box-border">
          <div className="lg:w-[70%] md:w-[100%] 2xl:w-screen ">
            <div className="mt-4">
              <div className="relative overflow-hidden  md:text-md  text-lg">
                <div className="bg-white md:rounded-full w-72 md:w-full  overflow-hidden  shadow-md my-2 px-5">
                  <div className="md:flex md:justify-between  grid md:gap-10 gap-4 items-center ">
                    <div className="md:pl-4 ">overview</div>
                    <div className="flex items-center">
                      <label
                        for="countries"
                        class="block  text-sm font-medium text-gray-1 "
                      >
                        Show
                      </label>
                      <select
                        id="countries"
                        class="  text-blue text-sm font-bold  mx-2  "
                      >
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
                          className=" text-black focus:outline-none"
                        />
                        <HiSearch className=" inline-block     text-gray" />
                      </form>
                    </div>
                    <button
                      className="bg-blue text-white md:px-6 rounded-xl py-2"
                      // onClick={handleClick}
                    >
                      add New Product
                    </button>
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

export default Datainbulk;
