"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Be a Mogul",
    thumbnail: "/0A3A1224.webp", 
    color: "bg-[#00C9A7]",
    videoUrl: "/workwithus-video.mp4", // Add video URL here
    videoType: "video" as "youtube" | "video" | "iframe",
  }, 
]

export function TeamVideos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-[#4D9FFF] text-sm font-bold uppercase tracking-widest">Behind The Scenes</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#1a1a1a]">Meet The Team</h2>
          </div>
          <p className="text-[#1a1a1a]/60 max-w-md">
            Get a glimpse into our culture, hear from team members, and see what makes Internet Moguls special.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 p-0 md:p-12 ">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden shadow-lg bg-black"
            >
              {playingVideoId === video.id && video.videoUrl ? (
                <>
                  {video.videoType === "youtube" && video.videoUrl ? (
                    <iframe
                      src={`${video.videoUrl}${video.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    />
                  ) : video.videoType === "iframe" && video.videoUrl ? (
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
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
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play button */}
                  {video.videoUrl && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (video.videoUrl) {
                          setPlayingVideoId(video.id)
                        }
                      }}
                    >
                      <div
                        className={`w-20 h-20 ${video.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}
                      >
                        <Play size={32} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    <h3 className="font-bold mb-1 text-white text-2xl md:text-5xl">{video.title}</h3>
                      </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
