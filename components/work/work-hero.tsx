"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface StatCounterProps {
  number: string
  label: string
}

function StatCounter({ number, label }: StatCounterProps) {
  const parseValue = (val: string) => {
    // Extract number and suffix (like "+")
    const match = val.match(/(\d+)(.*)/)
    if (!match) return { number: 0, suffix: "" }
    return { number: parseInt(match[1], 10), suffix: match[2] || "" }
  }

  const getInitialValue = () => {
    const parsed = parseValue(number)
    return `0${parsed.suffix}`
  }

  const [displayValue, setDisplayValue] = useState<string>(() => getInitialValue())
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const parsed = parseValue(number)
      const { number: targetNumber, suffix } = parsed
      
      if (targetNumber === 0) {
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
        
        const currentValue = Math.round(startValue + (targetNumber - startValue) * easeOut)
        setDisplayValue(`${currentValue}${suffix}`)

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
    <div ref={counterRef} className="text-center">
      <p className="font-serif text-4xl md:text-5xl lg:text-6xl mb-2">{displayValue}</p>
      <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50">{label}</p>
    </div>
  )
}

export function WorkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground text-primary-foreground">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/luxury-hotel-lobby-interior-dramatic-lighting.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-8"
        >
          Portfolio
        </motion.p>

        {/* Main headline - very large */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[70px] xl:text-[90px] leading-[0.9] tracking-tight mb-12"
        >
          <span className="block">Our Work</span>  
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/70 font-light leading-relaxed"
        >
          Crafting digital experiences for the world's most distinguished hotels and hospitality brands.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-10"
        >
          {[
            { number: "1900+", label: "Hotels Served" },
            { number: "500+", label: "Websites Built" },
            { number: "16+", label: "Years Experience" },
            { number: "50+", label: "Countries" },
          ].map((stat, i) => (
            <StatCounter key={i} number={stat.number} label={stat.label} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-px h-20 bg-gradient-to-b from-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
