"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "From routine digital support to a strategic partnership — Internet Moguls has been a reliable technology and marketing ally, constantly inspiring us with new ideas and innovation.",
      author: "Respected Mr. Baljee ",
      role: "Chairman Royal Orchid hotels",
      hotel: "Royal Orchid Hotels",
      image: "/indian-businessman-portrait-professional-headshot-.jpeg",
      videoUrl: "/balji.mp4", // Add video URL here
      videoType: "video" as "youtube" | "video" | "iframe",
    },
    {
      quote:
        "From being digitally present to becoming digitally preferred — Internet Moguls helped strengthen our brand visibility and drive meaningful direct business growth across our leisure hotels in North India.",
      author: "Mr. Vibhas Prasad",
      role: "Director",
      hotel: "Leisure Hotels Group",
      image: "/professional-portrait-corporate-headshot-hot.jpeg",
      videoUrl: "/VibhasPrasad.mp4", // Add video URL here
      videoType: "video" as "youtube" | "video" | "iframe",
    },
    {
      quote:
        "From one iconic Taj address to another — Internet Moguls has been a trusted digital partner that truly understands luxury hospitality, brand integrity, and long-term growth.",
      author: "Mr. Varun Nigam",
      role: "General Manager",
      hotel: "Jai Mahal Palace",
      image: "/Deg8ISkVwAAQHhv.jpg",
      videoUrl: "/Unlocking_the_secrets_to_sustainable_success_Jai_Mahal_Palace_s_journey_with_Internet_Moguls_720P.mp4", // Add video URL here
      videoType: "video" as "youtube" | "video" | "iframe",
    },
    {
      quote:
        "From collaboration to continuous growth — Internet Moguls has been a focused and visionary digital partner, consistently adding value to 7 Apple Hotels over the past four years.",
      author: "Mr. Manoj Bagri",
      role: "Managing Director and Co-Founder",
      hotel: "7 Apple Hotels and Resorts",
      image: "/manoj-7apple.jpg",
      videoUrl: "/7Apple-Videos-2.mp4", // Add video URL here
      videoType: "video" as "youtube" | "video" | "iframe",
    },
     
  ]

  const [current, setCurrent] = useState(0)
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
        <div><p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Why leading hotel brands trust us</p>
          <h2 className="font-serif text-4xl lg:text-5xl"><em>Trust</em> stories</h2></div>
          <Link
            href="/testimonials/"
            className="text-sm tracking-wide underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            View All Testimonials
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full h-full text-center mx-auto relative overflow-hidden bg-muted group">
            {playingVideoId === current && testimonials[current].videoUrl ? (
              <>
                {testimonials[current].videoType === "youtube" && testimonials[current].videoUrl ? (
                  <iframe
                    src={`${testimonials[current].videoUrl}${testimonials[current].videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title={testimonials[current].hotel}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : testimonials[current].videoType === "iframe" && testimonials[current].videoUrl ? (
                  <iframe
                    src={testimonials[current].videoUrl}
                    title={testimonials[current].hotel}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : testimonials[current].videoType === "video" && testimonials[current].videoUrl ? (
                  <video
                    src={testimonials[current].videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Play button overlay */}
                {testimonials[current].videoUrl && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (testimonials[current].videoUrl) {
                        setPlayingVideoId(current)
                      }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors"
                    >
                      <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
                    </motion.div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <p className="text-white font-serif text-xl">{testimonials[current].hotel}</p>
                </div>
              </>
            )}
          </div>

          <div>
            <Quote className="w-16 h-16 text-muted-foreground/20 mb-8" />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-2xl lg:text-3xl leading-relaxed mb-10"
              >
                "{testimonials[current].quote}"
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mb-10"
              >
                <p className="font-bold text-lg">{testimonials[current].author}</p>
                <p className="text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].hotel}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setPlayingVideoId(null)
                  prev()
                }}
                className="w-14 h-14 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setPlayingVideoId(null)
                  next()
                }}
                className="w-14 h-14 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2 ml-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setPlayingVideoId(null)
                      setCurrent(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === current ? "bg-foreground" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
