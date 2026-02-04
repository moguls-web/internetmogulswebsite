import React from 'react'

const ClientsGrid = () => {
  const clients = [
    { name: 'SUBA', logo: '/client-logos/suba-hotel.jpg' },
    { name: 'Hotel Tip Top International', logo: '/client-logos/the-cor.jpg' },
    { name: 'at home ALL APARTMENT HOTEL', logo: '/client-logos/alifya-logo.jpg' },
    { name: 'CELEBRITY RESORT', logo: '/client-logos/celebrity-resort.jpg' },
    { name: 'Drizzling Land', logo: '/client-logos/leisure-hotel.jpg' },
    { name: 'THE MAASAI MARA', logo: '/client-logos/ro.jpg' },
    { name: 'MapleBear', logo: '/client-logos/maple-bear-1.jpg' },
    { name: 'KINGFISHER NEST HOTEL SUITES', logo: '/client-logos/grand-dragon.jpg' },
    { name: 'Peerless HOTELS & RESORTS', logo: '/client-logos/peerless.jpg' }, 
    { name: 'Drizzling Land', logo: '/client-logos/drizziling.png' },
    { name: '7 Apple Resorts', logo: '/client-logos/7apple.jpg' },
    { name: 'Sunray Beach Front', logo: '/client-logos/sunrayfront.png' },
    { name: 'The Maasai Mara', logo: '/client-logos/maasai-mara-768x202.png' },
    { name: 'Hibis Hotels & Resorts', logo: '/client-logos/hibis-logo.png' },
    { name: 'Ramada by Wyndham Gurgaon Central', logo: '/client-logos/newlogo26.jpg' },
    { name: 'Ramee Grand Hotel & Spa', logo: '/client-logos/logo_49.jpg' },
    { name: 'The Tamarind Hotel Anjuna - Goa', logo: '/client-logos/logo_35.jpg' },
    { name: 'Hotel Ajanta - Goa', logo: '/client-logos/logo_27.jpg' },
    { name: 'Hotel Sayaji', logo: '/client-logos/logo_8.jpg' },
    { name: 'Lemon Tree Hotel', logo: '/client-logos/logo_5.jpg' },
    { name: 'The Leela', logo: '/client-logos/Leela.png' },
    { name: 'Khanvel Resort, Silvassa', logo: '/client-logos/Khanvel.png' },
    { name: 'Indian School of Hospitality', logo: '/client-logos/ISH.png' },
    { name: 'Aurika Hotel', logo: '/client-logos/aurikaHotels.png' },
    { name: 'Amritara Hotels & Resorts', logo: '/client-logos/amritara.jpg' },
    { name: 'Niranta Airport Transit Hotel', logo: '/client-logos/Niranta.png' },
    { name: 'Sunray Village Resort', logo: '/client-logos/sunrayfront.png' },
    { name: 'Raya Packaging Industries LLC', logo: '/client-logos/rayapack.png' },
    { name: 'Maharishi Ayurveda Rishikesh', logo: '/client-logos/Maharishi-Ayurveda-Retreat.png' },
    { name: 'Kohinoor Continental', logo: '/client-logos/logo_40.jpg' },
    { name: 'Hotel Vrinda', logo: '/client-logos/hotelvrinda.png' },
    { name: 'Hotel Home In', logo: '/client-logos/home-in.png' }, 
    { name: 'Godwin Hotels', logo: '/client-logos/Godwin-1.png' }, 
    { name: 'Gobindgarh Jaisalmer', logo: '/client-logos/gobindgarh-768x706.png' }, 
    { name: 'Deccan Serai Hotel', logo: '/client-logos/deccanserai-768x498.jpg' }, 
    { name: 'Skylight Inn, Coorg', logo: '/client-logos/skylight.png' }, 
    { name: 'Q Saina Group of Hotels', logo: '/client-logos/qsaina.png' }, 
    { name: 'Kingfisher Nest Hotel Suites', logo: '/client-logos/new-logo.png' }, 
    { name: 'At home', logo: '/client-logos/athome-logo-white.png' }, 
    { name: 'Tip Top Hotel Hinjewadi, Pune', logo: '/client-logos/tiptop-1-768x470.png' },  











    { name: 'Radisson Blu Hotel, Amritsar', logo: '/client-logos/radi.png' }
  ]

  return (
    <div className='py-24 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='mb-12'>
          <p className='text-sm tracking-widest uppercase text-muted-foreground mb-4'>
            // CLIENTS
          </p>
          <h2 className='font-serif text-3xl lg:text-5xl leading-tight text-black'>
            Companies we have
            <br />
            worked with.
          </h2>
        </div>

        {/* Clients Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px'>
          {clients.map((client, index) => (
            <div
              key={index}
              className='bg-white p-6 flex items-center justify-center aspect-square border border-black'
            >
              <img
                src={client.logo}
                alt={client.name}
                className='max-w-full max-h-full object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientsGrid

