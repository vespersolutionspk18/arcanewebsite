import React from 'react'

const Commitment = () => {
  return (
     <div className='w-screen relative'>
            <div className="w-full h-[640] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/ourduty.jpeg')" }}>
          </div>
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
           <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
             <h4 className="font-mono text-white text-xl md:text-2xl pt-50">21ST CENTURY MANUFACTURERS</h4>
             <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
               <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">Our Commitment to Cleaner, More Sustainable Manufacturing</h3>
               <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">
               We recognize the global impact that the manufacturing industry 
               has had on our environment. As a leader in our field we seek 
               to set the example by employing ethical processes and giving 
               back to our communities.
               </h5>
             </div>
             
           </div>
         </div>
  )
}

export default Commitment
