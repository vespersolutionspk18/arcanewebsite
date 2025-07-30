import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="/assets/ourduty.jpeg"
        alt="About Arcane"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">ABOUT US: ARCANE HOLDING</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">DECODING COMPLEXITY, ENGINEERING VALUE</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">At Arcane Holding, we operate on a fundamentally different plane. We perceive the global market not as a collection of siloed industries, but as an intricate, interconnected system of opportunities waiting to be decoded.</h5>
        </div>
      </div>
    </div>
  )
}

export default AboutHero