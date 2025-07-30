"use client";
import Button from '@/components/Button'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [leftDarkMode, setLeftDarkMode] = useState(false)
  const [centerDarkMode, setCenterDarkMode] = useState(false)
  const [rightDarkMode, setRightDarkMode] = useState(false)

  useEffect(() => {
    const detectPointBrightness = (x, y) => {
      try {
        // Get all elements at this point
        const elementsAtPoint = document.elementsFromPoint(x, y)
        
        for (const element of elementsAtPoint) {
          if (element.closest('[data-header]')) continue
          if (element === document.html || element === document.body) continue
          
          // For image elements, analyze the actual pixels
          if (element.tagName.toLowerCase() === 'img') {
            return analyzeImageBrightness(element)
          }
          
          // For elements with background images
          const style = window.getComputedStyle(element)
          const bgImage = style.backgroundImage
          
          if (bgImage && bgImage !== 'none') {
            // Try to analyze background image
            const imageUrl = bgImage.match(/url\(['"]?(.+?)['"]?\)/)?.[1]
            if (imageUrl) {
              const img = new Image()
              img.crossOrigin = 'anonymous'
              img.src = imageUrl
              if (img.complete) {
                return analyzeImageBrightness(img)
              }
            }
            // If we can't analyze the bg image, assume it's dark
            continue
          }
          
          // For solid background colors
          let backgroundColor = style.backgroundColor
          if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
            const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch.map(Number)
              const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
              return brightness > 128
            }
          }
        }
        
        // Fallback
        return false
        
      } catch (error) {
        return false
      }
    }
    
    const analyzeImageBrightness = (imgElement) => {
      try {
        // Check if image is loaded
        if (!imgElement.complete || imgElement.naturalWidth === 0) {
          return false
        }
        
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        // Use smaller sample for performance
        const sampleSize = 20
        canvas.width = sampleSize
        canvas.height = sampleSize
        
        // Draw the image to canvas
        ctx.drawImage(imgElement, 0, 0, sampleSize, sampleSize)
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize)
        const data = imageData.data
        
        let totalBrightness = 0
        let pixelCount = 0
        
        // Sample every pixel
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
          totalBrightness += brightness
          pixelCount++
        }
        
        const averageBrightness = totalBrightness / pixelCount
        return averageBrightness > 140 // Slightly higher threshold for images
        
      } catch (error) {
        return false
      }
    }
    
    const analyzeImageUrlBrightness = (imageUrl) => {
      try {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        
        return new Promise((resolve) => {
          img.onload = () => {
            try {
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              const sampleSize = 50
              
              canvas.width = sampleSize
              canvas.height = sampleSize
              
              ctx.drawImage(img, 0, 0, sampleSize, sampleSize)
              
              const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize)
              const data = imageData.data
              
              let totalBrightness = 0
              let pixelCount = 0
              
              for (let i = 0; i < data.length; i += 16) {
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]
                const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
                totalBrightness += brightness
                pixelCount++
              }
              
              const averageBrightness = totalBrightness / pixelCount
              resolve(averageBrightness > 128)
            } catch (error) {
              resolve(false)
            }
          }
          
          img.onerror = () => resolve(false)
          img.src = imageUrl
        })
        
      } catch (error) {
        return false
      }
    }

    const detectElementBrightness = (element) => {
      if (!element) return false
      
      const rect = element.getBoundingClientRect()
      const samplePoints = []
      
      // Create a grid of sample points within the element bounds
      const rows = Math.max(2, Math.floor(rect.height / 20))
      const cols = Math.max(3, Math.floor(rect.width / 30))
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = rect.left + (rect.width / cols) * (col + 0.5)
          const y = rect.top + (rect.height / rows) * (row + 0.5)
          samplePoints.push({ x, y })
        }
      }
      
      // Sample brightness at each point
      let lightPoints = 0
      let validPoints = 0
      
      samplePoints.forEach(point => {
        const isLight = detectPointBrightness(point.x, point.y)
        if (isLight) lightPoints++
        validPoints++
      })
      
      // Use majority vote: if more than half the points are on light background, use dark mode
      return validPoints > 0 ? (lightPoints / validPoints) > 0.5 : false
    }

    const detectBackgroundBrightness = () => {
      // Get actual element references
      const logoElement = document.querySelector('[data-header] [data-logo]')
      const navElement = document.querySelector('[data-header] [data-nav]')
      const buttonElement = document.querySelector('[data-header] [data-button]')
      
      // Detect brightness for each actual element
      try {
        const logoResult = detectElementBrightness(logoElement)
        const navResult = detectElementBrightness(navElement)
        const buttonResult = detectElementBrightness(buttonElement)
        
        setLeftDarkMode(logoResult)
        setCenterDarkMode(navResult)
        setRightDarkMode(buttonResult)
      } catch (error) {
        // Fallback to simple scroll-based detection
        const heroHeight = window.innerHeight
        const scrollY = window.scrollY
        const fallbackDark = scrollY > heroHeight
        setLeftDarkMode(fallbackDark)
        setCenterDarkMode(fallbackDark)
        setRightDarkMode(fallbackDark)
      }
    }

    const throttledDetect = (() => {
      let timeoutId
      return () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(detectBackgroundBrightness, 16) // ~60fps
      }
    })()

    // Initial detection
    detectBackgroundBrightness()
    
    window.addEventListener('scroll', throttledDetect)
    window.addEventListener('resize', throttledDetect)
    
    return () => {
      window.removeEventListener('scroll', throttledDetect)
      window.removeEventListener('resize', throttledDetect)
    }
  }, [])

  return (
    <div data-header className="fixed top-2 left-2 right-2 flex flex-row justify-between p-2 items-center rounded-md overflow-hidden" style={{
      zIndex: 9999,
      background: 'rgba(0,0,0,0.1)',
      backdropFilter: 'blur(4px) saturate(180%) contrast(120%)',
      WebkitBackdropFilter: 'blur(04px) saturate(180%) contrast(120%)',
      boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.1),
        inset 0 -1px 0 rgba(0,0,0,0.1),
        0 4px 12px rgba(0,0,0,0.15)
      `
    }}>
       <div data-logo className="w-1/5 transition-all duration-150 ease-out">
         <Image 
           src={leftDarkMode ? "/assets/arcaneb.svg" : "/assets/arcane.svg"} 
           alt="Arcane Holdings" 
           width={140} 
           height={100} 
         />
       </div>
        <div data-nav className={`w-3/5 flex flex-row gap-10 font-medium text-md justify-center transition-colors duration-150 ease-out ${centerDarkMode ? 'text-black' : 'text-white'}`}>
            <a className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
              Home
              
            </a>
            <a className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
              About
              
            </a>
            <a className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
              Sectors
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
              Subsidiaries
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a className={`cursor-pointer transition-colors duration-100 ease-out flex items-center gap-1 ${centerDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
              Careers
              
            </a>
        </div>
        <div data-button className="w-1/5 flex flex-row gap-3 justify-end transition-all duration-150 ease-out">
        <Button route="" text="GET IN TOUCH" variant={rightDarkMode ? "black" : "white"}/>
        </div>

    </div>
  )
}

export default Header