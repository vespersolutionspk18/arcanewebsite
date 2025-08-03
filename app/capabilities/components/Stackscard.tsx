import React from "react";

const Stackscard = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 px-4 gap-8 bg-black relative z-10">
      <p className="text-base lg:text-lg">MATERIAL WASTE RECYCLING</p>
      <div className="flex flex-cols gap-6">
        <div className='flex flex-row'>
            <p className="text-lg w-1/2">
          We currently capture and reuse 95% of our material scraps ensuring both an environmentally friendly as well as efficient process.
        </p>
            <div
          className="w-1/2 h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Stackscard;
