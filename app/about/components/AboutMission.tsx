import React from 'react'

const AboutMission = () => {
  return (
    <div className="w-full p-4 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 lg:gap-10 items-center relative z-10">
       <div className="bg-blend-multiply bg-cover w-full lg:w-1/3 h-[300px] md:h-[400px] lg:h-[740px]" style={{
        backgroundImage: 'url(/assets/aboutus.jpg)',
       }}>
       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black">
       <h5 className="font-mono text-lg md:text-xl">OUR STRATEGIC FRAMEWORK</h5>
       <h5 className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        OUR MISSION: To identify, acquire, and cultivate high-potential enterprises across our six core sectors. We are relentlessly driven to achieve superior, sustainable returns through masterful strategic integration and an unwavering commitment to operational excellence.
       </h5>
       <h5 className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        OUR VISION: To be the world&apos;s preeminent holding group, renowned for our arcane ability to orchestrate a diverse portfolio into a unified, formidable engine of growth, innovation, and value.
       </h5>
       </div>
    </div>
  )
}

export default AboutMission