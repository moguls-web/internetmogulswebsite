import React from 'react'
import { Umbrella, Crown, GraduationCap, MessageCircle, Users, Network } from 'lucide-react'

const CareersAwards = () => {
  const benefits = [
    {
      icon: Umbrella,
      title: 'Flexible Lifestyle',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    },
    {
      icon: Crown,
      title: 'Enjoy the Perks',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    },
    {
      icon: GraduationCap,
      title: 'Expert Training',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    },
    {
      icon: MessageCircle,
      title: 'Rejuvenate',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    },
    {
      icon: Users,
      title: 'Quality Holidays',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    },
    {
      icon: Network,
      title: 'Industry Links',
      description: 'Form life evening female given behold may was one spirit was multiply give meat shall image signs appear earth won\'t can\'t given every them.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 bg-white careers-awards-container">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            // AWARDS
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
            We're the only multi-award-winning Digital Agency in India.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg"
              >
                <Icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CareersAwards

