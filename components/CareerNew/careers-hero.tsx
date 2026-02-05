"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"

function Counter({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

function DecimalCounter({ end, suffix = "", prefix = "", decimals = 1, duration = 2 }: { end: number; suffix?: string; prefix?: string; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(easeOutQuart * end)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

export function CareersHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#00C9A7]/10 via-[#FFB800]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4D9FFF]/10 rounded-full blur-3xl" />
 

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-24 mb-5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full mb-8">
            <Sparkles size={16} className="text-[#00C9A7]" />
            <span className="text-sm font-semibold text-[#00C9A7]">We're Hiring</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-[#1a1a1a] mb-8">
            Create. Grow.
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#4D9FFF] to-[#FF6B6B]">
                Inspire.
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join a team of passionate digital marketers transforming how hotels connect with travelers worldwide.
            <br />Your
            creativity. Our platform. Unlimited potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#openings"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#00C9A7] transition-all"
            >
              View Open Positions
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#life-at-im"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold rounded-full hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
            >
              Explore Our Culture
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#1a1a1a]/10 mt-auto bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "70+", label: "Team Members", color: "text-[#00C9A7]", type: "integer", amount: 70, suffix: "+" },
            { value: "1900+", label: "Hotels Served", color: "text-[#4D9FFF]", type: "integer", amount: 1900, suffix: "+" },
            { value: "16+", label: "Years Experience", color: "text-[#FF6B6B]", type: "integer", amount: 16, suffix: "+" },
            { value: "4.8★", label: "Glassdoor Rating", color: "text-[#FFB800]", type: "decimal", amount: 4.8, suffix: "★" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center p-4 bg-white rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.type === "integer" && <Counter end={stat.amount} suffix={stat.suffix} />}
                {stat.type === "decimal" && <DecimalCounter end={stat.amount} suffix={stat.suffix} decimals={1} />}
              </div>
              <div className="text-sm text-[#1a1a1a]/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
