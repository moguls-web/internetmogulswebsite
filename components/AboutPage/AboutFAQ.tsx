"use client"

import React from 'react'
import { Plus, Minus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const AboutFAQ = () => {
  const faqs = [
    {
      question: 'Q1. How do your solutions help increase direct bookings?',
      answer: 'By combining SEO, PPC, web design, and automation tools, we make your hotel easier to find, trust, and book directly. We also reduce OTA dependency with loyalty programs and remarketing.'
    },
    {
      question: 'Q2. What results can I expect?',
      answer: 'Our clients typically see a 30–50% increase in traffic, 20% uplift in direct bookings, and stronger visibility within 3 months.'
    },
    {
      question: 'Q3. How does influencer marketing help my hotel?',
      answer: 'It boosts awareness and credibility. We match your brand with relevant influencers who can showcase your hotel through curated experiences.'
    },
    {
      question: 'Q4. How do you improve Google rankings?',
      answer: 'Our SEO team works on location-based content, high-authority backlinks, structured data, and GMB optimization to increase visibility for key search terms.'
    },
    {
      question: 'Q5. What is OTA Revenue Management and how does it work?',
      answer: 'We track trends, set dynamic pricing, optimize your profiles, and help you win the algorithm game on OTAs, increasing both volume and ADR.'
    }
  ]

  return (
    <div className='about-faq-container py-24 lg:py-32 bg-white w-full'>
      <div className='container w-full mx-auto px-6 lg:px-8'>
        <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>
          // FAQS
        </p>
        <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-12 text-balance text-black'>
          Some frequently asked questions.
        </h2>

        <Accordion type='single' collapsible defaultValue='item-0' className='space-y-4'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='bg-black rounded-lg overflow-hidden border-none'
            >
              <AccordionTrigger className='p-6 hover:no-underline [&>svg]:hidden group'>
                <span className='text-white font-bold text-lg pr-4 flex-1 text-left'>
                  {faq.question}
                </span>
                <div className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-data-[state=open]:bg-white'>
                  <Plus className='w-5 h-5 text-white transition-all duration-300 group-data-[state=open]:hidden' />
                  <Minus 
                    className='w-5 h-5 transition-all duration-300 hidden group-data-[state=open]:block' 
                    style={{ color: '#f24045' }} 
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className='px-6 pb-6'>
                <p className='text-gray-300 leading-relaxed'>
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default AboutFAQ

