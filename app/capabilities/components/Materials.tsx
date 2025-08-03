import React from "react";

const Materials = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 px-4 gap-8 bg-black relative z-10">
      <div className="w-[70%] flex flex-col justify-between gap-6">
          <p className="text-base lg:text-lg">
            Materials
          </p>
          <h5 className="font-mono w-full text-7xl lg:text-7xl">
            Speciality Alloys
          </h5>
          <p className="text-lg">
            At Aerofast Solutions, we follow a meticulous manufacturing process to ensure the highest quality and
            precision of our aerospace fasteners. From design to production, we prioritize excellence in every step.
          </p>
      </div>

      <div className='flex flex-row justify-between gap-10'>
        <div className='flex flex-col w-1/3 gap-7'>
          <h5 className='font-sans text-2xl'>
            A6525
          </h5>
          <div className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
          </div>
          <p className='leading-tight font-sans text-lg text-justify'>
            This is an iron-based superalloy which
            features an austenitic structure with
            high amounts of nickel and chromium.
            A286 (or Incoloy) is ideal for high
            strength and corrosion resistance up to
            704°C and for lower stress applications
            at high temperatures.
          </p>
        </div>
        <div className='flex flex-col w-1/3 gap-7'>
          <h5 className='font-sans text-2xl'>
            A6525
          </h5>
          <div className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
          </div>
          <p className='leading-tight font-sans text-lg text-justify'>
            This is an iron-based superalloy which
            features an austenitic structure with
            high amounts of nickel and chromium.
            A286 (or Incoloy) is ideal for high
            strength and corrosion resistance up to
            704°C and for lower stress applications
            at high temperatures.
          </p>
        </div>
        <div className='flex flex-col w-1/3 gap-7'>
          <h5 className='font-sans text-2xl'>
            A6525
          </h5>
          <div className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>
          </div>
          <p className='leading-tight font-sans text-lg text-justify'>
            This is an iron-based superalloy which
            features an austenitic structure with
            high amounts of nickel and chromium.
            A286 (or Incoloy) is ideal for high
            strength and corrosion resistance up to
            704°C and for lower stress applications
            at high temperatures.
          </p>
        </div>


      </div>

    </div>
  );                                                                                                                                                                    
};

export default Materials;