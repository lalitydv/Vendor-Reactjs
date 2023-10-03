import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

const Notfound = () => {
  return (
    <div>
      <div className="flex justify-center  items-center flex-col text-center h-screen">
        <div className=" text-center font-heading text-3xl ">404</div>
        <div className=" text-center font-subheading text-2xl ">NotFound</div>
        <div className=" text-center font-subheading text-2xl border-2 p-2 rounded-lg hover:text-white border-Primary hover:bg-Primary hover:border-white ">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
