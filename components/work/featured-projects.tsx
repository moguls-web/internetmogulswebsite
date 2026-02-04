"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const featuredProjects = [
  {
    id: 1,
    title: "Gobindgarh Jaisalmer ",
    category: "Website & Digital Campaign",
    location: "Jaisalmer, India",
    image: "/gobindgarh-img.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Mayfair Spring Valley Resort, Guwahati",
    category: "Complete Digital Transformation",
    location: "Guwahati",
    image: "/mayfair-guwahati-img.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Royal Tulip Chitwan Nepal",
    category: "Brand Identity & Web Design",
    location: "Nepal",
    image: "/tulip.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "The Grand Dragon Ladakh",
    category: "Social Media & Content",
    location: "Ladakh",
    image: "/GDL-img.jpg",
    year: "2023",
  },
  
  {
    id: 5,
    title: "Dwarika's Sanctuary",
    category: "Social Media & Content",
    location: "Dhulikhel Nepal",
    image: "/Dwarikas-Sanctuary-img.jpg",
    year: "2023",
  },
]

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Featured Work</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Selected Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A curated selection of our most impactful collaborations with luxury hospitality brands.
          </p>
        </div>

        {/* Projects grid - editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group cursor-pointer ${i === 0 ? "lg:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "h-120 md:h-130" : "h-120 md:h-96"}`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />

                {/* Overlay content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-white/70">{project.year}</span>
                    <span className="w-8 h-px bg-white/40" />
                    <span className="text-xs tracking-[0.2em] uppercase text-white/70">{project.location}</span>
                  </div>
                  <h3
                    className={`font-serif text-white mb-2 ${i === 0 ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">{project.category}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
