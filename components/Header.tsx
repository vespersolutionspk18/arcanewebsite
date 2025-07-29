import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row  justify-between p-2 items-center bg-stone-800 rounded-md border-[1.5px] border-stone-700">
       <div className="w-1/5">
         <Image src="/assets/arcane.svg" alt="Arcane Holdings" width={140} height={100} />
       </div>
        <div className="w-3/5 flex flex-row gap-10 text-white font-medium text-md justify-center">
            <a className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-1">
              Home
              
            </a>
            <a className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-1">
              About
              
            </a>
            <a className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-1">
              Sectors
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-1">
              Subsidiaries
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-1">
              Careers
              
            </a>
        </div>
        <div className="w-1/5 bg-red- flex flex-row gap-3 justify-end">
        {/*<Button route="" text="About" variant="black"/> */}
        <Button route="" text="GET IN TOUCH" variant="white"/>

        </div>

    </div>
  )
}

export default Header