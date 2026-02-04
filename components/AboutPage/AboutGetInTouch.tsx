import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react' 
const AboutGetInTouch = () => {
  return (
    <div className='about-get-in-touch-container py-24 lg:py-32 bg-gray-100'>
      <div className='container max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Section - Content (50% width) */}
          <div>
            <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>
              // Get In Touch
            </p>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-6 text-balance text-black'>
              Let's Get In Touch
            </h2>
            <p className='text-lg text-black mb-8 leading-relaxed'>
              Learn More About Our Award-Winning Web Design, Consulting and Full-Service Digital Marketing Services.
            </p>
            
            {/* Interactive Elements */}
            <div className='space-y-4'>
              <Link 
                href='tel:+918826104440'
                className='inline-flex items-center gap-2 text-black underline hover:opacity-80 transition-opacity group'
              >
                <span>Contact: +91 8826104440</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
              <br />
              <Link 
                href='/Reach_Us'
                className='inline-flex items-center gap-2 text-black underline hover:opacity-80 transition-opacity group'
              >
                <span>Connect Us</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
            </div>
          </div>

          {/* Right Section - Image (50% width) */}
          <div>
            <img
              src='/0A3A1224.webp'
              alt='Get in touch with Internet Moguls'
              className='w-full h-[600px] object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGetInTouch

