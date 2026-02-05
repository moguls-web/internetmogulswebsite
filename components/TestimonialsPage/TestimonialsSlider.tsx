"use client"

import { useState } from "react"
import { Play, X, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  hotel: string
  image?: string
  videoUrl?: string
  videoThumbnail?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "India's leading hotel chain partnered with Internet Moguls for over a decade across 120+ properties. From SEO to direct revenue growth and website development, the partnership focused on long-term digital stability, consistency, and sustainable performance—not short-term spikes.",
    author: "Respected Mr. Baljee",
    role: "Chairman",
    hotel: "Royal Orchid Hotels",
    image: "/indian-businessman-portrait-professional-headshot-.jpeg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/indian-businessman-portrait-professional-headshot-.jpeg",
  },
  {
    id: "2",
    quote:
      "From scattered digital presence to a structured revenue engine—Internet Moguls helped improve brand visibility, and scale wedding and banquet inquiries across multiple leisure properties in North India.",
    author: "Mr. Vibhas Prasad",
    role: "Director",
    hotel: "Leisure Hotels Group",
    image: "/professional-portrait-corporate-headshot-hot.jpeg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/professional-portrait-corporate-headshot-hot.jpeg",
  },
  {
    id: "3",
    quote:
      "The support and training provided by Internet Moguls have been outstanding. They have a team of knowledgeable and responsive experts who are always available to assist us. Their training sessions have helped us get the most out of their software and understand revenue management best practices.",
    author: "Sunil Grover",
    role: "General Manager",
    hotel: "Grand Hotel",
    image: "/professional-portrait-corporate-headshot-hot.jpeg",
  },
  {
    id: "4",
    quote:
      "Internet Moguls has been active and has played a very critical role in increasing our online visibility and lead generation from ad campaigns and organic search. We are continuously impressed with their level of service, professionalism, and knowledge.",
    author: "Customer Name",
    role: "Marketing Director",
    hotel: "Luxury Resorts",
    image: "/indian-businessman-portrait-professional-headshot-.jpeg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/indian-businessman-portrait-professional-headshot-.jpeg",
  },
]

export function TestimonialsSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const openVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            // TESTIMONIALS
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            Hear from our <em className="font-normal">clients</em>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Discover how we've helped hotels transform their digital presence and drive measurable results.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border rounded-lg p-6 h-full flex flex-col group hover:shadow-lg transition-shadow"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-12 h-12 text-muted-foreground/20" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="font-serif text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-lg mb-1">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.hotel}
                    </p>
                  </div>

                  {/* Video Play Button (if video exists) */}
                  {testimonial.videoUrl && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <button
                        onClick={() => openVideo(testimonial.videoUrl!)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/btn"
                        aria-label="Watch video testimonial"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary/20 transition-colors">
                          <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                        </div>
                        <span className="text-sm font-medium">Watch Video</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={closeVideo}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors z-10"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Video Container */}
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`${activeVideo}?autoplay=1`}
                    title="Testimonial Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

