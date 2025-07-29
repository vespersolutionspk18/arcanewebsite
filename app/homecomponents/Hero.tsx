import React from 'react'
import Header from '@/components/Header'

const Hero = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover scale-120 translate-x-8 -z-50"
        src="/assets/herobg.mp4"
        autoPlay 
        loop 
        muted
      />
     <div className="absolute inset-0 p-3 flex flex-col">
         <Header />
         <div className="flex-1 w-full flex flex-col justify-end px-16">
            <h1 className="text-8xl w-[40%] tracking-tighter">
                WE KEEP IT TOGETHER UNDER PRESSURE
            </h1>
            <div className="w-full flex flex-row justify-between mt-36 mb-10">
                <h5 className="text-xl text-white font-mono w-1/3">WE ARE THE LEADER IN MANUFACTURING FASTENERS FOR AEROSPACE APPLICATIONS</h5>
                <h5 className="text-xl text-white font-mono text-right w-1/6">PROUDLY MADE IN DETROIT, MICHIGAN</h5>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Hero