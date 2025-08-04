
import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full p-4 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 lg:gap-10 items-center mt-[100vh] relative z-10">
       <div className="bg-blend-multiply bg-cover w-full lg:w-1/3 h-[300px] md:h-[400px] lg:h-[880px]" style={{
        backgroundImage: 'url(/assets/about.jpeg)',
       }}>
        

       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black">
       <h5 className="font-mono text-lg md:text-xl">WELCOME TO ARCANE HOLDINGS</h5>
       <h5 className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        Arcane Holdings is a diversified business group built on a foundation of global vision, strategic partnerships, and operational excellence. What began as a focused commodity trading venture has grown into a dynamic conglomerate spanning multiple sectors; including international commodity trading, hotel ownership and real estate development, software and technology services, government infrastructure solutions, and tobacco manufacturing.

<br></br><br></br>With partners and operations extending across the USA, China, Pakistan, and the UAE, Arcane Holdings brings together a wealth of expertise and cross-border collaboration. Our strength lies in our ability to identify high-impact opportunities, execute with precision, and build sustainable businesses that deliver value across industries and regions.
       </h5>
      <h5 className="font-mono text-lg md:text-xl hover:underline transition-all 300">LEARN MORE</h5>
       </div>
    </div>
  )
}

export default AboutUs