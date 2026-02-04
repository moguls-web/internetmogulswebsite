import React from 'react'
import Link from 'next/link'
import { Home, Instagram, Facebook, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageBanner from '@/components/PageBanner'

const page = () => {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/internetmoguls", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/internetmoguls", icon: Facebook },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCehJuLh1A0C_SCfiYx2qy6A", icon: Youtube },
  ]

  return (
    <div>
        <PageBanner title='Thank You for Choosing Us!' description='Your request has been successfully received. ' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg'>
          <div className="flex items-center gap-6">
            <p className="text-sm text-white/80">Follow us:</p>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
          
          <Link href="/">
            <Button className="flex items-center gap-2 px-6 py-3 bg-[#000000] text-white hover:bg-[#d6363a] transition-colors">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </PageBanner>
    </div>
  )
}

export default page