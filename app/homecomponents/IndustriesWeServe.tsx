"use client";
import React, { useState } from 'react'
import Image from 'next/image'

const IndustriesWeServe = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const industries = [
    {
      id: 1,
      number: "01",
      title: "GLOBAL COMMODITY TRADING",
      image: "/assets/ourduty.jpeg",
      link: "/commodities-trading"
    },
    {
      id: 2,
      number: "02", 
      title: "STRATEGIC REAL ESTATE",
      image: "/assets/aboutus.jpg",
      link: "/real-estate"
    },
    {
      id: 3,
      number: "03",
      title: "PREMIER HOSPITALITY", 
      image: "/assets/aboutus.jpg",
      link: "/hospitality"
    },
    {
      id: 4,
      number: "04",
      title: "ADVANCED SOFTWARE SOLUTIONS",
      image: "/assets/aboutus.jpg", 
      link: "/software"
    },
    {
      id: 5,
      number: "05",
      title: "INTEGRATED HARDWARE TECHNOLOGIES",
      image: "/assets/aboutus.jpg", 
      link: "/hardware"
    },
    {
      id: 6,
      number: "06",
      title: "TOBACCO MANUFACTURING",
      image: "/assets/aboutus.jpg", 
      link: "/tobacco"
    }
  ]

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleClick = (link: string) => {
    window.location.href = link
  }

  return (
    <div className="flex flex-col w-full pb-8 md:pb-16 lg:pb-26 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
        <h5 className="font-mono text-xl md:text-2xl mb-6 lg:mb-10">OUR SIX PILLARS</h5>
        {industries.map((industry) => (
          <div 
            key={industry.id}
            className="flex flex-row border-b-[1px] items-center border-white w-full gap-4 md:gap-6 lg:gap-10 py-4 md:py-5 lg:py-7 cursor-pointer" 
            onMouseEnter={() => handleMouseEnter(industry.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(industry.link)}
          >
              <h5 className="font-mono text-xl md:text-2xl lg:text-3xl min-w-[3rem] md:min-w-[4rem]">{industry.number}</h5>
              <h5 className="font-sans text-lg md:text-2xl lg:text-4xl">{industry.title}</h5>
          </div>
        ))}
       
        {hoveredItem && (
          <div 
            className="fixed pointer-events-none z-[9999] hidden lg:block"
            style={{
              left: `${window.innerWidth * 0.55 + (mousePos.x * 0.3)}px`,
              top: `${mousePos.y - 100}px`,
              width: '500px',
            }}
          >
            <Image
              src={industries.find(industry => industry.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
              alt="Industry preview"
              width={500}
              height={375}
              className="shadow-lg"
            />
          </div>
        )}
    </div>
  )
}

export default IndustriesWeServe