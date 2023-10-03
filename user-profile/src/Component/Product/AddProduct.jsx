import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import uplodeimage from '../../Images/uplodeimage.png'
const AddProduct = () => {
  const editor = useRef(null);
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
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
                    <button className="bg-blue text-white md:px-6 rounded-xl py-2">
                      add New Product
                    </button>
                  </div>
                </div>

                {/* add product start  */}
                <div className="bg-white rounded-md w-72 md:w-full  overflow-hidden  shadow-md my-10 px-5 ">
                  <div className=" flex justify-center items-center gap-10 ">
                    <div className="shadow-md p-10  ">
                      <p className=" bg-blue text-white px-5">English</p> <br />
                      <p className=" border-2 border-blue text-blue px-5">
                        Hindi
                      </p>
                    </div>

                    <div className="">
                      <div>
                        <label htmlFor="">Name (EN)</label>
                        <br />
                        <input type="text" className="border-2 border-blue " />
                      </div>
                      <div>
                        <label htmlFor="">Description (EN)</label>
                        <br />
                        <JoditEditor
                          ref={editor}
                          style={{ width: 600, height: 400 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* add product end  */}
                {/* forms 1 General info Start  */}
                <div>
                  <div className="bg-gray rounded-md p-4">General info</div>

                  <form class="w-full bg ">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3 my-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Product Type
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-gray-200
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                        >
                          <option value="1">Product 1 </option>
                          <option value="2">Product 1 </option>
                          <option value="3">Product 1 </option>
                          <option value="4">Product 1 </option>
                        </select>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Category
                        </label>
                        <select
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="1">--select--</option>
                          <option value="2">Product 1 </option>
                          <option value="3">Product 1 </option>
                          <option value="4">Product 1 </option>
                        </select>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Sub Category
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="1">--select-- </option>
                          <option value="2">Product 1 </option>
                          <option value="3">Product 1 </option>
                          <option value="4">Product 1 </option>
                        </select>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 -mt-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Product Code Sku{" "}
                          <span className="text-red font-bold text-lg">*</span>{" "}
                          <span className="text-blue">Generate Code</span>
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="code...."
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Brand
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="1">--select-- </option>
                          <option value="2">Product 1 </option>
                          <option value="3">Product 1 </option>
                          <option value="4">Product 1 </option>
                        </select>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Sub Sub Category
                        </label>
                        <select
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="1">--select--</option>
                          <option value="2">Product 1 </option>
                          <option value="3">Product 1 </option>
                          <option value="4">Product 1 </option>
                        </select>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Unit
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="KG">KG</option>
                          <option value="KG">KG </option>
                          <option value="KG">KG </option>
                          <option value="KG">KG </option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                {/* forms 1 General info End  */}
                {/* forms 2 Variations info Start  */}
                <div>
                  <div className="bg-gray rounded-md p-4">Variations</div>

                  <form class="w-full bg ">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3 my-3">
                        <label class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center gap-5">
                          Colors :{" "}
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
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-gray-200
                           rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                        />
                      </div>
                      <div class="w-full px-3 my-3">
                        <label class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center gap-5">
                          Attributes :
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-gray-200
                           rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* forms 2 Variations info End  */}
                {/* forms 3 Product price & stock info Start  */}
                <div>
                  <div className="bg-gray rounded-md p-4">
                    Product price & stock
                  </div>

                  <form class="w-full bg ">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Unit price
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Unit price"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Purchase Price
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Purchase Price"
                        />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Tax Model
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-gray-200
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                        >
                          <option value="1">Include </option>
                          <option value="2">Include </option>
                          <option value="3">Include </option>
                          <option value="4">Include </option>
                        </select>
                      </div>

                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Discount Type
                        </label>
                        <select
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                        >
                          <option value="1">--select-- </option>
                          <option value="2">Flat </option>
                          <option value="3">Flat </option>
                          <option value="4">Flat </option>
                        </select>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Discount
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="0"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Total Quantity
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Minimum Order Quantity
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="1"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Shipping Cost
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Shipping Cost Multiply With Quantity
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Shipping Cost Multiply With Quantity"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Tax <span className="text-blue"> Percent ( % )</span>
                        </label>
                        <input
                          class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* forms 3 Product price & stock info End  */}
                {/* forms 4 Tags Start  */}
                <div>
                  <div className="bg-gray rounded-md p-4">Tags</div>

                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 my-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Search Tags
                      </label>
                      <input
                        class="block w-full bg-gray-200 text-blue border border-gray-200
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        placeholder="Search Tags"
                      />
                    </div>
                  </div>
                </div>
                {/* forms 4 Tags End  */}
                {/* forms 5 Seo section Start  */}
                <div>
                  <div className="bg-gray rounded-md p-4">Seo section</div>
                  <div class="flex flex-wrap -mx-3 mb-6 my-5">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Meta Title
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Meta Image
                      </label>
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
                       rounded-lg
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
                                 {/* <CloudArrowUpIcon className="w-20 h-20 text-blue " /> */}
                                 <img src={uplodeimage} alt=""  className="w-full h-80"/>
                                {/* Drag the file here or import the file */}
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Sub Category
                      </label>
                      <textbox
                        class="block w-full bg-gray-200 text-blue border border-red-500 
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-36"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>

                    <div class="w-full px-3 my-3">
                      <label class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center gap-5">
                        Youtube Video Link{" "}
                        <span className="text-blue">
                          ( Optional, Please provide embed link not direct link.
                          )
                        </span>
                      </label>
                      <input
                        class="block w-full bg-gray-200 text-blue border border-gray-200
                           rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        placeholder="Paste your link"
                      />
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 -mt-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Upload Product Images{" "}
                        <small className="text-red">* </small>{" "}
                        <span className="text-green">( Ratio 1:1 ) </span>
                      </label>
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
                       rounded-lg
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
                                {/* <CloudArrowUpIcon className="w-20 h-20 text-blue " /> */}
                                <img src={uplodeimage} alt=""  className="w-full h-80"/>
                                {/* Drag the file here or import the file */}
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 -mt-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Upload Thumbnail <small className="text-red">* </small>{" "}
                        <span className="text-green">( Ratio 1:1 ) </span>
                      </label>

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
                       rounded-lg
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
                                 {/* <CloudArrowUpIcon className="w-20 h-20 text-blue " /> */}
                                 <img src={uplodeimage} alt=""  className="w-full h-80"/>
                                {/* Drag the file here or import the file */}
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* forms 5 Seo section End  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
