"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Laptop,
  Plane,
  GraduationCap,
  HeartPulse,
  Coffee,
  Clock,
  Wallet,
  PartyPopper,
  Home,
  Dumbbell,
  Baby,
  Gift,
} from "lucide-react"

const perksCategories = [
  {
    category: "Growth & Learning",
    gradient: "from-teal-400 to-emerald-500",
    bgLight: "bg-teal-50",
    perks: [
      { icon: Laptop, title: "Continuous Learning", description: "Access to training, mentorship & industry exposure." },
      { icon: GraduationCap, title: "Real Responsibility", description: "Work on meaningful hotel brands from Day 1." },
    ],
  },
  {
    category: "Health & Well-Being",
    gradient: "from-rose-400 to-orange-400",
    bgLight: "bg-rose-50",
    perks: [
      { icon: HeartPulse, title: "Supportive Environment", description: "A culture that encourages balance & respect." },
      { icon: Dumbbell, title: "People-First Mindset", description: "Work with leaders who care about your growth." },
    ],
  },
  {
    category: "Work-Life Balance",
    gradient: "from-blue-400 to-indigo-500",
    bgLight: "bg-blue-50",
    perks: [
      { icon: Clock, title: "Flexible Approach", description: "Modern, collaborative way of working." },
      { icon: Home, title: "Trust-Driven Culture", description: "We focus on outcomes — not time sheets." },
    ],
  },
  {
    category: "Rewards & Recognition",
    gradient: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    perks: [
      { icon: Wallet, title: "Competitive Compensation", description: "Fair salaries with performance-based growth." },
      { icon: Gift, title: "Recognition Programs", description: "Your work gets noticed. And appreciated." },
    ],
  }, 
]

const additionalPerks = [
  {
    icon: Plane,
    title: "Travel Perks",
    description: "Exclusive exposure to hotel stays and industry experiences as part of our work with hospitality brands.",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    icon: Coffee,
    title: "Stocked Pantry",
    description: "Enjoy a friendly workplace with tea, coffee and light refreshments to keep you energised through the day.",
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
  },
  {
    icon: PartyPopper,
    title: "Team Events",
    description: "We love coming together — whether it’s small celebrations, knowledge sessions or team gatherings.",
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
  }, 
]

export function PerksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Gift size={16} />
            Why Join Us
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Perks That Truly {" "}
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Matter
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          We believe great work happens when good people feel supported and valued.
          </p>
        </motion.div>

        {/* Category Cards - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {perksCategories.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${category.bgLight} rounded-3xl p-8 border border-white shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300`}
            >
              <div
                className={`inline-flex bg-gradient-to-r ${category.gradient} text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}
              >
                {category.category}
              </div>
              <div className="space-y-6">
                {category.perks.map((perk, j) => (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.1 + 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <perk.icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{perk.title}</h3>
                      <p className="text-slate-600">{perk.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks - Horizontal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {additionalPerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div
                className={`w-14 h-14 ${perk.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300`}
              >
                <perk.icon size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{perk.title}</h3>
              <p className="text-slate-500 text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4"><strong className="text-slate-900 text-1xl" >…And More</strong> <br/ >As we grow, so do the opportunities and benefits for our team.</p>
          <motion.a
            href="#positions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-shadow"
          >
            Explore Open Positions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
