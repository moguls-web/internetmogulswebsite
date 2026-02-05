"use client"

import { motion } from "framer-motion"

const offlineItems = [
  {
    id: 1,
    title: "Brand Collateral",
    description: "Business cards, letterheads, envelopes, and stationery that make a lasting impression.",
    image: "/Brand-Collateral.jpg?height=700&width=900",
  },
  {
    id: 2,
    title: "Brochures & Menus",
    description: "Beautifully designed print materials that guests treasure and keep.",
    image: "/BrochuresMenus.jpg?height=700&width=900",
  },
  {
    id: 3,
    title: "Signage & Wayfinding",
    description: "Environmental graphics that guide guests while reinforcing your brand identity.",
    image: "/SignageWayfinding.jpg?height=700&width=900",
  },
  {
    id: 4,
    title: "Event Collateral",
    description: "Wedding kits, conference materials, and special occasion designs.",
    image: "/Event-Collateral.jpg?height=700&width=900",
  },
]

export function OfflineCreatives() {
  return (
    <section id="offline" className="py-24 md:py-40 bg-secondary/30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">03 — Offline Creatives</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-none max-w-4xl">
            Tangible
            <br />
            <span className="italic font-light">Elegance</span>
          </h2>
        </div>

        {/* Alternating layout */}
        <div className="space-y-24 md:space-y-40">
          {offlineItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-sm tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
