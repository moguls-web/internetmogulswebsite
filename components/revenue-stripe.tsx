"use client"

import { useState, useEffect, useRef } from "react"

function RevenueCounter() {
  const [displayValue, setDisplayValue] = useState<string>("$0M")
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const targetValue = 500 // 500M
      const duration = 2500 // 2.5 seconds
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        const currentValue = Math.round(startValue + (targetValue - startValue) * easeOut)
        setDisplayValue(`$${currentValue}M`)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure final value is exact
          setDisplayValue("$500M")
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
  }, [hasAnimated])

  return (
    <span 
      ref={counterRef}
      className="font-serif text-4xl md:text-6xl lg:text-[7rem] font-normal text-primary-foreground leading-none"
    >
      {displayValue}
    </span>
  )
}

export function RevenueStripe() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-foreground" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />

      <div className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            {/* Left: Big Number */}
            <div className="flex items-baseline">
              <RevenueCounter />
              <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-accent leading-none">+</span>
            </div>

            {/* Right: Message */}
            <div className="flex flex-col gap-2 md:gap-3 md:border-l md:border-accent/30 md:pl-12">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight">
                Revenue Generated
                <br className="hidden md:block" /> for Hotels
              </h2>
              <p className="text-base md:text-lg text-accent font-medium tracking-wide">
                16 Years of Hospitality Excellence
              </p>
              {/* Categories inline */}
              <p className="text-sm md:text-base text-primary-foreground/60 uppercase tracking-[0.15em]">
                Rooms • Banquets • Events • Restaurants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
