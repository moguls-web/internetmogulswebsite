import React from 'react'
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const ClientLogo = () => {
    const clientLogos = [
        { name: "Taj Hotels", logo: "/client-logos/ro.jpg" },
        { name: "ITC Hotels", logo: "/client-logos/7apple.jpg" },
        { name: "Oberoi Hotels", logo: "/client-logos/alifya-logo.jpg" },
        { name: "Lemon Tree", logo: "/client-logos/celebrity-resort.jpg" },
        { name: "Radisson", logo: "/client-logos/fortune.jpg" },
        { name: "Marriott", logo: "/client-logos/grand-dragon.jpg" },
        { name: "Hyatt", logo: "/client-logos/leisure-hotel.jpg" },
        { name: "AccorHotels", logo: "/client-logos/maple-bear-1.jpg" },
        { name: "The Leela", logo: "/client-logos/peerless.jpg" },
        { name: "Park Hotels", logo: "/client-logos/santiam-1.jpg" },
        { name: "Sarovar Hotels", logo: "/client-logos/suba-hotel.jpg" },
        { name: "Treebo", logo: "/client-logos/the-cor.jpg" },
      ]
  return (
    <div className='client-logo-container'>
        {/* Client Logos Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-black mb-3">Trusted By 1900+ Hotels Worldwide</p>
              <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6 text-black">From boutique resorts<br/> to <em>global</em> chains</h2>
            </div>
            
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-32 lg:h-32 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/testimonials/" className="bg-foreground text-white inline-flex items-center gap-2 text-sm tracking-wide py-4 px-10 mx-auto hover:text-muted-foreground transition-colors hover:bg-white/90 hover:border-foreground/30 border border-foreground/30">
                View More Clients <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientLogo