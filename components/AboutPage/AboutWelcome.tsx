import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AboutWelcome = () => {
  return (
    <div className='about-welcome-container py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Portrait Image */}
          <div className='relative'>
            <img
              src='/professional-indian-businessman-founder-portrait-i.jpg'
              alt='Avi Arya - Chief Mogul'
              className='w-full object-cover object-top h-[500px]'
            />
          </div>

          {/* Content */}
          <div>
            <p className='text-sm tracking-widest uppercase mb-4' style={{ color: '#f24045' }}>// Meet Our Founder</p>
            <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance'>
            Avi Arya — <em>Chief Mogul</em>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-8'>
            Father of two girls. Husband to a superwoman. Dog dad to six. Hotelier. Storyteller. Digital strategist.

            </p>
            <p className='text-muted-foreground text-lg leading-relaxed mb-8'>
            Avi grew up in hospitality, helping build two boutique hotels before founding Internet Moguls in 2009 to solve a simple problem — hotels needed an agency that truly understood hotels. Today, he is recognised as one of India's leading voices in digital hospitality marketing and has spoken at leading forums across the world on revenue growth, storytelling, and hospitality innovation.
            </p>
            <Link 
              href="/leadership"
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors group'
            >
              <span>View More</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutWelcome