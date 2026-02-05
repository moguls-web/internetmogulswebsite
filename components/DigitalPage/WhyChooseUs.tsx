import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const WhyChooseUs = () => {
  const stats = [
    { number: '300', label: 'Campaign ROI (top performers)' },
    { number: '1983', label: 'Hotels Transformed Across India & SEA' },
    { number: '90', label: 'Days to Measurable Outcomes' },
    { number: '2009', label: 'Industry Leadership Since' },
  ]

  return (
    <div className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/modern-office-in-vancouver-with-mountain-and-harbo.jpg)",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase text-white mb-3">
            // About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
            Why Choose Us?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/60 px-10 py-8 text-center text-white"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-3">
                {stat.number}
              </div>
              <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-white underline hover:text-white/80 transition-colors group"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs


