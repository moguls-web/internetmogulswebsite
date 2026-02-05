"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Quote } from "lucide-react"

const videoTestimonials = [
  {
    id: 1,
    name: "Mr. Kuldeep Sharma",
    title: "CEO",
    hotel: "Taj Hari Mahal",
    location: "Udaipur, India",
    quote:
      "Internet Moguls transformed our digital presence completely. Our direct bookings increased by 180% in just 6 months.",
    thumbnail: "/MVaSOUU6gI8-HD-img.jpg?height=1000&width=600",
    featured: true,
    videoUrl: "https://cdn.mogulsl.com/im/Best_digital_marketing_agency_in_india_-_Internet_Moguls_Taj_Hari_Mahal_Jodhpur_720P.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 2,
    name: "Rajesh Nath",
    title: "CEO",
    hotel: "Fortune Hotels",
    location: "New Delhi, India",
    quote: "The ROI we've seen from their campaigns is unprecedented in our 30-year history.",
    thumbnail: "/hotel-sales-director-woman-professional-testimonia.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/IM-Fortune.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 3,
    name: "Mr. Sameer",
    title: "Owner",
    hotel: "Shivavilas Palace Hotel",
    location: "India",
    quote: "They understand the hospitality industry like no other agency.",
    thumbnail: "/boutique-hotel-owner-man-professional-testimonial.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/IM-Shivavilas.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 4,
    name: "Mr. Sam",
    title: "CEO",
    hotel: "Hotel Manor",
    location: "Datchet, United Kingdom",
    quote: "Our social media engagement went from hundreds to millions.",
    thumbnail: "/hotel-chain-ceo-woman-professional-testimonial.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/Manor.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 5,
    name: "Mr. Sachin",
    title: "Managing Director",
    hotel: "Royal Tulip Nepal",
    location: "Kathmandu, Nepal",
    quote: "International expertise with local understanding. A rare combination.",
    thumbnail: "/middle-eastern-hotel-director-man-professional-tes.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/MrSachin-Royal-Tulip-Nepal.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 6,
    name: "Mrs. Somali Bajpai",
    title: "Marketing Head",
    hotel: "Crowne Plaza",
    location: "Okhla - Delhi",
    quote: "The creative team exceeded all our expectations.",
    thumbnail: "/asian-hotel-marketing-director-woman-professional-.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/Sandy-Tower.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 7,
    name: "Mr. Yatin",
    title: "General Manager",
    hotel: "Hard Rock Hotel",
    location: "Goa, India",
    quote: "Professionalism and results. That's what they deliver.",
    thumbnail: "/european-hotel-manager-man-professional-testimonia.jpg",
    videoUrl: "https://cdn.mogulsl.com/im/testimonials-video/Yatin-Hardrock.mp4",
    videoType: "video" as "youtube" | "video" | "iframe",
  },
]

export function VideoTestimonials() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)
  const featured = videoTestimonials.find((v) => v.featured)
  const grid = videoTestimonials.filter((v) => !v.featured)

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#000000] mb-4 block">Video Testimonials</span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
            Hear Their <span className="italic">Stories</span>
          </h2>
        </motion.div>

        {/* Featured video */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16 group"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black">
              {playingVideoId === featured.id && featured.videoUrl ? (
                <>
                  {featured.videoType === "youtube" && featured.videoUrl ? (
                    <iframe
                      src={`${featured.videoUrl}${featured.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                      title={featured.hotel}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    />
                  ) : featured.videoType === "iframe" && featured.videoUrl ? (
                    <iframe
                      src={featured.videoUrl}
                      title={featured.hotel}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    />
                  ) : featured.videoType === "video" && featured.videoUrl ? (
                    <video
                      src={featured.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </>
              ) : (
                <>
                  <Image
                    src={featured.thumbnail || "/placeholder.svg"}
                    alt={featured.hotel}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                  {/* Play button */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (featured.videoUrl) {
                        setPlayingVideoId(featured.id)
                      }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#000000] transition-colors"
                    >
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12 w-2/5">
                    {/* <Quote className="w-10 h-10 text-[#fff] mb-4" />
                    <p className="font-serif text-2xl md:text-3xl italic text-white max-w-3xl leading-relaxed mb-6">
                      "{featured.quote}"
                    </p> */}
                    {/* <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-lg">{featured.name}</p>
                        <p className="text-sm text-white/70">
                          {featured.title}, {featured.hotel}
                        </p>
                      </div>
                    </div> */}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {grid.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative aspect-[3/5] overflow-hidden bg-black">
                {playingVideoId === video.id && video.videoUrl ? (
                  <>
                    {video.videoType === "youtube" && video.videoUrl ? (
                      <iframe
                        src={`${video.videoUrl}${video.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                        title={video.hotel}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : video.videoType === "iframe" && video.videoUrl ? (
                      <iframe
                        src={video.videoUrl}
                        title={video.hotel}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : video.videoType === "video" && video.videoUrl ? (
                      <video
                        src={video.videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </>
                ) : (
                  <>
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.hotel}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

                    {/* Play button */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (video.videoUrl) {
                          setPlayingVideoId(video.id)
                        }
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#000000] flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Info */}
                    {/* <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="font-medium text-white text-sm md:text-base">{video.name}</p>
                      <p className="text-xs md:text-sm text-white/70">{video.hotel}</p>
                      <p className="text-xs text-white/50">{video.location}</p>
                    </div> */}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-colors text-sm tracking-widest uppercase">
            View All 500+ Videos
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}
