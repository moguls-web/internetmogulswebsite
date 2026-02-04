"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, X, ArrowRight } from "lucide-react"

export function FounderVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="founder" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Meet Our Founder</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
            Built by a <em>hotelier</em>, 
            <br />
            for hoteliers 
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            My father is a hotelier. We built two of India’s most loved boutique hotels.
            In 2009, I searched for an agency that truly understood hotels. I found none.
            So I built Internet Moguls — starting with just 4 people.
            Today, we’re a 100+ member hospitality-only team working with 500+ hotels.

            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Every hotel has a unique story. We help you tell it in a way that resonates with travelers and drives
              measurable results.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div>
                {/* <p className="font-bold">Founder Credit:</p> */}
                <p className="text-lg font-bold text-muted-foreground mb-5">Avijit Arya | Founder, Internet Moguls</p>
                <Link
                href="/leadership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wide"
              >
                View More
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
              
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="relative">
            <div className="relative overflow-hidden bg-muted">
              <img
                src="/professional-indian-businessman-founder-portrait-i.jpg"
                alt="avi arya- Founder of Internet Moguls"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h2 className=" text-white text-6xl mb-4">
                  Our Founder <br /> Avijit Arya                     
                  </h2>
                  <span className="text-white text-2xl font-light leading-normal">
                      Father of 2 Girls <br />
                    6 Dogs <br />
                    Husband to a Super Woman
                    </span>
              </div>
              <div className="absolute inset-0 bg-black/20" />
 
              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-20 h-20 bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            </div>

            
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black">
            {/* Replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center text-white/60">
              <div className="text-center">
                <video src="/avi-sir.mp4" className="w-full h-full object-cover" controls></video>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
