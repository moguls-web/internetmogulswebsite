"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Office Party 2025", 
    image: "/reels/reels-thumbail/2.jpg",
    color: "bg-[#00C9A7]",
    videoUrl: "/MogulVideo-1.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 2,
    title: "Poojan", 
    image: "/reels/reels-thumbail/3.jpg",
    color: "bg-[#FFB800]",
    videoUrl: "/MogulVideo-2.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  },
  {
    id: 3,
    title: "Diwali Party 2025", 
    image: "/reels/reels-thumbail/4.jpg",
    color: "bg-[#4D9FFF]",
    videoUrl: "/MogulVideo-3.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  },  
  {
    id: 4,
    title: "Bollywood Night 2025", 
    image: "/reels/reels-thumbail/9.jpg",
    color: "bg-[#4D9FFF]",
    videoUrl: "/MogulVideo-4.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  }, 
]

export function EventsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" ref={ref} id="life-at-im">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#FF6B6B] text-sm font-bold uppercase tracking-widest">Life at IM</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#1a1a1a]">Moments That Matter</h2>
          <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto">
            Work hard, celebrate harder. From offsites to festivals, we believe in creating memories together.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 px-6 overflow-x-auto pb-6 scrollbar-hide justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex-shrink-0 w-80 md:w-80"
            >
              <div className="relative aspect-[3/5] rounded-3xl overflow-hidden shadow-lg bg-black">
                {playingVideoId === event.id && event.videoUrl ? (
                  <>
                    {event.videoType === "youtube" && event.videoUrl ? (
                      <iframe
                        src={`${event.videoUrl}${event.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                        title={event.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : event.videoType === "iframe" && event.videoUrl ? (
                      <iframe
                        src={event.videoUrl}
                        title={event.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : event.videoType === "video" && event.videoUrl ? (
                      <video
                        src={event.videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </>
                ) : (
                  <>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Play button overlay */}
                    {event.videoUrl && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (event.videoUrl) {
                            setPlayingVideoId(event.id)
                          }
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center group-hover:scale-110 transition-all`}
                        >
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Color accent bar */}
                    <div className={`absolute top-4 left-4 w-2 h-16 ${event.color} rounded-full`} />

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-1 text-white">{event.title}</h3>
                      <span className="text-white/70 text-sm">{event.location}</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fades */}
        <div className="absolute top-0 left-0 bottom-6 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-6 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
