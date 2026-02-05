import React from 'react'
import { Award, Sparkles, Star, Badge } from 'lucide-react'

const AboutAwards = () => {
  const awards = [
    {
      icon: Award,
      text: 'Best Digital Marketing Agency for Hospitality – 2023'
    },
    {
      icon: Sparkles,
      text: 'E4M Maverick Gold – Best Hotel Microsite – 2023'
    },
    {
      icon: Star,
      text: 'Agency of the Year – North India Travel Awards'
    },
    {
      icon: Badge,
      text: '15+ years. Hundreds of hotels. One mission - grow your business.'
    }
  ]

  return (
    <div className='py-24 lg:py-32 bg-white about-awards-container'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-15 items-center'>
          {/* Left Column - Text */}
          <div className='grid grid-cols-2 gap-4'>
            {awards.map((award, index) => {
              const Icon = award.icon
              return (
                <div
                  key={index}
                  className='p-6 flex flex-col items-center justify-center text-center min-h-[200px]'
                  style={{ backgroundColor: '#f24045' }}
                >
                  <Icon className='w-12 h-12 text-white mb-4' />
                  <p className='text-white text-sm lg:text-base font-medium leading-tight'>
                    {award.text}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Column - Awards Grid */}
          

          <div>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance text-black'>
          Awards & Recognition
           </h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutAwards

