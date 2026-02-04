"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Heart, Globe, Rocket, Users, Sparkles } from "lucide-react"

const values = [
  {
    icon: Globe,
    title: "Client Visits & Hotel Experiences",
    description: "Our teams regularly visit hotels for brainstorming, content creation, and on-ground strategy work — giving you real hospitality exposure and fresh inspiration.",
    color: "bg-[#4D9FFF]",
    lightBg: "bg-[#4D9FFF]/10",
  },
  {
    icon: Heart,
    title: "Enjoy the Perks",
    description: "From supportive teams to creative freedom — we make sure work feels rewarding, not routine.",
    color: "bg-[#FF6B6B]",
    lightBg: "bg-[#FF6B6B]/10",
  },
  {
    icon: Zap,
    title: "Flexible Lifestyle",
    description: "Work in a way that helps you perform at your best — with a culture built on trust, balance, and mutual respect.",
    color: "bg-[#FFB800]",
    lightBg: "bg-[#FFB800]/10",
  },
  {
    icon: Rocket,
    title: "Expert Training",
    description: "Learn from industry specialists, sharpen your craft, and stay ahead in the fast-moving world of hotel marketing.",
    color: "bg-[#4D9FFF]",
    lightBg: "bg-[#4D9FFF]/10",
  },
  {
    icon: Users,
    title: "Rejuvenate",
    description: "We believe in switching off too — so you return refreshed, energised, and ready to create your best work.",
    color: "bg-[#4D9FFF]",
    lightBg: "bg-[#4D9FFF]/10",
  },
  {
    icon: Sparkles,
    title: "Quality Holidays",
    description: "Take meaningful time off to recharge, explore, or spend time with the people who matter.",
    color: "bg-[#4D9FFF]",
    lightBg: "bg-[#4D9FFF]/10",
  },
]

export function CultureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="culture" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00C9A7] text-sm font-bold uppercase tracking-widest">AWARDS</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">We’re the only multi award winning <br /> Digital Agency in India.</h2>
           <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto mb-12 leading-relaxed">At Internet Moguls, we partner with hotels across the world to grow their brand, revenue, and digital presence. If you love hospitality, creativity, and building real impact — you’ll feel at home here.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 ${value.lightBg} border border-transparent rounded-3xl hover:border-[#1a1a1a]/10 hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
              >
                <value.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{value.title}</h3>
              <p className="text-[#1a1a1a]/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
