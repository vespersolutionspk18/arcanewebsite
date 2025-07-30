import React from "react";

const AboutPrinciples = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row text-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 gap-8 lg:gap-16 bg-black relative z-10">
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-6 lg:gap-4">
        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-2/3">
          <h5 className="font-mono text-lg lg:text-xl">PROFOUND INTEGRITY</h5>
          <p className="text-base lg:text-lg">
            The immutable core of our identity. We conduct all business with absolute transparency and unwavering ethics. This foundational principle guides every decision and transaction across all divisions.
          </p>
        </div>
        <h5 className="font-mono text-lg lg:text-xl">MASTERY IN EXECUTION</h5>
      </div>
      <p className="text-base lg:text-lg w-full lg:w-1/3">
        An obsession with perfection in every detail, from a complex trade settlement to the seamless function of an IoT device. We believe excellence is not an aspiration but a standard, demanding precision and expertise in every operation across our diverse portfolio.
      </p>
    </div>
  );                                                                                                                                                                    
};

export default AboutPrinciples;