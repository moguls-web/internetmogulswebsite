"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const websites = [
  {
    id: 1,
    name: "7 Apple Hotels",
    type: "Booking Engine & Corporate Website ",
    image: "/luxury-hotel-website-mockup-taj-mahal-palace.jpg",
    mockup: "/website-7apple.jpg",
  },
  {
    id: 2,
    name: "Gobindgarh Jaisalmer",
    type: "Content Creation & Web Design",
    image: "/luxury-hotel-website-mockup-modern-palace.jpg",
    mockup: "/hotel-website-mobile-and-desktop-mockup.jpg",
  },
  {
    id: 3,
    name: "The Gauri Hotels And Resorts",
    type: "Luxury Resort Website",
    image: "/luxury-hotel-chain-website-mockup-premium.jpg",
    mockup: "/corporate-hotel-website-responsive-design.jpg",
  },
  {
    id: 4,
    name: "Royal Orchid Hotels",
    type: "Corporate Website",
    image: "/wellness-spa-resort-website-mockup-himalaya.jpg",
    mockup: "/spa-booking-website-elegant-design.jpg",
  },
  {
    id: 5,
    name: "Suba Hotels",
    type: "Destination Website",
    image: "/mountain-resort-website-mockup-luxury.jpg",
    mockup: "/resort-destination-website-showcase.jpg",
  },
  {
    id: 6,
    name: "Tip Top Hotel",
    type: "International Hotel Website",
    image: "/placeholder.svg?height=800&width=1200",
    mockup: "/spa-booking-website-elegant-design-1.jpg",
  },
]

export function WebsiteShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="websites" className="py-24 md:py-40 bg-foreground text-primary-foreground overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">
              01 — Website Development
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-none">
              Digital
              <br />
              <span className="italic font-light">Experiences</span>
            </h2>
          </div>
          <p className="max-w-lg text-primary-foreground/60 text-lg lg:text-xl leading-relaxed">
            We craft bespoke websites that capture your hotel's essence—seamless booking journeys, stunning visuals, and
            experiences that convert.
          </p>
        </div>

        {/* Website showcase - horizontal scroll */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {websites.map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-start group cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
              >
                {/* Browser mockup */}
                <div className="relative bg-[#1a1a1a] rounded-t-lg overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-[#1a1a1a] rounded-md px-4 py-1.5 text-xs text-primary-foreground/40 text-center">
                        www.{site.name.toLowerCase().replace(/\s/g, "")}.com
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={site.mockup}
                      alt={site.name}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl group-hover:italic transition-all duration-300">
                      {site.name}
                    </h3>
                    <p className="text-primary-foreground/50 mt-1">{site.type}</p>
                  </div>
                  <span className="text-sm tracking-[0.2em] text-primary-foreground/40">0{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex gap-2 mt-8">
            {websites.map((_, i) => (
              <div
                key={i}
                className={`h-px transition-all duration-500 ${
                  i === activeIndex ? "w-12 bg-primary-foreground" : "w-6 bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
