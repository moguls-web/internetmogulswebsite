import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const GRTCaseStudy = () => {
  const caseStudies = [
    {
      title: 'GRT Hotels: Event bookings + RevPAR increase',
      date: 'July 5, 2025',
      description: 'GRT Hotels & Resorts is a chain of hotels that is backed by the famous GRT Jewelers. The chain has properties in tier 1 and tier 2 cities in South India and cater to both business and leisure travellers.',
      image: '/grt.webp',
      link: '#'
    },
    {
      title: 'The Grand Dragon Ladakh: Seasonal SEO Success',
      date: 'July 5, 2025',
      description: 'This is the only Star Luxury Hotel in Leh Ladakh. Avail our special packages and special deals. Book via website for best rates!',
      image: '/gdl.webp',
      link: '#'
    },
    // Add more case studies here
  ]

  return (
    <div className='py-24 lg:py-32 case-study-container'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='space-y-24'>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              {/* Left Section - Hotel Website Interface */}
              <div className='relative'>
                <div className='bg-gray-900 rounded-lg overflow-hidden shadow-2xl'>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Right Section - Article Content */}
              <div className=''>
                <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-4'>
                  {caseStudy.title}
                </h2>
                <p className='text-sm mb-6'>{caseStudy.date}</p>
                <p className='text-lg leading-relaxed mb-8'>
                  {caseStudy.description}
                </p>
                <Link 
                  href={caseStudy.link}
                  className='inline-flex items-center gap-2 transition-colors group'
                >
                  <span>Read More</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GRTCaseStudy

