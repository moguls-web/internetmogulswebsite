"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"

interface CounterProps {
  value: string
  label: string
}

function Counter({ value, label }: CounterProps) {
  // Parse the value to extract number and format
  const parseValue = (val: string) => {
    // Extract prefix (currency symbols, +, -), number, and suffix (%, x, +, etc.)
    const match = val.match(/([₹$€£+-]?)(\d+(?:\.\d+)?)([%x]?)(.*)/)
    if (!match) return { prefix: "", signPrefix: "", number: 0, suffix: "", extra: "" }
    
    const [, prefix, numStr, suffix, extra] = match
    const number = parseFloat(numStr)
    
    // Separate prefix from number (keep prefix separate for display)
    const isNegative = prefix === "-"
    const isPositive = prefix === "+"
    const currencyPrefix = prefix && !isNegative && !isPositive ? prefix : ""
    const signPrefix = isNegative ? "-" : (isPositive ? "+" : "")
    
    return {
      prefix: currencyPrefix,
      signPrefix: signPrefix,
      number: isNaN(number) ? 0 : number,
      suffix: suffix || "",
      extra: extra || ""
    }
  }

  // Get initial formatted value
  const getInitialValue = () => {
    const parsed = parseValue(value)
    const { prefix, signPrefix, suffix, extra } = parsed
    if (suffix === "x") {
      return "0.0x" + extra
    }
    return `${prefix}${signPrefix}0${suffix}${extra}`
  }

  const [displayValue, setDisplayValue] = useState<string>(() => getInitialValue())
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const parsed = parseValue(value)
      const { prefix, signPrefix, number, suffix, extra } = parsed
      
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
        
        const currentValue = startValue + (number - startValue) * easeOut
        
        // Format based on suffix
        let formatted: string
        if (suffix === "%") {
          formatted = `${prefix}${signPrefix}${Math.round(currentValue)}${suffix}${extra}`
        } else if (suffix === "x") {
          formatted = `${currentValue.toFixed(1)}${suffix}${extra}`
        } else {
          formatted = `${prefix}${signPrefix}${Math.round(currentValue)}${suffix}${extra}`
        }
        
        setDisplayValue(formatted)

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
    <div ref={counterRef}>
      <p className="font-serif text-4xl lg:text-5xl">{displayValue}</p>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  )
}

export function ResultsSection() {
  const stats = [
    { value: "+35%", label: "Direct Bookings" },
    { value: "₹800+", label: "RevPAR Increase" },
    { value: "2x", label: "Wedding & Banquet Leads" },
    { value: "-15%", label: "OTA Cost Reduction" },
  ]

  const [isPlaying, setIsPlaying] = useState(false)
  const videoUrl: string = "/im-video.mp4" // Add video URL here
  const videoType = "video" as "youtube" | "video" | "iframe"

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Real Results</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance">
              <em>Performance</em> that reflects on your balance sheet.
            </h2>
            {/* <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Your hotel's story deserves powerful storytelling and strategic delivery. Whether it's more room nights,
              higher restaurant footfall, or increased banquet bookings – we craft digital campaigns that convert.
            </p> */}

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <Counter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="relative aspect-square group cursor-pointer">
            <img 
              src="/luxury-hotel-reception-area-with-guests-checking-i.jpg" 
              alt="Hotel success" 
              className="w-full h-full object-cover" 
            />
            {videoUrl && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors z-10"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                {videoType === "youtube" ? (
                  <iframe
                    src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title="Hotel success"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : videoType === "iframe" ? (
                  <iframe
                    src={videoUrl}
                    title="Hotel success"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
