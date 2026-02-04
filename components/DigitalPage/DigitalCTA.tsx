import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const DigitalCTA = () => {
  return (
    <div className="relative w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner Container with Rounded Corners */}
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background Image with Blur */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/digital-marketing-dashboard-analytics-graphs.jpg)',
              filter: 'blur(4px)',
              transform: 'scale(1.1)'
            }}
          ></div>

          {/* Red Overlay */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(242, 64, 69, 0.85)' }}
          ></div>

          {/* Content */}
          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to Scale Your Hotel Revenue?
                </h2>
                <p className="text-white/90 text-lg lg:text-xl">
                  We're not just a marketing agency - we're a hospitality growth partner.
                </p>
              </div>

              {/* Right Side - CTA Button */}
              <div className="shrink-0">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium text-base hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#f24045',
                    border: '1px solid white'
                  }}
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalCTA

