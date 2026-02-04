"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play } from "lucide-react"

const reels = [
  {
    id: 1,
    title: "Test 1",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/1.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/1.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  
  {
    id: 2,
    title: "Test 2",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/5.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/2.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  
  {
    id: 3,
    title: "Test 3",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/6.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/3.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  
  {
    id: 4,
    title: "Test 4",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/7.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/4.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  
  {
    id: 5,
    title: "Test 5",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/8.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/5.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 

  {
    id: 6,
    title: "Test 6",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/10.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/9.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  {
    id: 7,
    title: "Test 7",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/11.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/10.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  {
    id: 8,
    title: "Test 8",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/12.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/11.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 

  {
    id: 9,
    title: "Test 9",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/13.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/12.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 
  {
    id: 10,
    title: "Test 10",
    hotel: "Taj Lake Palace",
    thumbnail: "/reels/reels-thumbail/14.jpg?height=1000&width=600",
    duration: "0:45",
    videoUrl: "/reels/13.mp4", // Add video URL here (YouTube embed URL, video file path, or iframe src)
    videoType: "youtube" as "youtube" | "video" | "iframe", // or "video" for HTML5 video, "iframe" for custom embed
  }, 

]

export function ReelsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  return (
    <section id="reels" className="py-24 md:py-40 bg-foreground text-primary-foreground overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">04 — Video Content</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-none">
              Stories in
              <br />
              <span className="italic font-light">Motion</span>
            </h2>
          </div>
          <p className="max-w-lg text-primary-foreground/60 text-lg lg:text-xl leading-relaxed">
            Cinematic reels and videos that transport viewers into your hotel's world.
          </p>
        </div>

        {/* Reels horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 w-[70vw] md:w-[40vw] lg:w-[25vw] snap-start group cursor-pointer"
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Phone mockup */}
              <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-full z-10" />

                {/* Screen */}
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden">
                  {playingVideoId === reel.id && reel.videoUrl ? (
                    <>
                      {reel.videoType === "youtube" && reel.videoUrl ? (
                        <iframe
                          src={`${reel.videoUrl}?autoplay=1`}
                          title={reel.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : reel.videoType === "iframe" && reel.videoUrl ? (
                        <iframe
                          src={reel.videoUrl}
                          title={reel.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : reel.videoType === "video" && reel.videoUrl ? (
                        <video
                          src={reel.videoUrl}
                          controls
                          autoPlay
                          loop
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </>
                  ) : (
                    <>
                      <motion.img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredId === reel.id ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Play overlay */}
                      <motion.div
                        className="absolute inset-0 bg-foreground/40 flex items-center justify-center cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === reel.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (reel.videoUrl) {
                            setPlayingVideoId(reel.id)
                          }
                        }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full bg-primary-foreground flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
                        </motion.div>
                      </motion.div>

                      {/* Duration badge */}
                      <div className="absolute bottom-4 right-4 px-2 py-1 bg-foreground/60 rounded text-xs">
                        {reel.duration}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Info */}
              {/* <div className="mt-6 text-center">
                <h3 className="font-serif text-xl md:text-2xl group-hover:italic transition-all duration-300">
                  {reel.title}
                </h3>
                <p className="text-primary-foreground/50 mt-1 text-sm">{reel.hotel}</p>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
