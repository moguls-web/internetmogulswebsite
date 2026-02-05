import React from 'react'

const PageBanner = ({title, description, image, children}: {title: string, description: string, image: string, children?: React.ReactNode}) => {
  return (
    <div 
      className='page-banner-container h-[480px] relative bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className='absolute inset-0 bg-black/40'></div>
        <div className='text-center relative z-10 h-full flex flex-col items-center justify-center px-6'>
            <h1 className='page-banner-title text-white text-3xl md:text-4xl lg:text-6xl font-medium leading-[0.95] tracking-tight text-balance'>{title}</h1>
            <p className='page-banner-description text-white/80 text-lg lg:text-xl mt-6 max-w-xl leading-relaxed'>{description}</p>
            {children && (
              <div className='mt-8 flex flex-col items-center gap-6'>
                {children}
              </div>
            )}
        </div>
    </div>
  )
}

export default PageBanner