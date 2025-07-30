
import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full p-4 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 lg:gap-10 items-center mt-[100vh] relative z-10">
       <div className="bg-blend-multiply bg-cover w-full lg:w-1/3 h-[300px] md:h-[400px] lg:h-[740px]" style={{
        backgroundImage: 'url(/assets/aboutus.jpg)',
       }}>
        

       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black">
       <h5 className="font-mono text-lg md:text-xl">ARCANE HOLDINGS</h5>
       <h5 className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        We are a diversified global enterprise built upon six strategic pillars: Global Commodity Trading, Strategic Real Estate, Premier Hospitality, Advanced Software Solutions, Integrated Hardware Technologies, and Tobacco Manufacturing. Our journey began in global trade, forging our precision and market intelligence. Today, we are an integrated ecosystem where divisions work synergistically to create value greater than the sum of their parts.
       </h5>
      <h5 className="font-mono text-lg md:text-xl hover:underline transition-all 300">LEARN MORE</h5>
       </div>
    </div>
  )
}

export default AboutUs