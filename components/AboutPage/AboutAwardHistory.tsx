import React from 'react' 
const AboutAwardHistory = () => {
  return (
    <div className='about-award-history-container py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Column - Content */}
          <div>
            <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>// ABOUT</p>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance text-black'>
              History & <em>Award</em>
            </h2>
            <div className='space-y-6 text-black'>
              <p className='text-lg leading-relaxed'>
              Intensity. Drive. Determination. Pushing past the hardest of challenges. Getting better and better. Internet Moguls was forged from this mindset. It’s this passion that makes us successful, and it’s this same passion we pour into our clients and their creative needs. Internet Moguls is a full-service hotel marketing agency that has the strategic thinking, planning, creativity, and results of a larger hotel marketing agency without the alarming price tag and fluff. 

              <br /><br /> We are a group of young people that have worked for large brands, but like a simpler, more efficient way of being a firm — solving problems and conveying brand messages through visual communication — not a one-size-fits-all solution, but a custom, tailored approach to each individual client’s needs.
              </p>
              <p className='text-lg leading-relaxed'>
              We began in 2009. Since then, we have had great opportunities to partner with big chain hotels to independent hotels.
              </p>
            </div>
          </div>

          {/* Right Column - Award */}
          <div className='relative'>
            {/* Award Badge */}
            <div className='text-white px-4 py-2 mb-0 inline-block w-full text-center' style={{ backgroundColor: '#f24045' }}>
              <p className='text-3xl font-medium p-5'>Best Social Media Agency 2017- India Hospitality Awards</p>
            </div>

            {/* Award Image Container */}
            <div className='relative'>
              <img
                src='/d3@2x-8.png'
                alt='India Hospitality Awards 2017 - Best Social Media Agency'
                className='w-full h-[600px] object-cover'
              />
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAwardHistory