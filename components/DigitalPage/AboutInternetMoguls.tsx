import React from 'react'

const AboutInternetMoguls = () => {
  return (
    <div className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Section - Text Content */}
          <div>
            <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>
              // About
            </p>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-6 text-balance text-black'>
              About Internet Moguls
            </h2>
            <p className='text-lg mb-6' style={{ color: '#f24045' }}>
              Intensity. Drive. Determination.
            </p>
            <div className='space-y-6 text-black'>
              <p className='text-lg leading-relaxed'>
                Pushing past the hardest of challenges. Getting better and better. Internet Moguls was forged from this mindset. It's this passion that makes us successful, and it's this same passion we pour into our clients and their creative needs.
              </p>
              <p className='text-lg leading-relaxed'>
                Internet Moguls is a full-service digital marketing agency that has the strategic thinking, planning, creativity, and results of a larger hotel marketing agency without the alarming price tag and fluff. We are a group of young people that have worked for large brands, but like a simpler, more efficient way of being a firm — solving problems and conveying brand messages through visual communication — not a one-size-fits-all solution, but a custom, tailored approach to each individual client's needs.
              </p>
              <p className='text-lg leading-relaxed'>
                We believe in providing custom, results-driven solutions rather than cookie-cutter strategies. Every client is unique, and we tailor our approach to meet their specific goals and challenges.
              </p>
            </div>
          </div>

          {/* Right Section - Team Photo */}
          <div className='relative'>
            <img
              src='/professional-team-meeting-in-modern-office-with-ho.jpg'
              alt='Internet Moguls team'
              className='w-full h-[600px] object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInternetMoguls

