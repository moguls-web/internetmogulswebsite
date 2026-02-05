"use client"

import Link from "next/link"
import { ArrowRight, Play, X } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const slides = [
    {
      image: "/luxury-boutique-hotel-exterior-at-sunset-with-warm.jpg",
      subtitle: "Digital Excellence",
    },
    {
      image: "/elegant-hotel-lobby-with-modern-architecture-and-n.jpg",
      subtitle: "Revenue Growth",
    },
    {
      image: "/khyber-kashmirhotel.jpg",
      subtitle: "The Khyber Himalayan Resort & Spa",
    },
    {
      image: "/tcp-hotel.jpg",
      subtitle: "Amoravida by 7 Apple Resorts",
    },
    {
      image: "/Facade-Amoravida.jpg",
      subtitle: "Amoravida by 7 Apple Resorts",
    },
    {
      image: "/tajHotel.jpg",
      subtitle: "Amoravida by 7 Apple Resorts",
    },
    {
      image: "/hotel-hilton.jpg",
      subtitle: "Amoravida by 7 Apple Resorts",
    },
    {
      image: "/luxury-resort-pool-overlooking-ocean-at-golden-hou.jpg",
      subtitle: "Brand Transformation",
    },
    
    
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt="Luxury hotel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 pt-28 pb-12">
        {/* Hero Text */}
        <div className="flex-1 flex flex-col justify-center max-w-5xl">
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-6">Hotel Digital Marketing Agency</p>

          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-medium leading-[0.95] tracking-tight text-balance">
              Hotels <em>call us </em>  when their existing agency lets <br/>them down.
          </h1>

          <p className="text-white/80 text-lg lg:text-xl mt-6 max-w-xl leading-relaxed">
          We sell more rooms, generate more roka, mundan, and kitty party enquiries — and yes, more restaurant bookings as well.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-12">
            <Link
              href="Reach_Us"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all"
            >
            Book Your Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="cursor-pointer group inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              <Play className="w-4 h-4" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pt-8">
          <div className="flex items-center gap-12 lg:gap-16">
          {/* <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-medium leading-[0.95] tracking-tight text-balance"> 
          Trust Strip:
          </h2> */}
            {/* <div>
              <p className="text-white text-3xl lg:text-4xl font-bold">15+</p>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-white text-3xl lg:text-4xl font-bold">1900+</p>
              <p className="text-white/60 text-sm mt-1">Hotels Served</p>
            </div>
            <div>
              <p className="text-white text-3xl lg:text-4xl font-bold">90</p>
              <p className="text-white/60 text-sm mt-1">Days to Results</p>
            </div> */}
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide ? "w-12 h-1 bg-white" : "w-6 h-1 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => {
            setIsVideoOpen(false)
            setIsVideoPlaying(false)
          }}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsVideoOpen(false)
                setIsVideoPlaying(false)
              }}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              {!isVideoPlaying ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src="/im-video-thumbnail.jpg" 
                    alt="Watch Our Story" 
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/ey8_z-JhWGk?autoplay=1&start=25"
                  title="Watch Our Story"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
