import React from "react";
import Image from "next/image";
const OurTeam = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-col gap-6 
    lg:gap-10 items-start pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-36 lg:pb-16 px-4 md:px-8 
    lg:px-16 bg-black relative z-10"
    >
      <h5 className="w-full lg:w-1/3 font-mono text-white text-xl md:text-2xl">
        OUR TEAM
      </h5>
      <h5 className="w-full lg:w-2/3 text-white text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        TALENTED INDIVIDUALS BEHIND __ SOLUCHANS
      </h5>

      <div className="flex flex-row justify-between gap-5 w-full">
        <div className="w-1/3 font-mono text-white text-xl md:text-2xl">
          LEADERSHIP
        </div>
        <div className="flex flex-col gap-7 w-2/3">
          <div className="flex flex-row gap-5">
            <div className="w-1/2 flex flex-col">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
              </div>
              <h5 className='font-mono mt-5 text-white text-xl md:text-2xl'>
                Jill Khan
              </h5>
              <p className='font-sans text-white text-xl'>
                CEO
              </p>
            </div>
            <div className="w-1/2 flex flex-col ">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
              </div>
              <h5 className='font-mono mt-5 text-white text-xl md:text-2xl'>
                Jill Khan
              </h5>
              <p className='font-sans text-white text-xl'>
                CEO
              </p>
            </div>

            

          </div>
          <div className="flex flex-row gap-5">
            <div className="w-1/2 flex flex-col">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
              </div>
              <h5 className='font-mono mt-5 text-white text-xl md:text-2xl'>
                Jill Khan
              </h5>
              <p className='font-sans text-white text-xl'>
                CEO
              </p>
            </div>
            <div className="w-1/2 flex flex-col ">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
              </div>
              <h5 className='font-mono mt-5 text-white text-xl md:text-2xl'>
                Jill Khan
              </h5>
              <p className='font-sans text-white text-xl'>
                CEO
              </p>
            </div>

            

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
