"use client"

import { motion, useInView } from "framer-motion"
import { Bot, Brain, TrendingUp, Zap, LineChart, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
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
      {count}{suffix}
    </span>
  )
}

function TextCounter({ text }: { text: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  )
}

export function AISection() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Revenue Optimization",
      description:
        "Our proprietary algorithms analyze market trends, competitor pricing, and demand patterns to maximize your hotel's revenue potential in real-time.",
    },
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description:
        "24/7 AI concierge that handles guest inquiries, booking assistance, and personalized recommendations - reducing staff workload while improving guest satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Forecast demand, identify booking patterns, and anticipate market shifts before they happen with machine learning-driven insights.",
    },
    {
      icon: Zap,
      title: "Automated Campaign Management",
      description:
        "AI-driven ad optimization that automatically adjusts bids, targeting, and creative elements to maximize ROI across all digital channels.",
    },
    {
      icon: LineChart,
      title: "Dynamic Pricing Engine",
      description:
        "Real-time rate adjustments based on occupancy, events, weather, and competitor analysis to ensure optimal pricing at every moment.",
    },
    {
      icon: Target,
      title: "Guest Personalization",
      description:
        "Deliver hyper-personalized experiences using AI that learns guest preferences, behavior, and booking history to drive loyalty and repeat bookings.",
    },
  ]

  return (
    <section id="ai" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <div>
            <p className="text-sm tracking-widest uppercase text-background/60 mb-4">Artificial Intelligence</p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight">
            The future of <em>hotel marketing</em> runs 24×7
            </h2> 
          </div>
          <div className="lg:pt-8">
           
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-foreground p-8 lg:p-10 group"
            >
              <feature.icon className="w-8 h-8 mb-6 text-background/60 group-hover:text-background transition-colors" />
              <h3 className="font-serif text-xl lg:text-2xl mb-4">{feature.title}</h3>
              <p className="text-background/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="border border-background/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-5xl lg:text-6xl mb-2">
              <Counter end={40} suffix="%" />
            </p>
            <p className="text-sm tracking-widest uppercase text-background/60">Avg Revenue Increase</p>
          </motion.div>
          <motion.div 
            className="border border-background/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-5xl lg:text-6xl mb-2">
              <Counter end={60} suffix="%" />
            </p>
            <p className="text-sm tracking-widest uppercase text-background/60">Reduction in Manual Tasks </p>
          </motion.div>
          <motion.div 
            className="border border-background/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-5xl lg:text-6xl mb-2">
              <TextCounter text="24/7" />
            </p>
            <p className="text-sm tracking-widest uppercase text-background/60">Operations</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
