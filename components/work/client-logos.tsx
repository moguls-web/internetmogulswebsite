"use client"

import { motion } from "framer-motion"

const clients = [
  "Taj Hotels",
  "The Oberoi",
  "ITC Hotels",
  "The Leela",
  "Marriott",
  "Hyatt",
  "Radisson",
  "Accor",
  "Shangri-La",
  "Mandarin Oriental",
  "Four Seasons",
  "Ritz-Carlton",
]

export function ClientLogos() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Trusted By</p>
          <h2 className="font-serif text-3xl md:text-4xl">World-Class Hospitality Brands</h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-serif text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
