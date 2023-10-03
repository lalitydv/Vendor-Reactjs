import React, { useState } from "react";

import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const BulkImport = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/add-product");
  }

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
          <div className="lg:w-[70%] md:w-[100%] ">
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

                {/* content start Bulk Import */}
                <div className="bg-gray p-5 text-bold">Bulk Import</div>

                <h1 className="font-bold text-2xl my-2 ">Instructions : </h1>

                <ol className="list-decimal">
                  <li>
                    1. Download the format file and fill it with proper data.
                  </li>
                  <li>
                    2. You can download the example file to understand how the
                    data must be filled.
                  </li>
                  <li>
                    3. Once you have downloaded and filled the format file
                    upload it in the form below and submit.
                  </li>
                  <li>
                    4. After uploading products you need to edit them and set
                    products images and choices.
                  </li>
                  <li>
                    5. You can get brand and category id from their list please
                    input the right ids.
                  </li>
                  <li>
                    6. You can upload your product images in product folder from
                    gallery and copy image`s path.
                  </li>
                </ol>

                {/* Import Products File */}

                <div>
                  <div className="text-center font-bold text-2xl my-5 ">
                    Import Products File{" "}
                    <span className="text-blue"> Download Formate</span>
                  </div>

                  <div className="max-w-screen-md mx-auto">
                  <div className="mt-10 mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="imageInput"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="imageInput"
                      className="cursor-pointer inline-block w-full h-96
                       bg-gray-200  border-gray-300 flex items-center justify-center
                       border-4 border-dotted border-violet-100 hover:border-violet-500
                       "
                    >
                      {image ? (
                        <img
                          src={image}
                          alt="Uploaded"
                          className="w-full h-96 object-cover"
                        />
                      ) : (
                        <span className="text-gray-600 text-sm flex justify-center items-center flex-col">
                            <CloudArrowUpIcon className="w-20 h-20 text-blue " />
                          Drag the file here or import the file
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                </div>

                <div className="flex items-center justify-center gap-10 my-10 ">
                  <div>
                    <button className="p-2 rounded-md bg-gray text-black">
                      Reset
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button className="p-2 rounded-md bg-blue text-white">
                      Submit
                    </button>
                  </div>
                </div>
                {/* --------------- */}
             

                {/* Import Products File */}

                {/* content end Bulk Import */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkImport;
