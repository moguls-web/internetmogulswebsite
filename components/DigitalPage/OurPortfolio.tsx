"use client"

import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Image, Monitor, Search } from 'lucide-react'

const OurPortfolio = () => {
  const portfolioItems = {
    'online-creative': [
      {
        title: 'Creative Design Project 1',
        description: ' 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }, 
    ],
    'website-designs': [
      {
        title: 'Website Design Project 1',
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }, 
    ],
    'seo': [
      {
        title: 'SEO Project 1',
        description: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }, 
    ]
  }

  return (
    <div className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <p className='text-sm tracking-widest uppercase mb-4' style={{ color: '#f24045' }}>
            // Sub Heading Here
          </p>
          <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-8 text-black'>
            Our Portfolio
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='online-creative' className='w-full'>
          <div className='flex justify-center mb-12'>
            <TabsList className='bg-black/10 p-1 h-auto'>
              <TabsTrigger
                value='online-creative'
                className='px-6 py-3 data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-black data-[state=inactive]:bg-transparent gap-2'
              >
                <Image className='w-5 h-5' />
                <span>Online Creative Designs</span>
              </TabsTrigger>
              <TabsTrigger
                value='website-designs'
                className='px-6 py-3 data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-black data-[state=inactive]:bg-transparent gap-2'
              >
                <Monitor className='w-5 h-5' />
                <span>Website Designs</span>
              </TabsTrigger>
              <TabsTrigger
                value='seo'
                className='px-6 py-3 data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-black data-[state=inactive]:bg-transparent gap-2'
              >
                <Search className='w-5 h-5' />
                <span>Search Engine Optimization</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value='online-creative' className='mt-0'>
            <div className='space-y-6'>
              {portfolioItems['online-creative'].map((item, index) => (
                <div key={index} className='text-left'>
                  <p className='text-black leading-relaxed'>
                    {index + 1} {item.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='website-designs' className='mt-0'>
            <div className='space-y-6'>
              {portfolioItems['website-designs'].map((item, index) => (
                <div key={index} className='text-left'>
                  <p className='text-black leading-relaxed'>
                    {index + 1} {item.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='seo' className='mt-0'>
            <div className='space-y-6'>
              {portfolioItems['seo'].map((item, index) => (
                <div key={index} className='text-left'>
                  <p className='text-black leading-relaxed'>
                    {index + 1} {item.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default OurPortfolio

