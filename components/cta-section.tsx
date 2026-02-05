"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface StatCounterProps {
  value: string
  label: string
}

function StatCounter({ value, label }: StatCounterProps) {
  const parseValue = (val: string) => {
    // Extract number and suffix (like "+")
    const match = val.match(/(\d+)(.*)/)
    if (!match) return { number: 0, suffix: "" }
    return { number: parseInt(match[1], 10), suffix: match[2] || "" }
  }

  const getInitialValue = () => {
    const parsed = parseValue(value)
    return `0${parsed.suffix}`
  }

  const [displayValue, setDisplayValue] = useState<string>(() => getInitialValue())
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const parsed = parseValue(value)
      const { number, suffix } = parsed
      
      if (number === 0) {
        setDisplayValue(value)
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
        
        const currentValue = Math.round(startValue + (number - startValue) * easeOut)
        setDisplayValue(`${currentValue}${suffix}`)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure final value is exact
          setDisplayValue(value)
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
  }, [hasAnimated, value])

  return (
    <div ref={counterRef} className="text-center">
      <p className="font-serif text-4xl lg:text-6xl text-background mb-2.5">{displayValue}</p>
      <p className="text-background/60 text-xs uppercase tracking-widest mt-1">{label}</p>
    </div>
  )
}

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="absolute inset-0">
        <img
          src="/RB-Windsor-Castle.jpg?height=800&width=1920"
          alt="Hotel rooftop view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-background/60 text-sm tracking-widest uppercase mb-6">Let’s Work Together</p>
          <h2 className="font-serif text-4xl lg:text-6xl text-background leading-tight mb-6 text-balance">
          Ready to scale your hotel <em>revenue </em>  ?
          </h2>
          <p className="text-background/80 text-lg mb-10">
                This is a 45-minute revenue decoding session for decision-makers only.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/Reach_Us/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm tracking-wide hover:bg-background/90 transition-colors"
            >
              This is not a sales call.
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/Reach_Us/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-background/30 text-background text-sm tracking-wide hover:bg-background/10 transition-colors"
            >
              Book Your Strategy Call
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-background/20">
            <StatCounter value="16+" label="Years" />
            <StatCounter value="1900+" label="Hotels" />
            <StatCounter value="90" label="Days to Results" />
          </div>
        </div>
      </div>
    </section>
  )
}
