"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

export function TestimonialsHero() {
  return (
    <section className="relative lg:min-h[100vh] min-h-[400px] flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
           
        </motion.div>

        {/* Main content */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#B87C4C] text-[#B87C4C]" />
              ))}
            </div>
            <span className="text-sm tracking-widest uppercase text-neutral-500">4.5 out of 5 from 500+ Reviews</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl lg:text-[70px] leading-[0.9] tracking-tight text-black mb-8"
          >
            What Our
            <br />
            <span className="italic">Partners</span> Say
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed mb-12"
          >
            1900+ Hotels. 16+ Years. Countless Success Stories.
            <br />
            Hear directly from the hoteliers who transformed their business with us.
          </motion.p>

          {/* Stats row */}
           
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 origin-left"
      />
    </section>
  )
}
