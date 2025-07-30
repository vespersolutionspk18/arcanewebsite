import React from 'react'
import Image from 'next/image'

const OurDuty = () => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/assets/ourduty.jpeg"
        alt="Our Duty"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  )
}

export default OurDuty
