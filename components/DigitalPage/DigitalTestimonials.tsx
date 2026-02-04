"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Quote } from 'lucide-react'

const DigitalTestimonials = () => {
  const testimonials = [
    {
      quote: "Internet Moghul's has an outstanding team, they are packed with knowledge & talent. The team mates are always ready to help. understand their job role very well & execute the given tasks on time, we as an organisation are very satisfied with the services provided by them.",
      name: "Shalom muriel",
      affiliation: "Google"
    },
    {
      quote: "The support and training provided by Internet Moguls have been outstanding. They have a team of knowledgeable and responsive experts who are always available to assist us. Their training sessions have helped us get the most out of their software and understand revenue management best practices.",
      name: "Sunil Grover",
      affiliation: "Google"
    },
    {
      quote: "Internet Moguls has been active and has played a very critical role in increasing our online visibility and lead generation from ad campaigns and organic search. We are continuously impressed with their level of service, professionalism, and knowledge and consider them a key marketing partner in helping drive our business. They are not only proactive and responsive but also at the forefront of thought leadership in the search engine marketing",
      name: "Customer Name",
      affiliation: "Google"
    }
  ]

  return (
    <div className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/digital-marketing-dashboard-analytics-graphs.jpg)',
          filter: 'blur(4px) brightness(0.3)',
          transform: 'scale(1.1)'
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase mb-4 text-white">
              // TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight text-white">
              Hear from what our
              <br />
              customers say.
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
           

          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray-900 p-8 relative h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4">
                    <Quote className="w-16 h-16" style={{ color: '#f24045' }} />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-base leading-relaxed mb-6 pr-12">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-white/20 mb-4"></div>

                  {/* Customer Info */}
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: '#f24045' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-white/80 text-sm">
                      {testimonial.affiliation}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default DigitalTestimonials

