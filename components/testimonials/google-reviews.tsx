"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sunil Grover",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ4-t3iGGn4azA0n8yZoqDGEWgGHlrgYd9SFHhifE2em5zDPQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    date: "2 Years Ago",
    review:"The support and training provided by Internet Moguls have been outstanding. They have a team of knowledgeable and responsive experts who are always available to assist us. Their training sessions have helped us get the most out of their software and understand revenue management best practices.",
    hotel: "Niranta Airport Transit Hotel",
  },
  {
    id: 2,
    name: "Apoorva Srivastava",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW9i2ECUpy1fgY0lnW8YgfSu0dJT_SuaIMkFzdqokXwEkczk5Lj=w72-h72-p-rp-mo-br100",
    rating: 5,
    date: "3 Years Ago",
    review:
      "Internet Moguls has been active and has played a very critical role in increasing our online visibility and lead generation from ad campaigns and organic search. We are continuously impressed with their level of service, professionalism, and knowledge and consider them a key marketing partner in helping drive our business.",
    hotel: "Maharishi Ayurveda Rishikesh",
  },
  {
    id: 3,
    name: "Pooja Bist",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXl9EIP-BIkdxL6-s4sbbwFogDJus4PgLwqeOBn4UDf4hGR4j1i3w=w72-h72-p-rp-mo-ba5-br100",
    rating: 5,
    date: "2 Years Ago",
    review:
      "We have had the pleasure of partnering with Internet Moguls for our digital marketing and revenue management and the results are outstanding. Our online presence has seen remarkable improvements across various platforms and visibility on OTA channels, Google, and social media has notably increased.",
    hotel: "Godwin Hotel",
  },
  {
    id: 4,
    name: "Sangram Mohanty",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIyQ6soFn-2fhF6BRqF7WusQX_dQOCJUGFTUmuQGdoD7eoSLQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    date: "1 Month Ago",
    review:
      "At Sandys Tower, a Wedding & Leisure Destination Hotel in Bhubaneswar, we partnered with Internet Moguls to bridge the gap between brand visibility and bookings. Their team developed a cohesive social and website strategy that connected our Instagram campaigns to direct booking pages.",
    hotel: "Hotel Sandy's Tower",
  },
  {
    id: 5,
    name: "Ishan Dutt",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLIWrhGLi5PegdPFtuPl05gD7nZWheQRrDEfZwUH3Zhjdzw0g=w72-h72-p-rp-mo-br100",
    rating: 5,
    date: "A Year Ago",
    review:
      "At Peerless Hotels & Resorts, we have found a true standout in the digital marketing realm with Internet Moghuls. Their profound understanding of the hotel industry, paired with precise knowledge, sets them apart as a premier digital marketing partner. ",
    hotel: "Peerless Hotels",
  },
  {
    id: 6,
    name: "Tilak Sharma",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXfrTJYppdSAuOckfCzMCeTnBmIiEVWPAqJTs5-R4HPBnPe8EINOg=w72-h72-p-rp-mo-ba2-br100",
    rating: 5,
    date: "2 Years Ago",
    review:
      "Internet Moguls has been instrumental in our hotel's success. Their digital marketing and revenue management services have had a profound impact. They've helped us increase OTA revenue, drive more direct bookings, and significantly improve our ranking on Google.",
    hotel: "Gobindgarh Jaisalmer",
  },
]

export function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#B87C4C] mb-4 block">Google Reviews</span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-black">
              Verified <span className="italic">Excellence</span>
            </h2>
          </motion.div>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0 flex items-center gap-6"
          >
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <span className="font-serif text-5xl text-black">4.5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-neutral-500">Based on 500+ reviews</p>
            </div>
            <div className="w-16 h-16 relative">
              <Image src="/google-icon.png" alt="Google" fill className="object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Reviews scroll container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors shadow-lg hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors shadow-lg hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[350px] md:w-[400px] bg-white p-8 border border-neutral-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-black">{review.name}</p>
                      <p className="text-sm text-neutral-500">{review.hotel}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 relative opacity-50">
                    <Image src="/google-g-icon.jpg" alt="Google" fill className="object-contain" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-400">{review.date}</span>
                </div>

                {/* Review text */}
                <p className="text-neutral-600 leading-relaxed">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Internet+Moguls/@28.5269261,77.2291949,17z/data=!4m8!3m7!1s0x390ce1842e897089:0xcb954d0aef116e6f!8m2!3d28.5269261!4d77.2317698!9m1!1b1!16s%2Fg%2F12q4xtc3_?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#000] hover:text-[#232323] transition-colors"
          >
            View All Reviews on Google
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
