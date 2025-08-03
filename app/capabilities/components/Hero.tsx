import React from 'react'

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-6 
    lg:gap-10 items-start pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-36 lg:pb-16 px-4 md:px-8 
    lg:px-16 bg-black relative z-10">
        <h5 className="w-full lg:w-1/3 font-mono text-white text-xl md:text-2xl">
          ABOUT US
        </h5>
        <h5 className="w-full lg:w-2/3 text-white text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
          This is the power of a truly integrated system. We are more than a holding company. We are a unified intelligence. Welcome to Arcane Holding—where complexity is clarified, and extraordinary value is unlocked.
        </h5>
          <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('assets/aboutus.jpeg')" }}>

          </div>
    </div>
  )
}

export default Hero