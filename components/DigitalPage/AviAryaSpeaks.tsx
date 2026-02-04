"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, X, Play } from 'lucide-react'

const AviAryaSpeaks = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="w-full py-16 lg:py-24 px-6 lg:px-8 avi-arya-speaks z-10">
      <div className="max-w-7xl mx-auto">
        {/* Container with Red Border */}
        <div 
          className="overflow-hidden"
          style={{ borderColor: '#f24045' }}
        >
          <div className="grid lg:grid-cols-10 gap-0">
            {/* Left Section - Video Thumbnail */}
            <div 
              className="relative border-2 border-red-500 rounded-lg overflow-hidden p-2 aspect-[4/3] lg:aspect-auto lg:h-[500px] cursor-pointer group lg:col-span-7"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Background Image */}
              <img
                src="/jK-9APd3JL0-HD.webp"
                alt="Avi Arya Podcast"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f24045' }}>
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center lg:col-span-3">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                // Learn from the Expert.
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8 text-balance">
                Avi Arya <br /> Speaks.
              </h2>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-black font-medium text-lg group self-start"
              >
                <span className="border-b-2 border-black pb-1">View More</span>
                <ArrowRight className="w-5 h-5" style={{ color: '#f24045' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="cursor-pointer absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/jK-9APd3JL0?si=o0C2PpiKWtkeFiZ-&autoplay=1"
                title="Avi Arya Speaks"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AviAryaSpeaks

