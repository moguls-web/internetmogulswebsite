"use client"

import React, { useState, useEffect, useRef } from 'react'

interface StatCounterProps {
  number: string
  label: string
}

function StatCounter({ number, label }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const targetValue = parseInt(number, 10)
      
      if (isNaN(targetValue) || targetValue === 0) {
        setDisplayValue(number)
        return
      }

      const duration = 2000 // 2 seconds
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        const currentValue = Math.round(startValue + (targetValue - startValue) * easeOut)
        setDisplayValue(currentValue.toString())

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure final value is exact
          setDisplayValue(number)
        }
      }

      requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated, number])

  return (
    <div ref={counterRef} className='text-center border-2 border-white py-5 px-10'>
      <div className='text-5xl lg:text-6xl font-bold text-white mb-3'>
        {displayValue}
      </div>
      <p className='text-white/90 text-sm lg:text-base leading-relaxed'>
        {label}
      </p>
    </div>
  )
}

const AboutStats = () => {
  const stats = [
    {
      number: '300',
      label: 'Campaign ROI (top performers)'
    },
    {
      number: '1900',
      label: 'Hotels Transformed Across India & SEA'
    },
    {
      number: '90',
      label: 'Days to Measurable Outcomes'
    },
    {
      number: '2009',
      label: 'Industry Leadership Since'
    }
  ]

  return (
    <div className='relative w-full py-24 lg:py-32 overflow-hidden'>
      {/* Background Image with Blur */}
      <div 
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: 'url(/modern-office-in-vancouver-with-mountain-and-harbo.jpg)',
          filter: 'blur(4px) brightness(0.3)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Top Section - Heading and Tagline */}
        <div className='mb-16 lg:mb-20'>
          <p className='text-sm tracking-widest uppercase mb-4' style={{ color: '#fff' }}>
            // ABOUT
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
            16 Years. 1900+ Hotels. 90 Days to Results.
          </h2>
          <p className='text-lg lg:text-xl text-white/90 max-w-3xl'>
            We're not just a marketing agency – we're a hospitality growth partner.
          </p>
        </div>

        {/* Bottom Section - Statistics */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {stats.map((stat, index) => (
            <StatCounter key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutStats

