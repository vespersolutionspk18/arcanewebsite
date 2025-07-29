
import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full p-16 bg-white flex flex-row gap-10 items-center mt-[100vh] relative z-10">
       <div className="bg-blend-multiply bg-cover w-1/3 h-[740px]" style={{
        backgroundImage: 'url(/assets/aboutus.jpg)',
       }}>
        

       </div>
       <div className="w-2/3 flex flex-col gap-8 text-black">
       <h5 className="font-mono text-xl">ARCANE HOLDINGS</h5>
       <h5 className="text-4xl font-sans tracking-tighter">
        We are leading the way in fasteners for Aerospace and Defense
Application. Aerofast Solutions, specializes in manufacturing
high-quality fasteners using premium allows made to withstand
extreme conditions. With our expertise, commitment to
excellence, and optimized process, we deliver reliable solutions
that meet the rigorous demands of the industry.
       </h5>
      <h5 className="font-mono text-xl hover:underline transition-all 300">LEARN MORE</h5>
       </div>
    </div>
  )
}

export default AboutUs