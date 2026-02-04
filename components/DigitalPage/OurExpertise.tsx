import React from 'react'
import { Monitor, Code, Search, Zap, BarChart, Link2, TrendingUp, Network } from 'lucide-react'

const OurExpertise = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Build fast, responsive, and conversion-focused websites.',
      icon: Monitor, 
      bgColor: 'white',
      textColor: 'black',
      iconColor: '#f24045'
    },
    {
      title: 'SEO',
      description: 'Rank higher on Google and attract relevant organic traffic.',
      icon: Search, 
      bgColor: '#f24045',
      textColor: 'white',
      iconColor: 'white'
    },
    {
      title: 'Paid Ads (Google & Meta)',
      description: 'Drive immediate leads and sales with result-driven campaigns.',
      icon: BarChart,
      bgColor: 'white',
      textColor: 'black',
      iconColor: '#f24045'
    },
    {
      title: 'Social Media Marketing',
      description: 'Turn followers into loyal customers with engaging content.',
      icon: Link2,
      bgColor: '#f24045',
      textColor: 'white',
      iconColor: 'white'
    },
    {
      title: 'Online Reputation Mgmt',
      description: 'Protect and enhance your brand\'s online presence.',
      icon: TrendingUp,
      bgColor: 'white',
      textColor: 'black',
      iconColor: '#f24045'
    },
    {
      title: 'Influencer Marketing',
      description: 'Leverage authentic voices to amplify your brand reach.',
      icon: Network,
      bgColor: '#f24045',
      textColor: 'white',
      iconColor: 'white'
    }
  ]

  return (
    <div className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>
            // Sub Heading Here
          </p>
          <h2 className='font-serif text-3xl lg:text-5xl leading-tight mb-4 text-black'>
            Our Expertise
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto'>
            Comprehensive Digital Marketing Solutions Tailored for Your Business
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border' style={{ borderColor: '#f24045' }}>
          {services.map((service, index) => {
            const Icon = service.icon
            const IconSecondary = service.iconSecondary
            return (
              <div
                key={index}
                className='p-8 flex flex-col items-start'
                style={{
                  backgroundColor: service.bgColor,
                  color: service.textColor
                }}
              >
                <div className='mb-4 relative'>
                  <Icon 
                    className='w-12 h-12' 
                    style={{ color: service.iconColor }}
                  />
                  {IconSecondary && (
                    <IconSecondary 
                      className='w-6 h-6 absolute -bottom-1 -right-1' 
                      style={{ color: service.iconColor }}
                    />
                  )}
                </div>
                <h3 
                  className='text-xl font-bold mb-3'
                  style={{ color: service.textColor }}
                >
                  {service.title}
                </h3>
                <p 
                  className='text-base leading-relaxed'
                  style={{ color: service.textColor === 'white' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)' }}
                >
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurExpertise

