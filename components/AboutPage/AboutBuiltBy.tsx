"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutBuiltBy() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Built by hoteliers. <em className="font-normal">Trusted</em> by hotels.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Internet Moguls is a hospitality-only digital marketing agency helping hotels grow direct revenue, strengthen brand presence, and convert more guests online. Since 2009, we've partnered with boutique hotels, luxury resorts, and leading chains — delivering measurable results through websites, SEO, social media, ads, revenue management, and AI-powered solutions.
              </p>
              <p className="font-medium text-foreground">
                We think like hoteliers — because we are hoteliers.
              </p>
              <p>
                So every strategy is built around occupancy, banquet revenue, guest experience, and profitability — not vanity metrics.
              </p>
              <p>
                Today, our 100+ member team supports 500+ hotels across India and beyond, with one clear mission:
              </p>
              <p className="font-medium text-foreground italic">
                turn visibility into bookings — and bookings into long-term growth.
              </p>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
              <Image
                src="/office-team.jpg"
                alt="Internet Moguls - Built by hoteliers"
                fill
                className="object-cover object-right"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

