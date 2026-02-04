"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const badges = [
  {
    name: "Best Digital Marketing Agency for Hospitality India Travel Awards	2023",
    image: "/IMG_0327.jpg?height=300&width=300",
  },
  {
    name: "E4M Maverick Gold Award for Best Website/Microsite Exchange 4 Media	2023",
    image: "/img-4543.jpg?height=300&width=300",
  },
  {
    name: "Agency of the Year North India Travel Awards	2017",
    image: "/award-img-02.jpg?height=300&width=300",
  }, 
]

// const certifications = [
//   { label: "ISO 27001", description: "Information Security" },
//   { label: "GDPR", description: "Data Protection Compliant" },
//   { label: "SOC 2", description: "Security & Privacy" },
// ]

export function TrustBadges() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#B87C4C] mb-4 block">Trusted & Certified</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-black">Industry Recognition</h2>
        </motion.div>

        {/* Partner badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative h-72 md:h-80 w-full md:w-80 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 group mb-3 md:mb-5">
                <Image src={badge.image || "/placeholder.svg"} alt={badge.name} fill className=" object-cover object-top" />
              </div>
              {/* Heading below image */}
              <h3 className="text-black text-md md:text-lg font-medium text-center max-w-[200px] md:max-w-[300px] leading-tight">
                {badge.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {/* {certifications.map((cert, index) => (
            <div key={cert.label} className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-neutral-300 flex items-center justify-center mb-3 mx-auto">
                <span className="font-serif text-lg md:text-xl text-black">{cert.label}</span>
              </div>
              <p className="text-sm text-neutral-500">{cert.description}</p>
            </div>
          ))} */}
        </motion.div>
      </div>
    </section>
  )
}
