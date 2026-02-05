"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const quotes = [
  {
    id: 1,
    quote:
      "Avijit is extremely knowledgeable and has created a wonderful reputation for himself and his company for revenue management/social media marketing and website developments",
    name: "Rattan Keswani",
    title: "Dep MD ",
    company: "Lemon Tree Hotels Ltd",
    image: "/Rattan-Keswani.jpg",
  },
  {
    id: 2,
    quote:
      "Avi Arya and Internet Moguls are the go-to people for enhancement of hotel websites, online revenue management, online reputation management and social media marketing.",
    name: "Noshir Marfatia",
    title: "Senior Vice President - Sales & Marketing",
    company: "Concept Hospitality",
    image: "/Noshir-Marfatia1-696x773.jpg",
  }, 
]

const industryLeaders = [
  {
    name: "Mr. Vikramjit Singh",
    title: "Lemon Tree Hotels",
    image: "/VikramjitSingh.jpg",
  },
  {
    name: "Mr. Mansur Mehta",
    title: "Suba Hotels",
    image: "/MansurMehta.jpg",
  }, 
   
  {
    name: "Mr. Raja Babu",
    title: "Santiam Estates, Vizag",
    image: "/Raja-Babu.jpg",
  }, 
   
  {
    name: "Mr. Sanjeev Patra",
    title: "Hotel Sandy's Tower",
    image: "/Sanjeev-Patra.jpg",
  }, 
  {
    name: "Mr. Danish Din",
    title: "The Grand Dragon Ladakh",
    image: "/DanishDin.jpg",
  }, 
  {
    name: "Mr. Arun Arora",
    title: "The Corinthians Pune Hotel",
    image: "/ArunArora.jpg",
  }, 
   
  {
    name: "Mrs. Divya Agha",
    title: "Fortune Hotels",
    image: "/Divya-Agha.jpg",
  },
   
  {
    name: "Mr. Sameer MC",
    title: "Fortune Hotels",
    image: "/Sameer-MC.jpg",
  },
  {
    name: "Mr. Lakshman",
    title: "Maharishi Ayurveda, Rishikesh",
    image: "/Lakshman.jpg",
  },
  {
    name: "Mr. Rameshvar Shah",
    title: "Royal Tulip, Chitwan",
    image: "/Rameshvar-Shah.jpg",
  },
]

export function ClientQuotes() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#000000] mb-4 block">Industry Leaders</span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-black">
            Words of <span className="italic">Trust</span>
          </h2>
        </motion.div>

        {/* Quotes */}
        <div className="space-y-24 md:space-y-32 mb-16">
          {quotes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-20`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Quote */}
              <div className="w-full md:w-3/5">
                <Quote className="w-16 h-16 text-[#000000] mb-8" />
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-10">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-[#000000]" />
                  <div>
                    <p className="font-medium text-lg text-black">{item.name}</p>
                    <p className="text-neutral-500">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Black & White Photo Collage - Asymmetric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {industryLeaders.map((leader, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-serif text-xs md:text-sm lg:text-base text-primary-foreground text-center leading-tight">
                    {leader.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-primary-foreground/70 text-center mt-1 hidden md:block">
                    {leader.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
