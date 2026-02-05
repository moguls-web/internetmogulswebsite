"use client"

import React, { useState } from 'react'
import { Play, X } from 'lucide-react'

const BeAMogul = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="relative w-full">
      {/* Top Banner */}
      <div className="relative bg-white"> 
        <div className="flex items-center justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black">Be a Mogul</h2>
        </div>
      </div>

      {/* Main Video Section */}
      <div className="relative bg-white py-8 lg:py-10">
        <div className="container max-fill mx-auto px-6 lg:px-8">
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-gray-900"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Video Thumbnail */}
            <img
              src="/0A3A1233.webp"
              alt="Be a Mogul Video"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center bg-white/90 group-hover:bg-white transition-colors">
                <Play className="w-10 h-10 lg:w-12 lg:h-12 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm"
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
                src="https://www.youtube.com/embed/ey8_z-JhWGk?si=BrFBBqdwHpX7MjzE&autoplay=1"
                title="Be a Mogul"
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

export default BeAMogul

