import React from 'react'

const WhoWeAre = () => {
  return (
    <div className='who-we-are-container py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          
          {/* Text Section */}
          <div>
            <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>// MISSION</p>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance text-black'>
              Our <em>Beliefs</em>
            </h2>
            <div className='space-y-6 text-black'>
              <p className='text-lg leading-relaxed'>
              Great hotels deserve great marketing. And marketing should always reflect on your balance sheet.

              </p>
              <p className='text-lg leading-relaxed'>
              That’s why the world’s leading hotel brands — including Lemon Tree Hotels, Royal Orchid Hotels, Taj Group members, luxury independents, and boutique gems — continue to partner with us year after year.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className='w-full h-full'>
            <div className='relative w-full h-full aspect-video bg-black rounded-lg overflow-hidden'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/ey8_z-JhWGk?si=BrFBBqdwHpX7MjzE'
                title='The Ultimate Hoteliers Guide to Growing Online Revenues'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WhoWeAre