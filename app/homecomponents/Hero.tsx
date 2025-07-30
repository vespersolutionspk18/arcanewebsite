import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover lg:scale-120 lg:translate-x-8 scale-110 translate-x-0 z-0"
        src="/assets/herobg.mp4"
        autoPlay 
        loop 
        muted
      />
     <div className="absolute inset-0 p-3 flex flex-col z-10">
         <div className="flex-1 w-full flex flex-col justify-end px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-6xl lg:text-8xl w-full lg:w-[40%] tracking-tighter mb-8 lg:mb-0">
                WHERE OPPORTUNITY MEETS INTELLIGENCE
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-between mt-8 lg:mt-36 mb-10 gap-6 lg:gap-0">
                <h5 className="text-sm md:text-lg lg:text-xl text-white font-mono w-full lg:w-1/3">A DIVERSIFIED GLOBAL ENTERPRISE ACROSS COMMODITY TRADING, REAL ESTATE, HOSPITALITY, TECHNOLOGY, AND TOBACCO MANUFACTURING</h5>
                <h5 className="text-sm md:text-lg lg:text-xl text-white font-mono lg:text-right w-full lg:w-1/6">INTEGRATED. STRATEGIC. ARCANE.</h5>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Hero