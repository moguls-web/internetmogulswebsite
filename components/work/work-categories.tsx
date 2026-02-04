"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  { name: "Websites", count: "500+", href: "#websites" },
  { name: "Social Media", count: "10K+", href: "#social" },
  { name: "Offline Creatives", count: "2K+", href: "#offline" },
  { name: "Reels & Videos", count: "800+", href: "#reels" },
]

export function WorkCategories() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section intro */}
        <div className="max-w-4xl mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">What We Create</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            From <em>stunning websites</em> to scroll-stopping content—we bring your brand to life.
          </h2>
        </div>

        {/* Category links - large typography */}
        <div className="border-t border-border">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={category.href}
                className="group flex items-center justify-between py-8 md:py-12 border-b border-border hover:bg-secondary/30 transition-colors px-4 -mx-4"
              >
                <span className="font-serif text-4xl md:text-6xl lg:text-5xl group-hover:italic transition-all duration-300">
                  {category.name}
                </span>
                <div className="flex items-center gap-8">
                  <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                    {category.count} Projects
                  </span>
                  <motion.span className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
